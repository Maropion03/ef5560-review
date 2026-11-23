import {
  BufferGeometry, Color, DoubleSide, GridHelper, Line, LineBasicMaterial, Mesh,
  OrthographicCamera, PlaneGeometry, Scene, ShaderMaterial, Vector3, WebGLRenderer,
} from "three";

const canvas = document.querySelector("#fit-canvas");
const figure = canvas.closest("figure");
const description = document.querySelector("#fit-description");
const switches = [...document.querySelectorAll("[data-fit]")];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const context = canvas.getContext("webgl2", { alpha: true, antialias: true });

const vertexShader = `
  uniform float mode;
  varying vec2 surfaceUV;
  varying float surfaceHeight;

  void main() {
    float x = position.x;
    float z = -position.y;
    float linear = 0.20 * x - 0.21 * z;
    float nonlinear = 0.18 * x - 0.10 * z + 0.72 * sin(x * 1.05 - z * 0.43) * cos(z * 0.86)
      + 0.54 * sin(z * 1.2 + x * 0.40);
    float value = mix(linear, nonlinear, mode);

    surfaceUV = uv;
    surfaceHeight = value;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(x, value, z, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 surfaceUV;
  varying float surfaceHeight;

  void main() {
    vec2 coords = surfaceUV * vec2(34.0, 26.0);
    vec2 dist = abs(fract(coords - 0.5) - 0.5) / fwidth(coords);
    float grid = 1.0 - min(min(dist.x, dist.y), 1.0);
    float heightMix = smoothstep(-1.3, 1.05, surfaceHeight);
    float shade = heightMix * (0.74 + surfaceUV.y * 0.26);
    vec3 color = mix(vec3(0.07, 0.08, 0.11), vec3(0.20, 0.36, 0.80), shade);
    vec3 line = mix(vec3(0.30, 0.36, 0.50), vec3(0.90, 0.76, 0.44), heightMix);
    color = mix(color, line, 0.65 * grid);
    float scan = mod(gl_FragCoord.y, 4.0) < 1.0 ? 0.024 : 0.0;
    gl_FragColor = vec4(color - scan, 1.0);
  }
`;

function makeSurface() {
  const renderer = new WebGLRenderer({ canvas, context, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const camera = new OrthographicCamera(-4, 4, 2, -2, 0.1, 100);
  camera.position.set(5.8, 4.6, 7.3);
  camera.lookAt(0, -0.08, 0);

  const material = new ShaderMaterial({
    vertexShader, fragmentShader, side: DoubleSide, uniforms: { mode: { value: 1 } },
  });
  const surface = new Mesh(new PlaneGeometry(6.45, 4.8, 98, 72), material);
  surface.frustumCulled = false;
  scene.add(surface);

  const grid = new GridHelper(7.1, 21, new Color("#24345e"), new Color("#2a2d36"));
  grid.position.y = -1.53;
  grid.material.transparent = true;
  grid.material.opacity = 0.72;
  scene.add(grid);

  const origin = new Vector3(-3.32, -1.52, 2.64);
  const axes = [new Vector3(3.65, -1.52, 2.64), new Vector3(-3.32, -1.52, -3.46), new Vector3(-3.32, 1.67, 2.64)];
  const axisMaterial = new LineBasicMaterial({ color: "#efe8da", transparent: true, opacity: 0.67 });
  for (const end of axes) scene.add(new Line(new BufferGeometry().setFromPoints([origin, end]), axisMaterial));

  function render() {
    renderer.render(scene, camera);
  }

  function resize() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (width === 0 || height === 0) return;
    const aspect = width / height;
    const halfWidth = Math.max(4.38, aspect * 2.47);
    camera.left = -halfWidth;
    camera.right = halfWidth;
    camera.top = halfWidth / aspect;
    camera.bottom = -halfWidth / aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    render();
  }

  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();

  let frame = 0;
  return function showMode(target) {
    cancelAnimationFrame(frame);
    if (reducedMotion.matches) {
      material.uniforms.mode.value = target;
      render();
      return;
    }
    const start = performance.now();
    const from = material.uniforms.mode.value;
    function animate(now) {
      const progress = Math.min((now - start) / 470, 1);
      const eased = 1 - (1 - progress) ** 3;
      material.uniforms.mode.value = from + eased * (target - from);
      render();
      if (progress < 1) frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
  };
}

const showMode = context ? makeSurface() : null;
let sliceTimeout;
for (const button of switches) {
  button.addEventListener("click", () => {
    if (button.getAttribute("aria-pressed") === "true") return;
    const nonlinear = button.dataset.fit === "nonlinear";
    switches.forEach((other) => other.setAttribute("aria-pressed", other === button));
    description.textContent = description.dataset[button.dataset.fit];
    showMode?.(nonlinear ? 1 : 0);
    figure.setAttribute("data-switching", "");
    clearTimeout(sliceTimeout);
    sliceTimeout = setTimeout(() => figure.removeAttribute("data-switching"), 280);
  });
}
