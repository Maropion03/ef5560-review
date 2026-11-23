(()=>{var Z$="180";var W$=0,U7=1,H$=2;var G7=1,K$=2,cJ=3,o8=0,PJ=1,fJ=2,U8=0,M6=1,E7=2,N7=3,q7=4,Y$=5,a8=100,X$=101,U$=102,G$=103,E$=104,N$=200,q$=201,D$=202,O$=203,R$=204,F$=205,M$=206,k$=207,V$=208,L$=209,z$=210,B$=211,w$=212,I$=213,_$=214,W9=0,H9=1,K9=2,k6=3,Y9=4,X9=5,U9=6,G9=7,C$=0,P$=1,A$=2,Q8=0,T$=1,S$=2,j$=3,y$=4,v$=5,f$=6,b$=7;var r8=301,V8=302,E9=303,N9=304,V6=306,h$=1000,x$=1001,g$=1002,t8=1003,p$=1004;var L6=1005;var L8=1006,q9=1007;var e8=1008;var G8=1009,m$=1010,d$=1011,z6=1012,D7=1013,J6=1014,E8=1015,B6=1016,O7=1017,R7=1018,Q6=1020,l$=35902,u$=35899,c$=1021,n$=1022,nJ=1023,D9=1026,w6=1027,s$=1028,F7=1029,i$=1030,M7=1031;var k7=1033,O9=33776,R9=33777,F9=33778,M9=33779,V7=35840,L7=35841,z7=35842,B7=35843,w7=36196,I7=37492,_7=37496,C7=37808,P7=37809,A7=37810,T7=37811,S7=37812,j7=37813,y7=37814,v7=37815,f7=37816,b7=37817,h7=37818,x7=37819,g7=37820,p7=37821,m7=36492,d7=36494,l7=36495,u7=36283,c7=36284,n7=36285,s7=36286;var o$=3201;var a$=0,r$=1,z8="",t$="srgb",I6="srgb-linear",i7="linear",a0="srgb";var e$=512,JZ=513,QZ=514,o7=515,$Z=516,ZZ=517,WZ=518,HZ=519;var a7="300 es",r7=2000;class N8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let W=Z.indexOf(Q);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let W=0,H=Z.length;W<H;W++)Z[W].call(this,J);J.target=null}}}var DJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var g9=Math.PI/180,Q9=180/Math.PI;function _6(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(DJ[J&255]+DJ[J>>8&255]+DJ[J>>16&255]+DJ[J>>24&255]+"-"+DJ[Q&255]+DJ[Q>>8&255]+"-"+DJ[Q>>16&15|64]+DJ[Q>>24&255]+"-"+DJ[$&63|128]+DJ[$>>8&255]+"-"+DJ[$>>16&255]+DJ[$>>24&255]+DJ[Z&255]+DJ[Z>>8&255]+DJ[Z>>16&255]+DJ[Z>>24&255]).toLowerCase()}function p0(J,Q,$){return Math.max(Q,Math.min($,J))}function WW(J,Q){return(J%Q+Q)%Q}function p9(J,Q,$){return(1-$)*J+$*Q}function E6(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function LJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}class c0{constructor(J=0,Q=0){c0.prototype.isVector2=!0,this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=p0(this.x,J.x,Q.x),this.y=p0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=p0(this.x,J,Q),this.y=p0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(p0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(p0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=this.x-J.x,H=this.y-J.y;return this.x=W*$-H*Z+J.x,this.y=W*Z+H*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class q8{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,W,H,Y){let K=$[Z+0],X=$[Z+1],U=$[Z+2],G=$[Z+3],E=W[H+0],N=W[H+1],O=W[H+2],M=W[H+3];if(Y===0){J[Q+0]=K,J[Q+1]=X,J[Q+2]=U,J[Q+3]=G;return}if(Y===1){J[Q+0]=E,J[Q+1]=N,J[Q+2]=O,J[Q+3]=M;return}if(G!==M||K!==E||X!==N||U!==O){let k=1-Y,q=K*E+X*N+U*O+G*M,D=q>=0?1:-1,P=1-q*q;if(P>Number.EPSILON){let I=Math.sqrt(P),v=Math.atan2(I,q*D);k=Math.sin(k*v)/I,Y=Math.sin(Y*v)/I}let L=Y*D;if(K=K*k+E*L,X=X*k+N*L,U=U*k+O*L,G=G*k+M*L,k===1-Y){let I=1/Math.sqrt(K*K+X*X+U*U+G*G);K*=I,X*=I,U*=I,G*=I}}J[Q]=K,J[Q+1]=X,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,Z,W,H){let Y=$[Z],K=$[Z+1],X=$[Z+2],U=$[Z+3],G=W[H],E=W[H+1],N=W[H+2],O=W[H+3];return J[Q]=Y*O+U*G+K*N-X*E,J[Q+1]=K*O+U*E+X*G-Y*N,J[Q+2]=X*O+U*N+Y*E-K*G,J[Q+3]=U*O-Y*G-K*E-X*N,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:W,_order:H}=J,Y=Math.cos,K=Math.sin,X=Y($/2),U=Y(Z/2),G=Y(W/2),E=K($/2),N=K(Z/2),O=K(W/2);switch(H){case"XYZ":this._x=E*U*G+X*N*O,this._y=X*N*G-E*U*O,this._z=X*U*O+E*N*G,this._w=X*U*G-E*N*O;break;case"YXZ":this._x=E*U*G+X*N*O,this._y=X*N*G-E*U*O,this._z=X*U*O-E*N*G,this._w=X*U*G+E*N*O;break;case"ZXY":this._x=E*U*G-X*N*O,this._y=X*N*G+E*U*O,this._z=X*U*O+E*N*G,this._w=X*U*G-E*N*O;break;case"ZYX":this._x=E*U*G-X*N*O,this._y=X*N*G+E*U*O,this._z=X*U*O-E*N*G,this._w=X*U*G+E*N*O;break;case"YZX":this._x=E*U*G+X*N*O,this._y=X*N*G+E*U*O,this._z=X*U*O-E*N*G,this._w=X*U*G-E*N*O;break;case"XZY":this._x=E*U*G-X*N*O,this._y=X*N*G-E*U*O,this._z=X*U*O+E*N*G,this._w=X*U*G+E*N*O;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+H)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],W=Q[8],H=Q[1],Y=Q[5],K=Q[9],X=Q[2],U=Q[6],G=Q[10],E=$+Y+G;if(E>0){let N=0.5/Math.sqrt(E+1);this._w=0.25/N,this._x=(U-K)*N,this._y=(W-X)*N,this._z=(H-Z)*N}else if($>Y&&$>G){let N=2*Math.sqrt(1+$-Y-G);this._w=(U-K)/N,this._x=0.25*N,this._y=(Z+H)/N,this._z=(W+X)/N}else if(Y>G){let N=2*Math.sqrt(1+Y-$-G);this._w=(W-X)/N,this._x=(Z+H)/N,this._y=0.25*N,this._z=(K+U)/N}else{let N=2*Math.sqrt(1+G-$-Y);this._w=(H-Z)/N,this._x=(W+X)/N,this._y=(K+U)/N,this._z=0.25*N}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(p0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:W,_w:H}=J,Y=Q._x,K=Q._y,X=Q._z,U=Q._w;return this._x=$*U+H*Y+Z*X-W*K,this._y=Z*U+H*K+W*Y-$*X,this._z=W*U+H*X+$*K-Z*Y,this._w=H*U-$*Y-Z*K-W*X,this._onChangeCallback(),this}slerp(J,Q){if(Q===0)return this;if(Q===1)return this.copy(J);let $=this._x,Z=this._y,W=this._z,H=this._w,Y=H*J._w+$*J._x+Z*J._y+W*J._z;if(Y<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,Y=-Y;else this.copy(J);if(Y>=1)return this._w=H,this._x=$,this._y=Z,this._z=W,this;let K=1-Y*Y;if(K<=Number.EPSILON){let N=1-Q;return this._w=N*H+Q*this._w,this._x=N*$+Q*this._x,this._y=N*Z+Q*this._y,this._z=N*W+Q*this._z,this.normalize(),this}let X=Math.sqrt(K),U=Math.atan2(X,Y),G=Math.sin((1-Q)*U)/X,E=Math.sin(Q*U)/X;return this._w=H*G+this._w*E,this._x=$*G+this._x*E,this._y=Z*G+this._y*E,this._z=W*G+this._z*E,this._onChangeCallback(),this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),W=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class f{constructor(J=0,Q=0,$=0){f.prototype.isVector3=!0,this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(bQ.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(bQ.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*Z,this.y=W[1]*Q+W[4]*$+W[7]*Z,this.z=W[2]*Q+W[5]*$+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements,H=1/(W[3]*Q+W[7]*$+W[11]*Z+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*Z+W[12])*H,this.y=(W[1]*Q+W[5]*$+W[9]*Z+W[13])*H,this.z=(W[2]*Q+W[6]*$+W[10]*Z+W[14])*H,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,W=J.x,H=J.y,Y=J.z,K=J.w,X=2*(H*Z-Y*$),U=2*(Y*Q-W*Z),G=2*(W*$-H*Q);return this.x=Q+K*X+H*G-Y*U,this.y=$+K*U+Y*X-W*G,this.z=Z+K*G+W*U-H*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z,this.y=W[1]*Q+W[5]*$+W[9]*Z,this.z=W[2]*Q+W[6]*$+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=p0(this.x,J.x,Q.x),this.y=p0(this.y,J.y,Q.y),this.z=p0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=p0(this.x,J,Q),this.y=p0(this.y,J,Q),this.z=p0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(p0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:W}=J,H=Q.x,Y=Q.y,K=Q.z;return this.x=Z*K-W*Y,this.y=W*H-$*K,this.z=$*Y-Z*H,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return m9.copy(this).projectOnVector(J),this.sub(m9)}reflect(J){return this.sub(m9.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(p0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var m9=new f,bQ=new q8;class v0{constructor(J,Q,$,Z,W,H,Y,K,X){if(v0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,H,Y,K,X)}set(J,Q,$,Z,W,H,Y,K,X){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=Y,U[3]=Q,U[4]=W,U[5]=K,U[6]=$,U[7]=H,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,H=$[0],Y=$[3],K=$[6],X=$[1],U=$[4],G=$[7],E=$[2],N=$[5],O=$[8],M=Z[0],k=Z[3],q=Z[6],D=Z[1],P=Z[4],L=Z[7],I=Z[2],v=Z[5],C=Z[8];return W[0]=H*M+Y*D+K*I,W[3]=H*k+Y*P+K*v,W[6]=H*q+Y*L+K*C,W[1]=X*M+U*D+G*I,W[4]=X*k+U*P+G*v,W[7]=X*q+U*L+G*C,W[2]=E*M+N*D+O*I,W[5]=E*k+N*P+O*v,W[8]=E*q+N*L+O*C,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],H=J[4],Y=J[5],K=J[6],X=J[7],U=J[8];return Q*H*U-Q*Y*X-$*W*U+$*Y*K+Z*W*X-Z*H*K}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],H=J[4],Y=J[5],K=J[6],X=J[7],U=J[8],G=U*H-Y*X,E=Y*K-U*W,N=X*W-H*K,O=Q*G+$*E+Z*N;if(O===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/O;return J[0]=G*M,J[1]=(Z*X-U*$)*M,J[2]=(Y*$-Z*H)*M,J[3]=E*M,J[4]=(U*Q-Z*K)*M,J[5]=(Z*W-Y*Q)*M,J[6]=N*M,J[7]=($*K-X*Q)*M,J[8]=(H*Q-$*W)*M,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,W,H,Y){let K=Math.cos(W),X=Math.sin(W);return this.set($*K,$*X,-$*(K*H+X*Y)+H+J,-Z*X,Z*K,-Z*(-X*H+K*Y)+Y+Q,0,0,1),this}scale(J,Q){return this.premultiply(d9.makeScale(J,Q)),this}rotate(J){return this.premultiply(d9.makeRotation(-J)),this}translate(J,Q){return this.premultiply(d9.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var d9=new v0;function t7(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function F6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function KZ(){let J=F6("canvas");return J.style.display="block",J}var hQ={};function i8(J){if(J in hQ)return;hQ[J]=!0,console.warn(J)}function YZ(J,Q,$){return new Promise(function(Z,W){function H(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(H,$);break;default:Z()}}setTimeout(H,$)})}var xQ=new v0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),gQ=new v0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function HW(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,H,Y){if(this.enabled===!1||H===Y||!H||!Y)return W;if(this.spaces[H].transfer==="srgb")W.r=J8(W.r),W.g=J8(W.g),W.b=J8(W.b);if(this.spaces[H].primaries!==this.spaces[Y].primaries)W.applyMatrix3(this.spaces[H].toXYZ),W.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")W.r=s8(W.r),W.g=s8(W.g),W.b=s8(W.b);return W},workingToColorSpace:function(W,H){return this.convert(W,this.workingColorSpace,H)},colorSpaceToWorking:function(W,H){return this.convert(W,H,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,H=this.workingColorSpace){return W.fromArray(this.spaces[H].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,H,Y){return W.copy(this.spaces[H].toXYZ).multiply(this.spaces[Y].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,H){return i8("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,H)},toWorkingColorSpace:function(W,H){return i8("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,H)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:xQ,fromXYZ:gQ,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:xQ,fromXYZ:gQ,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var m0=HW();function J8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function s8(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var v8;class e7{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(v8===void 0)v8=F6("canvas");v8.width=J.width,v8.height=J.height;let Z=v8.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=v8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=F6("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),W=Z.data;for(let H=0;H<W.length;H++)W[H]=J8(W[H]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(J8(Q[$]/255)*255);else Q[$]=J8(Q[$]);return{data:Q,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var KW=0;class C6{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KW++}),this.uuid=_6(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(Q instanceof VideoFrame)J.set(Q.displayHeight,Q.displayWidth,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let H=0,Y=Z.length;H<Y;H++)if(Z[H].isDataTexture)W.push(l9(Z[H].image));else W.push(l9(Z[H]))}else W=l9(Z);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function l9(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return e7.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var YW=0,u9=new f;class MJ extends N8{constructor(J=MJ.DEFAULT_IMAGE,Q=MJ.DEFAULT_MAPPING,$=1001,Z=1001,W=1006,H=1008,Y=1023,K=1009,X=MJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:YW++}),this.uuid=_6(),this.name="",this.source=new C6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=W,this.minFilter=H,this.anisotropy=X,this.format=Y,this.internalFormat=null,this.type=K,this.offset=new c0(0,0),this.repeat=new c0(1,1),this.center=new c0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new v0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(u9).x}get height(){return this.source.getSize(u9).y}get depth(){return this.source.getSize(u9).z}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){console.warn(`THREE.Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){console.warn(`THREE.Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}MJ.DEFAULT_IMAGE=null;MJ.DEFAULT_MAPPING=300;MJ.DEFAULT_ANISOTROPY=1;class ZJ{constructor(J=0,Q=0,$=0,Z=1){ZJ.prototype.isVector4=!0,this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=this.w,H=J.elements;return this.x=H[0]*Q+H[4]*$+H[8]*Z+H[12]*W,this.y=H[1]*Q+H[5]*$+H[9]*Z+H[13]*W,this.z=H[2]*Q+H[6]*$+H[10]*Z+H[14]*W,this.w=H[3]*Q+H[7]*$+H[11]*Z+H[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,W,H=0.01,Y=0.1,K=J.elements,X=K[0],U=K[4],G=K[8],E=K[1],N=K[5],O=K[9],M=K[2],k=K[6],q=K[10];if(Math.abs(U-E)<0.01&&Math.abs(G-M)<0.01&&Math.abs(O-k)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(G+M)<0.1&&Math.abs(O+k)<0.1&&Math.abs(X+N+q-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let P=(X+1)/2,L=(N+1)/2,I=(q+1)/2,v=(U+E)/4,C=(G+M)/4,T=(O+k)/4;if(P>L&&P>I)if(P<0.01)$=0,Z=0.707106781,W=0.707106781;else $=Math.sqrt(P),Z=v/$,W=C/$;else if(L>I)if(L<0.01)$=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(L),$=v/Z,W=T/Z;else if(I<0.01)$=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(I),$=C/W,Z=T/W;return this.set($,Z,W,Q),this}let D=Math.sqrt((k-O)*(k-O)+(G-M)*(G-M)+(E-U)*(E-U));if(Math.abs(D)<0.001)D=1;return this.x=(k-O)/D,this.y=(G-M)/D,this.z=(E-U)/D,this.w=Math.acos((X+N+q-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=p0(this.x,J.x,Q.x),this.y=p0(this.y,J.y,Q.y),this.z=p0(this.z,J.z,Q.z),this.w=p0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=p0(this.x,J,Q),this.y=p0(this.y,J,Q),this.z=p0(this.z,J,Q),this.w=p0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(p0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JQ extends N8{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new ZJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new ZJ(0,0,J,Q);let Z={width:J,height:Q,depth:$.depth},W=new MJ(Z);this.textures=[];let H=$.count;for(let Y=0;Y<H;Y++)this.textures[Y]=W.clone(),this.textures[Y].isRenderTargetTexture=!0,this.textures[Y].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,W=this.textures.length;Z<W;Z++)this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new C6(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $8 extends JQ{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class k9 extends MJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class QQ extends MJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class B8{constructor(J=new f(1/0,1/0,1/0),Q=new f(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(gJ.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(gJ.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=gJ.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let H=0,Y=W.count;H<Y;H++){if(J.isMesh===!0)J.getVertexPosition(H,gJ);else gJ.fromBufferAttribute(W,H);gJ.applyMatrix4(J.matrixWorld),this.expandByPoint(gJ)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();f6.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();f6.copy($.boundingBox)}f6.applyMatrix4(J.matrixWorld),this.union(f6)}}let Z=J.children;for(let W=0,H=Z.length;W<H;W++)this.expandByObject(Z[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,gJ),gJ.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(N6),b6.subVectors(this.max,N6),f8.subVectors(J.a,N6),b8.subVectors(J.b,N6),h8.subVectors(J.c,N6),Z8.subVectors(b8,f8),W8.subVectors(h8,b8),R8.subVectors(f8,h8);let Q=[0,-Z8.z,Z8.y,0,-W8.z,W8.y,0,-R8.z,R8.y,Z8.z,0,-Z8.x,W8.z,0,-W8.x,R8.z,0,-R8.x,-Z8.y,Z8.x,0,-W8.y,W8.x,0,-R8.y,R8.x,0];if(!c9(Q,f8,b8,h8,b6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!c9(Q,f8,b8,h8,b6))return!1;return h6.crossVectors(Z8,W8),Q=[h6.x,h6.y,h6.z],c9(Q,f8,b8,h8,b6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,gJ).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(gJ).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return iJ[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),iJ[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),iJ[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),iJ[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),iJ[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),iJ[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),iJ[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),iJ[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(iJ),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var iJ=[new f,new f,new f,new f,new f,new f,new f,new f],gJ=new f,f6=new B8,f8=new f,b8=new f,h8=new f,Z8=new f,W8=new f,R8=new f,N6=new f,b6=new f,h6=new f,F8=new f;function c9(J,Q,$,Z,W){for(let H=0,Y=J.length-3;H<=Y;H+=3){F8.fromArray(J,H);let K=W.x*Math.abs(F8.x)+W.y*Math.abs(F8.y)+W.z*Math.abs(F8.z),X=Q.dot(F8),U=$.dot(F8),G=Z.dot(F8);if(Math.max(-Math.max(X,U,G),Math.min(X,U,G))>K)return!1}return!0}var XW=new B8,q6=new f,n9=new f;class $6{constructor(J=new f,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else XW.setFromPoints(J).getCenter($);let Z=0;for(let W=0,H=J.length;W<H;W++)Z=Math.max(Z,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;q6.subVectors(J,this.center);let Q=q6.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(q6,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else n9.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(q6.copy(J.center).add(n9)),this.expandByPoint(q6.copy(J.center).sub(n9));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var oJ=new f,s9=new f,x6=new f,H8=new f,i9=new f,g6=new f,o9=new f;class V9{constructor(J=new f,Q=new f(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,oJ)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=oJ.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return oJ.copy(this.origin).addScaledVector(this.direction,Q),oJ.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){s9.copy(J).add(Q).multiplyScalar(0.5),x6.copy(Q).sub(J).normalize(),H8.copy(this.origin).sub(s9);let W=J.distanceTo(Q)*0.5,H=-this.direction.dot(x6),Y=H8.dot(this.direction),K=-H8.dot(x6),X=H8.lengthSq(),U=Math.abs(1-H*H),G,E,N,O;if(U>0)if(G=H*K-Y,E=H*Y-K,O=W*U,G>=0)if(E>=-O)if(E<=O){let M=1/U;G*=M,E*=M,N=G*(G+H*E+2*Y)+E*(H*G+E+2*K)+X}else E=W,G=Math.max(0,-(H*E+Y)),N=-G*G+E*(E+2*K)+X;else E=-W,G=Math.max(0,-(H*E+Y)),N=-G*G+E*(E+2*K)+X;else if(E<=-O)G=Math.max(0,-(-H*W+Y)),E=G>0?-W:Math.min(Math.max(-W,-K),W),N=-G*G+E*(E+2*K)+X;else if(E<=O)G=0,E=Math.min(Math.max(-W,-K),W),N=E*(E+2*K)+X;else G=Math.max(0,-(H*W+Y)),E=G>0?W:Math.min(Math.max(-W,-K),W),N=-G*G+E*(E+2*K)+X;else E=H>0?-W:W,G=Math.max(0,-(H*E+Y)),N=-G*G+E*(E+2*K)+X;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(s9).addScaledVector(x6,E);return N}intersectSphere(J,Q){oJ.subVectors(J.center,this.origin);let $=oJ.dot(this.direction),Z=oJ.dot(oJ)-$*$,W=J.radius*J.radius;if(Z>W)return null;let H=Math.sqrt(W-Z),Y=$-H,K=$+H;if(K<0)return null;if(Y<0)return this.at(K,Q);return this.at(Y,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,W,H,Y,K,X=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,E=this.origin;if(X>=0)$=(J.min.x-E.x)*X,Z=(J.max.x-E.x)*X;else $=(J.max.x-E.x)*X,Z=(J.min.x-E.x)*X;if(U>=0)W=(J.min.y-E.y)*U,H=(J.max.y-E.y)*U;else W=(J.max.y-E.y)*U,H=(J.min.y-E.y)*U;if($>H||W>Z)return null;if(W>$||isNaN($))$=W;if(H<Z||isNaN(Z))Z=H;if(G>=0)Y=(J.min.z-E.z)*G,K=(J.max.z-E.z)*G;else Y=(J.max.z-E.z)*G,K=(J.min.z-E.z)*G;if($>K||Y>Z)return null;if(Y>$||$!==$)$=Y;if(K<Z||Z!==Z)Z=K;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,oJ)!==null}intersectTriangle(J,Q,$,Z,W){i9.subVectors(Q,J),g6.subVectors($,J),o9.crossVectors(i9,g6);let H=this.direction.dot(o9),Y;if(H>0){if(Z)return null;Y=1}else if(H<0)Y=-1,H=-H;else return null;H8.subVectors(this.origin,J);let K=Y*this.direction.dot(g6.crossVectors(H8,g6));if(K<0)return null;let X=Y*this.direction.dot(i9.cross(H8));if(X<0)return null;if(K+X>H)return null;let U=-Y*H8.dot(o9);if(U<0)return null;return this.at(U/H,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class KJ{constructor(J,Q,$,Z,W,H,Y,K,X,U,G,E,N,O,M,k){if(KJ.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,H,Y,K,X,U,G,E,N,O,M,k)}set(J,Q,$,Z,W,H,Y,K,X,U,G,E,N,O,M,k){let q=this.elements;return q[0]=J,q[4]=Q,q[8]=$,q[12]=Z,q[1]=W,q[5]=H,q[9]=Y,q[13]=K,q[2]=X,q[6]=U,q[10]=G,q[14]=E,q[3]=N,q[7]=O,q[11]=M,q[15]=k,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new KJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){let Q=this.elements,$=J.elements,Z=1/x8.setFromMatrixColumn(J,0).length(),W=1/x8.setFromMatrixColumn(J,1).length(),H=1/x8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*H,Q[9]=$[9]*H,Q[10]=$[10]*H,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z,H=Math.cos($),Y=Math.sin($),K=Math.cos(Z),X=Math.sin(Z),U=Math.cos(W),G=Math.sin(W);if(J.order==="XYZ"){let E=H*U,N=H*G,O=Y*U,M=Y*G;Q[0]=K*U,Q[4]=-K*G,Q[8]=X,Q[1]=N+O*X,Q[5]=E-M*X,Q[9]=-Y*K,Q[2]=M-E*X,Q[6]=O+N*X,Q[10]=H*K}else if(J.order==="YXZ"){let E=K*U,N=K*G,O=X*U,M=X*G;Q[0]=E+M*Y,Q[4]=O*Y-N,Q[8]=H*X,Q[1]=H*G,Q[5]=H*U,Q[9]=-Y,Q[2]=N*Y-O,Q[6]=M+E*Y,Q[10]=H*K}else if(J.order==="ZXY"){let E=K*U,N=K*G,O=X*U,M=X*G;Q[0]=E-M*Y,Q[4]=-H*G,Q[8]=O+N*Y,Q[1]=N+O*Y,Q[5]=H*U,Q[9]=M-E*Y,Q[2]=-H*X,Q[6]=Y,Q[10]=H*K}else if(J.order==="ZYX"){let E=H*U,N=H*G,O=Y*U,M=Y*G;Q[0]=K*U,Q[4]=O*X-N,Q[8]=E*X+M,Q[1]=K*G,Q[5]=M*X+E,Q[9]=N*X-O,Q[2]=-X,Q[6]=Y*K,Q[10]=H*K}else if(J.order==="YZX"){let E=H*K,N=H*X,O=Y*K,M=Y*X;Q[0]=K*U,Q[4]=M-E*G,Q[8]=O*G+N,Q[1]=G,Q[5]=H*U,Q[9]=-Y*U,Q[2]=-X*U,Q[6]=N*G+O,Q[10]=E-M*G}else if(J.order==="XZY"){let E=H*K,N=H*X,O=Y*K,M=Y*X;Q[0]=K*U,Q[4]=-G,Q[8]=X*U,Q[1]=E*G+M,Q[5]=H*U,Q[9]=N*G-O,Q[2]=O*G-N,Q[6]=Y*U,Q[10]=M*G+E}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(UW,J,GW)}lookAt(J,Q,$){let Z=this.elements;if(wJ.subVectors(J,Q),wJ.lengthSq()===0)wJ.z=1;if(wJ.normalize(),K8.crossVectors($,wJ),K8.lengthSq()===0){if(Math.abs($.z)===1)wJ.x+=0.0001;else wJ.z+=0.0001;wJ.normalize(),K8.crossVectors($,wJ)}return K8.normalize(),p6.crossVectors(wJ,K8),Z[0]=K8.x,Z[4]=p6.x,Z[8]=wJ.x,Z[1]=K8.y,Z[5]=p6.y,Z[9]=wJ.y,Z[2]=K8.z,Z[6]=p6.z,Z[10]=wJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,H=$[0],Y=$[4],K=$[8],X=$[12],U=$[1],G=$[5],E=$[9],N=$[13],O=$[2],M=$[6],k=$[10],q=$[14],D=$[3],P=$[7],L=$[11],I=$[15],v=Z[0],C=Z[4],T=Z[8],m=Z[12],z=Z[1],V=Z[5],A=Z[9],d=Z[13],c=Z[2],p=Z[6],o=Z[10],l=Z[14],r=Z[3],x=Z[7],H0=Z[11],G0=Z[15];return W[0]=H*v+Y*z+K*c+X*r,W[4]=H*C+Y*V+K*p+X*x,W[8]=H*T+Y*A+K*o+X*H0,W[12]=H*m+Y*d+K*l+X*G0,W[1]=U*v+G*z+E*c+N*r,W[5]=U*C+G*V+E*p+N*x,W[9]=U*T+G*A+E*o+N*H0,W[13]=U*m+G*d+E*l+N*G0,W[2]=O*v+M*z+k*c+q*r,W[6]=O*C+M*V+k*p+q*x,W[10]=O*T+M*A+k*o+q*H0,W[14]=O*m+M*d+k*l+q*G0,W[3]=D*v+P*z+L*c+I*r,W[7]=D*C+P*V+L*p+I*x,W[11]=D*T+P*A+L*o+I*H0,W[15]=D*m+P*d+L*l+I*G0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[12],H=J[1],Y=J[5],K=J[9],X=J[13],U=J[2],G=J[6],E=J[10],N=J[14],O=J[3],M=J[7],k=J[11],q=J[15];return O*(+W*K*G-Z*X*G-W*Y*E+$*X*E+Z*Y*N-$*K*N)+M*(+Q*K*N-Q*X*E+W*H*E-Z*H*N+Z*X*U-W*K*U)+k*(+Q*X*G-Q*Y*N-W*H*G+$*H*N+W*Y*U-$*X*U)+q*(-Z*Y*U-Q*K*G+Q*Y*E+Z*H*G-$*H*E+$*K*U)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],H=J[4],Y=J[5],K=J[6],X=J[7],U=J[8],G=J[9],E=J[10],N=J[11],O=J[12],M=J[13],k=J[14],q=J[15],D=G*k*X-M*E*X+M*K*N-Y*k*N-G*K*q+Y*E*q,P=O*E*X-U*k*X-O*K*N+H*k*N+U*K*q-H*E*q,L=U*M*X-O*G*X+O*Y*N-H*M*N-U*Y*q+H*G*q,I=O*G*K-U*M*K-O*Y*E+H*M*E+U*Y*k-H*G*k,v=Q*D+$*P+Z*L+W*I;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/v;return J[0]=D*C,J[1]=(M*E*W-G*k*W-M*Z*N+$*k*N+G*Z*q-$*E*q)*C,J[2]=(Y*k*W-M*K*W+M*Z*X-$*k*X-Y*Z*q+$*K*q)*C,J[3]=(G*K*W-Y*E*W-G*Z*X+$*E*X+Y*Z*N-$*K*N)*C,J[4]=P*C,J[5]=(U*k*W-O*E*W+O*Z*N-Q*k*N-U*Z*q+Q*E*q)*C,J[6]=(O*K*W-H*k*W-O*Z*X+Q*k*X+H*Z*q-Q*K*q)*C,J[7]=(H*E*W-U*K*W+U*Z*X-Q*E*X-H*Z*N+Q*K*N)*C,J[8]=L*C,J[9]=(O*G*W-U*M*W-O*$*N+Q*M*N+U*$*q-Q*G*q)*C,J[10]=(H*M*W-O*Y*W+O*$*X-Q*M*X-H*$*q+Q*Y*q)*C,J[11]=(U*Y*W-H*G*W-U*$*X+Q*G*X+H*$*N-Q*Y*N)*C,J[12]=I*C,J[13]=(U*M*Z-O*G*Z+O*$*E-Q*M*E-U*$*k+Q*G*k)*C,J[14]=(O*Y*Z-H*M*Z-O*$*K+Q*M*K+H*$*k-Q*Y*k)*C,J[15]=(H*G*Z-U*Y*Z+U*$*K-Q*G*K-H*$*E+Q*Y*E)*C,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=W,Q[1]*=$,Q[5]*=Z,Q[9]*=W,Q[2]*=$,Q[6]*=Z,Q[10]*=W,Q[3]*=$,Q[7]*=Z,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=1-$,H=J.x,Y=J.y,K=J.z,X=W*H,U=W*Y;return this.set(X*H+$,X*Y-Z*K,X*K+Z*Y,0,X*Y+Z*K,U*Y+$,U*K-Z*H,0,X*K-Z*Y,U*K+Z*H,W*K*K+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,W,H){return this.set(1,$,W,0,J,1,H,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,W=Q._x,H=Q._y,Y=Q._z,K=Q._w,X=W+W,U=H+H,G=Y+Y,E=W*X,N=W*U,O=W*G,M=H*U,k=H*G,q=Y*G,D=K*X,P=K*U,L=K*G,I=$.x,v=$.y,C=$.z;return Z[0]=(1-(M+q))*I,Z[1]=(N+L)*I,Z[2]=(O-P)*I,Z[3]=0,Z[4]=(N-L)*v,Z[5]=(1-(E+q))*v,Z[6]=(k+D)*v,Z[7]=0,Z[8]=(O+P)*C,Z[9]=(k-D)*C,Z[10]=(1-(E+M))*C,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements,W=x8.set(Z[0],Z[1],Z[2]).length(),H=x8.set(Z[4],Z[5],Z[6]).length(),Y=x8.set(Z[8],Z[9],Z[10]).length();if(this.determinant()<0)W=-W;J.x=Z[12],J.y=Z[13],J.z=Z[14],pJ.copy(this);let X=1/W,U=1/H,G=1/Y;return pJ.elements[0]*=X,pJ.elements[1]*=X,pJ.elements[2]*=X,pJ.elements[4]*=U,pJ.elements[5]*=U,pJ.elements[6]*=U,pJ.elements[8]*=G,pJ.elements[9]*=G,pJ.elements[10]*=G,Q.setFromRotationMatrix(pJ),$.x=W,$.y=H,$.z=Y,this}makePerspective(J,Q,$,Z,W,H,Y=2000,K=!1){let X=this.elements,U=2*W/(Q-J),G=2*W/($-Z),E=(Q+J)/(Q-J),N=($+Z)/($-Z),O,M;if(K)O=W/(H-W),M=H*W/(H-W);else if(Y===2000)O=-(H+W)/(H-W),M=-2*H*W/(H-W);else if(Y===2001)O=-H/(H-W),M=-H*W/(H-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return X[0]=U,X[4]=0,X[8]=E,X[12]=0,X[1]=0,X[5]=G,X[9]=N,X[13]=0,X[2]=0,X[6]=0,X[10]=O,X[14]=M,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,Z,W,H,Y=2000,K=!1){let X=this.elements,U=2/(Q-J),G=2/($-Z),E=-(Q+J)/(Q-J),N=-($+Z)/($-Z),O,M;if(K)O=1/(H-W),M=H/(H-W);else if(Y===2000)O=-2/(H-W),M=-(H+W)/(H-W);else if(Y===2001)O=-1/(H-W),M=-W/(H-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return X[0]=U,X[4]=0,X[8]=0,X[12]=E,X[1]=0,X[5]=G,X[9]=0,X[13]=N,X[2]=0,X[6]=0,X[10]=O,X[14]=M,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var x8=new f,pJ=new KJ,UW=new f(0,0,0),GW=new f(1,1,1),K8=new f,p6=new f,wJ=new f,pQ=new KJ,mQ=new q8;class uJ{constructor(J=0,Q=0,$=0,Z=uJ.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,W=Z[0],H=Z[4],Y=Z[8],K=Z[1],X=Z[5],U=Z[9],G=Z[2],E=Z[6],N=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(p0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,N),this._z=Math.atan2(-H,W);else this._x=Math.atan2(E,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-p0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(Y,N),this._z=Math.atan2(K,X);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(p0(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-G,N),this._z=Math.atan2(-H,X);else this._y=0,this._z=Math.atan2(K,W);break;case"ZYX":if(this._y=Math.asin(-p0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(E,N),this._z=Math.atan2(K,W);else this._x=0,this._z=Math.atan2(-H,X);break;case"YZX":if(this._z=Math.asin(p0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(Y,N);break;case"XZY":if(this._z=Math.asin(-p0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(E,X),this._y=Math.atan2(Y,W);else this._x=Math.atan2(-U,N),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return pQ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(pQ,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return mQ.setFromEuler(this),this.setFromQuaternion(mQ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}uJ.DEFAULT_ORDER="XYZ";class L9{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var EW=0,dQ=new f,g8=new q8,aJ=new KJ,m6=new f,D6=new f,NW=new f,qW=new q8,lQ=new f(1,0,0),uQ=new f(0,1,0),cQ=new f(0,0,1),nQ={type:"added"},DW={type:"removed"},p8={type:"childadded",child:null},a9={type:"childremoved",child:null};class kJ extends N8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:EW++}),this.uuid=_6(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kJ.DEFAULT_UP.clone();let J=new f,Q=new uJ,$=new q8,Z=new f(1,1,1);function W(){$.setFromEuler(Q,!1)}function H(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(H),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new KJ},normalMatrix:{value:new v0}}),this.matrix=new KJ,this.matrixWorld=new KJ,this.matrixAutoUpdate=kJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new L9,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return g8.setFromAxisAngle(J,Q),this.quaternion.multiply(g8),this}rotateOnWorldAxis(J,Q){return g8.setFromAxisAngle(J,Q),this.quaternion.premultiply(g8),this}rotateX(J){return this.rotateOnAxis(lQ,J)}rotateY(J){return this.rotateOnAxis(uQ,J)}rotateZ(J){return this.rotateOnAxis(cQ,J)}translateOnAxis(J,Q){return dQ.copy(J).applyQuaternion(this.quaternion),this.position.add(dQ.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(lQ,J)}translateY(J){return this.translateOnAxis(uQ,J)}translateZ(J){return this.translateOnAxis(cQ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(aJ.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)m6.copy(J);else m6.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),D6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)aJ.lookAt(D6,m6,this.up);else aJ.lookAt(m6,D6,this.up);if(this.quaternion.setFromRotationMatrix(aJ),Z)aJ.extractRotation(Z.matrixWorld),g8.setFromRotationMatrix(aJ),this.quaternion.premultiply(g8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(nQ),p8.child=J,this.dispatchEvent(p8),p8.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(DW),a9.child=J,this.dispatchEvent(a9),a9.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),aJ.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),aJ.multiply(J.parent.matrixWorld);return J.applyMatrix4(aJ),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(nQ),p8.child=J,this.dispatchEvent(p8),p8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let H=this.children[$].getObjectByProperty(J,Q);if(H!==void 0)return H}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let W=0,H=Z.length;W<H;W++)Z[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(D6,J,NW),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(D6,qW,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let $=this.parent;if(J===!0&&$!==null)$.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let Z=this.children;for(let W=0,H=Z.length;W<H;W++)Z[W].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((Y)=>({...Y,boundingBox:Y.boundingBox?Y.boundingBox.toJSON():void 0,boundingSphere:Y.boundingSphere?Y.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((Y)=>({...Y})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(Y,K){if(Y[K.uuid]===void 0)Y[K.uuid]=K.toJSON(J);return K.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let K=Y.shapes;if(Array.isArray(K))for(let X=0,U=K.length;X<U;X++){let G=K[X];W(J.shapes,G)}else W(J.shapes,K)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let K=0,X=this.material.length;K<X;K++)Y.push(W(J.materials,this.material[K]));Z.material=Y}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let Y=0;Y<this.children.length;Y++)Z.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let Y=0;Y<this.animations.length;Y++){let K=this.animations[Y];Z.animations.push(W(J.animations,K))}}if(Q){let Y=H(J.geometries),K=H(J.materials),X=H(J.textures),U=H(J.images),G=H(J.shapes),E=H(J.skeletons),N=H(J.animations),O=H(J.nodes);if(Y.length>0)$.geometries=Y;if(K.length>0)$.materials=K;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(E.length>0)$.skeletons=E;if(N.length>0)$.animations=N;if(O.length>0)$.nodes=O}return $.object=Z,$;function H(Y){let K=[];for(let X in Y){let U=Y[X];delete U.metadata,K.push(U)}return K}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}kJ.DEFAULT_UP=new f(0,1,0);kJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;kJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mJ=new f,rJ=new f,r9=new f,tJ=new f,m8=new f,d8=new f,sQ=new f,t9=new f,e9=new f,J7=new f,Q7=new ZJ,$7=new ZJ,Z7=new ZJ;class yJ{constructor(J=new f,Q=new f,$=new f){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),mJ.subVectors(J,Q),Z.cross(mJ);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,W){mJ.subVectors(Z,Q),rJ.subVectors($,Q),r9.subVectors(J,Q);let H=mJ.dot(mJ),Y=mJ.dot(rJ),K=mJ.dot(r9),X=rJ.dot(rJ),U=rJ.dot(r9),G=H*X-Y*Y;if(G===0)return W.set(0,0,0),null;let E=1/G,N=(X*K-Y*U)*E,O=(H*U-Y*K)*E;return W.set(1-N-O,O,N)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,tJ)===null)return!1;return tJ.x>=0&&tJ.y>=0&&tJ.x+tJ.y<=1}static getInterpolation(J,Q,$,Z,W,H,Y,K){if(this.getBarycoord(J,Q,$,Z,tJ)===null){if(K.x=0,K.y=0,"z"in K)K.z=0;if("w"in K)K.w=0;return null}return K.setScalar(0),K.addScaledVector(W,tJ.x),K.addScaledVector(H,tJ.y),K.addScaledVector(Y,tJ.z),K}static getInterpolatedAttribute(J,Q,$,Z,W,H){return Q7.setScalar(0),$7.setScalar(0),Z7.setScalar(0),Q7.fromBufferAttribute(J,Q),$7.fromBufferAttribute(J,$),Z7.fromBufferAttribute(J,Z),H.setScalar(0),H.addScaledVector(Q7,W.x),H.addScaledVector($7,W.y),H.addScaledVector(Z7,W.z),H}static isFrontFacing(J,Q,$,Z){return mJ.subVectors($,Q),rJ.subVectors(J,Q),mJ.cross(rJ).dot(Z)<0?!0:!1}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return mJ.subVectors(this.c,this.b),rJ.subVectors(this.a,this.b),mJ.cross(rJ).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return yJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return yJ.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,W){return yJ.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,W)}containsPoint(J){return yJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return yJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,W=this.c,H,Y;m8.subVectors(Z,$),d8.subVectors(W,$),t9.subVectors(J,$);let K=m8.dot(t9),X=d8.dot(t9);if(K<=0&&X<=0)return Q.copy($);e9.subVectors(J,Z);let U=m8.dot(e9),G=d8.dot(e9);if(U>=0&&G<=U)return Q.copy(Z);let E=K*G-U*X;if(E<=0&&K>=0&&U<=0)return H=K/(K-U),Q.copy($).addScaledVector(m8,H);J7.subVectors(J,W);let N=m8.dot(J7),O=d8.dot(J7);if(O>=0&&N<=O)return Q.copy(W);let M=N*X-K*O;if(M<=0&&X>=0&&O<=0)return Y=X/(X-O),Q.copy($).addScaledVector(d8,Y);let k=U*O-N*G;if(k<=0&&G-U>=0&&N-O>=0)return sQ.subVectors(W,Z),Y=(G-U)/(G-U+(N-O)),Q.copy(Z).addScaledVector(sQ,Y);let q=1/(k+M+E);return H=M*q,Y=E*q,Q.copy($).addScaledVector(m8,H).addScaledVector(d8,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var XZ={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Y8={h:0,s:0,l:0},d6={h:0,s:0,l:0};function W7(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class x0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,m0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=m0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,m0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=m0.workingColorSpace){if(J=WW(J,1),Q=p0(Q,0,1),$=p0($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,H=2*$-W;this.r=W7(H,W,J+0.3333333333333333),this.g=W7(H,W,J),this.b=W7(H,W,J-0.3333333333333333)}return m0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,H=Z[1],Y=Z[2];switch(H){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],H=W.length;if(H===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(H===6)return this.setHex(parseInt(W,16),Q);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=XZ[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=J8(J.r),this.g=J8(J.g),this.b=J8(J.b),this}copyLinearToSRGB(J){return this.r=s8(J.r),this.g=s8(J.g),this.b=s8(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return m0.workingToColorSpace(OJ.copy(this),J),Math.round(p0(OJ.r*255,0,255))*65536+Math.round(p0(OJ.g*255,0,255))*256+Math.round(p0(OJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=m0.workingColorSpace){m0.workingToColorSpace(OJ.copy(this),Q);let{r:$,g:Z,b:W}=OJ,H=Math.max($,Z,W),Y=Math.min($,Z,W),K,X,U=(Y+H)/2;if(Y===H)K=0,X=0;else{let G=H-Y;switch(X=U<=0.5?G/(H+Y):G/(2-H-Y),H){case $:K=(Z-W)/G+(Z<W?6:0);break;case Z:K=(W-$)/G+2;break;case W:K=($-Z)/G+4;break}K/=6}return J.h=K,J.s=X,J.l=U,J}getRGB(J,Q=m0.workingColorSpace){return m0.workingToColorSpace(OJ.copy(this),Q),J.r=OJ.r,J.g=OJ.g,J.b=OJ.b,J}getStyle(J="srgb"){m0.workingToColorSpace(OJ.copy(this),J);let{r:Q,g:$,b:Z}=OJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(Y8),this.setHSL(Y8.h+J,Y8.s+Q,Y8.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(Y8),J.getHSL(d6);let $=p9(Y8.h,d6.h,Q),Z=p9(Y8.s,d6.s,Q),W=p9(Y8.l,d6.l,Q);return this.setHSL($,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*Z,this.g=W[1]*Q+W[4]*$+W[7]*Z,this.b=W[2]*Q+W[5]*$+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var OJ=new x0;x0.NAMES=XZ;var OW=0;class w8 extends N8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:OW++}),this.uuid=_6(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new x0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){console.warn(`THREE.Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){console.warn(`THREE.Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(W){let H=[];for(let Y in W){let K=W[Y];delete K.metadata,H.push(K)}return H}if(Q){let W=Z(J.textures),H=Z(J.images);if(W.length>0)$.textures=W;if(H.length>0)$.images=H}return $}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let W=0;W!==Z;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class z9 extends w8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new x0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new uJ,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var YJ=new f,l6=new c0,RW=0;class vJ{constructor(J,Q,$=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RW++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)l6.fromBufferAttribute(this,Q),l6.applyMatrix3(J),this.setXY(Q,l6.x,l6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)YJ.fromBufferAttribute(this,Q),YJ.applyMatrix3(J),this.setXYZ(Q,YJ.x,YJ.y,YJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)YJ.fromBufferAttribute(this,Q),YJ.applyMatrix4(J),this.setXYZ(Q,YJ.x,YJ.y,YJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)YJ.fromBufferAttribute(this,Q),YJ.applyNormalMatrix(J),this.setXYZ(Q,YJ.x,YJ.y,YJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)YJ.fromBufferAttribute(this,Q),YJ.transformDirection(J),this.setXYZ(Q,YJ.x,YJ.y,YJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=E6($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=LJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=E6(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=LJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=E6(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=LJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=E6(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=LJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=E6(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=LJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=LJ(Q,this.array),$=LJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=LJ(Q,this.array),$=LJ($,this.array),Z=LJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J*=this.itemSize,this.normalized)Q=LJ(Q,this.array),$=LJ($,this.array),Z=LJ(Z,this.array),W=LJ(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class B9 extends vJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class w9 extends vJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class CJ extends vJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var FW=0,jJ=new KJ,H7=new kJ,l8=new f,IJ=new B8,O6=new B8,NJ=new f;class bJ extends N8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FW++}),this.uuid=_6(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((t7(J))?w9:B9)(J,1);else this.index=J;return this}setIndirect(J){return this.indirect=J,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new v0().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return jJ.makeRotationFromQuaternion(J),this.applyMatrix4(jJ),this}rotateX(J){return jJ.makeRotationX(J),this.applyMatrix4(jJ),this}rotateY(J){return jJ.makeRotationY(J),this.applyMatrix4(jJ),this}rotateZ(J){return jJ.makeRotationZ(J),this.applyMatrix4(jJ),this}translate(J,Q,$){return jJ.makeTranslation(J,Q,$),this.applyMatrix4(jJ),this}scale(J,Q,$){return jJ.makeScale(J,Q,$),this.applyMatrix4(jJ),this}lookAt(J){return H7.lookAt(J),H7.updateMatrix(),this.applyMatrix4(H7.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(l8).negate(),this.translate(l8.x,l8.y,l8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,W=J.length;Z<W;Z++){let H=J[Z];$.push(H.x,H.y,H.z||0)}this.setAttribute("position",new CJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let W=J[Z];Q.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>Q.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new B8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new f(-1/0,-1/0,-1/0),new f(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(IJ.setFromBufferAttribute(W),this.morphTargetsRelative)NJ.addVectors(this.boundingBox.min,IJ.min),this.boundingBox.expandByPoint(NJ),NJ.addVectors(this.boundingBox.max,IJ.max),this.boundingBox.expandByPoint(NJ);else this.boundingBox.expandByPoint(IJ.min),this.boundingBox.expandByPoint(IJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new $6;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new f,1/0);return}if(J){let $=this.boundingSphere.center;if(IJ.setFromBufferAttribute(J),Q)for(let W=0,H=Q.length;W<H;W++){let Y=Q[W];if(O6.setFromBufferAttribute(Y),this.morphTargetsRelative)NJ.addVectors(IJ.min,O6.min),IJ.expandByPoint(NJ),NJ.addVectors(IJ.max,O6.max),IJ.expandByPoint(NJ);else IJ.expandByPoint(O6.min),IJ.expandByPoint(O6.max)}IJ.getCenter($);let Z=0;for(let W=0,H=J.count;W<H;W++)NJ.fromBufferAttribute(J,W),Z=Math.max(Z,$.distanceToSquared(NJ));if(Q)for(let W=0,H=Q.length;W<H;W++){let Y=Q[W],K=this.morphTargetsRelative;for(let X=0,U=Y.count;X<U;X++){if(NJ.fromBufferAttribute(Y,X),K)l8.fromBufferAttribute(J,X),NJ.add(l8);Z=Math.max(Z,$.distanceToSquared(NJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:W}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new vJ(new Float32Array(4*$.count),4));let H=this.getAttribute("tangent"),Y=[],K=[];for(let T=0;T<$.count;T++)Y[T]=new f,K[T]=new f;let X=new f,U=new f,G=new f,E=new c0,N=new c0,O=new c0,M=new f,k=new f;function q(T,m,z){X.fromBufferAttribute($,T),U.fromBufferAttribute($,m),G.fromBufferAttribute($,z),E.fromBufferAttribute(W,T),N.fromBufferAttribute(W,m),O.fromBufferAttribute(W,z),U.sub(X),G.sub(X),N.sub(E),O.sub(E);let V=1/(N.x*O.y-O.x*N.y);if(!isFinite(V))return;M.copy(U).multiplyScalar(O.y).addScaledVector(G,-N.y).multiplyScalar(V),k.copy(G).multiplyScalar(N.x).addScaledVector(U,-O.x).multiplyScalar(V),Y[T].add(M),Y[m].add(M),Y[z].add(M),K[T].add(k),K[m].add(k),K[z].add(k)}let D=this.groups;if(D.length===0)D=[{start:0,count:J.count}];for(let T=0,m=D.length;T<m;++T){let z=D[T],V=z.start,A=z.count;for(let d=V,c=V+A;d<c;d+=3)q(J.getX(d+0),J.getX(d+1),J.getX(d+2))}let P=new f,L=new f,I=new f,v=new f;function C(T){I.fromBufferAttribute(Z,T),v.copy(I);let m=Y[T];P.copy(m),P.sub(I.multiplyScalar(I.dot(m))).normalize(),L.crossVectors(v,m);let V=L.dot(K[T])<0?-1:1;H.setXYZW(T,P.x,P.y,P.z,V)}for(let T=0,m=D.length;T<m;++T){let z=D[T],V=z.start,A=z.count;for(let d=V,c=V+A;d<c;d+=3)C(J.getX(d+0)),C(J.getX(d+1)),C(J.getX(d+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0)$=new vJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let E=0,N=$.count;E<N;E++)$.setXYZ(E,0,0,0);let Z=new f,W=new f,H=new f,Y=new f,K=new f,X=new f,U=new f,G=new f;if(J)for(let E=0,N=J.count;E<N;E+=3){let O=J.getX(E+0),M=J.getX(E+1),k=J.getX(E+2);Z.fromBufferAttribute(Q,O),W.fromBufferAttribute(Q,M),H.fromBufferAttribute(Q,k),U.subVectors(H,W),G.subVectors(Z,W),U.cross(G),Y.fromBufferAttribute($,O),K.fromBufferAttribute($,M),X.fromBufferAttribute($,k),Y.add(U),K.add(U),X.add(U),$.setXYZ(O,Y.x,Y.y,Y.z),$.setXYZ(M,K.x,K.y,K.z),$.setXYZ(k,X.x,X.y,X.z)}else for(let E=0,N=Q.count;E<N;E+=3)Z.fromBufferAttribute(Q,E+0),W.fromBufferAttribute(Q,E+1),H.fromBufferAttribute(Q,E+2),U.subVectors(H,W),G.subVectors(Z,W),U.cross(G),$.setXYZ(E+0,U.x,U.y,U.z),$.setXYZ(E+1,U.x,U.y,U.z),$.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)NJ.fromBufferAttribute(J,Q),NJ.normalize(),J.setXYZ(Q,NJ.x,NJ.y,NJ.z)}toNonIndexed(){function J(Y,K){let{array:X,itemSize:U,normalized:G}=Y,E=new X.constructor(K.length*U),N=0,O=0;for(let M=0,k=K.length;M<k;M++){if(Y.isInterleavedBufferAttribute)N=K[M]*Y.data.stride+Y.offset;else N=K[M]*U;for(let q=0;q<U;q++)E[O++]=X[N++]}return new vJ(E,U,G)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new bJ,$=this.index.array,Z=this.attributes;for(let Y in Z){let K=Z[Y],X=J(K,$);Q.setAttribute(Y,X)}let W=this.morphAttributes;for(let Y in W){let K=[],X=W[Y];for(let U=0,G=X.length;U<G;U++){let E=X[U],N=J(E,$);K.push(N)}Q.morphAttributes[Y]=K}Q.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;for(let Y=0,K=H.length;Y<K;Y++){let X=H[Y];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let K=this.parameters;for(let X in K)if(K[X]!==void 0)J[X]=K[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let K in $){let X=$[K];J.data.attributes[K]=X.toJSON(J.data)}let Z={},W=!1;for(let K in this.morphAttributes){let X=this.morphAttributes[K],U=[];for(let G=0,E=X.length;G<E;G++){let N=X[G];U.push(N.toJSON(J.data))}if(U.length>0)Z[K]=U,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;if(H.length>0)J.data.groups=JSON.parse(JSON.stringify(H));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere=Y.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let X in Z){let U=Z[X];this.setAttribute(X,U.clone(Q))}let W=J.morphAttributes;for(let X in W){let U=[],G=W[X];for(let E=0,N=G.length;E<N;E++)U.push(G[E].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let H=J.groups;for(let X=0,U=H.length;X<U;X++){let G=H[X];this.addGroup(G.start,G.count,G.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let K=J.boundingSphere;if(K!==null)this.boundingSphere=K.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var iQ=new KJ,M8=new V9,u6=new $6,oQ=new f,c6=new f,n6=new f,s6=new f,K7=new f,i6=new f,aQ=new f,o6=new f;class AJ extends kJ{constructor(J=new bJ,Q=new z9){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=Z.length;W<H;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,W=$.morphAttributes.position,H=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let Y=this.morphTargetInfluences;if(W&&Y){i6.set(0,0,0);for(let K=0,X=W.length;K<X;K++){let U=Y[K],G=W[K];if(U===0)continue;if(K7.fromBufferAttribute(G,J),H)i6.addScaledVector(K7,U);else i6.addScaledVector(K7.sub(Q),U)}Q.add(i6)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(u6.copy($.boundingSphere),u6.applyMatrix4(W),M8.copy(J.ray).recast(J.near),u6.containsPoint(M8.origin)===!1){if(M8.intersectSphere(u6,oQ)===null)return;if(M8.origin.distanceToSquared(oQ)>(J.far-J.near)**2)return}if(iQ.copy(W).invert(),M8.copy(J.ray).applyMatrix4(iQ),$.boundingBox!==null){if(M8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,M8)}_computeIntersections(J,Q,$){let Z,W=this.geometry,H=this.material,Y=W.index,K=W.attributes.position,X=W.attributes.uv,U=W.attributes.uv1,G=W.attributes.normal,E=W.groups,N=W.drawRange;if(Y!==null)if(Array.isArray(H))for(let O=0,M=E.length;O<M;O++){let k=E[O],q=H[k.materialIndex],D=Math.max(k.start,N.start),P=Math.min(Y.count,Math.min(k.start+k.count,N.start+N.count));for(let L=D,I=P;L<I;L+=3){let v=Y.getX(L),C=Y.getX(L+1),T=Y.getX(L+2);if(Z=a6(this,q,J,$,X,U,G,v,C,T),Z)Z.faceIndex=Math.floor(L/3),Z.face.materialIndex=k.materialIndex,Q.push(Z)}}else{let O=Math.max(0,N.start),M=Math.min(Y.count,N.start+N.count);for(let k=O,q=M;k<q;k+=3){let D=Y.getX(k),P=Y.getX(k+1),L=Y.getX(k+2);if(Z=a6(this,H,J,$,X,U,G,D,P,L),Z)Z.faceIndex=Math.floor(k/3),Q.push(Z)}}else if(K!==void 0)if(Array.isArray(H))for(let O=0,M=E.length;O<M;O++){let k=E[O],q=H[k.materialIndex],D=Math.max(k.start,N.start),P=Math.min(K.count,Math.min(k.start+k.count,N.start+N.count));for(let L=D,I=P;L<I;L+=3){let v=L,C=L+1,T=L+2;if(Z=a6(this,q,J,$,X,U,G,v,C,T),Z)Z.faceIndex=Math.floor(L/3),Z.face.materialIndex=k.materialIndex,Q.push(Z)}}else{let O=Math.max(0,N.start),M=Math.min(K.count,N.start+N.count);for(let k=O,q=M;k<q;k+=3){let D=k,P=k+1,L=k+2;if(Z=a6(this,H,J,$,X,U,G,D,P,L),Z)Z.faceIndex=Math.floor(k/3),Q.push(Z)}}}}function MW(J,Q,$,Z,W,H,Y,K){let X;if(Q.side===1)X=Z.intersectTriangle(Y,H,W,!0,K);else X=Z.intersectTriangle(W,H,Y,Q.side===0,K);if(X===null)return null;o6.copy(K),o6.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(o6);if(U<$.near||U>$.far)return null;return{distance:U,point:o6.clone(),object:J}}function a6(J,Q,$,Z,W,H,Y,K,X,U){J.getVertexPosition(K,c6),J.getVertexPosition(X,n6),J.getVertexPosition(U,s6);let G=MW(J,Q,$,Z,c6,n6,s6,aQ);if(G){let E=new f;if(yJ.getBarycoord(aQ,c6,n6,s6,E),W)G.uv=yJ.getInterpolatedAttribute(W,K,X,U,E,new c0);if(H)G.uv1=yJ.getInterpolatedAttribute(H,K,X,U,E,new c0);if(Y){if(G.normal=yJ.getInterpolatedAttribute(Y,K,X,U,E,new f),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let N={a:K,b:X,c:U,normal:new f,materialIndex:0};yJ.getNormal(c6,n6,s6,N.normal),G.face=N,G.barycoord=E}return G}class Z6 extends bJ{constructor(J=1,Q=1,$=1,Z=1,W=1,H=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:W,depthSegments:H};let Y=this;Z=Math.floor(Z),W=Math.floor(W),H=Math.floor(H);let K=[],X=[],U=[],G=[],E=0,N=0;O("z","y","x",-1,-1,$,Q,J,H,W,0),O("z","y","x",1,-1,$,Q,-J,H,W,1),O("x","z","y",1,1,J,$,Q,Z,H,2),O("x","z","y",1,-1,J,$,-Q,Z,H,3),O("x","y","z",1,-1,J,Q,$,Z,W,4),O("x","y","z",-1,-1,J,Q,-$,Z,W,5),this.setIndex(K),this.setAttribute("position",new CJ(X,3)),this.setAttribute("normal",new CJ(U,3)),this.setAttribute("uv",new CJ(G,2));function O(M,k,q,D,P,L,I,v,C,T,m){let z=L/C,V=I/T,A=L/2,d=I/2,c=v/2,p=C+1,o=T+1,l=0,r=0,x=new f;for(let H0=0;H0<o;H0++){let G0=H0*V-d;for(let P0=0;P0<p;P0++){let g0=P0*z-A;x[M]=g0*D,x[k]=G0*P,x[q]=c,X.push(x.x,x.y,x.z),x[M]=0,x[k]=0,x[q]=v>0?1:-1,U.push(x.x,x.y,x.z),G.push(P0/C),G.push(1-H0/T),l+=1}}for(let H0=0;H0<T;H0++)for(let G0=0;G0<C;G0++){let P0=E+G0+p*H0,g0=E+G0+p*(H0+1),WJ=E+(G0+1)+p*(H0+1),d0=E+(G0+1)+p*H0;K.push(P0,g0,d0),K.push(g0,WJ,d0),r+=6}Y.addGroup(N,r,m),N+=r,E+=l}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new Z6(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function I8(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let W=J[$][Z];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=W.clone();else if(Array.isArray(W))Q[$][Z]=W.slice();else Q[$][Z]=W}}return Q}function RJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=I8(J[$]);for(let W in Z)Q[W]=Z[W]}return Q}function kW(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function $Q(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return m0.workingColorSpace}var UZ={clone:I8,merge:RJ},VW=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LW=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hJ extends w8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VW,this.fragmentShader=LW,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=I8(J.uniforms),this.uniformsGroups=kW(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let H=this.uniforms[Z].value;if(H&&H.isTexture)Q.uniforms[Z]={type:"t",value:H.toJSON(J).uuid};else if(H&&H.isColor)Q.uniforms[Z]={type:"c",value:H.getHex()};else if(H&&H.isVector2)Q.uniforms[Z]={type:"v2",value:H.toArray()};else if(H&&H.isVector3)Q.uniforms[Z]={type:"v3",value:H.toArray()};else if(H&&H.isVector4)Q.uniforms[Z]={type:"v4",value:H.toArray()};else if(H&&H.isMatrix3)Q.uniforms[Z]={type:"m3",value:H.toArray()};else if(H&&H.isMatrix4)Q.uniforms[Z]={type:"m4",value:H.toArray()};else Q.uniforms[Z]={value:H}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}}class I9 extends kJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new KJ,this.projectionMatrix=new KJ,this.projectionMatrixInverse=new KJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Q){super.updateWorldMatrix(J,Q),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var X8=new f,rQ=new c0,tQ=new c0;class _J extends I9{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=Q9*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(g9*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return Q9*2*Math.atan(Math.tan(g9*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){X8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(X8.x,X8.y).multiplyScalar(-J/X8.z),X8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(X8.x,X8.y).multiplyScalar(-J/X8.z)}getViewSize(J,Q){return this.getViewBounds(J,rQ,tQ),Q.subVectors(tQ,rQ)}setViewOffset(J,Q,$,Z,W,H){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(g9*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,W=-0.5*Z,H=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:K,fullHeight:X}=H;W+=H.offsetX*Z/K,Q-=H.offsetY*$/X,Z*=H.width/K,$*=H.height/X}let Y=this.filmOffset;if(Y!==0)W+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}var u8=-90,c8=1;class ZQ extends kJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new _J(u8,c8,J,Q);Z.layers=this.layers,this.add(Z);let W=new _J(u8,c8,J,Q);W.layers=this.layers,this.add(W);let H=new _J(u8,c8,J,Q);H.layers=this.layers,this.add(H);let Y=new _J(u8,c8,J,Q);Y.layers=this.layers,this.add(Y);let K=new _J(u8,c8,J,Q);K.layers=this.layers,this.add(K);let X=new _J(u8,c8,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,W,H,Y,K]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),H.up.set(0,0,1),H.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),K.up.set(0,1,0),K.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),H.up.set(0,0,-1),H.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),K.up.set(0,-1,0),K.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,H,Y,K,X,U]=this.children,G=J.getRenderTarget(),E=J.getActiveCubeFace(),N=J.getActiveMipmapLevel(),O=J.xr.enabled;J.xr.enabled=!1;let M=$.texture.generateMipmaps;$.texture.generateMipmaps=!1,J.setRenderTarget($,0,Z),J.render(Q,W),J.setRenderTarget($,1,Z),J.render(Q,H),J.setRenderTarget($,2,Z),J.render(Q,Y),J.setRenderTarget($,3,Z),J.render(Q,K),J.setRenderTarget($,4,Z),J.render(Q,X),$.texture.generateMipmaps=M,J.setRenderTarget($,5,Z),J.render(Q,U),J.setRenderTarget(G,E,N),J.xr.enabled=O,$.texture.needsPMREMUpdate=!0}}class _9 extends MJ{constructor(J=[],Q=301,$,Z,W,H,Y,K,X,U){super(J,Q,$,Z,W,H,Y,K,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class WQ extends $8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new _9(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},Z=new Z6(5,5,5),W=new hJ({name:"CubemapFromEquirect",uniforms:I8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=Q;let H=new AJ(Z,W),Y=Q.minFilter;if(Q.minFilter===1008)Q.minFilter=1006;return new ZQ(1,10,this).update(J,H),Q.minFilter=Y,H.geometry.dispose(),H.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let W=J.getRenderTarget();for(let H=0;H<6;H++)J.setRenderTarget(this,H),J.clear(Q,$,Z);J.setRenderTarget(W)}}class n8 extends kJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var zW={type:"move"};class P6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new n8,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new n8,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new f,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new f;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new n8,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new f,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new f;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,W=null,H=null,Y=this._targetRay,K=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){H=!0;for(let M of J.hand.values()){let k=Q.getJointPose(M,$),q=this._getHandJoint(X,M);if(k!==null)q.matrix.fromArray(k.transform.matrix),q.matrix.decompose(q.position,q.rotation,q.scale),q.matrixWorldNeedsUpdate=!0,q.jointRadius=k.radius;q.visible=k!==null}let U=X.joints["index-finger-tip"],G=X.joints["thumb-tip"],E=U.position.distanceTo(G.position),N=0.02,O=0.005;if(X.inputState.pinching&&E>N+O)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&E<=N-O)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(K!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(K.matrix.fromArray(W.transform.matrix),K.matrix.decompose(K.position,K.rotation,K.scale),K.matrixWorldNeedsUpdate=!0,W.linearVelocity)K.hasLinearVelocity=!0,K.linearVelocity.copy(W.linearVelocity);else K.hasLinearVelocity=!1;if(W.angularVelocity)K.hasAngularVelocity=!0,K.angularVelocity.copy(W.angularVelocity);else K.hasAngularVelocity=!1}}if(Y!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&W!==null)Z=W;if(Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(zW)}}}if(Y!==null)Y.visible=Z!==null;if(K!==null)K.visible=W!==null;if(X!==null)X.visible=H!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new n8;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}class C9 extends kJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new uJ,this.environmentIntensity=1,this.environmentRotation=new uJ,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var Y7=new f,BW=new f,wW=new v0;class eJ{constructor(J=new f(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=Y7.subVectors($,Q).cross(BW.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q){let $=J.delta(Y7),Z=this.normal.dot($);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/Z;if(W<0||W>1)return null;return Q.copy(J.start).addScaledVector($,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||wW.getNormalMatrix(J),Z=this.coplanarPoint(Y7).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var k8=new $6,IW=new c0(0.5,0.5),r6=new f;class P9{constructor(J=new eJ,Q=new eJ,$=new eJ,Z=new eJ,W=new eJ,H=new eJ){this.planes=[J,Q,$,Z,W,H]}set(J,Q,$,Z,W,H){let Y=this.planes;return Y[0].copy(J),Y[1].copy(Q),Y[2].copy($),Y[3].copy(Z),Y[4].copy(W),Y[5].copy(H),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,W=J.elements,H=W[0],Y=W[1],K=W[2],X=W[3],U=W[4],G=W[5],E=W[6],N=W[7],O=W[8],M=W[9],k=W[10],q=W[11],D=W[12],P=W[13],L=W[14],I=W[15];if(Z[0].setComponents(X-H,N-U,q-O,I-D).normalize(),Z[1].setComponents(X+H,N+U,q+O,I+D).normalize(),Z[2].setComponents(X+Y,N+G,q+M,I+P).normalize(),Z[3].setComponents(X-Y,N-G,q-M,I-P).normalize(),$)Z[4].setComponents(K,E,k,L).normalize(),Z[5].setComponents(X-K,N-E,q-k,I-L).normalize();else if(Z[4].setComponents(X-K,N-E,q-k,I-L).normalize(),Q===2000)Z[5].setComponents(X+K,N+E,q+k,I+L).normalize();else if(Q===2001)Z[5].setComponents(K,E,k,L).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();k8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();k8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(k8)}intersectsSprite(J){k8.center.set(0,0,0);let Q=IW.distanceTo(J.center);return k8.radius=0.7071067811865476+Q,k8.applyMatrix4(J.matrixWorld),this.intersectsSphere(k8)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(r6.x=Z.normal.x>0?J.max.x:J.min.x,r6.y=Z.normal.y>0?J.max.y:J.min.y,r6.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(r6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class W6 extends w8{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new x0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var $9=new f,Z9=new f,eQ=new KJ,R6=new V9,t6=new $6,X7=new f,J$=new f;class A6 extends kJ{constructor(J=new bJ,Q=new W6){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,W=Q.count;Z<W;Z++)$9.fromBufferAttribute(Q,Z-1),Z9.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=$9.distanceTo(Z9);J.setAttribute("lineDistance",new CJ($,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Line.threshold,H=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(t6.copy($.boundingSphere),t6.applyMatrix4(Z),t6.radius+=W,J.ray.intersectsSphere(t6)===!1)return;eQ.copy(Z).invert(),R6.copy(J.ray).applyMatrix4(eQ);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),K=Y*Y,X=this.isLineSegments?2:1,U=$.index,E=$.attributes.position;if(U!==null){let N=Math.max(0,H.start),O=Math.min(U.count,H.start+H.count);for(let M=N,k=O-1;M<k;M+=X){let q=U.getX(M),D=U.getX(M+1),P=e6(this,J,R6,K,q,D,M);if(P)Q.push(P)}if(this.isLineLoop){let M=U.getX(O-1),k=U.getX(N),q=e6(this,J,R6,K,M,k,O-1);if(q)Q.push(q)}}else{let N=Math.max(0,H.start),O=Math.min(E.count,H.start+H.count);for(let M=N,k=O-1;M<k;M+=X){let q=e6(this,J,R6,K,M,M+1,M);if(q)Q.push(q)}if(this.isLineLoop){let M=e6(this,J,R6,K,O-1,N,O-1);if(M)Q.push(M)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=Z.length;W<H;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function e6(J,Q,$,Z,W,H,Y){let K=J.geometry.attributes.position;if($9.fromBufferAttribute(K,W),Z9.fromBufferAttribute(K,H),$.distanceSqToSegment($9,Z9,X7,J$)>Z)return;X7.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(X7);if(U<Q.near||U>Q.far)return;return{distance:U,point:J$.clone().applyMatrix4(J.matrixWorld),index:Y,face:null,faceIndex:null,barycoord:null,object:J}}var Q$=new f,$$=new f;class HQ extends A6{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let Z=0,W=Q.count;Z<W;Z+=2)Q$.fromBufferAttribute(Q,Z),$$.fromBufferAttribute(Q,Z+1),$[Z]=Z===0?0:$[Z-1],$[Z+1]=$[Z]+Q$.distanceTo($$);J.setAttribute("lineDistance",new CJ($,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class A9 extends MJ{constructor(J,Q,$=1014,Z,W,H,Y=1003,K=1003,X,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:J,height:Q,depth:G};super(E,Z,W,H,Y,K,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new C6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class T9 extends MJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class _8 extends bJ{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let W=J/2,H=Q/2,Y=Math.floor($),K=Math.floor(Z),X=Y+1,U=K+1,G=J/Y,E=Q/K,N=[],O=[],M=[],k=[];for(let q=0;q<U;q++){let D=q*E-H;for(let P=0;P<X;P++){let L=P*G-W;O.push(L,-D,0),M.push(0,0,1),k.push(P/Y),k.push(1-q/K)}}for(let q=0;q<K;q++)for(let D=0;D<Y;D++){let P=D+X*q,L=D+X*(q+1),I=D+1+X*(q+1),v=D+1+X*q;N.push(P,L,v),N.push(L,I,v)}this.setIndex(N),this.setAttribute("position",new CJ(O,3)),this.setAttribute("normal",new CJ(M,3)),this.setAttribute("uv",new CJ(k,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new _8(J.width,J.height,J.widthSegments,J.heightSegments)}}class KQ extends w8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class YQ extends w8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function J9(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function _W(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}class H6{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],W=Q[$-1];$:{J:{let H;Q:{Z:if(!(J<Z)){for(let Y=$+2;;){if(Z===void 0){if(J<W)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===Y)break;if(W=Z,Z=Q[++$],J<Z)break J}H=Q.length;break Q}if(!(J>=W)){let Y=Q[1];if(J<Y)$=2,W=Y;for(let K=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===K)break;if(Z=W,W=Q[--$-1],J>=W)break J}H=$,$=0;break Q}break $}while($<H){let Y=$+H>>>1;if(J<Q[Y])H=Y;else $=Y+1}if(Z=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,Z)}return this.interpolate_($,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z;for(let H=0;H!==Z;++H)Q[H]=$[W+H];return Q}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class XQ extends H6{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,W=J-2,H=J+1,Y=Z[W],K=Z[H];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,Y=2*Q-$;break;case 2402:W=Z.length-2,Y=Q+Z[W]-Z[W+1];break;default:W=J,Y=$}if(K===void 0)switch(this.getSettings_().endingEnd){case 2401:H=J,K=2*$-Q;break;case 2402:H=1,K=$+Z[1]-Z[0];break;default:H=J-1,K=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-Y),this._weightNext=X/(K-$),this._offsetPrev=W*U,this._offsetNext=H*U}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,K=J*Y,X=K-Y,U=this._offsetPrev,G=this._offsetNext,E=this._weightPrev,N=this._weightNext,O=($-Q)/(Z-Q),M=O*O,k=M*O,q=-E*k+2*E*M-E*O,D=(1+E)*k+(-1.5-2*E)*M+(-0.5+E)*O+1,P=(-1-N)*k+(1.5+N)*M+0.5*O,L=N*k-N*M;for(let I=0;I!==Y;++I)W[I]=q*H[U+I]+D*H[X+I]+P*H[K+I]+L*H[G+I];return W}}class UQ extends H6{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,K=J*Y,X=K-Y,U=($-Q)/(Z-Q),G=1-U;for(let E=0;E!==Y;++E)W[E]=H[X+E]*G+H[K+E]*U;return W}}class GQ extends H6{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class xJ{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=J9(Q,this.TimeBufferType),this.values=J9($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:J9(J.times,Array),values:J9(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new GQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new UQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new XQ(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return console.warn("THREE.KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,W=0,H=Z-1;while(W!==Z&&$[W]<J)++W;while(H!==-1&&$[H]>Q)--H;if(++H,W!==0||H!==Z){if(W>=H)H=Math.max(H,1),W=H-1;let Y=this.getValueSize();this.times=$.slice(W,H),this.values=this.values.slice(W*Y,H*Y)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,W=$.length;if(W===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let H=null;for(let Y=0;Y!==W;Y++){let K=$[Y];if(typeof K==="number"&&isNaN(K)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,Y,K),J=!1;break}if(H!==null&&H>K){console.error("THREE.KeyframeTrack: Out of order keys.",this,Y,K,H),J=!1;break}H=K}if(Z!==void 0){if(_W(Z))for(let Y=0,K=Z.length;Y!==K;++Y){let X=Z[Y];if(isNaN(X)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,Y,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,H=1;for(let Y=1;Y<W;++Y){let K=!1,X=J[Y],U=J[Y+1];if(X!==U&&(Y!==1||X!==J[0]))if(!Z){let G=Y*$,E=G-$,N=G+$;for(let O=0;O!==$;++O){let M=Q[G+O];if(M!==Q[E+O]||M!==Q[N+O]){K=!0;break}}}else K=!0;if(K){if(Y!==H){J[H]=J[Y];let G=Y*$,E=H*$;for(let N=0;N!==$;++N)Q[E+N]=Q[G+N]}++H}}if(W>0){J[H]=J[W];for(let Y=W*$,K=H*$,X=0;X!==$;++X)Q[K+X]=Q[Y+X];++H}if(H!==J.length)this.times=J.slice(0,H),this.values=Q.slice(0,H*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}xJ.prototype.ValueTypeName="";xJ.prototype.TimeBufferType=Float32Array;xJ.prototype.ValueBufferType=Float32Array;xJ.prototype.DefaultInterpolation=2301;class C8 extends xJ{constructor(J,Q,$){super(J,Q,$)}}C8.prototype.ValueTypeName="bool";C8.prototype.ValueBufferType=Array;C8.prototype.DefaultInterpolation=2300;C8.prototype.InterpolantFactoryMethodLinear=void 0;C8.prototype.InterpolantFactoryMethodSmooth=void 0;class EQ extends xJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}EQ.prototype.ValueTypeName="color";class NQ extends xJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}NQ.prototype.ValueTypeName="number";class qQ extends H6{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,K=($-Q)/(Z-Q),X=J*Y;for(let U=X+Y;X!==U;X+=4)q8.slerpFlat(W,0,H,X-Y,H,X,K);return W}}class S9 extends xJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new qQ(this.times,this.values,this.getValueSize(),J)}}S9.prototype.ValueTypeName="quaternion";S9.prototype.InterpolantFactoryMethodSmooth=void 0;class P8 extends xJ{constructor(J,Q,$){super(J,Q,$)}}P8.prototype.ValueTypeName="string";P8.prototype.ValueBufferType=Array;P8.prototype.DefaultInterpolation=2300;P8.prototype.InterpolantFactoryMethodLinear=void 0;P8.prototype.InterpolantFactoryMethodSmooth=void 0;class DQ extends xJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}DQ.prototype.ValueTypeName="vector";class OQ{constructor(J,Q,$){let Z=this,W=!1,H=0,Y=0,K=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this.abortController=new AbortController,this.itemStart=function(U){if(Y++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,H,Y)}W=!0},this.itemEnd=function(U){if(H++,Z.onProgress!==void 0)Z.onProgress(U,H,Y);if(H===Y){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(K)return K(U);return U},this.setURLModifier=function(U){return K=U,this},this.addHandler=function(U,G){return X.push(U,G),this},this.removeHandler=function(U){let G=X.indexOf(U);if(G!==-1)X.splice(G,2);return this},this.getHandler=function(U){for(let G=0,E=X.length;G<E;G+=2){let N=X[G],O=X[G+1];if(N.global)N.lastIndex=0;if(N.test(U))return O}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}var GZ=new OQ;class RQ{constructor(J){this.manager=J!==void 0?J:GZ,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,W){$.load(J,Z,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}RQ.DEFAULT_MATERIAL_NAME="__DEFAULT";class T6 extends I9{constructor(J=-1,Q=1,$=1,Z=-1,W=0.1,H=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=W,this.far=H,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,W,H){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=$-J,H=$+J,Y=Z+Q,K=Z-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=X*this.view.offsetX,H=W+X*this.view.width,Y-=U*this.view.offsetY,K=Y-U*this.view.height}this.projectionMatrix.makeOrthographic(W,H,Y,K,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class FQ extends _J{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var MQ="\\[\\]\\.:\\/",CW=new RegExp("["+MQ+"]","g"),kQ="[^"+MQ+"]",PW="[^"+MQ.replace("\\.","")+"]",AW=/((?:WC+[\/:])*)/.source.replace("WC",kQ),TW=/(WCOD+)?/.source.replace("WCOD",PW),SW=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kQ),jW=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kQ),yW=new RegExp("^"+AW+TW+SW+jW+"$"),vW=["material","materials","bones","map"];class EZ{constructor(J,Q,$){let Z=$||u0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=$.length;Z!==W;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class u0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||u0.parseTrackName(Q),this.node=u0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new u0(J,Q,$);else return new u0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(CW,"")}static parseTrackName(J){let Q=yW.exec(J);if(Q===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=$.nodeName.substring(Z+1);if(vW.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let H=0;H<W.length;H++){let Y=W[H];if(Y.name===Q||Y.uuid===Q)return Y;let K=$(Y.children);if(K)return K}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,W=Q.propertyIndex;if(!J)J=u0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let H=J[Z];if(H===void 0){let X=Q.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+X+"."+Z+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let K=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}K=this.BindingType.ArrayElement,this.resolvedProperty=H,this.propertyIndex=W}else if(H.fromArray!==void 0&&H.toArray!==void 0)K=this.BindingType.HasFromToArray,this.resolvedProperty=H;else if(Array.isArray(H))K=this.BindingType.EntireArray,this.resolvedProperty=H;else this.propertyName=Z;this.getValue=this.GetterByBindingType[K],this.setValue=this.SetterByBindingTypeAndVersioning[K][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}u0.Composite=EZ;u0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};u0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};u0.prototype.GetterByBindingType=[u0.prototype._getValue_direct,u0.prototype._getValue_array,u0.prototype._getValue_arrayElement,u0.prototype._getValue_toArray];u0.prototype.SetterByBindingTypeAndVersioning=[[u0.prototype._setValue_direct,u0.prototype._setValue_direct_setNeedsUpdate,u0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[u0.prototype._setValue_array,u0.prototype._setValue_array_setNeedsUpdate,u0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[u0.prototype._setValue_arrayElement,u0.prototype._setValue_arrayElement_setNeedsUpdate,u0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[u0.prototype._setValue_fromArray,u0.prototype._setValue_fromArray_setNeedsUpdate,u0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var OU=new Float32Array(1);class j9 extends HQ{constructor(J=10,Q=10,$=4473924,Z=8947848){$=new x0($),Z=new x0(Z);let W=Q/2,H=J/Q,Y=J/2,K=[],X=[];for(let E=0,N=0,O=-Y;E<=Q;E++,O+=H){K.push(-Y,0,O,Y,0,O),K.push(O,0,-Y,O,0,Y);let M=E===W?$:Z;M.toArray(X,N),N+=3,M.toArray(X,N),N+=3,M.toArray(X,N),N+=3,M.toArray(X,N),N+=3}let U=new bJ;U.setAttribute("position",new CJ(K,3)),U.setAttribute("color",new CJ(X,3));let G=new W6({vertexColors:!0,toneMapped:!1});super(U,G);this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function VQ(J,Q,$,Z){let W=fW(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function fW(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="180";function fZ(){let J=null,Q=!1,$=null,Z=null;function W(H,Y){$(H,Y),Z=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if($===null)return;Z=J.requestAnimationFrame(W),Q=!0},stop:function(){J.cancelAnimationFrame(Z),Q=!1},setAnimationLoop:function(H){$=H},setContext:function(H){J=H}}}function bW(J){let Q=new WeakMap;function $(K,X){let{array:U,usage:G}=K,E=U.byteLength,N=J.createBuffer();J.bindBuffer(X,N),J.bufferData(X,U,G),K.onUploadCallback();let O;if(U instanceof Float32Array)O=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)O=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(K.isFloat16BufferAttribute)O=J.HALF_FLOAT;else O=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)O=J.SHORT;else if(U instanceof Uint32Array)O=J.UNSIGNED_INT;else if(U instanceof Int32Array)O=J.INT;else if(U instanceof Int8Array)O=J.BYTE;else if(U instanceof Uint8Array)O=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)O=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:N,type:O,bytesPerElement:U.BYTES_PER_ELEMENT,version:K.version,size:E}}function Z(K,X,U){let{array:G,updateRanges:E}=X;if(J.bindBuffer(U,K),E.length===0)J.bufferSubData(U,0,G);else{E.sort((O,M)=>O.start-M.start);let N=0;for(let O=1;O<E.length;O++){let M=E[N],k=E[O];if(k.start<=M.start+M.count+1)M.count=Math.max(M.count,k.start+k.count-M.start);else++N,E[N]=k}E.length=N+1;for(let O=0,M=E.length;O<M;O++){let k=E[O];J.bufferSubData(U,k.start*G.BYTES_PER_ELEMENT,G,k.start,k.count)}X.clearUpdateRanges()}X.onUploadCallback()}function W(K){if(K.isInterleavedBufferAttribute)K=K.data;return Q.get(K)}function H(K){if(K.isInterleavedBufferAttribute)K=K.data;let X=Q.get(K);if(X)J.deleteBuffer(X.buffer),Q.delete(K)}function Y(K,X){if(K.isInterleavedBufferAttribute)K=K.data;if(K.isGLBufferAttribute){let G=Q.get(K);if(!G||G.version<K.version)Q.set(K,{buffer:K.buffer,type:K.type,bytesPerElement:K.elementSize,version:K.version});return}let U=Q.get(K);if(U===void 0)Q.set(K,$(K,X));else if(U.version<K.version){if(U.size!==K.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,K,X),U.version=K.version}}return{get:W,remove:H,update:Y}}var hW=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xW=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gW=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pW=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mW=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dW=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lW=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uW=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cW=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nW=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sW=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iW=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oW=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aW=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rW=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tW=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eW=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QH=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$H=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZH=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WH=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HH=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,KH=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,YH=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XH=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,UH=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GH=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EH=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NH=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qH="gl_FragColor = linearToOutputTexel( gl_FragColor );",DH=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,RH=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,FH=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,VH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wH=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IH=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_H=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CH=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PH=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,AH=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,TH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SH=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yH=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vH=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fH=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bH=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hH=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xH=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lH=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uH=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cH=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nH=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sH=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iH=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oH=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aH=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rH=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tH=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eH=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JK=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QK=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$K=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZK=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WK=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HK=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KK=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YK=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XK=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UK=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GK=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EK=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,NK=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qK=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DK=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OK=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RK=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FK=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MK=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kK=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VK=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LK=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zK=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BK=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wK=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IK=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_K=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CK=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PK=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AK=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,TK=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SK=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fK=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bK=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hK=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xK=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gK=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pK=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mK=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dK=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lK=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uK=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cK=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nK=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sK=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iK=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oK=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aK=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rK=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tK=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eK=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JY=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QY=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$Y=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZY=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WY=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HY=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KY=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YY=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XY=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UY=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GY=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,EY=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NY=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qY=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,DY=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OY=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,f0={alphahash_fragment:hW,alphahash_pars_fragment:xW,alphamap_fragment:gW,alphamap_pars_fragment:pW,alphatest_fragment:mW,alphatest_pars_fragment:dW,aomap_fragment:lW,aomap_pars_fragment:uW,batching_pars_vertex:cW,batching_vertex:nW,begin_vertex:sW,beginnormal_vertex:iW,bsdfs:oW,iridescence_fragment:aW,bumpmap_pars_fragment:rW,clipping_planes_fragment:tW,clipping_planes_pars_fragment:eW,clipping_planes_pars_vertex:JH,clipping_planes_vertex:QH,color_fragment:$H,color_pars_fragment:ZH,color_pars_vertex:WH,color_vertex:HH,common:KH,cube_uv_reflection_fragment:YH,defaultnormal_vertex:XH,displacementmap_pars_vertex:UH,displacementmap_vertex:GH,emissivemap_fragment:EH,emissivemap_pars_fragment:NH,colorspace_fragment:qH,colorspace_pars_fragment:DH,envmap_fragment:OH,envmap_common_pars_fragment:RH,envmap_pars_fragment:FH,envmap_pars_vertex:MH,envmap_physical_pars_fragment:AH,envmap_vertex:kH,fog_vertex:VH,fog_pars_vertex:LH,fog_fragment:zH,fog_pars_fragment:BH,gradientmap_pars_fragment:wH,lightmap_pars_fragment:IH,lights_lambert_fragment:_H,lights_lambert_pars_fragment:CH,lights_pars_begin:PH,lights_toon_fragment:TH,lights_toon_pars_fragment:SH,lights_phong_fragment:jH,lights_phong_pars_fragment:yH,lights_physical_fragment:vH,lights_physical_pars_fragment:fH,lights_fragment_begin:bH,lights_fragment_maps:hH,lights_fragment_end:xH,logdepthbuf_fragment:gH,logdepthbuf_pars_fragment:pH,logdepthbuf_pars_vertex:mH,logdepthbuf_vertex:dH,map_fragment:lH,map_pars_fragment:uH,map_particle_fragment:cH,map_particle_pars_fragment:nH,metalnessmap_fragment:sH,metalnessmap_pars_fragment:iH,morphinstance_vertex:oH,morphcolor_vertex:aH,morphnormal_vertex:rH,morphtarget_pars_vertex:tH,morphtarget_vertex:eH,normal_fragment_begin:JK,normal_fragment_maps:QK,normal_pars_fragment:$K,normal_pars_vertex:ZK,normal_vertex:WK,normalmap_pars_fragment:HK,clearcoat_normal_fragment_begin:KK,clearcoat_normal_fragment_maps:YK,clearcoat_pars_fragment:XK,iridescence_pars_fragment:UK,opaque_fragment:GK,packing:EK,premultiplied_alpha_fragment:NK,project_vertex:qK,dithering_fragment:DK,dithering_pars_fragment:OK,roughnessmap_fragment:RK,roughnessmap_pars_fragment:FK,shadowmap_pars_fragment:MK,shadowmap_pars_vertex:kK,shadowmap_vertex:VK,shadowmask_pars_fragment:LK,skinbase_vertex:zK,skinning_pars_vertex:BK,skinning_vertex:wK,skinnormal_vertex:IK,specularmap_fragment:_K,specularmap_pars_fragment:CK,tonemapping_fragment:PK,tonemapping_pars_fragment:AK,transmission_fragment:TK,transmission_pars_fragment:SK,uv_pars_fragment:jK,uv_pars_vertex:yK,uv_vertex:vK,worldpos_vertex:fK,background_vert:bK,background_frag:hK,backgroundCube_vert:xK,backgroundCube_frag:gK,cube_vert:pK,cube_frag:mK,depth_vert:dK,depth_frag:lK,distanceRGBA_vert:uK,distanceRGBA_frag:cK,equirect_vert:nK,equirect_frag:sK,linedashed_vert:iK,linedashed_frag:oK,meshbasic_vert:aK,meshbasic_frag:rK,meshlambert_vert:tK,meshlambert_frag:eK,meshmatcap_vert:JY,meshmatcap_frag:QY,meshnormal_vert:$Y,meshnormal_frag:ZY,meshphong_vert:WY,meshphong_frag:HY,meshphysical_vert:KY,meshphysical_frag:YY,meshtoon_vert:XY,meshtoon_frag:UY,points_vert:GY,points_frag:EY,shadow_vert:NY,shadow_frag:qY,sprite_vert:DY,sprite_frag:OY},Z0={common:{diffuse:{value:new x0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new v0},alphaMap:{value:null},alphaMapTransform:{value:new v0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new v0}},envmap:{envMap:{value:null},envMapRotation:{value:new v0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new v0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new v0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new v0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new v0},normalScale:{value:new c0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new v0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new v0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new v0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new v0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new x0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new x0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new v0},alphaTest:{value:0},uvTransform:{value:new v0}},sprite:{diffuse:{value:new x0(16777215)},opacity:{value:1},center:{value:new c0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new v0},alphaMap:{value:null},alphaMapTransform:{value:new v0},alphaTest:{value:0}}},sJ={basic:{uniforms:RJ([Z0.common,Z0.specularmap,Z0.envmap,Z0.aomap,Z0.lightmap,Z0.fog]),vertexShader:f0.meshbasic_vert,fragmentShader:f0.meshbasic_frag},lambert:{uniforms:RJ([Z0.common,Z0.specularmap,Z0.envmap,Z0.aomap,Z0.lightmap,Z0.emissivemap,Z0.bumpmap,Z0.normalmap,Z0.displacementmap,Z0.fog,Z0.lights,{emissive:{value:new x0(0)}}]),vertexShader:f0.meshlambert_vert,fragmentShader:f0.meshlambert_frag},phong:{uniforms:RJ([Z0.common,Z0.specularmap,Z0.envmap,Z0.aomap,Z0.lightmap,Z0.emissivemap,Z0.bumpmap,Z0.normalmap,Z0.displacementmap,Z0.fog,Z0.lights,{emissive:{value:new x0(0)},specular:{value:new x0(1118481)},shininess:{value:30}}]),vertexShader:f0.meshphong_vert,fragmentShader:f0.meshphong_frag},standard:{uniforms:RJ([Z0.common,Z0.envmap,Z0.aomap,Z0.lightmap,Z0.emissivemap,Z0.bumpmap,Z0.normalmap,Z0.displacementmap,Z0.roughnessmap,Z0.metalnessmap,Z0.fog,Z0.lights,{emissive:{value:new x0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:f0.meshphysical_vert,fragmentShader:f0.meshphysical_frag},toon:{uniforms:RJ([Z0.common,Z0.aomap,Z0.lightmap,Z0.emissivemap,Z0.bumpmap,Z0.normalmap,Z0.displacementmap,Z0.gradientmap,Z0.fog,Z0.lights,{emissive:{value:new x0(0)}}]),vertexShader:f0.meshtoon_vert,fragmentShader:f0.meshtoon_frag},matcap:{uniforms:RJ([Z0.common,Z0.bumpmap,Z0.normalmap,Z0.displacementmap,Z0.fog,{matcap:{value:null}}]),vertexShader:f0.meshmatcap_vert,fragmentShader:f0.meshmatcap_frag},points:{uniforms:RJ([Z0.points,Z0.fog]),vertexShader:f0.points_vert,fragmentShader:f0.points_frag},dashed:{uniforms:RJ([Z0.common,Z0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:f0.linedashed_vert,fragmentShader:f0.linedashed_frag},depth:{uniforms:RJ([Z0.common,Z0.displacementmap]),vertexShader:f0.depth_vert,fragmentShader:f0.depth_frag},normal:{uniforms:RJ([Z0.common,Z0.bumpmap,Z0.normalmap,Z0.displacementmap,{opacity:{value:1}}]),vertexShader:f0.meshnormal_vert,fragmentShader:f0.meshnormal_frag},sprite:{uniforms:RJ([Z0.sprite,Z0.fog]),vertexShader:f0.sprite_vert,fragmentShader:f0.sprite_frag},background:{uniforms:{uvTransform:{value:new v0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:f0.background_vert,fragmentShader:f0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new v0}},vertexShader:f0.backgroundCube_vert,fragmentShader:f0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:f0.cube_vert,fragmentShader:f0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:f0.equirect_vert,fragmentShader:f0.equirect_frag},distanceRGBA:{uniforms:RJ([Z0.common,Z0.displacementmap,{referencePosition:{value:new f},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:f0.distanceRGBA_vert,fragmentShader:f0.distanceRGBA_frag},shadow:{uniforms:RJ([Z0.lights,Z0.fog,{color:{value:new x0(0)},opacity:{value:1}}]),vertexShader:f0.shadow_vert,fragmentShader:f0.shadow_frag}};sJ.physical={uniforms:RJ([sJ.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new v0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new v0},clearcoatNormalScale:{value:new c0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new v0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new v0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new v0},sheen:{value:0},sheenColor:{value:new x0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new v0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new v0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new v0},transmissionSamplerSize:{value:new c0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new v0},attenuationDistance:{value:0},attenuationColor:{value:new x0(0)},specularColor:{value:new x0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new v0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new v0},anisotropyVector:{value:new c0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new v0}}]),vertexShader:f0.meshphysical_vert,fragmentShader:f0.meshphysical_frag};var y9={r:0,b:0,g:0},A8=new uJ,RY=new KJ;function FY(J,Q,$,Z,W,H,Y){let K=new x0(0),X=H===!0?0:1,U,G,E=null,N=0,O=null;function M(L){let I=L.isScene===!0?L.background:null;if(I&&I.isTexture)I=(L.backgroundBlurriness>0?$:Q).get(I);return I}function k(L){let I=!1,v=M(L);if(v===null)D(K,X);else if(v&&v.isColor)D(v,1),I=!0;let C=J.xr.getEnvironmentBlendMode();if(C==="additive")Z.buffers.color.setClear(0,0,0,1,Y);else if(C==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,Y);if(J.autoClear||I)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function q(L,I){let v=M(I);if(v&&(v.isCubeTexture||v.mapping===V6)){if(G===void 0)G=new AJ(new Z6(1,1,1),new hJ({name:"BackgroundCubeMaterial",uniforms:I8(sJ.backgroundCube.uniforms),vertexShader:sJ.backgroundCube.vertexShader,fragmentShader:sJ.backgroundCube.fragmentShader,side:PJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(C,T,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(G);if(A8.copy(I.backgroundRotation),A8.x*=-1,A8.y*=-1,A8.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1)A8.y*=-1,A8.z*=-1;if(G.material.uniforms.envMap.value=v,G.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,G.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(RY.makeRotationFromEuler(A8)),G.material.toneMapped=m0.getTransfer(v.colorSpace)!==a0,E!==v||N!==v.version||O!==J.toneMapping)G.material.needsUpdate=!0,E=v,N=v.version,O=J.toneMapping;G.layers.enableAll(),L.unshift(G,G.geometry,G.material,0,0,null)}else if(v&&v.isTexture){if(U===void 0)U=new AJ(new _8(2,2),new hJ({name:"BackgroundMaterial",uniforms:I8(sJ.background.uniforms),vertexShader:sJ.background.vertexShader,fragmentShader:sJ.background.fragmentShader,side:o8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(U);if(U.material.uniforms.t2D.value=v,U.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,U.material.toneMapped=m0.getTransfer(v.colorSpace)!==a0,v.matrixAutoUpdate===!0)v.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(v.matrix),E!==v||N!==v.version||O!==J.toneMapping)U.material.needsUpdate=!0,E=v,N=v.version,O=J.toneMapping;U.layers.enableAll(),L.unshift(U,U.geometry,U.material,0,0,null)}}function D(L,I){L.getRGB(y9,$Q(J)),Z.buffers.color.setClear(y9.r,y9.g,y9.b,I,Y)}function P(){if(G!==void 0)G.geometry.dispose(),G.material.dispose(),G=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return K},setClearColor:function(L,I=1){K.set(L),X=I,D(K,X)},getClearAlpha:function(){return X},setClearAlpha:function(L){X=L,D(K,X)},render:k,addToRenderList:q,dispose:P}}function MY(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=N(null),H=W,Y=!1;function K(V,A,d,c,p){let o=!1,l=E(c,d,A);if(H!==l)H=l,U(H.object);if(o=O(V,c,d,p),o)M(V,c,d,p);if(p!==null)Q.update(p,J.ELEMENT_ARRAY_BUFFER);if(o||Y){if(Y=!1,I(V,A,d,c),p!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(p).buffer)}}function X(){return J.createVertexArray()}function U(V){return J.bindVertexArray(V)}function G(V){return J.deleteVertexArray(V)}function E(V,A,d){let c=d.wireframe===!0,p=Z[V.id];if(p===void 0)p={},Z[V.id]=p;let o=p[A.id];if(o===void 0)o={},p[A.id]=o;let l=o[c];if(l===void 0)l=N(X()),o[c]=l;return l}function N(V){let A=[],d=[],c=[];for(let p=0;p<$;p++)A[p]=0,d[p]=0,c[p]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:d,attributeDivisors:c,object:V,attributes:{},index:null}}function O(V,A,d,c){let p=H.attributes,o=A.attributes,l=0,r=d.getAttributes();for(let x in r)if(r[x].location>=0){let G0=p[x],P0=o[x];if(P0===void 0){if(x==="instanceMatrix"&&V.instanceMatrix)P0=V.instanceMatrix;if(x==="instanceColor"&&V.instanceColor)P0=V.instanceColor}if(G0===void 0)return!0;if(G0.attribute!==P0)return!0;if(P0&&G0.data!==P0.data)return!0;l++}if(H.attributesNum!==l)return!0;if(H.index!==c)return!0;return!1}function M(V,A,d,c){let p={},o=A.attributes,l=0,r=d.getAttributes();for(let x in r)if(r[x].location>=0){let G0=o[x];if(G0===void 0){if(x==="instanceMatrix"&&V.instanceMatrix)G0=V.instanceMatrix;if(x==="instanceColor"&&V.instanceColor)G0=V.instanceColor}let P0={};if(P0.attribute=G0,G0&&G0.data)P0.data=G0.data;p[x]=P0,l++}H.attributes=p,H.attributesNum=l,H.index=c}function k(){let V=H.newAttributes;for(let A=0,d=V.length;A<d;A++)V[A]=0}function q(V){D(V,0)}function D(V,A){let{newAttributes:d,enabledAttributes:c,attributeDivisors:p}=H;if(d[V]=1,c[V]===0)J.enableVertexAttribArray(V),c[V]=1;if(p[V]!==A)J.vertexAttribDivisor(V,A),p[V]=A}function P(){let{newAttributes:V,enabledAttributes:A}=H;for(let d=0,c=A.length;d<c;d++)if(A[d]!==V[d])J.disableVertexAttribArray(d),A[d]=0}function L(V,A,d,c,p,o,l){if(l===!0)J.vertexAttribIPointer(V,A,d,p,o);else J.vertexAttribPointer(V,A,d,c,p,o)}function I(V,A,d,c){k();let p=c.attributes,o=d.getAttributes(),l=A.defaultAttributeValues;for(let r in o){let x=o[r];if(x.location>=0){let H0=p[r];if(H0===void 0){if(r==="instanceMatrix"&&V.instanceMatrix)H0=V.instanceMatrix;if(r==="instanceColor"&&V.instanceColor)H0=V.instanceColor}if(H0!==void 0){let{normalized:G0,itemSize:P0}=H0,g0=Q.get(H0);if(g0===void 0)continue;let{buffer:WJ,type:d0,bytesPerElement:n}=g0,W0=d0===J.INT||d0===J.UNSIGNED_INT||H0.gpuType===D7;if(H0.isInterleavedBufferAttribute){let Q0=H0.data,M0=Q0.stride,T0=H0.offset;if(Q0.isInstancedInterleavedBuffer){for(let S0=0;S0<x.locationSize;S0++)D(x.location+S0,Q0.meshPerAttribute);if(V.isInstancedMesh!==!0&&c._maxInstanceCount===void 0)c._maxInstanceCount=Q0.meshPerAttribute*Q0.count}else for(let S0=0;S0<x.locationSize;S0++)q(x.location+S0);J.bindBuffer(J.ARRAY_BUFFER,WJ);for(let S0=0;S0<x.locationSize;S0++)L(x.location+S0,P0/x.locationSize,d0,G0,M0*n,(T0+P0/x.locationSize*S0)*n,W0)}else{if(H0.isInstancedBufferAttribute){for(let Q0=0;Q0<x.locationSize;Q0++)D(x.location+Q0,H0.meshPerAttribute);if(V.isInstancedMesh!==!0&&c._maxInstanceCount===void 0)c._maxInstanceCount=H0.meshPerAttribute*H0.count}else for(let Q0=0;Q0<x.locationSize;Q0++)q(x.location+Q0);J.bindBuffer(J.ARRAY_BUFFER,WJ);for(let Q0=0;Q0<x.locationSize;Q0++)L(x.location+Q0,P0/x.locationSize,d0,G0,P0*n,P0/x.locationSize*Q0*n,W0)}}else if(l!==void 0){let G0=l[r];if(G0!==void 0)switch(G0.length){case 2:J.vertexAttrib2fv(x.location,G0);break;case 3:J.vertexAttrib3fv(x.location,G0);break;case 4:J.vertexAttrib4fv(x.location,G0);break;default:J.vertexAttrib1fv(x.location,G0)}}}}P()}function v(){m();for(let V in Z){let A=Z[V];for(let d in A){let c=A[d];for(let p in c)G(c[p].object),delete c[p];delete A[d]}delete Z[V]}}function C(V){if(Z[V.id]===void 0)return;let A=Z[V.id];for(let d in A){let c=A[d];for(let p in c)G(c[p].object),delete c[p];delete A[d]}delete Z[V.id]}function T(V){for(let A in Z){let d=Z[A];if(d[V.id]===void 0)continue;let c=d[V.id];for(let p in c)G(c[p].object),delete c[p];delete d[V.id]}}function m(){if(z(),Y=!0,H===W)return;H=W,U(H.object)}function z(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:K,reset:m,resetDefaultState:z,dispose:v,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:k,enableAttribute:q,disableUnusedAttributes:P}}function kY(J,Q,$){let Z;function W(U){Z=U}function H(U,G){J.drawArrays(Z,U,G),$.update(G,Z,1)}function Y(U,G,E){if(E===0)return;J.drawArraysInstanced(Z,U,G,E),$.update(G,Z,E)}function K(U,G,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,U,0,G,0,E);let O=0;for(let M=0;M<E;M++)O+=G[M];$.update(O,Z,1)}function X(U,G,E,N){if(E===0)return;let O=Q.get("WEBGL_multi_draw");if(O===null)for(let M=0;M<U.length;M++)Y(U[M],G[M],N[M]);else{O.multiDrawArraysInstancedWEBGL(Z,U,0,G,0,N,0,E);let M=0;for(let k=0;k<E;k++)M+=G[k]*N[k];$.update(M,Z,1)}}this.setMode=W,this.render=H,this.renderInstances=Y,this.renderMultiDraw=K,this.renderMultiDrawInstances=X}function VY(J,Q,$,Z){let W;function H(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let T=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function Y(T){if(T!==nJ&&Z.convert(T)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function K(T){let m=T===B6&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(T!==G8&&Z.convert(T)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==E8&&!m)return!1;return!0}function X(T){if(T==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";T="mediump"}if(T==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=X(U);if(G!==U)console.warn("THREE.WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let E=$.logarithmicDepthBuffer===!0,N=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),O=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),M=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),k=J.getParameter(J.MAX_TEXTURE_SIZE),q=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),D=J.getParameter(J.MAX_VERTEX_ATTRIBS),P=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),L=J.getParameter(J.MAX_VARYING_VECTORS),I=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),v=M>0,C=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:H,getMaxPrecision:X,textureFormatReadable:Y,textureTypeReadable:K,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:N,maxTextures:O,maxVertexTextures:M,maxTextureSize:k,maxCubemapSize:q,maxAttributes:D,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:I,vertexTextures:v,maxSamples:C}}function LY(J){let Q=this,$=null,Z=0,W=!1,H=!1,Y=new eJ,K=new v0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(E,N){let O=E.length!==0||N||Z!==0||W;return W=N,Z=E.length,O},this.beginShadows=function(){H=!0,G(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(E,N){$=G(E,N,0)},this.setState=function(E,N,O){let{clippingPlanes:M,clipIntersection:k,clipShadows:q}=E,D=J.get(E);if(!W||M===null||M.length===0||H&&!q)if(H)G(null);else U();else{let P=H?0:Z,L=P*4,I=D.clippingState||null;X.value=I,I=G(M,N,L,O);for(let v=0;v!==L;++v)I[v]=$[v];D.clippingState=I,this.numIntersection=k?this.numPlanes:0,this.numPlanes+=P}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function G(E,N,O,M){let k=E!==null?E.length:0,q=null;if(k!==0){if(q=X.value,M!==!0||q===null){let D=O+k*4,P=N.matrixWorldInverse;if(K.getNormalMatrix(P),q===null||q.length<D)q=new Float32Array(D);for(let L=0,I=O;L!==k;++L,I+=4)Y.copy(E[L]).applyMatrix4(P,K),Y.normal.toArray(q,I),q[I+3]=Y.constant}X.value=q,X.needsUpdate=!0}return Q.numPlanes=k,Q.numIntersection=0,q}}function zY(J){let Q=new WeakMap;function $(Y,K){if(K===E9)Y.mapping=r8;else if(K===N9)Y.mapping=V8;return Y}function Z(Y){if(Y&&Y.isTexture){let K=Y.mapping;if(K===E9||K===N9)if(Q.has(Y)){let X=Q.get(Y).texture;return $(X,Y.mapping)}else{let X=Y.image;if(X&&X.height>0){let U=new WQ(X.height);return U.fromEquirectangularTexture(J,Y),Q.set(Y,U),Y.addEventListener("dispose",W),$(U.texture,Y.mapping)}else return null}}return Y}function W(Y){let K=Y.target;K.removeEventListener("dispose",W);let X=Q.get(K);if(X!==void 0)Q.delete(K),X.dispose()}function H(){Q=new WeakMap}return{get:Z,dispose:H}}var Y6=4,NZ=[0.125,0.215,0.35,0.446,0.526,0.582],j8=20,LQ=new T6,qZ=new x0,zQ=null,BQ=0,wQ=0,IQ=!1,S8=(1+Math.sqrt(5))/2,K6=1/S8,DZ=[new f(-S8,K6,0),new f(S8,K6,0),new f(-K6,0,S8),new f(K6,0,S8),new f(0,S8,-K6),new f(0,S8,K6),new f(-1,1,-1),new f(1,1,-1),new f(-1,1,1),new f(1,1,1)],BY=new f;class CQ{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,Q=0,$=0.1,Z=100,W={}){let{size:H=256,position:Y=BY}=W;zQ=this._renderer.getRenderTarget(),BQ=this._renderer.getActiveCubeFace(),wQ=this._renderer.getActiveMipmapLevel(),IQ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(H);let K=this._allocateTargets();if(K.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,K,Y),Q>0)this._blur(K,0,0,Q);return this._applyPMREM(K),this._cleanup(K),K}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=FZ(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=RZ(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(zQ,BQ,wQ),this._renderer.xr.enabled=IQ,J.scissorTest=!1,v9(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===r8||J.mapping===V8)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);zQ=this._renderer.getRenderTarget(),BQ=this._renderer.getActiveCubeFace(),wQ=this._renderer.getActiveMipmapLevel(),IQ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:L8,minFilter:L8,generateMipmaps:!1,type:B6,format:nJ,colorSpace:I6,depthBuffer:!1},Z=OZ(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=OZ(J,Q,$);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wY(W)),this._blurMaterial=IY(W,J,Q)}return Z}_compileMaterial(J){let Q=new AJ(this._lodPlanes[0],J);this._renderer.compile(Q,LQ)}_sceneToCubeUV(J,Q,$,Z,W){let K=new _J(90,1,Q,$),X=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,E=G.autoClear,N=G.toneMapping;if(G.getClearColor(qZ),G.toneMapping=Q8,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(Z),G.clearDepth(),G.setRenderTarget(null);let M=new z9({name:"PMREM.Background",side:PJ,depthWrite:!1,depthTest:!1}),k=new AJ(new Z6,M),q=!1,D=J.background;if(D){if(D.isColor)M.color.copy(D),J.background=null,q=!0}else M.color.copy(qZ),q=!0;for(let P=0;P<6;P++){let L=P%3;if(L===0)K.up.set(0,X[P],0),K.position.set(W.x,W.y,W.z),K.lookAt(W.x+U[P],W.y,W.z);else if(L===1)K.up.set(0,0,X[P]),K.position.set(W.x,W.y,W.z),K.lookAt(W.x,W.y+U[P],W.z);else K.up.set(0,X[P],0),K.position.set(W.x,W.y,W.z),K.lookAt(W.x,W.y,W.z+U[P]);let I=this._cubeSize;if(v9(Z,L*I,P>2?I:0,I,I),G.setRenderTarget(Z),q)G.render(k,K);G.render(J,K)}k.geometry.dispose(),k.material.dispose(),G.toneMapping=N,G.autoClear=E,J.background=D}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===r8||J.mapping===V8;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=FZ();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=RZ();let W=Z?this._cubemapMaterial:this._equirectMaterial,H=new AJ(this._lodPlanes[0],W),Y=W.uniforms;Y.envMap.value=J;let K=this._cubeSize;v9(Q,0,0,3*K,2*K),$.setRenderTarget(Q),$.render(H,LQ)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodPlanes.length;for(let W=1;W<Z;W++){let H=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),Y=DZ[(Z-W-1)%DZ.length];this._blur(J,W-1,W,H,Y)}Q.autoClear=$}_blur(J,Q,$,Z,W){let H=this._pingPongRenderTarget;this._halfBlur(J,H,Q,$,Z,"latitudinal",W),this._halfBlur(H,J,$,$,Z,"longitudinal",W)}_halfBlur(J,Q,$,Z,W,H,Y){let K=this._renderer,X=this._blurMaterial;if(H!=="latitudinal"&&H!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let U=3,G=new AJ(this._lodPlanes[Z],X),E=X.uniforms,N=this._sizeLods[$]-1,O=isFinite(W)?Math.PI/(2*N):2*Math.PI/(2*j8-1),M=W/O,k=isFinite(W)?1+Math.floor(U*M):j8;if(k>j8)console.warn(`sigmaRadians, ${W}, is too large and will clip, as it requested ${k} samples when the maximum is set to ${j8}`);let q=[],D=0;for(let C=0;C<j8;++C){let T=C/M,m=Math.exp(-T*T/2);if(q.push(m),C===0)D+=m;else if(C<k)D+=2*m}for(let C=0;C<q.length;C++)q[C]=q[C]/D;if(E.envMap.value=J.texture,E.samples.value=k,E.weights.value=q,E.latitudinal.value=H==="latitudinal",Y)E.poleAxis.value=Y;let{_lodMax:P}=this;E.dTheta.value=O,E.mipInt.value=P-$;let L=this._sizeLods[Z],I=3*L*(Z>P-Y6?Z-P+Y6:0),v=4*(this._cubeSize-L);v9(Q,I,v,3*L,2*L),K.setRenderTarget(Q),K.render(G,LQ)}}function wY(J){let Q=[],$=[],Z=[],W=J,H=J-Y6+1+NZ.length;for(let Y=0;Y<H;Y++){let K=Math.pow(2,W);$.push(K);let X=1/K;if(Y>J-Y6)X=NZ[Y-J+Y6-1];else if(Y===0)X=0;Z.push(X);let U=1/(K-2),G=-U,E=1+U,N=[G,G,E,G,E,E,G,G,E,E,G,E],O=6,M=6,k=3,q=2,D=1,P=new Float32Array(k*M*O),L=new Float32Array(q*M*O),I=new Float32Array(D*M*O);for(let C=0;C<O;C++){let T=C%3*2/3-1,m=C>2?0:-1,z=[T,m,0,T+0.6666666666666666,m,0,T+0.6666666666666666,m+1,0,T,m,0,T+0.6666666666666666,m+1,0,T,m+1,0];P.set(z,k*M*C),L.set(N,q*M*C);let V=[C,C,C,C,C,C];I.set(V,D*M*C)}let v=new bJ;if(v.setAttribute("position",new vJ(P,k)),v.setAttribute("uv",new vJ(L,q)),v.setAttribute("faceIndex",new vJ(I,D)),Q.push(v),W>Y6)W--}return{lodPlanes:Q,sizeLods:$,sigmas:Z}}function OZ(J,Q,$){let Z=new $8(J,Q,$);return Z.texture.mapping=V6,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function v9(J,Q,$,Z,W){J.viewport.set(Q,$,Z,W),J.scissor.set(Q,$,Z,W)}function IY(J,Q,$){let Z=new Float32Array(j8),W=new f(0,1,0);return new hJ({name:"SphericalGaussianBlur",defines:{n:j8,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:AQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:U8,depthTest:!1,depthWrite:!1})}function RZ(){return new hJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:AQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:U8,depthTest:!1,depthWrite:!1})}function FZ(){return new hJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:AQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:U8,depthTest:!1,depthWrite:!1})}function AQ(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _Y(J){let Q=new WeakMap,$=null;function Z(K){if(K&&K.isTexture){let X=K.mapping,U=X===E9||X===N9,G=X===r8||X===V8;if(U||G){let E=Q.get(K),N=E!==void 0?E.texture.pmremVersion:0;if(K.isRenderTargetTexture&&K.pmremVersion!==N){if($===null)$=new CQ(J);return E=U?$.fromEquirectangular(K,E):$.fromCubemap(K,E),E.texture.pmremVersion=K.pmremVersion,Q.set(K,E),E.texture}else if(E!==void 0)return E.texture;else{let O=K.image;if(U&&O&&O.height>0||G&&O&&W(O)){if($===null)$=new CQ(J);return E=U?$.fromEquirectangular(K):$.fromCubemap(K),E.texture.pmremVersion=K.pmremVersion,Q.set(K,E),K.addEventListener("dispose",H),E.texture}else return null}}}return K}function W(K){let X=0,U=6;for(let G=0;G<U;G++)if(K[G]!==void 0)X++;return X===U}function H(K){let X=K.target;X.removeEventListener("dispose",H);let U=Q.get(X);if(U!==void 0)Q.delete(X),U.dispose()}function Y(){if(Q=new WeakMap,$!==null)$.dispose(),$=null}return{get:Z,dispose:Y}}function CY(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let W;switch(Z){case"WEBGL_depth_texture":W=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=J.getExtension(Z)}return Q[Z]=W,W}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let W=$(Z);if(W===null)i8("THREE.WebGLRenderer: "+Z+" extension not supported.");return W}}}function PY(J,Q,$,Z){let W={},H=new WeakMap;function Y(E){let N=E.target;if(N.index!==null)Q.remove(N.index);for(let M in N.attributes)Q.remove(N.attributes[M]);N.removeEventListener("dispose",Y),delete W[N.id];let O=H.get(N);if(O)Q.remove(O),H.delete(N);if(Z.releaseStatesOfGeometry(N),N.isInstancedBufferGeometry===!0)delete N._maxInstanceCount;$.memory.geometries--}function K(E,N){if(W[N.id]===!0)return N;return N.addEventListener("dispose",Y),W[N.id]=!0,$.memory.geometries++,N}function X(E){let N=E.attributes;for(let O in N)Q.update(N[O],J.ARRAY_BUFFER)}function U(E){let N=[],O=E.index,M=E.attributes.position,k=0;if(O!==null){let P=O.array;k=O.version;for(let L=0,I=P.length;L<I;L+=3){let v=P[L+0],C=P[L+1],T=P[L+2];N.push(v,C,C,T,T,v)}}else if(M!==void 0){let P=M.array;k=M.version;for(let L=0,I=P.length/3-1;L<I;L+=3){let v=L+0,C=L+1,T=L+2;N.push(v,C,C,T,T,v)}}else return;let q=new((t7(N))?w9:B9)(N,1);q.version=k;let D=H.get(E);if(D)Q.remove(D);H.set(E,q)}function G(E){let N=H.get(E);if(N){let O=E.index;if(O!==null){if(N.version<O.version)U(E)}}else U(E);return H.get(E)}return{get:K,update:X,getWireframeAttribute:G}}function AY(J,Q,$){let Z;function W(N){Z=N}let H,Y;function K(N){H=N.type,Y=N.bytesPerElement}function X(N,O){J.drawElements(Z,O,H,N*Y),$.update(O,Z,1)}function U(N,O,M){if(M===0)return;J.drawElementsInstanced(Z,O,H,N*Y,M),$.update(O,Z,M)}function G(N,O,M){if(M===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,O,0,H,N,0,M);let q=0;for(let D=0;D<M;D++)q+=O[D];$.update(q,Z,1)}function E(N,O,M,k){if(M===0)return;let q=Q.get("WEBGL_multi_draw");if(q===null)for(let D=0;D<N.length;D++)U(N[D]/Y,O[D],k[D]);else{q.multiDrawElementsInstancedWEBGL(Z,O,0,H,N,0,k,0,M);let D=0;for(let P=0;P<M;P++)D+=O[P]*k[P];$.update(D,Z,1)}}this.setMode=W,this.setIndex=K,this.render=X,this.renderInstances=U,this.renderMultiDraw=G,this.renderMultiDrawInstances=E}function TY(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(H,Y,K){switch($.calls++,Y){case J.TRIANGLES:$.triangles+=K*(H/3);break;case J.LINES:$.lines+=K*(H/2);break;case J.LINE_STRIP:$.lines+=K*(H-1);break;case J.LINE_LOOP:$.lines+=K*H;break;case J.POINTS:$.points+=K*H;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",Y);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:Z}}function SY(J,Q,$){let Z=new WeakMap,W=new ZJ;function H(Y,K,X){let U=Y.morphTargetInfluences,G=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,E=G!==void 0?G.length:0,N=Z.get(K);if(N===void 0||N.count!==E){let z=function(){T.dispose(),Z.delete(K),K.removeEventListener("dispose",z)};if(N!==void 0)N.texture.dispose();let O=K.morphAttributes.position!==void 0,M=K.morphAttributes.normal!==void 0,k=K.morphAttributes.color!==void 0,q=K.morphAttributes.position||[],D=K.morphAttributes.normal||[],P=K.morphAttributes.color||[],L=0;if(O===!0)L=1;if(M===!0)L=2;if(k===!0)L=3;let I=K.attributes.position.count*L,v=1;if(I>Q.maxTextureSize)v=Math.ceil(I/Q.maxTextureSize),I=Q.maxTextureSize;let C=new Float32Array(I*v*4*E),T=new k9(C,I,v,E);T.type=E8,T.needsUpdate=!0;let m=L*4;for(let V=0;V<E;V++){let A=q[V],d=D[V],c=P[V],p=I*v*4*V;for(let o=0;o<A.count;o++){let l=o*m;if(O===!0)W.fromBufferAttribute(A,o),C[p+l+0]=W.x,C[p+l+1]=W.y,C[p+l+2]=W.z,C[p+l+3]=0;if(M===!0)W.fromBufferAttribute(d,o),C[p+l+4]=W.x,C[p+l+5]=W.y,C[p+l+6]=W.z,C[p+l+7]=0;if(k===!0)W.fromBufferAttribute(c,o),C[p+l+8]=W.x,C[p+l+9]=W.y,C[p+l+10]=W.z,C[p+l+11]=c.itemSize===4?W.w:1}}N={count:E,texture:T,size:new c0(I,v)},Z.set(K,N),K.addEventListener("dispose",z)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",Y.morphTexture,$);else{let O=0;for(let k=0;k<U.length;k++)O+=U[k];let M=K.morphTargetsRelative?1:1-O;X.getUniforms().setValue(J,"morphTargetBaseInfluence",M),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",N.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",N.size)}return{update:H}}function jY(J,Q,$,Z){let W=new WeakMap;function H(X){let U=Z.render.frame,G=X.geometry,E=Q.get(X,G);if(W.get(E)!==U)Q.update(E),W.set(E,U);if(X.isInstancedMesh){if(X.hasEventListener("dispose",K)===!1)X.addEventListener("dispose",K);if(W.get(X)!==U){if($.update(X.instanceMatrix,J.ARRAY_BUFFER),X.instanceColor!==null)$.update(X.instanceColor,J.ARRAY_BUFFER);W.set(X,U)}}if(X.isSkinnedMesh){let N=X.skeleton;if(W.get(N)!==U)N.update(),W.set(N,U)}return E}function Y(){W=new WeakMap}function K(X){let U=X.target;if(U.removeEventListener("dispose",K),$.remove(U.instanceMatrix),U.instanceColor!==null)$.remove(U.instanceColor)}return{update:H,dispose:Y}}var bZ=new MJ,MZ=new A9(1,1),hZ=new k9,xZ=new QQ,gZ=new _9,kZ=[],VZ=[],LZ=new Float32Array(16),zZ=new Float32Array(9),BZ=new Float32Array(4);function X6(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let W=Q*$,H=kZ[W];if(H===void 0)H=new Float32Array(W),kZ[W]=H;if(Q!==0){Z.toArray(H,0);for(let Y=1,K=0;Y!==Q;++Y)K+=$,J[Y].toArray(H,K)}return H}function XJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function UJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function b9(J,Q){let $=VZ[Q];if($===void 0)$=new Int32Array(Q),VZ[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function yY(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function vY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(XJ($,Q))return;J.uniform2fv(this.addr,Q),UJ($,Q)}}function fY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(XJ($,Q))return;J.uniform3fv(this.addr,Q),UJ($,Q)}}function bY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(XJ($,Q))return;J.uniform4fv(this.addr,Q),UJ($,Q)}}function hY(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(XJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),UJ($,Q)}else{if(XJ($,Z))return;BZ.set(Z),J.uniformMatrix2fv(this.addr,!1,BZ),UJ($,Z)}}function xY(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(XJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),UJ($,Q)}else{if(XJ($,Z))return;zZ.set(Z),J.uniformMatrix3fv(this.addr,!1,zZ),UJ($,Z)}}function gY(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(XJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),UJ($,Q)}else{if(XJ($,Z))return;LZ.set(Z),J.uniformMatrix4fv(this.addr,!1,LZ),UJ($,Z)}}function pY(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function mY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(XJ($,Q))return;J.uniform2iv(this.addr,Q),UJ($,Q)}}function dY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(XJ($,Q))return;J.uniform3iv(this.addr,Q),UJ($,Q)}}function lY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(XJ($,Q))return;J.uniform4iv(this.addr,Q),UJ($,Q)}}function uY(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function cY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(XJ($,Q))return;J.uniform2uiv(this.addr,Q),UJ($,Q)}}function nY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(XJ($,Q))return;J.uniform3uiv(this.addr,Q),UJ($,Q)}}function sY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(XJ($,Q))return;J.uniform4uiv(this.addr,Q),UJ($,Q)}}function iY(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let H;if(this.type===J.SAMPLER_2D_SHADOW)MZ.compareFunction=o7,H=MZ;else H=bZ;$.setTexture2D(Q||H,W)}function oY(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture3D(Q||xZ,W)}function aY(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTextureCube(Q||gZ,W)}function rY(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture2DArray(Q||hZ,W)}function tY(J){switch(J){case 5126:return yY;case 35664:return vY;case 35665:return fY;case 35666:return bY;case 35674:return hY;case 35675:return xY;case 35676:return gY;case 5124:case 35670:return pY;case 35667:case 35671:return mY;case 35668:case 35672:return dY;case 35669:case 35673:return lY;case 5125:return uY;case 36294:return cY;case 36295:return nY;case 36296:return sY;case 35678:case 36198:case 36298:case 36306:case 35682:return iY;case 35679:case 36299:case 36307:return oY;case 35680:case 36300:case 36308:case 36293:return aY;case 36289:case 36303:case 36311:case 36292:return rY}}function eY(J,Q){J.uniform1fv(this.addr,Q)}function JX(J,Q){let $=X6(Q,this.size,2);J.uniform2fv(this.addr,$)}function QX(J,Q){let $=X6(Q,this.size,3);J.uniform3fv(this.addr,$)}function $X(J,Q){let $=X6(Q,this.size,4);J.uniform4fv(this.addr,$)}function ZX(J,Q){let $=X6(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function WX(J,Q){let $=X6(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function HX(J,Q){let $=X6(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function KX(J,Q){J.uniform1iv(this.addr,Q)}function YX(J,Q){J.uniform2iv(this.addr,Q)}function XX(J,Q){J.uniform3iv(this.addr,Q)}function UX(J,Q){J.uniform4iv(this.addr,Q)}function GX(J,Q){J.uniform1uiv(this.addr,Q)}function EX(J,Q){J.uniform2uiv(this.addr,Q)}function NX(J,Q){J.uniform3uiv(this.addr,Q)}function qX(J,Q){J.uniform4uiv(this.addr,Q)}function DX(J,Q,$){let Z=this.cache,W=Q.length,H=b9($,W);if(!XJ(Z,H))J.uniform1iv(this.addr,H),UJ(Z,H);for(let Y=0;Y!==W;++Y)$.setTexture2D(Q[Y]||bZ,H[Y])}function OX(J,Q,$){let Z=this.cache,W=Q.length,H=b9($,W);if(!XJ(Z,H))J.uniform1iv(this.addr,H),UJ(Z,H);for(let Y=0;Y!==W;++Y)$.setTexture3D(Q[Y]||xZ,H[Y])}function RX(J,Q,$){let Z=this.cache,W=Q.length,H=b9($,W);if(!XJ(Z,H))J.uniform1iv(this.addr,H),UJ(Z,H);for(let Y=0;Y!==W;++Y)$.setTextureCube(Q[Y]||gZ,H[Y])}function FX(J,Q,$){let Z=this.cache,W=Q.length,H=b9($,W);if(!XJ(Z,H))J.uniform1iv(this.addr,H),UJ(Z,H);for(let Y=0;Y!==W;++Y)$.setTexture2DArray(Q[Y]||hZ,H[Y])}function MX(J){switch(J){case 5126:return eY;case 35664:return JX;case 35665:return QX;case 35666:return $X;case 35674:return ZX;case 35675:return WX;case 35676:return HX;case 5124:case 35670:return KX;case 35667:case 35671:return YX;case 35668:case 35672:return XX;case 35669:case 35673:return UX;case 5125:return GX;case 36294:return EX;case 36295:return NX;case 36296:return qX;case 35678:case 36198:case 36298:case 36306:case 35682:return DX;case 35679:case 36299:case 36307:return OX;case 35680:case 36300:case 36308:case 36293:return RX;case 36289:case 36303:case 36311:case 36292:return FX}}class pZ{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=tY(Q.type)}}class mZ{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=MX(Q.type)}}class dZ{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let W=0,H=Z.length;W!==H;++W){let Y=Z[W];Y.setValue(J,Q[Y.id],$)}}}var _Q=/(\w+)(\])?(\[|\.)?/g;function wZ(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function kX(J,Q,$){let Z=J.name,W=Z.length;_Q.lastIndex=0;while(!0){let H=_Q.exec(Z),Y=_Q.lastIndex,K=H[1],X=H[2]==="]",U=H[3];if(X)K=K|0;if(U===void 0||U==="["&&Y+2===W){wZ($,U===void 0?new pZ(K,J,Q):new mZ(K,J,Q));break}else{let E=$.map[K];if(E===void 0)E=new dZ(K),wZ($,E);$=E}}}class j6{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let Z=0;Z<$;++Z){let W=J.getActiveUniform(Q,Z),H=J.getUniformLocation(Q,W.name);kX(W,H,this)}}setValue(J,Q,$,Z){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let W=0,H=Q.length;W!==H;++W){let Y=Q[W],K=$[Y.id];if(K.needsUpdate!==!1)Y.setValue(J,K.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,W=J.length;Z!==W;++Z){let H=J[Z];if(H.id in Q)$.push(H)}return $}}function IZ(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var VX=37297,LX=0;function zX(J,Q){let $=J.split(`
`),Z=[],W=Math.max(Q-6,0),H=Math.min(Q+6,$.length);for(let Y=W;Y<H;Y++){let K=Y+1;Z.push(`${K===Q?">":" "} ${K}: ${$[Y]}`)}return Z.join(`
`)}var _Z=new v0;function BX(J){m0._getMatrix(_Z,m0.workingColorSpace,J);let Q=`mat3( ${_Z.elements.map(($)=>$.toFixed(4))} )`;switch(m0.getTransfer(J)){case i7:return[Q,"LinearTransferOETF"];case a0:return[Q,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function CZ(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),H=(J.getShaderInfoLog(Q)||"").trim();if(Z&&H==="")return"";let Y=/ERROR: 0:(\d+)/.exec(H);if(Y){let K=parseInt(Y[1]);return $.toUpperCase()+`

`+H+`

`+zX(J.getShaderSource(Q),K)}else return H}function wX(J,Q){let $=BX(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}function IX(J,Q){let $;switch(Q){case T$:$="Linear";break;case S$:$="Reinhard";break;case j$:$="Cineon";break;case y$:$="ACESFilmic";break;case f$:$="AgX";break;case b$:$="Neutral";break;case v$:$="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",Q),$="Linear"}return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var f9=new f;function _X(){m0.getLuminanceCoefficients(f9);let J=f9.x.toFixed(4),Q=f9.y.toFixed(4),$=f9.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function CX(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(S6).join(`
`)}function PX(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function AX(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let H=J.getActiveAttrib(Q,W),Y=H.name,K=1;if(H.type===J.FLOAT_MAT2)K=2;if(H.type===J.FLOAT_MAT3)K=3;if(H.type===J.FLOAT_MAT4)K=4;$[Y]={type:H.type,location:J.getAttribLocation(Q,Y),locationSize:K}}return $}function S6(J){return J!==""}function PZ(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function AZ(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var TX=/^[ \t]*#include +<([\w\d./]+)>/gm;function PQ(J){return J.replace(TX,jX)}var SX=new Map;function jX(J,Q){let $=f0[Q];if($===void 0){let Z=SX.get(Q);if(Z!==void 0)$=f0[Z],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("Can not resolve #include <"+Q+">")}return PQ($)}var yX=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function TZ(J){return J.replace(yX,vX)}function vX(J,Q,$,Z){let W="";for(let H=parseInt(Q);H<parseInt($);H++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return W}function SZ(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}function fX(J){let Q="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===G7)Q="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===K$)Q="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===cJ)Q="SHADOWMAP_TYPE_VSM";return Q}function bX(J){let Q="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case r8:case V8:Q="ENVMAP_TYPE_CUBE";break;case V6:Q="ENVMAP_TYPE_CUBE_UV";break}return Q}function hX(J){let Q="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case V8:Q="ENVMAP_MODE_REFRACTION";break}return Q}function xX(J){let Q="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case C$:Q="ENVMAP_BLENDING_MULTIPLY";break;case P$:Q="ENVMAP_BLENDING_MIX";break;case A$:Q="ENVMAP_BLENDING_ADD";break}return Q}function gX(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function pX(J,Q,$,Z){let W=J.getContext(),H=$.defines,Y=$.vertexShader,K=$.fragmentShader,X=fX($),U=bX($),G=hX($),E=xX($),N=gX($),O=CX($),M=PX(H),k=W.createProgram(),q,D,P=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(q=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M].filter(S6).join(`
`),q.length>0)q+=`
`;if(D=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M].filter(S6).join(`
`),D.length>0)D+=`
`}else q=[SZ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(S6).join(`
`),D=[SZ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+E:"",N?"#define CUBEUV_TEXEL_WIDTH "+N.texelWidth:"",N?"#define CUBEUV_TEXEL_HEIGHT "+N.texelHeight:"",N?"#define CUBEUV_MAX_MIP "+N.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor||$.batchingColor?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==Q8?"#define TONE_MAPPING":"",$.toneMapping!==Q8?f0.tonemapping_pars_fragment:"",$.toneMapping!==Q8?IX("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",f0.colorspace_pars_fragment,wX("linearToOutputTexel",$.outputColorSpace),_X(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(S6).join(`
`);if(Y=PQ(Y),Y=PZ(Y,$),Y=AZ(Y,$),K=PQ(K),K=PZ(K,$),K=AZ(K,$),Y=TZ(Y),K=TZ(K),$.isRawShaderMaterial!==!0)P=`#version 300 es
`,q=[O,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+q,D=["#define varying in",$.glslVersion===a7?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===a7?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D;let L=P+q+Y,I=P+D+K,v=IZ(W,W.VERTEX_SHADER,L),C=IZ(W,W.FRAGMENT_SHADER,I);if(W.attachShader(k,v),W.attachShader(k,C),$.index0AttributeName!==void 0)W.bindAttribLocation(k,0,$.index0AttributeName);else if($.morphTargets===!0)W.bindAttribLocation(k,0,"position");W.linkProgram(k);function T(A){if(J.debug.checkShaderErrors){let d=W.getProgramInfoLog(k)||"",c=W.getShaderInfoLog(v)||"",p=W.getShaderInfoLog(C)||"",o=d.trim(),l=c.trim(),r=p.trim(),x=!0,H0=!0;if(W.getProgramParameter(k,W.LINK_STATUS)===!1)if(x=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,k,v,C);else{let G0=CZ(W,v,"vertex"),P0=CZ(W,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(k,W.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+o+`
`+G0+`
`+P0)}else if(o!=="")console.warn("THREE.WebGLProgram: Program Info Log:",o);else if(l===""||r==="")H0=!1;if(H0)A.diagnostics={runnable:x,programLog:o,vertexShader:{log:l,prefix:q},fragmentShader:{log:r,prefix:D}}}W.deleteShader(v),W.deleteShader(C),m=new j6(W,k),z=AX(W,k)}let m;this.getUniforms=function(){if(m===void 0)T(this);return m};let z;this.getAttributes=function(){if(z===void 0)T(this);return z};let V=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(V===!1)V=W.getProgramParameter(k,VX);return V},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(k),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=LX++,this.cacheKey=Q,this.usedTimes=1,this.program=k,this.vertexShader=v,this.fragmentShader=C,this}var mX=0;class lZ{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:$}=J,Z=this._getShaderStage(Q),W=this._getShaderStage($),H=this._getShaderCacheForMaterial(J);if(H.has(Z)===!1)H.add(Z),Z.usedTimes++;if(H.has(W)===!1)H.add(W),W.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new uZ(J),Q.set(J,$);return $}}class uZ{constructor(J){this.id=mX++,this.code=J,this.usedTimes=0}}function dX(J,Q,$,Z,W,H,Y){let K=new L9,X=new lZ,U=new Set,G=[],E=W.logarithmicDepthBuffer,N=W.vertexTextures,O=W.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function k(z){if(U.add(z),z===0)return"uv";return`uv${z}`}function q(z,V,A,d,c){let p=d.fog,o=c.geometry,l=z.isMeshStandardMaterial?d.environment:null,r=(z.isMeshStandardMaterial?$:Q).get(z.envMap||l),x=!!r&&r.mapping===V6?r.image.height:null,H0=M[z.type];if(z.precision!==null){if(O=W.getMaxPrecision(z.precision),O!==z.precision)console.warn("THREE.WebGLProgram.getParameters:",z.precision,"not supported, using",O,"instead.")}let G0=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,P0=G0!==void 0?G0.length:0,g0=0;if(o.morphAttributes.position!==void 0)g0=1;if(o.morphAttributes.normal!==void 0)g0=2;if(o.morphAttributes.color!==void 0)g0=3;let WJ,d0,n,W0;if(H0){let n0=sJ[H0];WJ=n0.vertexShader,d0=n0.fragmentShader}else WJ=z.vertexShader,d0=z.fragmentShader,X.update(z),n=X.getVertexShaderID(z),W0=X.getFragmentShaderID(z);let Q0=J.getRenderTarget(),M0=J.state.buffers.depth.getReversed(),T0=c.isInstancedMesh===!0,S0=c.isBatchedMesh===!0,GJ=!!z.map,w=!!z.matcap,t0=!!r,y0=!!z.aoMap,A0=!!z.lightMap,R0=!!z.bumpMap,e0=!!z.normalMap,L0=!!z.displacementMap,w0=!!z.emissiveMap,qJ=!!z.metalnessMap,EJ=!!z.roughnessMap,HJ=z.anisotropy>0,B=z.clearcoat>0,R=z.dispersion>0,y=z.iridescence>0,u=z.sheen>0,i=z.transmission>0,g=HJ&&!!z.anisotropyMap,N0=B&&!!z.clearcoatMap,J0=B&&!!z.clearcoatNormalMap,F0=B&&!!z.clearcoatRoughnessMap,_0=y&&!!z.iridescenceMap,e=y&&!!z.iridescenceThicknessMap,X0=u&&!!z.sheenColorMap,k0=u&&!!z.sheenRoughnessMap,V0=!!z.specularMap,U0=!!z.specularColorMap,b0=!!z.specularIntensityMap,_=i&&!!z.transmissionMap,K0=i&&!!z.thicknessMap,$0=!!z.gradientMap,q0=!!z.alphaMap,a=z.alphaTest>0,s=!!z.alphaHash,O0=!!z.extensions,j0=Q8;if(z.toneMapped){if(Q0===null||Q0.isXRRenderTarget===!0)j0=J.toneMapping}let i0={shaderID:H0,shaderType:z.type,shaderName:z.name,vertexShader:WJ,fragmentShader:d0,defines:z.defines,customVertexShaderID:n,customFragmentShaderID:W0,isRawShaderMaterial:z.isRawShaderMaterial===!0,glslVersion:z.glslVersion,precision:O,batching:S0,batchingColor:S0&&c._colorsTexture!==null,instancing:T0,instancingColor:T0&&c.instanceColor!==null,instancingMorph:T0&&c.morphTexture!==null,supportsVertexTextures:N,outputColorSpace:Q0===null?J.outputColorSpace:Q0.isXRRenderTarget===!0?Q0.texture.colorSpace:I6,alphaToCoverage:!!z.alphaToCoverage,map:GJ,matcap:w,envMap:t0,envMapMode:t0&&r.mapping,envMapCubeUVHeight:x,aoMap:y0,lightMap:A0,bumpMap:R0,normalMap:e0,displacementMap:N&&L0,emissiveMap:w0,normalMapObjectSpace:e0&&z.normalMapType===r$,normalMapTangentSpace:e0&&z.normalMapType===a$,metalnessMap:qJ,roughnessMap:EJ,anisotropy:HJ,anisotropyMap:g,clearcoat:B,clearcoatMap:N0,clearcoatNormalMap:J0,clearcoatRoughnessMap:F0,dispersion:R,iridescence:y,iridescenceMap:_0,iridescenceThicknessMap:e,sheen:u,sheenColorMap:X0,sheenRoughnessMap:k0,specularMap:V0,specularColorMap:U0,specularIntensityMap:b0,transmission:i,transmissionMap:_,thicknessMap:K0,gradientMap:$0,opaque:z.transparent===!1&&z.blending===M6&&z.alphaToCoverage===!1,alphaMap:q0,alphaTest:a,alphaHash:s,combine:z.combine,mapUv:GJ&&k(z.map.channel),aoMapUv:y0&&k(z.aoMap.channel),lightMapUv:A0&&k(z.lightMap.channel),bumpMapUv:R0&&k(z.bumpMap.channel),normalMapUv:e0&&k(z.normalMap.channel),displacementMapUv:L0&&k(z.displacementMap.channel),emissiveMapUv:w0&&k(z.emissiveMap.channel),metalnessMapUv:qJ&&k(z.metalnessMap.channel),roughnessMapUv:EJ&&k(z.roughnessMap.channel),anisotropyMapUv:g&&k(z.anisotropyMap.channel),clearcoatMapUv:N0&&k(z.clearcoatMap.channel),clearcoatNormalMapUv:J0&&k(z.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F0&&k(z.clearcoatRoughnessMap.channel),iridescenceMapUv:_0&&k(z.iridescenceMap.channel),iridescenceThicknessMapUv:e&&k(z.iridescenceThicknessMap.channel),sheenColorMapUv:X0&&k(z.sheenColorMap.channel),sheenRoughnessMapUv:k0&&k(z.sheenRoughnessMap.channel),specularMapUv:V0&&k(z.specularMap.channel),specularColorMapUv:U0&&k(z.specularColorMap.channel),specularIntensityMapUv:b0&&k(z.specularIntensityMap.channel),transmissionMapUv:_&&k(z.transmissionMap.channel),thicknessMapUv:K0&&k(z.thicknessMap.channel),alphaMapUv:q0&&k(z.alphaMap.channel),vertexTangents:!!o.attributes.tangent&&(e0||HJ),vertexColors:z.vertexColors,vertexAlphas:z.vertexColors===!0&&!!o.attributes.color&&o.attributes.color.itemSize===4,pointsUvs:c.isPoints===!0&&!!o.attributes.uv&&(GJ||q0),fog:!!p,useFog:z.fog===!0,fogExp2:!!p&&p.isFogExp2,flatShading:z.flatShading===!0&&z.wireframe===!1,sizeAttenuation:z.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:M0,skinning:c.isSkinnedMesh===!0,morphTargets:o.morphAttributes.position!==void 0,morphNormals:o.morphAttributes.normal!==void 0,morphColors:o.morphAttributes.color!==void 0,morphTargetsCount:P0,morphTextureStride:g0,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numClippingPlanes:Y.numPlanes,numClipIntersection:Y.numIntersection,dithering:z.dithering,shadowMapEnabled:J.shadowMap.enabled&&A.length>0,shadowMapType:J.shadowMap.type,toneMapping:j0,decodeVideoTexture:GJ&&z.map.isVideoTexture===!0&&m0.getTransfer(z.map.colorSpace)===a0,decodeVideoTextureEmissive:w0&&z.emissiveMap.isVideoTexture===!0&&m0.getTransfer(z.emissiveMap.colorSpace)===a0,premultipliedAlpha:z.premultipliedAlpha,doubleSided:z.side===fJ,flipSided:z.side===PJ,useDepthPacking:z.depthPacking>=0,depthPacking:z.depthPacking||0,index0AttributeName:z.index0AttributeName,extensionClipCullDistance:O0&&z.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(O0&&z.extensions.multiDraw===!0||S0)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:z.customProgramCacheKey()};return i0.vertexUv1s=U.has(1),i0.vertexUv2s=U.has(2),i0.vertexUv3s=U.has(3),U.clear(),i0}function D(z){let V=[];if(z.shaderID)V.push(z.shaderID);else V.push(z.customVertexShaderID),V.push(z.customFragmentShaderID);if(z.defines!==void 0)for(let A in z.defines)V.push(A),V.push(z.defines[A]);if(z.isRawShaderMaterial===!1)P(V,z),L(V,z),V.push(J.outputColorSpace);return V.push(z.customProgramCacheKey),V.join()}function P(z,V){z.push(V.precision),z.push(V.outputColorSpace),z.push(V.envMapMode),z.push(V.envMapCubeUVHeight),z.push(V.mapUv),z.push(V.alphaMapUv),z.push(V.lightMapUv),z.push(V.aoMapUv),z.push(V.bumpMapUv),z.push(V.normalMapUv),z.push(V.displacementMapUv),z.push(V.emissiveMapUv),z.push(V.metalnessMapUv),z.push(V.roughnessMapUv),z.push(V.anisotropyMapUv),z.push(V.clearcoatMapUv),z.push(V.clearcoatNormalMapUv),z.push(V.clearcoatRoughnessMapUv),z.push(V.iridescenceMapUv),z.push(V.iridescenceThicknessMapUv),z.push(V.sheenColorMapUv),z.push(V.sheenRoughnessMapUv),z.push(V.specularMapUv),z.push(V.specularColorMapUv),z.push(V.specularIntensityMapUv),z.push(V.transmissionMapUv),z.push(V.thicknessMapUv),z.push(V.combine),z.push(V.fogExp2),z.push(V.sizeAttenuation),z.push(V.morphTargetsCount),z.push(V.morphAttributeCount),z.push(V.numDirLights),z.push(V.numPointLights),z.push(V.numSpotLights),z.push(V.numSpotLightMaps),z.push(V.numHemiLights),z.push(V.numRectAreaLights),z.push(V.numDirLightShadows),z.push(V.numPointLightShadows),z.push(V.numSpotLightShadows),z.push(V.numSpotLightShadowsWithMaps),z.push(V.numLightProbes),z.push(V.shadowMapType),z.push(V.toneMapping),z.push(V.numClippingPlanes),z.push(V.numClipIntersection),z.push(V.depthPacking)}function L(z,V){if(K.disableAll(),V.supportsVertexTextures)K.enable(0);if(V.instancing)K.enable(1);if(V.instancingColor)K.enable(2);if(V.instancingMorph)K.enable(3);if(V.matcap)K.enable(4);if(V.envMap)K.enable(5);if(V.normalMapObjectSpace)K.enable(6);if(V.normalMapTangentSpace)K.enable(7);if(V.clearcoat)K.enable(8);if(V.iridescence)K.enable(9);if(V.alphaTest)K.enable(10);if(V.vertexColors)K.enable(11);if(V.vertexAlphas)K.enable(12);if(V.vertexUv1s)K.enable(13);if(V.vertexUv2s)K.enable(14);if(V.vertexUv3s)K.enable(15);if(V.vertexTangents)K.enable(16);if(V.anisotropy)K.enable(17);if(V.alphaHash)K.enable(18);if(V.batching)K.enable(19);if(V.dispersion)K.enable(20);if(V.batchingColor)K.enable(21);if(V.gradientMap)K.enable(22);if(z.push(K.mask),K.disableAll(),V.fog)K.enable(0);if(V.useFog)K.enable(1);if(V.flatShading)K.enable(2);if(V.logarithmicDepthBuffer)K.enable(3);if(V.reversedDepthBuffer)K.enable(4);if(V.skinning)K.enable(5);if(V.morphTargets)K.enable(6);if(V.morphNormals)K.enable(7);if(V.morphColors)K.enable(8);if(V.premultipliedAlpha)K.enable(9);if(V.shadowMapEnabled)K.enable(10);if(V.doubleSided)K.enable(11);if(V.flipSided)K.enable(12);if(V.useDepthPacking)K.enable(13);if(V.dithering)K.enable(14);if(V.transmission)K.enable(15);if(V.sheen)K.enable(16);if(V.opaque)K.enable(17);if(V.pointsUvs)K.enable(18);if(V.decodeVideoTexture)K.enable(19);if(V.decodeVideoTextureEmissive)K.enable(20);if(V.alphaToCoverage)K.enable(21);z.push(K.mask)}function I(z){let V=M[z.type],A;if(V){let d=sJ[V];A=UZ.clone(d.uniforms)}else A=z.uniforms;return A}function v(z,V){let A;for(let d=0,c=G.length;d<c;d++){let p=G[d];if(p.cacheKey===V){A=p,++A.usedTimes;break}}if(A===void 0)A=new pX(J,V,z,H),G.push(A);return A}function C(z){if(--z.usedTimes===0){let V=G.indexOf(z);G[V]=G[G.length-1],G.pop(),z.destroy()}}function T(z){X.remove(z)}function m(){X.dispose()}return{getParameters:q,getProgramCacheKey:D,getUniforms:I,acquireProgram:v,releaseProgram:C,releaseShaderCache:T,programs:G,dispose:m}}function lX(){let J=new WeakMap;function Q(Y){return J.has(Y)}function $(Y){let K=J.get(Y);if(K===void 0)K={},J.set(Y,K);return K}function Z(Y){J.delete(Y)}function W(Y,K,X){J.get(Y)[K]=X}function H(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:W,dispose:H}}function uX(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function jZ(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function yZ(){let J=[],Q=0,$=[],Z=[],W=[];function H(){Q=0,$.length=0,Z.length=0,W.length=0}function Y(E,N,O,M,k,q){let D=J[Q];if(D===void 0)D={id:E.id,object:E,geometry:N,material:O,groupOrder:M,renderOrder:E.renderOrder,z:k,group:q},J[Q]=D;else D.id=E.id,D.object=E,D.geometry=N,D.material=O,D.groupOrder=M,D.renderOrder=E.renderOrder,D.z=k,D.group=q;return Q++,D}function K(E,N,O,M,k,q){let D=Y(E,N,O,M,k,q);if(O.transmission>0)Z.push(D);else if(O.transparent===!0)W.push(D);else $.push(D)}function X(E,N,O,M,k,q){let D=Y(E,N,O,M,k,q);if(O.transmission>0)Z.unshift(D);else if(O.transparent===!0)W.unshift(D);else $.unshift(D)}function U(E,N){if($.length>1)$.sort(E||uX);if(Z.length>1)Z.sort(N||jZ);if(W.length>1)W.sort(N||jZ)}function G(){for(let E=Q,N=J.length;E<N;E++){let O=J[E];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:$,transmissive:Z,transparent:W,init:H,push:K,unshift:X,finish:G,sort:U}}function cX(){let J=new WeakMap;function Q(Z,W){let H=J.get(Z),Y;if(H===void 0)Y=new yZ,J.set(Z,[Y]);else if(W>=H.length)Y=new yZ,H.push(Y);else Y=H[W];return Y}function $(){J=new WeakMap}return{get:Q,dispose:$}}function nX(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new f,color:new x0};break;case"SpotLight":$={position:new f,direction:new f,color:new x0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new f,color:new x0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new f,skyColor:new x0,groundColor:new x0};break;case"RectAreaLight":$={color:new x0,position:new f,halfWidth:new f,halfHeight:new f};break}return J[Q.id]=$,$}}}function sX(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new c0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new c0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new c0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var iX=0;function oX(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function aX(J){let Q=new nX,$=sX(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new f);let W=new f,H=new KJ,Y=new KJ;function K(U){let G=0,E=0,N=0;for(let z=0;z<9;z++)Z.probe[z].set(0,0,0);let O=0,M=0,k=0,q=0,D=0,P=0,L=0,I=0,v=0,C=0,T=0;U.sort(oX);for(let z=0,V=U.length;z<V;z++){let A=U[z],d=A.color,c=A.intensity,p=A.distance,o=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)G+=d.r*c,E+=d.g*c,N+=d.b*c;else if(A.isLightProbe){for(let l=0;l<9;l++)Z.probe[l].addScaledVector(A.sh.coefficients[l],c);T++}else if(A.isDirectionalLight){let l=Q.get(A);if(l.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let r=A.shadow,x=$.get(A);x.shadowIntensity=r.intensity,x.shadowBias=r.bias,x.shadowNormalBias=r.normalBias,x.shadowRadius=r.radius,x.shadowMapSize=r.mapSize,Z.directionalShadow[O]=x,Z.directionalShadowMap[O]=o,Z.directionalShadowMatrix[O]=A.shadow.matrix,P++}Z.directional[O]=l,O++}else if(A.isSpotLight){let l=Q.get(A);l.position.setFromMatrixPosition(A.matrixWorld),l.color.copy(d).multiplyScalar(c),l.distance=p,l.coneCos=Math.cos(A.angle),l.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),l.decay=A.decay,Z.spot[k]=l;let r=A.shadow;if(A.map){if(Z.spotLightMap[v]=A.map,v++,r.updateMatrices(A),A.castShadow)C++}if(Z.spotLightMatrix[k]=r.matrix,A.castShadow){let x=$.get(A);x.shadowIntensity=r.intensity,x.shadowBias=r.bias,x.shadowNormalBias=r.normalBias,x.shadowRadius=r.radius,x.shadowMapSize=r.mapSize,Z.spotShadow[k]=x,Z.spotShadowMap[k]=o,I++}k++}else if(A.isRectAreaLight){let l=Q.get(A);l.color.copy(d).multiplyScalar(c),l.halfWidth.set(A.width*0.5,0,0),l.halfHeight.set(0,A.height*0.5,0),Z.rectArea[q]=l,q++}else if(A.isPointLight){let l=Q.get(A);if(l.color.copy(A.color).multiplyScalar(A.intensity),l.distance=A.distance,l.decay=A.decay,A.castShadow){let r=A.shadow,x=$.get(A);x.shadowIntensity=r.intensity,x.shadowBias=r.bias,x.shadowNormalBias=r.normalBias,x.shadowRadius=r.radius,x.shadowMapSize=r.mapSize,x.shadowCameraNear=r.camera.near,x.shadowCameraFar=r.camera.far,Z.pointShadow[M]=x,Z.pointShadowMap[M]=o,Z.pointShadowMatrix[M]=A.shadow.matrix,L++}Z.point[M]=l,M++}else if(A.isHemisphereLight){let l=Q.get(A);l.skyColor.copy(A.color).multiplyScalar(c),l.groundColor.copy(A.groundColor).multiplyScalar(c),Z.hemi[D]=l,D++}}if(q>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=Z0.LTC_FLOAT_1,Z.rectAreaLTC2=Z0.LTC_FLOAT_2;else Z.rectAreaLTC1=Z0.LTC_HALF_1,Z.rectAreaLTC2=Z0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=E,Z.ambient[2]=N;let m=Z.hash;if(m.directionalLength!==O||m.pointLength!==M||m.spotLength!==k||m.rectAreaLength!==q||m.hemiLength!==D||m.numDirectionalShadows!==P||m.numPointShadows!==L||m.numSpotShadows!==I||m.numSpotMaps!==v||m.numLightProbes!==T)Z.directional.length=O,Z.spot.length=k,Z.rectArea.length=q,Z.point.length=M,Z.hemi.length=D,Z.directionalShadow.length=P,Z.directionalShadowMap.length=P,Z.pointShadow.length=L,Z.pointShadowMap.length=L,Z.spotShadow.length=I,Z.spotShadowMap.length=I,Z.directionalShadowMatrix.length=P,Z.pointShadowMatrix.length=L,Z.spotLightMatrix.length=I+v-C,Z.spotLightMap.length=v,Z.numSpotLightShadowsWithMaps=C,Z.numLightProbes=T,m.directionalLength=O,m.pointLength=M,m.spotLength=k,m.rectAreaLength=q,m.hemiLength=D,m.numDirectionalShadows=P,m.numPointShadows=L,m.numSpotShadows=I,m.numSpotMaps=v,m.numLightProbes=T,Z.version=iX++}function X(U,G){let E=0,N=0,O=0,M=0,k=0,q=G.matrixWorldInverse;for(let D=0,P=U.length;D<P;D++){let L=U[D];if(L.isDirectionalLight){let I=Z.directional[E];I.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),I.direction.sub(W),I.direction.transformDirection(q),E++}else if(L.isSpotLight){let I=Z.spot[O];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(q),I.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),I.direction.sub(W),I.direction.transformDirection(q),O++}else if(L.isRectAreaLight){let I=Z.rectArea[M];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(q),Y.identity(),H.copy(L.matrixWorld),H.premultiply(q),Y.extractRotation(H),I.halfWidth.set(L.width*0.5,0,0),I.halfHeight.set(0,L.height*0.5,0),I.halfWidth.applyMatrix4(Y),I.halfHeight.applyMatrix4(Y),M++}else if(L.isPointLight){let I=Z.point[N];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(q),N++}else if(L.isHemisphereLight){let I=Z.hemi[k];I.direction.setFromMatrixPosition(L.matrixWorld),I.direction.transformDirection(q),k++}}}return{setup:K,setupView:X,state:Z}}function vZ(J){let Q=new aX(J),$=[],Z=[];function W(G){U.camera=G,$.length=0,Z.length=0}function H(G){$.push(G)}function Y(G){Z.push(G)}function K(){Q.setup($)}function X(G){Q.setupView($,G)}let U={lightsArray:$,shadowsArray:Z,camera:null,lights:Q,transmissionRenderTarget:{}};return{init:W,state:U,setupLights:K,setupLightsView:X,pushLight:H,pushShadow:Y}}function rX(J){let Q=new WeakMap;function $(W,H=0){let Y=Q.get(W),K;if(Y===void 0)K=new vZ(J),Q.set(W,[K]);else if(H>=Y.length)K=new vZ(J),Y.push(K);else K=Y[H];return K}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var tX=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eX=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JU(J,Q,$){let Z=new P9,W=new c0,H=new c0,Y=new ZJ,K=new KQ({depthPacking:o$}),X=new YQ,U={},G=$.maxTextureSize,E={[o8]:PJ,[PJ]:o8,[fJ]:fJ},N=new hJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new c0},radius:{value:4}},vertexShader:tX,fragmentShader:eX}),O=N.clone();O.defines.HORIZONTAL_PASS=1;let M=new bJ;M.setAttribute("position",new vJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let k=new AJ(M,N),q=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=G7;let D=this.type;this.render=function(C,T,m){if(q.enabled===!1)return;if(q.autoUpdate===!1&&q.needsUpdate===!1)return;if(C.length===0)return;let z=J.getRenderTarget(),V=J.getActiveCubeFace(),A=J.getActiveMipmapLevel(),d=J.state;if(d.setBlending(U8),d.buffers.depth.getReversed()===!0)d.buffers.color.setClear(0,0,0,0);else d.buffers.color.setClear(1,1,1,1);d.buffers.depth.setTest(!0),d.setScissorTest(!1);let c=D!==cJ&&this.type===cJ,p=D===cJ&&this.type!==cJ;for(let o=0,l=C.length;o<l;o++){let r=C[o],x=r.shadow;if(x===void 0){console.warn("THREE.WebGLShadowMap:",r,"has no shadow.");continue}if(x.autoUpdate===!1&&x.needsUpdate===!1)continue;W.copy(x.mapSize);let H0=x.getFrameExtents();if(W.multiply(H0),H.copy(x.mapSize),W.x>G||W.y>G){if(W.x>G)H.x=Math.floor(G/H0.x),W.x=H.x*H0.x,x.mapSize.x=H.x;if(W.y>G)H.y=Math.floor(G/H0.y),W.y=H.y*H0.y,x.mapSize.y=H.y}if(x.map===null||c===!0||p===!0){let P0=this.type!==cJ?{minFilter:t8,magFilter:t8}:{};if(x.map!==null)x.map.dispose();x.map=new $8(W.x,W.y,P0),x.map.texture.name=r.name+".shadowMap",x.camera.updateProjectionMatrix()}J.setRenderTarget(x.map),J.clear();let G0=x.getViewportCount();for(let P0=0;P0<G0;P0++){let g0=x.getViewport(P0);Y.set(H.x*g0.x,H.y*g0.y,H.x*g0.z,H.y*g0.w),d.viewport(Y),x.updateMatrices(r,P0),Z=x.getFrustum(),I(T,m,x.camera,r,this.type)}if(x.isPointLightShadow!==!0&&this.type===cJ)P(x,m);x.needsUpdate=!1}D=this.type,q.needsUpdate=!1,J.setRenderTarget(z,V,A)};function P(C,T){let m=Q.update(k);if(N.defines.VSM_SAMPLES!==C.blurSamples)N.defines.VSM_SAMPLES=C.blurSamples,O.defines.VSM_SAMPLES=C.blurSamples,N.needsUpdate=!0,O.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new $8(W.x,W.y);N.uniforms.shadow_pass.value=C.map.texture,N.uniforms.resolution.value=C.mapSize,N.uniforms.radius.value=C.radius,J.setRenderTarget(C.mapPass),J.clear(),J.renderBufferDirect(T,null,m,N,k,null),O.uniforms.shadow_pass.value=C.mapPass.texture,O.uniforms.resolution.value=C.mapSize,O.uniforms.radius.value=C.radius,J.setRenderTarget(C.map),J.clear(),J.renderBufferDirect(T,null,m,O,k,null)}function L(C,T,m,z){let V=null,A=m.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)V=A;else if(V=m.isPointLight===!0?X:K,J.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let d=V.uuid,c=T.uuid,p=U[d];if(p===void 0)p={},U[d]=p;let o=p[c];if(o===void 0)o=V.clone(),p[c]=o,T.addEventListener("dispose",v);V=o}if(V.visible=T.visible,V.wireframe=T.wireframe,z===cJ)V.side=T.shadowSide!==null?T.shadowSide:T.side;else V.side=T.shadowSide!==null?T.shadowSide:E[T.side];if(V.alphaMap=T.alphaMap,V.alphaTest=T.alphaToCoverage===!0?0.5:T.alphaTest,V.map=T.map,V.clipShadows=T.clipShadows,V.clippingPlanes=T.clippingPlanes,V.clipIntersection=T.clipIntersection,V.displacementMap=T.displacementMap,V.displacementScale=T.displacementScale,V.displacementBias=T.displacementBias,V.wireframeLinewidth=T.wireframeLinewidth,V.linewidth=T.linewidth,m.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let d=J.properties.get(V);d.light=m}return V}function I(C,T,m,z,V){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&V===cJ)&&(!C.frustumCulled||Z.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,C.matrixWorld);let c=Q.update(C),p=C.material;if(Array.isArray(p)){let o=c.groups;for(let l=0,r=o.length;l<r;l++){let x=o[l],H0=p[x.materialIndex];if(H0&&H0.visible){let G0=L(C,H0,z,V);C.onBeforeShadow(J,C,T,m,c,G0,x),J.renderBufferDirect(m,null,c,G0,C,x),C.onAfterShadow(J,C,T,m,c,G0,x)}}}else if(p.visible){let o=L(C,p,z,V);C.onBeforeShadow(J,C,T,m,c,o,null),J.renderBufferDirect(m,null,c,o,C,null),C.onAfterShadow(J,C,T,m,c,o,null)}}}let d=C.children;for(let c=0,p=d.length;c<p;c++)I(d[c],T,m,z,V)}function v(C){C.target.removeEventListener("dispose",v);for(let m in U){let z=U[m],V=C.target.uuid;if(V in z)z[V].dispose(),delete z[V]}}}var QU={[W9]:H9,[K9]:U9,[Y9]:G9,[k6]:X9,[H9]:W9,[U9]:K9,[G9]:Y9,[X9]:k6};function $U(J,Q){function $(){let _=!1,K0=new ZJ,$0=null,q0=new ZJ(0,0,0,0);return{setMask:function(a){if($0!==a&&!_)J.colorMask(a,a,a,a),$0=a},setLocked:function(a){_=a},setClear:function(a,s,O0,j0,i0){if(i0===!0)a*=j0,s*=j0,O0*=j0;if(K0.set(a,s,O0,j0),q0.equals(K0)===!1)J.clearColor(a,s,O0,j0),q0.copy(K0)},reset:function(){_=!1,$0=null,q0.set(-1,0,0,0)}}}function Z(){let _=!1,K0=!1,$0=null,q0=null,a=null;return{setReversed:function(s){if(K0!==s){let O0=Q.get("EXT_clip_control");if(s)O0.clipControlEXT(O0.LOWER_LEFT_EXT,O0.ZERO_TO_ONE_EXT);else O0.clipControlEXT(O0.LOWER_LEFT_EXT,O0.NEGATIVE_ONE_TO_ONE_EXT);K0=s;let j0=a;a=null,this.setClear(j0)}},getReversed:function(){return K0},setTest:function(s){if(s)Q0(J.DEPTH_TEST);else M0(J.DEPTH_TEST)},setMask:function(s){if($0!==s&&!_)J.depthMask(s),$0=s},setFunc:function(s){if(K0)s=QU[s];if(q0!==s){switch(s){case W9:J.depthFunc(J.NEVER);break;case H9:J.depthFunc(J.ALWAYS);break;case K9:J.depthFunc(J.LESS);break;case k6:J.depthFunc(J.LEQUAL);break;case Y9:J.depthFunc(J.EQUAL);break;case X9:J.depthFunc(J.GEQUAL);break;case U9:J.depthFunc(J.GREATER);break;case G9:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}q0=s}},setLocked:function(s){_=s},setClear:function(s){if(a!==s){if(K0)s=1-s;J.clearDepth(s),a=s}},reset:function(){_=!1,$0=null,q0=null,a=null,K0=!1}}}function W(){let _=!1,K0=null,$0=null,q0=null,a=null,s=null,O0=null,j0=null,i0=null;return{setTest:function(n0){if(!_)if(n0)Q0(J.STENCIL_TEST);else M0(J.STENCIL_TEST)},setMask:function(n0){if(K0!==n0&&!_)J.stencilMask(n0),K0=n0},setFunc:function(n0,dJ,lJ){if($0!==n0||q0!==dJ||a!==lJ)J.stencilFunc(n0,dJ,lJ),$0=n0,q0=dJ,a=lJ},setOp:function(n0,dJ,lJ){if(s!==n0||O0!==dJ||j0!==lJ)J.stencilOp(n0,dJ,lJ),s=n0,O0=dJ,j0=lJ},setLocked:function(n0){_=n0},setClear:function(n0){if(i0!==n0)J.clearStencil(n0),i0=n0},reset:function(){_=!1,K0=null,$0=null,q0=null,a=null,s=null,O0=null,j0=null,i0=null}}}let H=new $,Y=new Z,K=new W,X=new WeakMap,U=new WeakMap,G={},E={},N=new WeakMap,O=[],M=null,k=!1,q=null,D=null,P=null,L=null,I=null,v=null,C=null,T=new x0(0,0,0),m=0,z=!1,V=null,A=null,d=null,c=null,p=null,o=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),l=!1,r=0,x=J.getParameter(J.VERSION);if(x.indexOf("WebGL")!==-1)r=parseFloat(/^WebGL (\d)/.exec(x)[1]),l=r>=1;else if(x.indexOf("OpenGL ES")!==-1)r=parseFloat(/^OpenGL ES (\d)/.exec(x)[1]),l=r>=2;let H0=null,G0={},P0=J.getParameter(J.SCISSOR_BOX),g0=J.getParameter(J.VIEWPORT),WJ=new ZJ().fromArray(P0),d0=new ZJ().fromArray(g0);function n(_,K0,$0,q0){let a=new Uint8Array(4),s=J.createTexture();J.bindTexture(_,s),J.texParameteri(_,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(_,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let O0=0;O0<$0;O0++)if(_===J.TEXTURE_3D||_===J.TEXTURE_2D_ARRAY)J.texImage3D(K0,0,J.RGBA,1,1,q0,0,J.RGBA,J.UNSIGNED_BYTE,a);else J.texImage2D(K0+O0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,a);return s}let W0={};W0[J.TEXTURE_2D]=n(J.TEXTURE_2D,J.TEXTURE_2D,1),W0[J.TEXTURE_CUBE_MAP]=n(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),W0[J.TEXTURE_2D_ARRAY]=n(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),W0[J.TEXTURE_3D]=n(J.TEXTURE_3D,J.TEXTURE_3D,1,1),H.setClear(0,0,0,1),Y.setClear(1),K.setClear(0),Q0(J.DEPTH_TEST),Y.setFunc(k6),R0(!1),e0(U7),Q0(J.CULL_FACE),y0(U8);function Q0(_){if(G[_]!==!0)J.enable(_),G[_]=!0}function M0(_){if(G[_]!==!1)J.disable(_),G[_]=!1}function T0(_,K0){if(E[_]!==K0){if(J.bindFramebuffer(_,K0),E[_]=K0,_===J.DRAW_FRAMEBUFFER)E[J.FRAMEBUFFER]=K0;if(_===J.FRAMEBUFFER)E[J.DRAW_FRAMEBUFFER]=K0;return!0}return!1}function S0(_,K0){let $0=O,q0=!1;if(_){if($0=N.get(K0),$0===void 0)$0=[],N.set(K0,$0);let a=_.textures;if($0.length!==a.length||$0[0]!==J.COLOR_ATTACHMENT0){for(let s=0,O0=a.length;s<O0;s++)$0[s]=J.COLOR_ATTACHMENT0+s;$0.length=a.length,q0=!0}}else if($0[0]!==J.BACK)$0[0]=J.BACK,q0=!0;if(q0)J.drawBuffers($0)}function GJ(_){if(M!==_)return J.useProgram(_),M=_,!0;return!1}let w={[a8]:J.FUNC_ADD,[X$]:J.FUNC_SUBTRACT,[U$]:J.FUNC_REVERSE_SUBTRACT};w[G$]=J.MIN,w[E$]=J.MAX;let t0={[N$]:J.ZERO,[q$]:J.ONE,[D$]:J.SRC_COLOR,[R$]:J.SRC_ALPHA,[z$]:J.SRC_ALPHA_SATURATE,[V$]:J.DST_COLOR,[M$]:J.DST_ALPHA,[O$]:J.ONE_MINUS_SRC_COLOR,[F$]:J.ONE_MINUS_SRC_ALPHA,[L$]:J.ONE_MINUS_DST_COLOR,[k$]:J.ONE_MINUS_DST_ALPHA,[B$]:J.CONSTANT_COLOR,[w$]:J.ONE_MINUS_CONSTANT_COLOR,[I$]:J.CONSTANT_ALPHA,[_$]:J.ONE_MINUS_CONSTANT_ALPHA};function y0(_,K0,$0,q0,a,s,O0,j0,i0,n0){if(_===U8){if(k===!0)M0(J.BLEND),k=!1;return}if(k===!1)Q0(J.BLEND),k=!0;if(_!==Y$){if(_!==q||n0!==z){if(D!==a8||I!==a8)J.blendEquation(J.FUNC_ADD),D=a8,I=a8;if(n0)switch(_){case M6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case E7:J.blendFunc(J.ONE,J.ONE);break;case N7:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case q7:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}else switch(_){case M6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case E7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case N7:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case q7:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}P=null,L=null,v=null,C=null,T.set(0,0,0),m=0,q=_,z=n0}return}if(a=a||K0,s=s||$0,O0=O0||q0,K0!==D||a!==I)J.blendEquationSeparate(w[K0],w[a]),D=K0,I=a;if($0!==P||q0!==L||s!==v||O0!==C)J.blendFuncSeparate(t0[$0],t0[q0],t0[s],t0[O0]),P=$0,L=q0,v=s,C=O0;if(j0.equals(T)===!1||i0!==m)J.blendColor(j0.r,j0.g,j0.b,i0),T.copy(j0),m=i0;q=_,z=!1}function A0(_,K0){_.side===fJ?M0(J.CULL_FACE):Q0(J.CULL_FACE);let $0=_.side===PJ;if(K0)$0=!$0;R0($0),_.blending===M6&&_.transparent===!1?y0(U8):y0(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),Y.setFunc(_.depthFunc),Y.setTest(_.depthTest),Y.setMask(_.depthWrite),H.setMask(_.colorWrite);let q0=_.stencilWrite;if(K.setTest(q0),q0)K.setMask(_.stencilWriteMask),K.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),K.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass);w0(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?Q0(J.SAMPLE_ALPHA_TO_COVERAGE):M0(J.SAMPLE_ALPHA_TO_COVERAGE)}function R0(_){if(V!==_){if(_)J.frontFace(J.CW);else J.frontFace(J.CCW);V=_}}function e0(_){if(_!==W$){if(Q0(J.CULL_FACE),_!==A)if(_===U7)J.cullFace(J.BACK);else if(_===H$)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else M0(J.CULL_FACE);A=_}function L0(_){if(_!==d){if(l)J.lineWidth(_);d=_}}function w0(_,K0,$0){if(_){if(Q0(J.POLYGON_OFFSET_FILL),c!==K0||p!==$0)J.polygonOffset(K0,$0),c=K0,p=$0}else M0(J.POLYGON_OFFSET_FILL)}function qJ(_){if(_)Q0(J.SCISSOR_TEST);else M0(J.SCISSOR_TEST)}function EJ(_){if(_===void 0)_=J.TEXTURE0+o-1;if(H0!==_)J.activeTexture(_),H0=_}function HJ(_,K0,$0){if($0===void 0)if(H0===null)$0=J.TEXTURE0+o-1;else $0=H0;let q0=G0[$0];if(q0===void 0)q0={type:void 0,texture:void 0},G0[$0]=q0;if(q0.type!==_||q0.texture!==K0){if(H0!==$0)J.activeTexture($0),H0=$0;J.bindTexture(_,K0||W0[_]),q0.type=_,q0.texture=K0}}function B(){let _=G0[H0];if(_!==void 0&&_.type!==void 0)J.bindTexture(_.type,null),_.type=void 0,_.texture=void 0}function R(){try{J.compressedTexImage2D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function y(){try{J.compressedTexImage3D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function u(){try{J.texSubImage2D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function i(){try{J.texSubImage3D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function g(){try{J.compressedTexSubImage2D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function N0(){try{J.compressedTexSubImage3D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function J0(){try{J.texStorage2D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function F0(){try{J.texStorage3D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function _0(){try{J.texImage2D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function e(){try{J.texImage3D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function X0(_){if(WJ.equals(_)===!1)J.scissor(_.x,_.y,_.z,_.w),WJ.copy(_)}function k0(_){if(d0.equals(_)===!1)J.viewport(_.x,_.y,_.z,_.w),d0.copy(_)}function V0(_,K0){let $0=U.get(K0);if($0===void 0)$0=new WeakMap,U.set(K0,$0);let q0=$0.get(_);if(q0===void 0)q0=J.getUniformBlockIndex(K0,_.name),$0.set(_,q0)}function U0(_,K0){let q0=U.get(K0).get(_);if(X.get(K0)!==q0)J.uniformBlockBinding(K0,q0,_.__bindingPointIndex),X.set(K0,q0)}function b0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Y.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),G={},H0=null,G0={},E={},N=new WeakMap,O=[],M=null,k=!1,q=null,D=null,P=null,L=null,I=null,v=null,C=null,T=new x0(0,0,0),m=0,z=!1,V=null,A=null,d=null,c=null,p=null,WJ.set(0,0,J.canvas.width,J.canvas.height),d0.set(0,0,J.canvas.width,J.canvas.height),H.reset(),Y.reset(),K.reset()}return{buffers:{color:H,depth:Y,stencil:K},enable:Q0,disable:M0,bindFramebuffer:T0,drawBuffers:S0,useProgram:GJ,setBlending:y0,setMaterial:A0,setFlipSided:R0,setCullFace:e0,setLineWidth:L0,setPolygonOffset:w0,setScissorTest:qJ,activeTexture:EJ,bindTexture:HJ,unbindTexture:B,compressedTexImage2D:R,compressedTexImage3D:y,texImage2D:_0,texImage3D:e,updateUBOMapping:V0,uniformBlockBinding:U0,texStorage2D:J0,texStorage3D:F0,texSubImage2D:u,texSubImage3D:i,compressedTexSubImage2D:g,compressedTexSubImage3D:N0,scissor:X0,viewport:k0,reset:b0}}function ZU(J,Q,$,Z,W,H,Y){let K=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new c0,G=new WeakMap,E,N=new WeakMap,O=!1;try{O=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(B){}function M(B,R){return O?new OffscreenCanvas(B,R):F6("canvas")}function k(B,R,y){let u=1,i=HJ(B);if(i.width>y||i.height>y)u=y/Math.max(i.width,i.height);if(u<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let g=Math.floor(u*i.width),N0=Math.floor(u*i.height);if(E===void 0)E=M(g,N0);let J0=R?M(g,N0):E;return J0.width=g,J0.height=N0,J0.getContext("2d").drawImage(B,0,0,g,N0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+i.width+"x"+i.height+") to ("+g+"x"+N0+")."),J0}else{if("data"in B)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+i.width+"x"+i.height+").");return B}return B}function q(B){return B.generateMipmaps}function D(B){J.generateMipmap(B)}function P(B){if(B.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(B.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(B,R,y,u,i=!1){if(B!==null){if(J[B]!==void 0)return J[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let g=R;if(R===J.RED){if(y===J.FLOAT)g=J.R32F;if(y===J.HALF_FLOAT)g=J.R16F;if(y===J.UNSIGNED_BYTE)g=J.R8}if(R===J.RED_INTEGER){if(y===J.UNSIGNED_BYTE)g=J.R8UI;if(y===J.UNSIGNED_SHORT)g=J.R16UI;if(y===J.UNSIGNED_INT)g=J.R32UI;if(y===J.BYTE)g=J.R8I;if(y===J.SHORT)g=J.R16I;if(y===J.INT)g=J.R32I}if(R===J.RG){if(y===J.FLOAT)g=J.RG32F;if(y===J.HALF_FLOAT)g=J.RG16F;if(y===J.UNSIGNED_BYTE)g=J.RG8}if(R===J.RG_INTEGER){if(y===J.UNSIGNED_BYTE)g=J.RG8UI;if(y===J.UNSIGNED_SHORT)g=J.RG16UI;if(y===J.UNSIGNED_INT)g=J.RG32UI;if(y===J.BYTE)g=J.RG8I;if(y===J.SHORT)g=J.RG16I;if(y===J.INT)g=J.RG32I}if(R===J.RGB_INTEGER){if(y===J.UNSIGNED_BYTE)g=J.RGB8UI;if(y===J.UNSIGNED_SHORT)g=J.RGB16UI;if(y===J.UNSIGNED_INT)g=J.RGB32UI;if(y===J.BYTE)g=J.RGB8I;if(y===J.SHORT)g=J.RGB16I;if(y===J.INT)g=J.RGB32I}if(R===J.RGBA_INTEGER){if(y===J.UNSIGNED_BYTE)g=J.RGBA8UI;if(y===J.UNSIGNED_SHORT)g=J.RGBA16UI;if(y===J.UNSIGNED_INT)g=J.RGBA32UI;if(y===J.BYTE)g=J.RGBA8I;if(y===J.SHORT)g=J.RGBA16I;if(y===J.INT)g=J.RGBA32I}if(R===J.RGB){if(y===J.UNSIGNED_INT_5_9_9_9_REV)g=J.RGB9_E5;if(y===J.UNSIGNED_INT_10F_11F_11F_REV)g=J.R11F_G11F_B10F}if(R===J.RGBA){let N0=i?i7:m0.getTransfer(u);if(y===J.FLOAT)g=J.RGBA32F;if(y===J.HALF_FLOAT)g=J.RGBA16F;if(y===J.UNSIGNED_BYTE)g=N0===a0?J.SRGB8_ALPHA8:J.RGBA8;if(y===J.UNSIGNED_SHORT_4_4_4_4)g=J.RGBA4;if(y===J.UNSIGNED_SHORT_5_5_5_1)g=J.RGB5_A1}if(g===J.R16F||g===J.R32F||g===J.RG16F||g===J.RG32F||g===J.RGBA16F||g===J.RGBA32F)Q.get("EXT_color_buffer_float");return g}function I(B,R){let y;if(B){if(R===null||R===J6||R===Q6)y=J.DEPTH24_STENCIL8;else if(R===E8)y=J.DEPTH32F_STENCIL8;else if(R===z6)y=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(R===null||R===J6||R===Q6)y=J.DEPTH_COMPONENT24;else if(R===E8)y=J.DEPTH_COMPONENT32F;else if(R===z6)y=J.DEPTH_COMPONENT16;return y}function v(B,R){if(q(B)===!0||B.isFramebufferTexture&&B.minFilter!==t8&&B.minFilter!==L8)return Math.log2(Math.max(R.width,R.height))+1;else if(B.mipmaps!==void 0&&B.mipmaps.length>0)return B.mipmaps.length;else if(B.isCompressedTexture&&Array.isArray(B.image))return R.mipmaps.length;else return 1}function C(B){let R=B.target;if(R.removeEventListener("dispose",C),m(R),R.isVideoTexture)G.delete(R)}function T(B){let R=B.target;R.removeEventListener("dispose",T),V(R)}function m(B){let R=Z.get(B);if(R.__webglInit===void 0)return;let y=B.source,u=N.get(y);if(u){let i=u[R.__cacheKey];if(i.usedTimes--,i.usedTimes===0)z(B);if(Object.keys(u).length===0)N.delete(y)}Z.remove(B)}function z(B){let R=Z.get(B);J.deleteTexture(R.__webglTexture);let y=B.source,u=N.get(y);delete u[R.__cacheKey],Y.memory.textures--}function V(B){let R=Z.get(B);if(B.depthTexture)B.depthTexture.dispose(),Z.remove(B.depthTexture);if(B.isWebGLCubeRenderTarget)for(let u=0;u<6;u++){if(Array.isArray(R.__webglFramebuffer[u]))for(let i=0;i<R.__webglFramebuffer[u].length;i++)J.deleteFramebuffer(R.__webglFramebuffer[u][i]);else J.deleteFramebuffer(R.__webglFramebuffer[u]);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer[u])}else{if(Array.isArray(R.__webglFramebuffer))for(let u=0;u<R.__webglFramebuffer.length;u++)J.deleteFramebuffer(R.__webglFramebuffer[u]);else J.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer);if(R.__webglMultisampledFramebuffer)J.deleteFramebuffer(R.__webglMultisampledFramebuffer);if(R.__webglColorRenderbuffer){for(let u=0;u<R.__webglColorRenderbuffer.length;u++)if(R.__webglColorRenderbuffer[u])J.deleteRenderbuffer(R.__webglColorRenderbuffer[u])}if(R.__webglDepthRenderbuffer)J.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let y=B.textures;for(let u=0,i=y.length;u<i;u++){let g=Z.get(y[u]);if(g.__webglTexture)J.deleteTexture(g.__webglTexture),Y.memory.textures--;Z.remove(y[u])}Z.remove(B)}let A=0;function d(){A=0}function c(){let B=A;if(B>=W.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+W.maxTextures);return A+=1,B}function p(B){let R=[];return R.push(B.wrapS),R.push(B.wrapT),R.push(B.wrapR||0),R.push(B.magFilter),R.push(B.minFilter),R.push(B.anisotropy),R.push(B.internalFormat),R.push(B.format),R.push(B.type),R.push(B.generateMipmaps),R.push(B.premultiplyAlpha),R.push(B.flipY),R.push(B.unpackAlignment),R.push(B.colorSpace),R.join()}function o(B,R){let y=Z.get(B);if(B.isVideoTexture)qJ(B);if(B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&y.__version!==B.version){let u=B.image;if(u===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(u.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W0(y,B,R);return}}else if(B.isExternalTexture)y.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,y.__webglTexture,J.TEXTURE0+R)}function l(B,R){let y=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&y.__version!==B.version){W0(y,B,R);return}$.bindTexture(J.TEXTURE_2D_ARRAY,y.__webglTexture,J.TEXTURE0+R)}function r(B,R){let y=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&y.__version!==B.version){W0(y,B,R);return}$.bindTexture(J.TEXTURE_3D,y.__webglTexture,J.TEXTURE0+R)}function x(B,R){let y=Z.get(B);if(B.version>0&&y.__version!==B.version){Q0(y,B,R);return}$.bindTexture(J.TEXTURE_CUBE_MAP,y.__webglTexture,J.TEXTURE0+R)}let H0={[h$]:J.REPEAT,[x$]:J.CLAMP_TO_EDGE,[g$]:J.MIRRORED_REPEAT},G0={[t8]:J.NEAREST,[p$]:J.NEAREST_MIPMAP_NEAREST,[L6]:J.NEAREST_MIPMAP_LINEAR,[L8]:J.LINEAR,[q9]:J.LINEAR_MIPMAP_NEAREST,[e8]:J.LINEAR_MIPMAP_LINEAR},P0={[e$]:J.NEVER,[HZ]:J.ALWAYS,[JZ]:J.LESS,[o7]:J.LEQUAL,[QZ]:J.EQUAL,[WZ]:J.GEQUAL,[$Z]:J.GREATER,[ZZ]:J.NOTEQUAL};function g0(B,R){if(R.type===E8&&Q.has("OES_texture_float_linear")===!1&&(R.magFilter===L8||R.magFilter===q9||R.magFilter===L6||R.magFilter===e8||R.minFilter===L8||R.minFilter===q9||R.minFilter===L6||R.minFilter===e8))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(B,J.TEXTURE_WRAP_S,H0[R.wrapS]),J.texParameteri(B,J.TEXTURE_WRAP_T,H0[R.wrapT]),B===J.TEXTURE_3D||B===J.TEXTURE_2D_ARRAY)J.texParameteri(B,J.TEXTURE_WRAP_R,H0[R.wrapR]);if(J.texParameteri(B,J.TEXTURE_MAG_FILTER,G0[R.magFilter]),J.texParameteri(B,J.TEXTURE_MIN_FILTER,G0[R.minFilter]),R.compareFunction)J.texParameteri(B,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(B,J.TEXTURE_COMPARE_FUNC,P0[R.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===t8)return;if(R.minFilter!==L6&&R.minFilter!==e8)return;if(R.type===E8&&Q.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||Z.get(R).__currentAnisotropy){let y=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(B,y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,W.getMaxAnisotropy())),Z.get(R).__currentAnisotropy=R.anisotropy}}}function WJ(B,R){let y=!1;if(B.__webglInit===void 0)B.__webglInit=!0,R.addEventListener("dispose",C);let u=R.source,i=N.get(u);if(i===void 0)i={},N.set(u,i);let g=p(R);if(g!==B.__cacheKey){if(i[g]===void 0)i[g]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,y=!0;i[g].usedTimes++;let N0=i[B.__cacheKey];if(N0!==void 0){if(i[B.__cacheKey].usedTimes--,N0.usedTimes===0)z(R)}B.__cacheKey=g,B.__webglTexture=i[g].texture}return y}function d0(B,R,y){return Math.floor(Math.floor(B/y)/R)}function n(B,R,y,u){let g=B.updateRanges;if(g.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,R.width,R.height,y,u,R.data);else{g.sort((e,X0)=>e.start-X0.start);let N0=0;for(let e=1;e<g.length;e++){let X0=g[N0],k0=g[e],V0=X0.start+X0.count,U0=d0(k0.start,R.width,4),b0=d0(X0.start,R.width,4);if(k0.start<=V0+1&&U0===b0&&d0(k0.start+k0.count-1,R.width,4)===U0)X0.count=Math.max(X0.count,k0.start+k0.count-X0.start);else++N0,g[N0]=k0}g.length=N0+1;let J0=J.getParameter(J.UNPACK_ROW_LENGTH),F0=J.getParameter(J.UNPACK_SKIP_PIXELS),_0=J.getParameter(J.UNPACK_SKIP_ROWS);J.pixelStorei(J.UNPACK_ROW_LENGTH,R.width);for(let e=0,X0=g.length;e<X0;e++){let k0=g[e],V0=Math.floor(k0.start/4),U0=Math.ceil(k0.count/4),b0=V0%R.width,_=Math.floor(V0/R.width),K0=U0,$0=1;J.pixelStorei(J.UNPACK_SKIP_PIXELS,b0),J.pixelStorei(J.UNPACK_SKIP_ROWS,_),$.texSubImage2D(J.TEXTURE_2D,0,b0,_,K0,1,y,u,R.data)}B.clearUpdateRanges(),J.pixelStorei(J.UNPACK_ROW_LENGTH,J0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,F0),J.pixelStorei(J.UNPACK_SKIP_ROWS,_0)}}function W0(B,R,y){let u=J.TEXTURE_2D;if(R.isDataArrayTexture||R.isCompressedArrayTexture)u=J.TEXTURE_2D_ARRAY;if(R.isData3DTexture)u=J.TEXTURE_3D;let i=WJ(B,R),g=R.source;$.bindTexture(u,B.__webglTexture,J.TEXTURE0+y);let N0=Z.get(g);if(g.version!==N0.__version||i===!0){$.activeTexture(J.TEXTURE0+y);let J0=m0.getPrimaries(m0.workingColorSpace),F0=R.colorSpace===z8?null:m0.getPrimaries(R.colorSpace),_0=R.colorSpace===z8||J0===F0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,_0);let e=k(R.image,!1,W.maxTextureSize);e=EJ(R,e);let X0=H.convert(R.format,R.colorSpace),k0=H.convert(R.type),V0=L(R.internalFormat,X0,k0,R.colorSpace,R.isVideoTexture);g0(u,R);let U0,b0=R.mipmaps,_=R.isVideoTexture!==!0,K0=N0.__version===void 0||i===!0,$0=g.dataReady,q0=v(R,e);if(R.isDepthTexture){if(V0=I(R.format===w6,R.type),K0)if(_)$.texStorage2D(J.TEXTURE_2D,1,V0,e.width,e.height);else $.texImage2D(J.TEXTURE_2D,0,V0,e.width,e.height,0,X0,k0,null)}else if(R.isDataTexture)if(b0.length>0){if(_&&K0)$.texStorage2D(J.TEXTURE_2D,q0,V0,b0[0].width,b0[0].height);for(let a=0,s=b0.length;a<s;a++)if(U0=b0[a],_){if($0)$.texSubImage2D(J.TEXTURE_2D,a,0,0,U0.width,U0.height,X0,k0,U0.data)}else $.texImage2D(J.TEXTURE_2D,a,V0,U0.width,U0.height,0,X0,k0,U0.data);R.generateMipmaps=!1}else if(_){if(K0)$.texStorage2D(J.TEXTURE_2D,q0,V0,e.width,e.height);if($0)n(R,e,X0,k0)}else $.texImage2D(J.TEXTURE_2D,0,V0,e.width,e.height,0,X0,k0,e.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){if(_&&K0)$.texStorage3D(J.TEXTURE_2D_ARRAY,q0,V0,b0[0].width,b0[0].height,e.depth);for(let a=0,s=b0.length;a<s;a++)if(U0=b0[a],R.format!==nJ)if(X0!==null)if(_){if($0)if(R.layerUpdates.size>0){let O0=VQ(U0.width,U0.height,R.format,R.type);for(let j0 of R.layerUpdates){let i0=U0.data.subarray(j0*O0/U0.data.BYTES_PER_ELEMENT,(j0+1)*O0/U0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,j0,U0.width,U0.height,1,X0,i0)}R.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,0,U0.width,U0.height,e.depth,X0,U0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,a,V0,U0.width,U0.height,e.depth,0,U0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(_){if($0)$.texSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,0,U0.width,U0.height,e.depth,X0,k0,U0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,a,V0,U0.width,U0.height,e.depth,0,X0,k0,U0.data)}else{if(_&&K0)$.texStorage2D(J.TEXTURE_2D,q0,V0,b0[0].width,b0[0].height);for(let a=0,s=b0.length;a<s;a++)if(U0=b0[a],R.format!==nJ)if(X0!==null)if(_){if($0)$.compressedTexSubImage2D(J.TEXTURE_2D,a,0,0,U0.width,U0.height,X0,U0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,a,V0,U0.width,U0.height,0,U0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(_){if($0)$.texSubImage2D(J.TEXTURE_2D,a,0,0,U0.width,U0.height,X0,k0,U0.data)}else $.texImage2D(J.TEXTURE_2D,a,V0,U0.width,U0.height,0,X0,k0,U0.data)}else if(R.isDataArrayTexture)if(_){if(K0)$.texStorage3D(J.TEXTURE_2D_ARRAY,q0,V0,e.width,e.height,e.depth);if($0)if(R.layerUpdates.size>0){let a=VQ(e.width,e.height,R.format,R.type);for(let s of R.layerUpdates){let O0=e.data.subarray(s*a/e.data.BYTES_PER_ELEMENT,(s+1)*a/e.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,s,e.width,e.height,1,X0,k0,O0)}R.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,X0,k0,e.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,V0,e.width,e.height,e.depth,0,X0,k0,e.data);else if(R.isData3DTexture)if(_){if(K0)$.texStorage3D(J.TEXTURE_3D,q0,V0,e.width,e.height,e.depth);if($0)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,X0,k0,e.data)}else $.texImage3D(J.TEXTURE_3D,0,V0,e.width,e.height,e.depth,0,X0,k0,e.data);else if(R.isFramebufferTexture){if(K0)if(_)$.texStorage2D(J.TEXTURE_2D,q0,V0,e.width,e.height);else{let{width:a,height:s}=e;for(let O0=0;O0<q0;O0++)$.texImage2D(J.TEXTURE_2D,O0,V0,a,s,0,X0,k0,null),a>>=1,s>>=1}}else if(b0.length>0){if(_&&K0){let a=HJ(b0[0]);$.texStorage2D(J.TEXTURE_2D,q0,V0,a.width,a.height)}for(let a=0,s=b0.length;a<s;a++)if(U0=b0[a],_){if($0)$.texSubImage2D(J.TEXTURE_2D,a,0,0,X0,k0,U0)}else $.texImage2D(J.TEXTURE_2D,a,V0,X0,k0,U0);R.generateMipmaps=!1}else if(_){if(K0){let a=HJ(e);$.texStorage2D(J.TEXTURE_2D,q0,V0,a.width,a.height)}if($0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,X0,k0,e)}else $.texImage2D(J.TEXTURE_2D,0,V0,X0,k0,e);if(q(R))D(u);if(N0.__version=g.version,R.onUpdate)R.onUpdate(R)}B.__version=R.version}function Q0(B,R,y){if(R.image.length!==6)return;let u=WJ(B,R),i=R.source;$.bindTexture(J.TEXTURE_CUBE_MAP,B.__webglTexture,J.TEXTURE0+y);let g=Z.get(i);if(i.version!==g.__version||u===!0){$.activeTexture(J.TEXTURE0+y);let N0=m0.getPrimaries(m0.workingColorSpace),J0=R.colorSpace===z8?null:m0.getPrimaries(R.colorSpace),F0=R.colorSpace===z8||N0===J0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,F0);let _0=R.isCompressedTexture||R.image[0].isCompressedTexture,e=R.image[0]&&R.image[0].isDataTexture,X0=[];for(let s=0;s<6;s++){if(!_0&&!e)X0[s]=k(R.image[s],!0,W.maxCubemapSize);else X0[s]=e?R.image[s].image:R.image[s];X0[s]=EJ(R,X0[s])}let k0=X0[0],V0=H.convert(R.format,R.colorSpace),U0=H.convert(R.type),b0=L(R.internalFormat,V0,U0,R.colorSpace),_=R.isVideoTexture!==!0,K0=g.__version===void 0||u===!0,$0=i.dataReady,q0=v(R,k0);g0(J.TEXTURE_CUBE_MAP,R);let a;if(_0){if(_&&K0)$.texStorage2D(J.TEXTURE_CUBE_MAP,q0,b0,k0.width,k0.height);for(let s=0;s<6;s++){a=X0[s].mipmaps;for(let O0=0;O0<a.length;O0++){let j0=a[O0];if(R.format!==nJ)if(V0!==null)if(_){if($0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,O0,0,0,j0.width,j0.height,V0,j0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,O0,b0,j0.width,j0.height,0,j0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(_){if($0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,O0,0,0,j0.width,j0.height,V0,U0,j0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,O0,b0,j0.width,j0.height,0,V0,U0,j0.data)}}}else{if(a=R.mipmaps,_&&K0){if(a.length>0)q0++;let s=HJ(X0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,q0,b0,s.width,s.height)}for(let s=0;s<6;s++)if(e){if(_){if($0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,0,0,X0[s].width,X0[s].height,V0,U0,X0[s].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,b0,X0[s].width,X0[s].height,0,V0,U0,X0[s].data);for(let O0=0;O0<a.length;O0++){let i0=a[O0].image[s].image;if(_){if($0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,O0+1,0,0,i0.width,i0.height,V0,U0,i0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,O0+1,b0,i0.width,i0.height,0,V0,U0,i0.data)}}else{if(_){if($0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,0,0,V0,U0,X0[s])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,b0,V0,U0,X0[s]);for(let O0=0;O0<a.length;O0++){let j0=a[O0];if(_){if($0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,O0+1,0,0,V0,U0,j0.image[s])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,O0+1,b0,V0,U0,j0.image[s])}}}if(q(R))D(J.TEXTURE_CUBE_MAP);if(g.__version=i.version,R.onUpdate)R.onUpdate(R)}B.__version=R.version}function M0(B,R,y,u,i,g){let N0=H.convert(y.format,y.colorSpace),J0=H.convert(y.type),F0=L(y.internalFormat,N0,J0,y.colorSpace),_0=Z.get(R),e=Z.get(y);if(e.__renderTarget=R,!_0.__hasExternalTextures){let X0=Math.max(1,R.width>>g),k0=Math.max(1,R.height>>g);if(i===J.TEXTURE_3D||i===J.TEXTURE_2D_ARRAY)$.texImage3D(i,g,F0,X0,k0,R.depth,0,N0,J0,null);else $.texImage2D(i,g,F0,X0,k0,0,N0,J0,null)}if($.bindFramebuffer(J.FRAMEBUFFER,B),w0(R))K.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,u,i,e.__webglTexture,0,L0(R));else if(i===J.TEXTURE_2D||i>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,u,i,e.__webglTexture,g);$.bindFramebuffer(J.FRAMEBUFFER,null)}function T0(B,R,y){if(J.bindRenderbuffer(J.RENDERBUFFER,B),R.depthBuffer){let u=R.depthTexture,i=u&&u.isDepthTexture?u.type:null,g=I(R.stencilBuffer,i),N0=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,J0=L0(R);if(w0(R))K.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,J0,g,R.width,R.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,J0,g,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,g,R.width,R.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,N0,J.RENDERBUFFER,B)}else{let u=R.textures;for(let i=0;i<u.length;i++){let g=u[i],N0=H.convert(g.format,g.colorSpace),J0=H.convert(g.type),F0=L(g.internalFormat,N0,J0,g.colorSpace),_0=L0(R);if(y&&w0(R)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,_0,F0,R.width,R.height);else if(w0(R))K.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,_0,F0,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,F0,R.width,R.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function S0(B,R){if(R&&R.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if($.bindFramebuffer(J.FRAMEBUFFER,B),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let u=Z.get(R.depthTexture);if(u.__renderTarget=R,!u.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0;o(R.depthTexture,0);let i=u.__webglTexture,g=L0(R);if(R.depthTexture.format===D9)if(w0(R))K.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,i,0,g);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,i,0);else if(R.depthTexture.format===w6)if(w0(R))K.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,i,0,g);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,i,0);else throw Error("Unknown depthTexture format")}function GJ(B){let R=Z.get(B),y=B.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==B.depthTexture){let u=B.depthTexture;if(R.__depthDisposeCallback)R.__depthDisposeCallback();if(u){let i=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,u.removeEventListener("dispose",i)};u.addEventListener("dispose",i),R.__depthDisposeCallback=i}R.__boundDepthTexture=u}if(B.depthTexture&&!R.__autoAllocateDepthBuffer){if(y)throw Error("target.depthTexture not supported in Cube render targets");let u=B.texture.mipmaps;if(u&&u.length>0)S0(R.__webglFramebuffer[0],B);else S0(R.__webglFramebuffer,B)}else if(y){R.__webglDepthbuffer=[];for(let u=0;u<6;u++)if($.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[u]),R.__webglDepthbuffer[u]===void 0)R.__webglDepthbuffer[u]=J.createRenderbuffer(),T0(R.__webglDepthbuffer[u],B,!1);else{let i=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,g=R.__webglDepthbuffer[u];J.bindRenderbuffer(J.RENDERBUFFER,g),J.framebufferRenderbuffer(J.FRAMEBUFFER,i,J.RENDERBUFFER,g)}}else{let u=B.texture.mipmaps;if(u&&u.length>0)$.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer);if(R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=J.createRenderbuffer(),T0(R.__webglDepthbuffer,B,!1);else{let i=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,g=R.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,g),J.framebufferRenderbuffer(J.FRAMEBUFFER,i,J.RENDERBUFFER,g)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function w(B,R,y){let u=Z.get(B);if(R!==void 0)M0(u.__webglFramebuffer,B,B.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(y!==void 0)GJ(B)}function t0(B){let R=B.texture,y=Z.get(B),u=Z.get(R);B.addEventListener("dispose",T);let i=B.textures,g=B.isWebGLCubeRenderTarget===!0,N0=i.length>1;if(!N0){if(u.__webglTexture===void 0)u.__webglTexture=J.createTexture();u.__version=R.version,Y.memory.textures++}if(g){y.__webglFramebuffer=[];for(let J0=0;J0<6;J0++)if(R.mipmaps&&R.mipmaps.length>0){y.__webglFramebuffer[J0]=[];for(let F0=0;F0<R.mipmaps.length;F0++)y.__webglFramebuffer[J0][F0]=J.createFramebuffer()}else y.__webglFramebuffer[J0]=J.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){y.__webglFramebuffer=[];for(let J0=0;J0<R.mipmaps.length;J0++)y.__webglFramebuffer[J0]=J.createFramebuffer()}else y.__webglFramebuffer=J.createFramebuffer();if(N0)for(let J0=0,F0=i.length;J0<F0;J0++){let _0=Z.get(i[J0]);if(_0.__webglTexture===void 0)_0.__webglTexture=J.createTexture(),Y.memory.textures++}if(B.samples>0&&w0(B)===!1){y.__webglMultisampledFramebuffer=J.createFramebuffer(),y.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,y.__webglMultisampledFramebuffer);for(let J0=0;J0<i.length;J0++){let F0=i[J0];y.__webglColorRenderbuffer[J0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,y.__webglColorRenderbuffer[J0]);let _0=H.convert(F0.format,F0.colorSpace),e=H.convert(F0.type),X0=L(F0.internalFormat,_0,e,F0.colorSpace,B.isXRRenderTarget===!0),k0=L0(B);J.renderbufferStorageMultisample(J.RENDERBUFFER,k0,X0,B.width,B.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+J0,J.RENDERBUFFER,y.__webglColorRenderbuffer[J0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),B.depthBuffer)y.__webglDepthRenderbuffer=J.createRenderbuffer(),T0(y.__webglDepthRenderbuffer,B,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(g){$.bindTexture(J.TEXTURE_CUBE_MAP,u.__webglTexture),g0(J.TEXTURE_CUBE_MAP,R);for(let J0=0;J0<6;J0++)if(R.mipmaps&&R.mipmaps.length>0)for(let F0=0;F0<R.mipmaps.length;F0++)M0(y.__webglFramebuffer[J0][F0],B,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,F0);else M0(y.__webglFramebuffer[J0],B,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0);if(q(R))D(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(N0){for(let J0=0,F0=i.length;J0<F0;J0++){let _0=i[J0],e=Z.get(_0),X0=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)X0=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(X0,e.__webglTexture),g0(X0,_0),M0(y.__webglFramebuffer,B,_0,J.COLOR_ATTACHMENT0+J0,X0,0),q(_0))D(X0)}$.unbindTexture()}else{let J0=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)J0=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(J0,u.__webglTexture),g0(J0,R),R.mipmaps&&R.mipmaps.length>0)for(let F0=0;F0<R.mipmaps.length;F0++)M0(y.__webglFramebuffer[F0],B,R,J.COLOR_ATTACHMENT0,J0,F0);else M0(y.__webglFramebuffer,B,R,J.COLOR_ATTACHMENT0,J0,0);if(q(R))D(J0);$.unbindTexture()}if(B.depthBuffer)GJ(B)}function y0(B){let R=B.textures;for(let y=0,u=R.length;y<u;y++){let i=R[y];if(q(i)){let g=P(B),N0=Z.get(i).__webglTexture;$.bindTexture(g,N0),D(g),$.unbindTexture()}}}let A0=[],R0=[];function e0(B){if(B.samples>0){if(w0(B)===!1){let{textures:R,width:y,height:u}=B,i=J.COLOR_BUFFER_BIT,g=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,N0=Z.get(B),J0=R.length>1;if(J0)for(let _0=0;_0<R.length;_0++)$.bindFramebuffer(J.FRAMEBUFFER,N0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+_0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,N0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+_0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,N0.__webglMultisampledFramebuffer);let F0=B.texture.mipmaps;if(F0&&F0.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,N0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,N0.__webglFramebuffer);for(let _0=0;_0<R.length;_0++){if(B.resolveDepthBuffer){if(B.depthBuffer)i|=J.DEPTH_BUFFER_BIT;if(B.stencilBuffer&&B.resolveStencilBuffer)i|=J.STENCIL_BUFFER_BIT}if(J0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,N0.__webglColorRenderbuffer[_0]);let e=Z.get(R[_0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,e,0)}if(J.blitFramebuffer(0,0,y,u,0,0,y,u,i,J.NEAREST),X===!0){if(A0.length=0,R0.length=0,A0.push(J.COLOR_ATTACHMENT0+_0),B.depthBuffer&&B.resolveDepthBuffer===!1)A0.push(g),R0.push(g),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,R0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,A0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J0)for(let _0=0;_0<R.length;_0++){$.bindFramebuffer(J.FRAMEBUFFER,N0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+_0,J.RENDERBUFFER,N0.__webglColorRenderbuffer[_0]);let e=Z.get(R[_0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,N0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+_0,J.TEXTURE_2D,e,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,N0.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&X){let R=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[R])}}}function L0(B){return Math.min(W.maxSamples,B.samples)}function w0(B){let R=Z.get(B);return B.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function qJ(B){let R=Y.render.frame;if(G.get(B)!==R)G.set(B,R),B.update()}function EJ(B,R){let{colorSpace:y,format:u,type:i}=B;if(B.isCompressedTexture===!0||B.isVideoTexture===!0)return R;if(y!==I6&&y!==z8)if(m0.getTransfer(y)===a0){if(u!==nJ||i!==G8)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",y);return R}function HJ(B){if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement)U.width=B.naturalWidth||B.width,U.height=B.naturalHeight||B.height;else if(typeof VideoFrame<"u"&&B instanceof VideoFrame)U.width=B.displayWidth,U.height=B.displayHeight;else U.width=B.width,U.height=B.height;return U}this.allocateTextureUnit=c,this.resetTextureUnits=d,this.setTexture2D=o,this.setTexture2DArray=l,this.setTexture3D=r,this.setTextureCube=x,this.rebindTextures=w,this.setupRenderTarget=t0,this.updateRenderTargetMipmap=y0,this.updateMultisampleRenderTarget=e0,this.setupDepthRenderbuffer=GJ,this.setupFrameBufferTexture=M0,this.useMultisampledRTT=w0}function WU(J,Q){function $(Z,W=z8){let H,Y=m0.getTransfer(W);if(Z===G8)return J.UNSIGNED_BYTE;if(Z===O7)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===R7)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===l$)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===u$)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===m$)return J.BYTE;if(Z===d$)return J.SHORT;if(Z===z6)return J.UNSIGNED_SHORT;if(Z===D7)return J.INT;if(Z===J6)return J.UNSIGNED_INT;if(Z===E8)return J.FLOAT;if(Z===B6)return J.HALF_FLOAT;if(Z===c$)return J.ALPHA;if(Z===n$)return J.RGB;if(Z===nJ)return J.RGBA;if(Z===D9)return J.DEPTH_COMPONENT;if(Z===w6)return J.DEPTH_STENCIL;if(Z===s$)return J.RED;if(Z===F7)return J.RED_INTEGER;if(Z===i$)return J.RG;if(Z===M7)return J.RG_INTEGER;if(Z===k7)return J.RGBA_INTEGER;if(Z===O9||Z===R9||Z===F9||Z===M9)if(Y===a0)if(H=Q.get("WEBGL_compressed_texture_s3tc_srgb"),H!==null){if(Z===O9)return H.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===R9)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===F9)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===M9)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(H=Q.get("WEBGL_compressed_texture_s3tc"),H!==null){if(Z===O9)return H.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===R9)return H.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===F9)return H.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===M9)return H.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===V7||Z===L7||Z===z7||Z===B7)if(H=Q.get("WEBGL_compressed_texture_pvrtc"),H!==null){if(Z===V7)return H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===L7)return H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===z7)return H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===B7)return H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===w7||Z===I7||Z===_7)if(H=Q.get("WEBGL_compressed_texture_etc"),H!==null){if(Z===w7||Z===I7)return Y===a0?H.COMPRESSED_SRGB8_ETC2:H.COMPRESSED_RGB8_ETC2;if(Z===_7)return Y===a0?H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:H.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Z===C7||Z===P7||Z===A7||Z===T7||Z===S7||Z===j7||Z===y7||Z===v7||Z===f7||Z===b7||Z===h7||Z===x7||Z===g7||Z===p7)if(H=Q.get("WEBGL_compressed_texture_astc"),H!==null){if(Z===C7)return Y===a0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:H.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===P7)return Y===a0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:H.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===A7)return Y===a0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:H.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===T7)return Y===a0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:H.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===S7)return Y===a0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:H.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===j7)return Y===a0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:H.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===y7)return Y===a0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:H.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===v7)return Y===a0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:H.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===f7)return Y===a0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:H.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===b7)return Y===a0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:H.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===h7)return Y===a0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:H.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===x7)return Y===a0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:H.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===g7)return Y===a0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:H.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===p7)return Y===a0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:H.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===m7||Z===d7||Z===l7)if(H=Q.get("EXT_texture_compression_bptc"),H!==null){if(Z===m7)return Y===a0?H.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:H.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===d7)return H.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===l7)return H.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===u7||Z===c7||Z===n7||Z===s7)if(H=Q.get("EXT_texture_compression_rgtc"),H!==null){if(Z===u7)return H.COMPRESSED_RED_RGTC1_EXT;if(Z===c7)return H.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===n7)return H.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===s7)return H.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===Q6)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var HU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cZ{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new T9(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new hJ({vertexShader:HU,fragmentShader:KU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new AJ(new _8(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nZ extends N8{constructor(J,Q){super();let $=this,Z=null,W=1,H=null,Y="local-floor",K=1,X=null,U=null,G=null,E=null,N=null,O=null,M=typeof XRWebGLBinding<"u",k=new cZ,q={},D=Q.getContextAttributes(),P=null,L=null,I=[],v=[],C=new c0,T=null,m=new _J;m.viewport=new ZJ;let z=new _J;z.viewport=new ZJ;let V=[m,z],A=new FQ,d=null,c=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(n){let W0=I[n];if(W0===void 0)W0=new P6,I[n]=W0;return W0.getTargetRaySpace()},this.getControllerGrip=function(n){let W0=I[n];if(W0===void 0)W0=new P6,I[n]=W0;return W0.getGripSpace()},this.getHand=function(n){let W0=I[n];if(W0===void 0)W0=new P6,I[n]=W0;return W0.getHandSpace()};function p(n){let W0=v.indexOf(n.inputSource);if(W0===-1)return;let Q0=I[W0];if(Q0!==void 0)Q0.update(n.inputSource,n.frame,X||H),Q0.dispatchEvent({type:n.type,data:n.inputSource})}function o(){Z.removeEventListener("select",p),Z.removeEventListener("selectstart",p),Z.removeEventListener("selectend",p),Z.removeEventListener("squeeze",p),Z.removeEventListener("squeezestart",p),Z.removeEventListener("squeezeend",p),Z.removeEventListener("end",o),Z.removeEventListener("inputsourceschange",l);for(let n=0;n<I.length;n++){let W0=v[n];if(W0===null)continue;v[n]=null,I[n].disconnect(W0)}d=null,c=null,k.reset();for(let n in q)delete q[n];J.setRenderTarget(P),N=null,E=null,G=null,Z=null,L=null,d0.stop(),$.isPresenting=!1,J.setPixelRatio(T),J.setSize(C.width,C.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(n){if(W=n,$.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(n){if(Y=n,$.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||H},this.setReferenceSpace=function(n){X=n},this.getBaseLayer=function(){return E!==null?E:N},this.getBinding=function(){if(G===null&&M)G=new XRWebGLBinding(Z,Q);return G},this.getFrame=function(){return O},this.getSession=function(){return Z},this.setSession=async function(n){if(Z=n,Z!==null){if(P=J.getRenderTarget(),Z.addEventListener("select",p),Z.addEventListener("selectstart",p),Z.addEventListener("selectend",p),Z.addEventListener("squeeze",p),Z.addEventListener("squeezestart",p),Z.addEventListener("squeezeend",p),Z.addEventListener("end",o),Z.addEventListener("inputsourceschange",l),D.xrCompatible!==!0)await Q.makeXRCompatible();if(T=J.getPixelRatio(),J.getSize(C),!(M&&("createProjectionLayer"in XRWebGLBinding.prototype))){let Q0={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:W};N=new XRWebGLLayer(Z,Q,Q0),Z.updateRenderState({baseLayer:N}),J.setPixelRatio(1),J.setSize(N.framebufferWidth,N.framebufferHeight,!1),L=new $8(N.framebufferWidth,N.framebufferHeight,{format:nJ,type:G8,colorSpace:J.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1})}else{let Q0=null,M0=null,T0=null;if(D.depth)T0=D.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,Q0=D.stencil?w6:D9,M0=D.stencil?Q6:J6;let S0={colorFormat:Q.RGBA8,depthFormat:T0,scaleFactor:W};G=this.getBinding(),E=G.createProjectionLayer(S0),Z.updateRenderState({layers:[E]}),J.setPixelRatio(1),J.setSize(E.textureWidth,E.textureHeight,!1),L=new $8(E.textureWidth,E.textureHeight,{format:nJ,type:G8,depthTexture:new A9(E.textureWidth,E.textureHeight,M0,void 0,void 0,void 0,void 0,void 0,void 0,Q0),stencilBuffer:D.stencil,colorSpace:J.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(K),X=null,H=await Z.requestReferenceSpace(Y),d0.setContext(Z),d0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return k.getDepthTexture()};function l(n){for(let W0=0;W0<n.removed.length;W0++){let Q0=n.removed[W0],M0=v.indexOf(Q0);if(M0>=0)v[M0]=null,I[M0].disconnect(Q0)}for(let W0=0;W0<n.added.length;W0++){let Q0=n.added[W0],M0=v.indexOf(Q0);if(M0===-1){for(let S0=0;S0<I.length;S0++)if(S0>=v.length){v.push(Q0),M0=S0;break}else if(v[S0]===null){v[S0]=Q0,M0=S0;break}if(M0===-1)break}let T0=I[M0];if(T0)T0.connect(Q0)}}let r=new f,x=new f;function H0(n,W0,Q0){r.setFromMatrixPosition(W0.matrixWorld),x.setFromMatrixPosition(Q0.matrixWorld);let M0=r.distanceTo(x),T0=W0.projectionMatrix.elements,S0=Q0.projectionMatrix.elements,GJ=T0[14]/(T0[10]-1),w=T0[14]/(T0[10]+1),t0=(T0[9]+1)/T0[5],y0=(T0[9]-1)/T0[5],A0=(T0[8]-1)/T0[0],R0=(S0[8]+1)/S0[0],e0=GJ*A0,L0=GJ*R0,w0=M0/(-A0+R0),qJ=w0*-A0;if(W0.matrixWorld.decompose(n.position,n.quaternion,n.scale),n.translateX(qJ),n.translateZ(w0),n.matrixWorld.compose(n.position,n.quaternion,n.scale),n.matrixWorldInverse.copy(n.matrixWorld).invert(),T0[10]===-1)n.projectionMatrix.copy(W0.projectionMatrix),n.projectionMatrixInverse.copy(W0.projectionMatrixInverse);else{let EJ=GJ+w0,HJ=w+w0,B=e0-qJ,R=L0+(M0-qJ),y=t0*w/HJ*EJ,u=y0*w/HJ*EJ;n.projectionMatrix.makePerspective(B,R,y,u,EJ,HJ),n.projectionMatrixInverse.copy(n.projectionMatrix).invert()}}function G0(n,W0){if(W0===null)n.matrixWorld.copy(n.matrix);else n.matrixWorld.multiplyMatrices(W0.matrixWorld,n.matrix);n.matrixWorldInverse.copy(n.matrixWorld).invert()}this.updateCamera=function(n){if(Z===null)return;let{near:W0,far:Q0}=n;if(k.texture!==null){if(k.depthNear>0)W0=k.depthNear;if(k.depthFar>0)Q0=k.depthFar}if(A.near=z.near=m.near=W0,A.far=z.far=m.far=Q0,d!==A.near||c!==A.far)Z.updateRenderState({depthNear:A.near,depthFar:A.far}),d=A.near,c=A.far;A.layers.mask=n.layers.mask|6,m.layers.mask=A.layers.mask&3,z.layers.mask=A.layers.mask&5;let M0=n.parent,T0=A.cameras;G0(A,M0);for(let S0=0;S0<T0.length;S0++)G0(T0[S0],M0);if(T0.length===2)H0(A,m,z);else A.projectionMatrix.copy(m.projectionMatrix);P0(n,A,M0)};function P0(n,W0,Q0){if(Q0===null)n.matrix.copy(W0.matrixWorld);else n.matrix.copy(Q0.matrixWorld),n.matrix.invert(),n.matrix.multiply(W0.matrixWorld);if(n.matrix.decompose(n.position,n.quaternion,n.scale),n.updateMatrixWorld(!0),n.projectionMatrix.copy(W0.projectionMatrix),n.projectionMatrixInverse.copy(W0.projectionMatrixInverse),n.isPerspectiveCamera)n.fov=Q9*2*Math.atan(1/n.projectionMatrix.elements[5]),n.zoom=1}this.getCamera=function(){return A},this.getFoveation=function(){if(E===null&&N===null)return;return K},this.setFoveation=function(n){if(K=n,E!==null)E.fixedFoveation=n;if(N!==null&&N.fixedFoveation!==void 0)N.fixedFoveation=n},this.hasDepthSensing=function(){return k.texture!==null},this.getDepthSensingMesh=function(){return k.getMesh(A)},this.getCameraTexture=function(n){return q[n]};let g0=null;function WJ(n,W0){if(U=W0.getViewerPose(X||H),O=W0,U!==null){let Q0=U.views;if(N!==null)J.setRenderTargetFramebuffer(L,N.framebuffer),J.setRenderTarget(L);let M0=!1;if(Q0.length!==A.cameras.length)A.cameras.length=0,M0=!0;for(let w=0;w<Q0.length;w++){let t0=Q0[w],y0=null;if(N!==null)y0=N.getViewport(t0);else{let R0=G.getViewSubImage(E,t0);if(y0=R0.viewport,w===0)J.setRenderTargetTextures(L,R0.colorTexture,R0.depthStencilTexture),J.setRenderTarget(L)}let A0=V[w];if(A0===void 0)A0=new _J,A0.layers.enable(w),A0.viewport=new ZJ,V[w]=A0;if(A0.matrix.fromArray(t0.transform.matrix),A0.matrix.decompose(A0.position,A0.quaternion,A0.scale),A0.projectionMatrix.fromArray(t0.projectionMatrix),A0.projectionMatrixInverse.copy(A0.projectionMatrix).invert(),A0.viewport.set(y0.x,y0.y,y0.width,y0.height),w===0)A.matrix.copy(A0.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale);if(M0===!0)A.cameras.push(A0)}let T0=Z.enabledFeatures;if(T0&&T0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&M){G=$.getBinding();let w=G.getDepthInformation(Q0[0]);if(w&&w.isValid&&w.texture)k.init(w,Z.renderState)}if(T0&&T0.includes("camera-access")&&M){J.state.unbindTexture(),G=$.getBinding();for(let w=0;w<Q0.length;w++){let t0=Q0[w].camera;if(t0){let y0=q[t0];if(!y0)y0=new T9,q[t0]=y0;let A0=G.getCameraImage(t0);y0.sourceTexture=A0}}}}for(let Q0=0;Q0<I.length;Q0++){let M0=v[Q0],T0=I[Q0];if(M0!==null&&T0!==void 0)T0.update(M0,W0,X||H)}if(g0)g0(n,W0);if(W0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:W0});O=null}let d0=new fZ;d0.setAnimationLoop(WJ),this.setAnimationLoop=function(n){g0=n},this.dispose=function(){}}}var T8=new uJ,YU=new KJ;function XU(J,Q){function $(q,D){if(q.matrixAutoUpdate===!0)q.updateMatrix();D.value.copy(q.matrix)}function Z(q,D){if(D.color.getRGB(q.fogColor.value,$Q(J)),D.isFog)q.fogNear.value=D.near,q.fogFar.value=D.far;else if(D.isFogExp2)q.fogDensity.value=D.density}function W(q,D,P,L,I){if(D.isMeshBasicMaterial)H(q,D);else if(D.isMeshLambertMaterial)H(q,D);else if(D.isMeshToonMaterial)H(q,D),E(q,D);else if(D.isMeshPhongMaterial)H(q,D),G(q,D);else if(D.isMeshStandardMaterial){if(H(q,D),N(q,D),D.isMeshPhysicalMaterial)O(q,D,I)}else if(D.isMeshMatcapMaterial)H(q,D),M(q,D);else if(D.isMeshDepthMaterial)H(q,D);else if(D.isMeshDistanceMaterial)H(q,D),k(q,D);else if(D.isMeshNormalMaterial)H(q,D);else if(D.isLineBasicMaterial){if(Y(q,D),D.isLineDashedMaterial)K(q,D)}else if(D.isPointsMaterial)X(q,D,P,L);else if(D.isSpriteMaterial)U(q,D);else if(D.isShadowMaterial)q.color.value.copy(D.color),q.opacity.value=D.opacity;else if(D.isShaderMaterial)D.uniformsNeedUpdate=!1}function H(q,D){if(q.opacity.value=D.opacity,D.color)q.diffuse.value.copy(D.color);if(D.emissive)q.emissive.value.copy(D.emissive).multiplyScalar(D.emissiveIntensity);if(D.map)q.map.value=D.map,$(D.map,q.mapTransform);if(D.alphaMap)q.alphaMap.value=D.alphaMap,$(D.alphaMap,q.alphaMapTransform);if(D.bumpMap){if(q.bumpMap.value=D.bumpMap,$(D.bumpMap,q.bumpMapTransform),q.bumpScale.value=D.bumpScale,D.side===PJ)q.bumpScale.value*=-1}if(D.normalMap){if(q.normalMap.value=D.normalMap,$(D.normalMap,q.normalMapTransform),q.normalScale.value.copy(D.normalScale),D.side===PJ)q.normalScale.value.negate()}if(D.displacementMap)q.displacementMap.value=D.displacementMap,$(D.displacementMap,q.displacementMapTransform),q.displacementScale.value=D.displacementScale,q.displacementBias.value=D.displacementBias;if(D.emissiveMap)q.emissiveMap.value=D.emissiveMap,$(D.emissiveMap,q.emissiveMapTransform);if(D.specularMap)q.specularMap.value=D.specularMap,$(D.specularMap,q.specularMapTransform);if(D.alphaTest>0)q.alphaTest.value=D.alphaTest;let P=Q.get(D),L=P.envMap,I=P.envMapRotation;if(L){if(q.envMap.value=L,T8.copy(I),T8.x*=-1,T8.y*=-1,T8.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1)T8.y*=-1,T8.z*=-1;q.envMapRotation.value.setFromMatrix4(YU.makeRotationFromEuler(T8)),q.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,q.reflectivity.value=D.reflectivity,q.ior.value=D.ior,q.refractionRatio.value=D.refractionRatio}if(D.lightMap)q.lightMap.value=D.lightMap,q.lightMapIntensity.value=D.lightMapIntensity,$(D.lightMap,q.lightMapTransform);if(D.aoMap)q.aoMap.value=D.aoMap,q.aoMapIntensity.value=D.aoMapIntensity,$(D.aoMap,q.aoMapTransform)}function Y(q,D){if(q.diffuse.value.copy(D.color),q.opacity.value=D.opacity,D.map)q.map.value=D.map,$(D.map,q.mapTransform)}function K(q,D){q.dashSize.value=D.dashSize,q.totalSize.value=D.dashSize+D.gapSize,q.scale.value=D.scale}function X(q,D,P,L){if(q.diffuse.value.copy(D.color),q.opacity.value=D.opacity,q.size.value=D.size*P,q.scale.value=L*0.5,D.map)q.map.value=D.map,$(D.map,q.uvTransform);if(D.alphaMap)q.alphaMap.value=D.alphaMap,$(D.alphaMap,q.alphaMapTransform);if(D.alphaTest>0)q.alphaTest.value=D.alphaTest}function U(q,D){if(q.diffuse.value.copy(D.color),q.opacity.value=D.opacity,q.rotation.value=D.rotation,D.map)q.map.value=D.map,$(D.map,q.mapTransform);if(D.alphaMap)q.alphaMap.value=D.alphaMap,$(D.alphaMap,q.alphaMapTransform);if(D.alphaTest>0)q.alphaTest.value=D.alphaTest}function G(q,D){q.specular.value.copy(D.specular),q.shininess.value=Math.max(D.shininess,0.0001)}function E(q,D){if(D.gradientMap)q.gradientMap.value=D.gradientMap}function N(q,D){if(q.metalness.value=D.metalness,D.metalnessMap)q.metalnessMap.value=D.metalnessMap,$(D.metalnessMap,q.metalnessMapTransform);if(q.roughness.value=D.roughness,D.roughnessMap)q.roughnessMap.value=D.roughnessMap,$(D.roughnessMap,q.roughnessMapTransform);if(D.envMap)q.envMapIntensity.value=D.envMapIntensity}function O(q,D,P){if(q.ior.value=D.ior,D.sheen>0){if(q.sheenColor.value.copy(D.sheenColor).multiplyScalar(D.sheen),q.sheenRoughness.value=D.sheenRoughness,D.sheenColorMap)q.sheenColorMap.value=D.sheenColorMap,$(D.sheenColorMap,q.sheenColorMapTransform);if(D.sheenRoughnessMap)q.sheenRoughnessMap.value=D.sheenRoughnessMap,$(D.sheenRoughnessMap,q.sheenRoughnessMapTransform)}if(D.clearcoat>0){if(q.clearcoat.value=D.clearcoat,q.clearcoatRoughness.value=D.clearcoatRoughness,D.clearcoatMap)q.clearcoatMap.value=D.clearcoatMap,$(D.clearcoatMap,q.clearcoatMapTransform);if(D.clearcoatRoughnessMap)q.clearcoatRoughnessMap.value=D.clearcoatRoughnessMap,$(D.clearcoatRoughnessMap,q.clearcoatRoughnessMapTransform);if(D.clearcoatNormalMap){if(q.clearcoatNormalMap.value=D.clearcoatNormalMap,$(D.clearcoatNormalMap,q.clearcoatNormalMapTransform),q.clearcoatNormalScale.value.copy(D.clearcoatNormalScale),D.side===PJ)q.clearcoatNormalScale.value.negate()}}if(D.dispersion>0)q.dispersion.value=D.dispersion;if(D.iridescence>0){if(q.iridescence.value=D.iridescence,q.iridescenceIOR.value=D.iridescenceIOR,q.iridescenceThicknessMinimum.value=D.iridescenceThicknessRange[0],q.iridescenceThicknessMaximum.value=D.iridescenceThicknessRange[1],D.iridescenceMap)q.iridescenceMap.value=D.iridescenceMap,$(D.iridescenceMap,q.iridescenceMapTransform);if(D.iridescenceThicknessMap)q.iridescenceThicknessMap.value=D.iridescenceThicknessMap,$(D.iridescenceThicknessMap,q.iridescenceThicknessMapTransform)}if(D.transmission>0){if(q.transmission.value=D.transmission,q.transmissionSamplerMap.value=P.texture,q.transmissionSamplerSize.value.set(P.width,P.height),D.transmissionMap)q.transmissionMap.value=D.transmissionMap,$(D.transmissionMap,q.transmissionMapTransform);if(q.thickness.value=D.thickness,D.thicknessMap)q.thicknessMap.value=D.thicknessMap,$(D.thicknessMap,q.thicknessMapTransform);q.attenuationDistance.value=D.attenuationDistance,q.attenuationColor.value.copy(D.attenuationColor)}if(D.anisotropy>0){if(q.anisotropyVector.value.set(D.anisotropy*Math.cos(D.anisotropyRotation),D.anisotropy*Math.sin(D.anisotropyRotation)),D.anisotropyMap)q.anisotropyMap.value=D.anisotropyMap,$(D.anisotropyMap,q.anisotropyMapTransform)}if(q.specularIntensity.value=D.specularIntensity,q.specularColor.value.copy(D.specularColor),D.specularColorMap)q.specularColorMap.value=D.specularColorMap,$(D.specularColorMap,q.specularColorMapTransform);if(D.specularIntensityMap)q.specularIntensityMap.value=D.specularIntensityMap,$(D.specularIntensityMap,q.specularIntensityMapTransform)}function M(q,D){if(D.matcap)q.matcap.value=D.matcap}function k(q,D){let P=Q.get(D).light;q.referencePosition.value.setFromMatrixPosition(P.matrixWorld),q.nearDistance.value=P.shadow.camera.near,q.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function UU(J,Q,$,Z){let W={},H={},Y=[],K=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(P,L){let I=L.program;Z.uniformBlockBinding(P,I)}function U(P,L){let I=W[P.id];if(I===void 0)M(P),I=G(P),W[P.id]=I,P.addEventListener("dispose",q);let v=L.program;Z.updateUBOMapping(P,v);let C=Q.render.frame;if(H[P.id]!==C)N(P),H[P.id]=C}function G(P){let L=E();P.__bindingPointIndex=L;let I=J.createBuffer(),v=P.__size,C=P.usage;return J.bindBuffer(J.UNIFORM_BUFFER,I),J.bufferData(J.UNIFORM_BUFFER,v,C),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,L,I),I}function E(){for(let P=0;P<K;P++)if(Y.indexOf(P)===-1)return Y.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function N(P){let L=W[P.id],I=P.uniforms,v=P.__cache;J.bindBuffer(J.UNIFORM_BUFFER,L);for(let C=0,T=I.length;C<T;C++){let m=Array.isArray(I[C])?I[C]:[I[C]];for(let z=0,V=m.length;z<V;z++){let A=m[z];if(O(A,C,z,v)===!0){let d=A.__offset,c=Array.isArray(A.value)?A.value:[A.value],p=0;for(let o=0;o<c.length;o++){let l=c[o],r=k(l);if(typeof l==="number"||typeof l==="boolean")A.__data[0]=l,J.bufferSubData(J.UNIFORM_BUFFER,d+p,A.__data);else if(l.isMatrix3)A.__data[0]=l.elements[0],A.__data[1]=l.elements[1],A.__data[2]=l.elements[2],A.__data[3]=0,A.__data[4]=l.elements[3],A.__data[5]=l.elements[4],A.__data[6]=l.elements[5],A.__data[7]=0,A.__data[8]=l.elements[6],A.__data[9]=l.elements[7],A.__data[10]=l.elements[8],A.__data[11]=0;else l.toArray(A.__data,p),p+=r.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,d,A.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function O(P,L,I,v){let C=P.value,T=L+"_"+I;if(v[T]===void 0){if(typeof C==="number"||typeof C==="boolean")v[T]=C;else v[T]=C.clone();return!0}else{let m=v[T];if(typeof C==="number"||typeof C==="boolean"){if(m!==C)return v[T]=C,!0}else if(m.equals(C)===!1)return m.copy(C),!0}return!1}function M(P){let L=P.uniforms,I=0,v=16;for(let T=0,m=L.length;T<m;T++){let z=Array.isArray(L[T])?L[T]:[L[T]];for(let V=0,A=z.length;V<A;V++){let d=z[V],c=Array.isArray(d.value)?d.value:[d.value];for(let p=0,o=c.length;p<o;p++){let l=c[p],r=k(l),x=I%v,H0=x%r.boundary,G0=x+H0;if(I+=H0,G0!==0&&v-G0<r.storage)I+=v-G0;d.__data=new Float32Array(r.storage/Float32Array.BYTES_PER_ELEMENT),d.__offset=I,I+=r.storage}}}let C=I%v;if(C>0)I+=v-C;return P.__size=I,P.__cache={},this}function k(P){let L={boundary:0,storage:0};if(typeof P==="number"||typeof P==="boolean")L.boundary=4,L.storage=4;else if(P.isVector2)L.boundary=8,L.storage=8;else if(P.isVector3||P.isColor)L.boundary=16,L.storage=12;else if(P.isVector4)L.boundary=16,L.storage=16;else if(P.isMatrix3)L.boundary=48,L.storage=48;else if(P.isMatrix4)L.boundary=64,L.storage=64;else if(P.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P);return L}function q(P){let L=P.target;L.removeEventListener("dispose",q);let I=Y.indexOf(L.__bindingPointIndex);Y.splice(I,1),J.deleteBuffer(W[L.id]),delete W[L.id],delete H[L.id]}function D(){for(let P in W)J.deleteBuffer(W[P]);Y=[],W={},H={}}return{bind:X,update:U,dispose:D}}class TQ{constructor(J={}){let{canvas:Q=KZ(),context:$=null,depth:Z=!0,stencil:W=!1,alpha:H=!1,antialias:Y=!1,premultipliedAlpha:K=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:E=!1}=J;this.isWebGLRenderer=!0;let N;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");N=$.getContextAttributes().alpha}else N=H;let O=new Uint32Array(4),M=new Int32Array(4),k=null,q=null,D=[],P=[];this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Q8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,I=!1;this._outputColorSpace=t$;let v=0,C=0,T=null,m=-1,z=null,V=new ZJ,A=new ZJ,d=null,c=new x0(0),p=0,o=Q.width,l=Q.height,r=1,x=null,H0=null,G0=new ZJ(0,0,o,l),P0=new ZJ(0,0,o,l),g0=!1,WJ=new P9,d0=!1,n=!1,W0=new KJ,Q0=new f,M0=new ZJ,T0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},S0=!1;function GJ(){return T===null?r:1}let w=$;function t0(F,S){return Q.getContext(F,S)}try{let F={alpha:!0,depth:Z,stencil:W,antialias:Y,premultipliedAlpha:K,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${Z$}`);if(Q.addEventListener("webglcontextlost",K0,!1),Q.addEventListener("webglcontextrestored",$0,!1),Q.addEventListener("webglcontextcreationerror",q0,!1),w===null){if(w=t0("webgl2",F),w===null)if(t0("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let y0,A0,R0,e0,L0,w0,qJ,EJ,HJ,B,R,y,u,i,g,N0,J0,F0,_0,e,X0,k0,V0,U0;function b0(){if(y0=new CY(w),y0.init(),k0=new WU(w,y0),A0=new VY(w,y0,J,k0),R0=new $U(w,y0),A0.reversedDepthBuffer&&E)R0.buffers.depth.setReversed(!0);e0=new TY(w),L0=new lX,w0=new ZU(w,y0,R0,L0,A0,k0,e0),qJ=new zY(L),EJ=new _Y(L),HJ=new bW(w),V0=new MY(w,HJ),B=new PY(w,HJ,e0,V0),R=new jY(w,B,HJ,e0),_0=new SY(w,A0,w0),N0=new LY(L0),y=new dX(L,qJ,EJ,y0,A0,V0,N0),u=new XU(L,L0),i=new cX,g=new rX(y0),F0=new FY(L,qJ,EJ,R0,R,N,K),J0=new JU(L,R,A0),U0=new UU(w,e0,A0,R0),e=new kY(w,y0,e0),X0=new AY(w,y0,e0),e0.programs=y.programs,L.capabilities=A0,L.extensions=y0,L.properties=L0,L.renderLists=i,L.shadowMap=J0,L.state=R0,L.info=e0}b0();let _=new nZ(L,w);this.xr=_,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let F=y0.get("WEBGL_lose_context");if(F)F.loseContext()},this.forceContextRestore=function(){let F=y0.get("WEBGL_lose_context");if(F)F.restoreContext()},this.getPixelRatio=function(){return r},this.setPixelRatio=function(F){if(F===void 0)return;r=F,this.setSize(o,l,!1)},this.getSize=function(F){return F.set(o,l)},this.setSize=function(F,S,b=!0){if(_.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(o=F,l=S,Q.width=Math.floor(F*r),Q.height=Math.floor(S*r),b===!0)Q.style.width=F+"px",Q.style.height=S+"px";this.setViewport(0,0,F,S)},this.getDrawingBufferSize=function(F){return F.set(o*r,l*r).floor()},this.setDrawingBufferSize=function(F,S,b){o=F,l=S,r=b,Q.width=Math.floor(F*b),Q.height=Math.floor(S*b),this.setViewport(0,0,F,S)},this.getCurrentViewport=function(F){return F.copy(V)},this.getViewport=function(F){return F.copy(G0)},this.setViewport=function(F,S,b,h){if(F.isVector4)G0.set(F.x,F.y,F.z,F.w);else G0.set(F,S,b,h);R0.viewport(V.copy(G0).multiplyScalar(r).round())},this.getScissor=function(F){return F.copy(P0)},this.setScissor=function(F,S,b,h){if(F.isVector4)P0.set(F.x,F.y,F.z,F.w);else P0.set(F,S,b,h);R0.scissor(A.copy(P0).multiplyScalar(r).round())},this.getScissorTest=function(){return g0},this.setScissorTest=function(F){R0.setScissorTest(g0=F)},this.setOpaqueSort=function(F){x=F},this.setTransparentSort=function(F){H0=F},this.getClearColor=function(F){return F.copy(F0.getClearColor())},this.setClearColor=function(){F0.setClearColor(...arguments)},this.getClearAlpha=function(){return F0.getClearAlpha()},this.setClearAlpha=function(){F0.setClearAlpha(...arguments)},this.clear=function(F=!0,S=!0,b=!0){let h=0;if(F){let j=!1;if(T!==null){let t=T.texture.format;j=t===k7||t===M7||t===F7}if(j){let t=T.texture.type,Y0=t===G8||t===J6||t===z6||t===Q6||t===O7||t===R7,D0=F0.getClearColor(),E0=F0.getClearAlpha(),I0=D0.r,C0=D0.g,z0=D0.b;if(Y0)O[0]=I0,O[1]=C0,O[2]=z0,O[3]=E0,w.clearBufferuiv(w.COLOR,0,O);else M[0]=I0,M[1]=C0,M[2]=z0,M[3]=E0,w.clearBufferiv(w.COLOR,0,M)}else h|=w.COLOR_BUFFER_BIT}if(S)h|=w.DEPTH_BUFFER_BIT;if(b)h|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);w.clear(h)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){Q.removeEventListener("webglcontextlost",K0,!1),Q.removeEventListener("webglcontextrestored",$0,!1),Q.removeEventListener("webglcontextcreationerror",q0,!1),F0.dispose(),i.dispose(),g.dispose(),L0.dispose(),qJ.dispose(),EJ.dispose(),R.dispose(),V0.dispose(),U0.dispose(),y.dispose(),_.dispose(),_.removeEventListener("sessionstart",dJ),_.removeEventListener("sessionend",lJ),D8.stop()};function K0(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function $0(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let F=e0.autoReset,S=J0.enabled,b=J0.autoUpdate,h=J0.needsUpdate,j=J0.type;b0(),e0.autoReset=F,J0.enabled=S,J0.autoUpdate=b,J0.needsUpdate=h,J0.type=j}function q0(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function a(F){let S=F.target;S.removeEventListener("dispose",a),s(S)}function s(F){O0(F),L0.remove(F)}function O0(F){let S=L0.get(F).programs;if(S!==void 0){if(S.forEach(function(b){y.releaseProgram(b)}),F.isShaderMaterial)y.releaseShaderCache(F)}}this.renderBufferDirect=function(F,S,b,h,j,t){if(S===null)S=T0;let Y0=j.isMesh&&j.matrixWorld.determinant()<0,D0=tZ(F,S,b,h,j);R0.setMaterial(h,Y0);let E0=b.index,I0=1;if(h.wireframe===!0){if(E0=B.getWireframeAttribute(b),E0===void 0)return;I0=2}let C0=b.drawRange,z0=b.attributes.position,h0=C0.start*I0,s0=(C0.start+C0.count)*I0;if(t!==null)h0=Math.max(h0,t.start*I0),s0=Math.min(s0,(t.start+t.count)*I0);if(E0!==null)h0=Math.max(h0,0),s0=Math.min(s0,E0.count);else if(z0!==void 0&&z0!==null)h0=Math.max(h0,0),s0=Math.min(s0,z0.count);let $J=s0-h0;if($J<0||$J===1/0)return;V0.setup(j,h,D0,b,E0);let r0,o0=e;if(E0!==null)r0=HJ.get(E0),o0=X0,o0.setIndex(r0);if(j.isMesh)if(h.wireframe===!0)R0.setLineWidth(h.wireframeLinewidth*GJ()),o0.setMode(w.LINES);else o0.setMode(w.TRIANGLES);else if(j.isLine){let B0=h.linewidth;if(B0===void 0)B0=1;if(R0.setLineWidth(B0*GJ()),j.isLineSegments)o0.setMode(w.LINES);else if(j.isLineLoop)o0.setMode(w.LINE_LOOP);else o0.setMode(w.LINE_STRIP)}else if(j.isPoints)o0.setMode(w.POINTS);else if(j.isSprite)o0.setMode(w.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)i8("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),o0.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(!y0.get("WEBGL_multi_draw")){let{_multiDrawStarts:B0,_multiDrawCounts:JJ,_multiDrawCount:l0}=j,zJ=E0?HJ.get(E0).bytesPerElement:1,y8=L0.get(h).currentProgram.getUniforms();for(let BJ=0;BJ<l0;BJ++)y8.setValue(w,"_gl_DrawID",BJ),o0.render(B0[BJ]/zJ,JJ[BJ])}else o0.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)o0.renderInstances(h0,$J,j.count);else if(b.isInstancedBufferGeometry){let B0=b._maxInstanceCount!==void 0?b._maxInstanceCount:1/0,JJ=Math.min(b.instanceCount,B0);o0.renderInstances(h0,$J,JJ)}else o0.render(h0,$J)};function j0(F,S,b){if(F.transparent===!0&&F.side===fJ&&F.forceSinglePass===!1)F.side=PJ,F.needsUpdate=!0,v6(F,S,b),F.side=o8,F.needsUpdate=!0,v6(F,S,b),F.side=fJ;else v6(F,S,b)}this.compile=function(F,S,b=null){if(b===null)b=F;if(q=g.get(b),q.init(S),P.push(q),b.traverseVisible(function(j){if(j.isLight&&j.layers.test(S.layers)){if(q.pushLight(j),j.castShadow)q.pushShadow(j)}}),F!==b)F.traverseVisible(function(j){if(j.isLight&&j.layers.test(S.layers)){if(q.pushLight(j),j.castShadow)q.pushShadow(j)}});q.setupLights();let h=new Set;return F.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let t=j.material;if(t)if(Array.isArray(t))for(let Y0=0;Y0<t.length;Y0++){let D0=t[Y0];j0(D0,b,j),h.add(D0)}else j0(t,b,j),h.add(t)}),q=P.pop(),h},this.compileAsync=function(F,S,b=null){let h=this.compile(F,S,b);return new Promise((j)=>{function t(){if(h.forEach(function(Y0){if(L0.get(Y0).currentProgram.isReady())h.delete(Y0)}),h.size===0){j(F);return}setTimeout(t,10)}if(y0.get("KHR_parallel_shader_compile")!==null)t();else setTimeout(t,10)})};let i0=null;function n0(F){if(i0)i0(F)}function dJ(){D8.stop()}function lJ(){D8.start()}let D8=new fZ;if(D8.setAnimationLoop(n0),typeof self<"u")D8.setContext(self);this.setAnimationLoop=function(F){i0=F,_.setAnimationLoop(F),F===null?D8.stop():D8.start()},_.addEventListener("sessionstart",dJ),_.addEventListener("sessionend",lJ),this.render=function(F,S){if(S!==void 0&&S.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(F.matrixWorldAutoUpdate===!0)F.updateMatrixWorld();if(S.parent===null&&S.matrixWorldAutoUpdate===!0)S.updateMatrixWorld();if(_.enabled===!0&&_.isPresenting===!0){if(_.cameraAutoUpdate===!0)_.updateCamera(S);S=_.getCamera()}if(F.isScene===!0)F.onBeforeRender(L,F,S,T);if(q=g.get(F,P.length),q.init(S),P.push(q),W0.multiplyMatrices(S.projectionMatrix,S.matrixWorldInverse),WJ.setFromProjectionMatrix(W0,r7,S.reversedDepth),n=this.localClippingEnabled,d0=N0.init(this.clippingPlanes,n),k=i.get(F,D.length),k.init(),D.push(k),_.enabled===!0&&_.isPresenting===!0){let t=L.xr.getDepthSensingMesh();if(t!==null)h9(t,S,-1/0,L.sortObjects)}if(h9(F,S,0,L.sortObjects),k.finish(),L.sortObjects===!0)k.sort(x,H0);if(S0=_.enabled===!1||_.isPresenting===!1||_.hasDepthSensing()===!1,S0)F0.addToRenderList(k,F);if(this.info.render.frame++,d0===!0)N0.beginShadows();let b=q.state.shadowsArray;if(J0.render(b,F,S),d0===!0)N0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:h,transmissive:j}=k;if(q.setupLights(),S.isArrayCamera){let t=S.cameras;if(j.length>0)for(let Y0=0,D0=t.length;Y0<D0;Y0++){let E0=t[Y0];jQ(h,j,F,E0)}if(S0)F0.render(F);for(let Y0=0,D0=t.length;Y0<D0;Y0++){let E0=t[Y0];SQ(k,F,E0,E0.viewport)}}else{if(j.length>0)jQ(h,j,F,S);if(S0)F0.render(F);SQ(k,F,S)}if(T!==null&&C===0)w0.updateMultisampleRenderTarget(T),w0.updateRenderTargetMipmap(T);if(F.isScene===!0)F.onAfterRender(L,F,S);if(V0.resetDefaultState(),m=-1,z=null,P.pop(),P.length>0){if(q=P[P.length-1],d0===!0)N0.setGlobalState(L.clippingPlanes,q.state.camera)}else q=null;if(D.pop(),D.length>0)k=D[D.length-1];else k=null};function h9(F,S,b,h){if(F.visible===!1)return;if(F.layers.test(S.layers)){if(F.isGroup)b=F.renderOrder;else if(F.isLOD){if(F.autoUpdate===!0)F.update(S)}else if(F.isLight){if(q.pushLight(F),F.castShadow)q.pushShadow(F)}else if(F.isSprite){if(!F.frustumCulled||WJ.intersectsSprite(F)){if(h)M0.setFromMatrixPosition(F.matrixWorld).applyMatrix4(W0);let Y0=R.update(F),D0=F.material;if(D0.visible)k.push(F,Y0,D0,b,M0.z,null)}}else if(F.isMesh||F.isLine||F.isPoints){if(!F.frustumCulled||WJ.intersectsObject(F)){let Y0=R.update(F),D0=F.material;if(h){if(F.boundingSphere!==void 0){if(F.boundingSphere===null)F.computeBoundingSphere();M0.copy(F.boundingSphere.center)}else{if(Y0.boundingSphere===null)Y0.computeBoundingSphere();M0.copy(Y0.boundingSphere.center)}M0.applyMatrix4(F.matrixWorld).applyMatrix4(W0)}if(Array.isArray(D0)){let E0=Y0.groups;for(let I0=0,C0=E0.length;I0<C0;I0++){let z0=E0[I0],h0=D0[z0.materialIndex];if(h0&&h0.visible)k.push(F,Y0,h0,b,M0.z,z0)}}else if(D0.visible)k.push(F,Y0,D0,b,M0.z,null)}}}let t=F.children;for(let Y0=0,D0=t.length;Y0<D0;Y0++)h9(t[Y0],S,b,h)}function SQ(F,S,b,h){let{opaque:j,transmissive:t,transparent:Y0}=F;if(q.setupLightsView(b),d0===!0)N0.setGlobalState(L.clippingPlanes,b);if(h)R0.viewport(V.copy(h));if(j.length>0)y6(j,S,b);if(t.length>0)y6(t,S,b);if(Y0.length>0)y6(Y0,S,b);R0.buffers.depth.setTest(!0),R0.buffers.depth.setMask(!0),R0.buffers.color.setMask(!0),R0.setPolygonOffset(!1)}function jQ(F,S,b,h){if((b.isScene===!0?b.overrideMaterial:null)!==null)return;if(q.state.transmissionRenderTarget[h.id]===void 0)q.state.transmissionRenderTarget[h.id]=new $8(1,1,{generateMipmaps:!0,type:y0.has("EXT_color_buffer_half_float")||y0.has("EXT_color_buffer_float")?B6:G8,minFilter:e8,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:m0.workingColorSpace});let t=q.state.transmissionRenderTarget[h.id],Y0=h.viewport||V;t.setSize(Y0.z*L.transmissionResolutionScale,Y0.w*L.transmissionResolutionScale);let D0=L.getRenderTarget(),E0=L.getActiveCubeFace(),I0=L.getActiveMipmapLevel();if(L.setRenderTarget(t),L.getClearColor(c),p=L.getClearAlpha(),p<1)L.setClearColor(16777215,0.5);if(L.clear(),S0)F0.render(b);let C0=L.toneMapping;L.toneMapping=Q8;let z0=h.viewport;if(h.viewport!==void 0)h.viewport=void 0;if(q.setupLightsView(h),d0===!0)N0.setGlobalState(L.clippingPlanes,h);if(y6(F,b,h),w0.updateMultisampleRenderTarget(t),w0.updateRenderTargetMipmap(t),y0.has("WEBGL_multisampled_render_to_texture")===!1){let h0=!1;for(let s0=0,$J=S.length;s0<$J;s0++){let r0=S[s0],o0=r0.object,B0=r0.geometry,JJ=r0.material,l0=r0.group;if(JJ.side===fJ&&o0.layers.test(h.layers)){let zJ=JJ.side;JJ.side=PJ,JJ.needsUpdate=!0,yQ(o0,b,h,B0,JJ,l0),JJ.side=zJ,JJ.needsUpdate=!0,h0=!0}}if(h0===!0)w0.updateMultisampleRenderTarget(t),w0.updateRenderTargetMipmap(t)}if(L.setRenderTarget(D0,E0,I0),L.setClearColor(c,p),z0!==void 0)h.viewport=z0;L.toneMapping=C0}function y6(F,S,b){let h=S.isScene===!0?S.overrideMaterial:null;for(let j=0,t=F.length;j<t;j++){let Y0=F[j],D0=Y0.object,E0=Y0.geometry,I0=Y0.group,C0=Y0.material;if(C0.allowOverride===!0&&h!==null)C0=h;if(D0.layers.test(b.layers))yQ(D0,S,b,E0,C0,I0)}}function yQ(F,S,b,h,j,t){if(F.onBeforeRender(L,S,b,h,j,t),F.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),j.onBeforeRender(L,S,b,h,F,t),j.transparent===!0&&j.side===fJ&&j.forceSinglePass===!1)j.side=PJ,j.needsUpdate=!0,L.renderBufferDirect(b,S,h,j,F,t),j.side=o8,j.needsUpdate=!0,L.renderBufferDirect(b,S,h,j,F,t),j.side=fJ;else L.renderBufferDirect(b,S,h,j,F,t);F.onAfterRender(L,S,b,h,j,t)}function v6(F,S,b){if(S.isScene!==!0)S=T0;let h=L0.get(F),j=q.state.lights,t=q.state.shadowsArray,Y0=j.state.version,D0=y.getParameters(F,j.state,t,S,b),E0=y.getProgramCacheKey(D0),I0=h.programs;if(h.environment=F.isMeshStandardMaterial?S.environment:null,h.fog=S.fog,h.envMap=(F.isMeshStandardMaterial?EJ:qJ).get(F.envMap||h.environment),h.envMapRotation=h.environment!==null&&F.envMap===null?S.environmentRotation:F.envMapRotation,I0===void 0)F.addEventListener("dispose",a),I0=new Map,h.programs=I0;let C0=I0.get(E0);if(C0!==void 0){if(h.currentProgram===C0&&h.lightsStateVersion===Y0)return fQ(F,D0),C0}else D0.uniforms=y.getUniforms(F),F.onBeforeCompile(D0,L),C0=y.acquireProgram(D0,E0),I0.set(E0,C0),h.uniforms=D0.uniforms;let z0=h.uniforms;if(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)z0.clippingPlanes=N0.uniform;if(fQ(F,D0),h.needsLights=JW(F),h.lightsStateVersion=Y0,h.needsLights)z0.ambientLightColor.value=j.state.ambient,z0.lightProbe.value=j.state.probe,z0.directionalLights.value=j.state.directional,z0.directionalLightShadows.value=j.state.directionalShadow,z0.spotLights.value=j.state.spot,z0.spotLightShadows.value=j.state.spotShadow,z0.rectAreaLights.value=j.state.rectArea,z0.ltc_1.value=j.state.rectAreaLTC1,z0.ltc_2.value=j.state.rectAreaLTC2,z0.pointLights.value=j.state.point,z0.pointLightShadows.value=j.state.pointShadow,z0.hemisphereLights.value=j.state.hemi,z0.directionalShadowMap.value=j.state.directionalShadowMap,z0.directionalShadowMatrix.value=j.state.directionalShadowMatrix,z0.spotShadowMap.value=j.state.spotShadowMap,z0.spotLightMatrix.value=j.state.spotLightMatrix,z0.spotLightMap.value=j.state.spotLightMap,z0.pointShadowMap.value=j.state.pointShadowMap,z0.pointShadowMatrix.value=j.state.pointShadowMatrix;return h.currentProgram=C0,h.uniformsList=null,C0}function vQ(F){if(F.uniformsList===null){let S=F.currentProgram.getUniforms();F.uniformsList=j6.seqWithValue(S.seq,F.uniforms)}return F.uniformsList}function fQ(F,S){let b=L0.get(F);b.outputColorSpace=S.outputColorSpace,b.batching=S.batching,b.batchingColor=S.batchingColor,b.instancing=S.instancing,b.instancingColor=S.instancingColor,b.instancingMorph=S.instancingMorph,b.skinning=S.skinning,b.morphTargets=S.morphTargets,b.morphNormals=S.morphNormals,b.morphColors=S.morphColors,b.morphTargetsCount=S.morphTargetsCount,b.numClippingPlanes=S.numClippingPlanes,b.numIntersection=S.numClipIntersection,b.vertexAlphas=S.vertexAlphas,b.vertexTangents=S.vertexTangents,b.toneMapping=S.toneMapping}function tZ(F,S,b,h,j){if(S.isScene!==!0)S=T0;w0.resetTextureUnits();let t=S.fog,Y0=h.isMeshStandardMaterial?S.environment:null,D0=T===null?L.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:I6,E0=(h.isMeshStandardMaterial?EJ:qJ).get(h.envMap||Y0),I0=h.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,C0=!!b.attributes.tangent&&(!!h.normalMap||h.anisotropy>0),z0=!!b.morphAttributes.position,h0=!!b.morphAttributes.normal,s0=!!b.morphAttributes.color,$J=Q8;if(h.toneMapped){if(T===null||T.isXRRenderTarget===!0)$J=L.toneMapping}let r0=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,o0=r0!==void 0?r0.length:0,B0=L0.get(h),JJ=q.state.lights;if(d0===!0){if(n===!0||F!==z){let FJ=F===z&&h.id===m;N0.setState(h,F,FJ)}}let l0=!1;if(h.version===B0.__version){if(B0.needsLights&&B0.lightsStateVersion!==JJ.state.version)l0=!0;else if(B0.outputColorSpace!==D0)l0=!0;else if(j.isBatchedMesh&&B0.batching===!1)l0=!0;else if(!j.isBatchedMesh&&B0.batching===!0)l0=!0;else if(j.isBatchedMesh&&B0.batchingColor===!0&&j.colorTexture===null)l0=!0;else if(j.isBatchedMesh&&B0.batchingColor===!1&&j.colorTexture!==null)l0=!0;else if(j.isInstancedMesh&&B0.instancing===!1)l0=!0;else if(!j.isInstancedMesh&&B0.instancing===!0)l0=!0;else if(j.isSkinnedMesh&&B0.skinning===!1)l0=!0;else if(!j.isSkinnedMesh&&B0.skinning===!0)l0=!0;else if(j.isInstancedMesh&&B0.instancingColor===!0&&j.instanceColor===null)l0=!0;else if(j.isInstancedMesh&&B0.instancingColor===!1&&j.instanceColor!==null)l0=!0;else if(j.isInstancedMesh&&B0.instancingMorph===!0&&j.morphTexture===null)l0=!0;else if(j.isInstancedMesh&&B0.instancingMorph===!1&&j.morphTexture!==null)l0=!0;else if(B0.envMap!==E0)l0=!0;else if(h.fog===!0&&B0.fog!==t)l0=!0;else if(B0.numClippingPlanes!==void 0&&(B0.numClippingPlanes!==N0.numPlanes||B0.numIntersection!==N0.numIntersection))l0=!0;else if(B0.vertexAlphas!==I0)l0=!0;else if(B0.vertexTangents!==C0)l0=!0;else if(B0.morphTargets!==z0)l0=!0;else if(B0.morphNormals!==h0)l0=!0;else if(B0.morphColors!==s0)l0=!0;else if(B0.toneMapping!==$J)l0=!0;else if(B0.morphTargetsCount!==o0)l0=!0}else l0=!0,B0.__version=h.version;let zJ=B0.currentProgram;if(l0===!0)zJ=v6(h,S,j);let y8=!1,BJ=!1,G6=!1,QJ=zJ.getUniforms(),TJ=B0.uniforms;if(R0.useProgram(zJ.program))y8=!0,BJ=!0,G6=!0;if(h.id!==m)m=h.id,BJ=!0;if(y8||z!==F){if(R0.buffers.depth.getReversed()&&F.reversedDepth!==!0)F._reversedDepth=!0,F.updateProjectionMatrix();QJ.setValue(w,"projectionMatrix",F.projectionMatrix),QJ.setValue(w,"viewMatrix",F.matrixWorldInverse);let VJ=QJ.map.cameraPosition;if(VJ!==void 0)VJ.setValue(w,Q0.setFromMatrixPosition(F.matrixWorld));if(A0.logarithmicDepthBuffer)QJ.setValue(w,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2));if(h.isMeshPhongMaterial||h.isMeshToonMaterial||h.isMeshLambertMaterial||h.isMeshBasicMaterial||h.isMeshStandardMaterial||h.isShaderMaterial)QJ.setValue(w,"isOrthographic",F.isOrthographicCamera===!0);if(z!==F)z=F,BJ=!0,G6=!0}if(j.isSkinnedMesh){QJ.setOptional(w,j,"bindMatrix"),QJ.setOptional(w,j,"bindMatrixInverse");let FJ=j.skeleton;if(FJ){if(FJ.boneTexture===null)FJ.computeBoneTexture();QJ.setValue(w,"boneTexture",FJ.boneTexture,w0)}}if(j.isBatchedMesh){if(QJ.setOptional(w,j,"batchingTexture"),QJ.setValue(w,"batchingTexture",j._matricesTexture,w0),QJ.setOptional(w,j,"batchingIdTexture"),QJ.setValue(w,"batchingIdTexture",j._indirectTexture,w0),QJ.setOptional(w,j,"batchingColorTexture"),j._colorsTexture!==null)QJ.setValue(w,"batchingColorTexture",j._colorsTexture,w0)}let SJ=b.morphAttributes;if(SJ.position!==void 0||SJ.normal!==void 0||SJ.color!==void 0)_0.update(j,b,zJ);if(BJ||B0.receiveShadow!==j.receiveShadow)B0.receiveShadow=j.receiveShadow,QJ.setValue(w,"receiveShadow",j.receiveShadow);if(h.isMeshGouraudMaterial&&h.envMap!==null)TJ.envMap.value=E0,TJ.flipEnvMap.value=E0.isCubeTexture&&E0.isRenderTargetTexture===!1?-1:1;if(h.isMeshStandardMaterial&&h.envMap===null&&S.environment!==null)TJ.envMapIntensity.value=S.environmentIntensity;if(BJ){if(QJ.setValue(w,"toneMappingExposure",L.toneMappingExposure),B0.needsLights)eZ(TJ,G6);if(t&&h.fog===!0)u.refreshFogUniforms(TJ,t);u.refreshMaterialUniforms(TJ,h,r,l,q.state.transmissionRenderTarget[F.id]),j6.upload(w,vQ(B0),TJ,w0)}if(h.isShaderMaterial&&h.uniformsNeedUpdate===!0)j6.upload(w,vQ(B0),TJ,w0),h.uniformsNeedUpdate=!1;if(h.isSpriteMaterial)QJ.setValue(w,"center",j.center);if(QJ.setValue(w,"modelViewMatrix",j.modelViewMatrix),QJ.setValue(w,"normalMatrix",j.normalMatrix),QJ.setValue(w,"modelMatrix",j.matrixWorld),h.isShaderMaterial||h.isRawShaderMaterial){let FJ=h.uniformsGroups;for(let VJ=0,x9=FJ.length;VJ<x9;VJ++){let O8=FJ[VJ];U0.update(O8,zJ),U0.bind(O8,zJ)}}return zJ}function eZ(F,S){F.ambientLightColor.needsUpdate=S,F.lightProbe.needsUpdate=S,F.directionalLights.needsUpdate=S,F.directionalLightShadows.needsUpdate=S,F.pointLights.needsUpdate=S,F.pointLightShadows.needsUpdate=S,F.spotLights.needsUpdate=S,F.spotLightShadows.needsUpdate=S,F.rectAreaLights.needsUpdate=S,F.hemisphereLights.needsUpdate=S}function JW(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(F,S,b){let h=L0.get(F);if(h.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,h.__autoAllocateDepthBuffer===!1)h.__useRenderToTexture=!1;L0.get(F.texture).__webglTexture=S,L0.get(F.depthTexture).__webglTexture=h.__autoAllocateDepthBuffer?void 0:b,h.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,S){let b=L0.get(F);b.__webglFramebuffer=S,b.__useDefaultFramebuffer=S===void 0};let QW=w.createFramebuffer();this.setRenderTarget=function(F,S=0,b=0){T=F,v=S,C=b;let h=!0,j=null,t=!1,Y0=!1;if(F){let E0=L0.get(F);if(E0.__useDefaultFramebuffer!==void 0)R0.bindFramebuffer(w.FRAMEBUFFER,null),h=!1;else if(E0.__webglFramebuffer===void 0)w0.setupRenderTarget(F);else if(E0.__hasExternalTextures)w0.rebindTextures(F,L0.get(F.texture).__webglTexture,L0.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let z0=F.depthTexture;if(E0.__boundDepthTexture!==z0){if(z0!==null&&L0.has(z0)&&(F.width!==z0.image.width||F.height!==z0.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w0.setupDepthRenderbuffer(F)}}let I0=F.texture;if(I0.isData3DTexture||I0.isDataArrayTexture||I0.isCompressedArrayTexture)Y0=!0;let C0=L0.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget){if(Array.isArray(C0[S]))j=C0[S][b];else j=C0[S];t=!0}else if(F.samples>0&&w0.useMultisampledRTT(F)===!1)j=L0.get(F).__webglMultisampledFramebuffer;else if(Array.isArray(C0))j=C0[b];else j=C0;V.copy(F.viewport),A.copy(F.scissor),d=F.scissorTest}else V.copy(G0).multiplyScalar(r).floor(),A.copy(P0).multiplyScalar(r).floor(),d=g0;if(b!==0)j=QW;if(R0.bindFramebuffer(w.FRAMEBUFFER,j)&&h)R0.drawBuffers(F,j);if(R0.viewport(V),R0.scissor(A),R0.setScissorTest(d),t){let E0=L0.get(F.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+S,E0.__webglTexture,b)}else if(Y0){let E0=S;for(let I0=0;I0<F.textures.length;I0++){let C0=L0.get(F.textures[I0]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+I0,C0.__webglTexture,b,E0)}}else if(F!==null&&b!==0){let E0=L0.get(F.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,E0.__webglTexture,b)}m=-1},this.readRenderTargetPixels=function(F,S,b,h,j,t,Y0,D0=0){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let E0=L0.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Y0!==void 0)E0=E0[Y0];if(E0){R0.bindFramebuffer(w.FRAMEBUFFER,E0);try{let I0=F.textures[D0],C0=I0.format,z0=I0.type;if(!A0.textureFormatReadable(C0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A0.textureTypeReadable(z0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(S>=0&&S<=F.width-h&&(b>=0&&b<=F.height-j)){if(F.textures.length>1)w.readBuffer(w.COLOR_ATTACHMENT0+D0);w.readPixels(S,b,h,j,k0.convert(C0),k0.convert(z0),t)}}finally{let I0=T!==null?L0.get(T).__webglFramebuffer:null;R0.bindFramebuffer(w.FRAMEBUFFER,I0)}}},this.readRenderTargetPixelsAsync=async function(F,S,b,h,j,t,Y0,D0=0){if(!(F&&F.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let E0=L0.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Y0!==void 0)E0=E0[Y0];if(E0)if(S>=0&&S<=F.width-h&&(b>=0&&b<=F.height-j)){R0.bindFramebuffer(w.FRAMEBUFFER,E0);let I0=F.textures[D0],C0=I0.format,z0=I0.type;if(!A0.textureFormatReadable(C0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A0.textureTypeReadable(z0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let h0=w.createBuffer();if(w.bindBuffer(w.PIXEL_PACK_BUFFER,h0),w.bufferData(w.PIXEL_PACK_BUFFER,t.byteLength,w.STREAM_READ),F.textures.length>1)w.readBuffer(w.COLOR_ATTACHMENT0+D0);w.readPixels(S,b,h,j,k0.convert(C0),k0.convert(z0),0);let s0=T!==null?L0.get(T).__webglFramebuffer:null;R0.bindFramebuffer(w.FRAMEBUFFER,s0);let $J=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await YZ(w,$J,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,h0),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,t),w.deleteBuffer(h0),w.deleteSync($J),t}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,S=null,b=0){let h=Math.pow(2,-b),j=Math.floor(F.image.width*h),t=Math.floor(F.image.height*h),Y0=S!==null?S.x:0,D0=S!==null?S.y:0;w0.setTexture2D(F,0),w.copyTexSubImage2D(w.TEXTURE_2D,b,0,0,Y0,D0,j,t),R0.unbindTexture()};let $W=w.createFramebuffer(),ZW=w.createFramebuffer();if(this.copyTextureToTexture=function(F,S,b=null,h=null,j=0,t=null){if(t===null)if(j!==0)i8("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),t=j,j=0;else t=0;let Y0,D0,E0,I0,C0,z0,h0,s0,$J,r0=F.isCompressedTexture?F.mipmaps[t]:F.image;if(b!==null)Y0=b.max.x-b.min.x,D0=b.max.y-b.min.y,E0=b.isBox3?b.max.z-b.min.z:1,I0=b.min.x,C0=b.min.y,z0=b.isBox3?b.min.z:0;else{let SJ=Math.pow(2,-j);if(Y0=Math.floor(r0.width*SJ),D0=Math.floor(r0.height*SJ),F.isDataArrayTexture)E0=r0.depth;else if(F.isData3DTexture)E0=Math.floor(r0.depth*SJ);else E0=1;I0=0,C0=0,z0=0}if(h!==null)h0=h.x,s0=h.y,$J=h.z;else h0=0,s0=0,$J=0;let o0=k0.convert(S.format),B0=k0.convert(S.type),JJ;if(S.isData3DTexture)w0.setTexture3D(S,0),JJ=w.TEXTURE_3D;else if(S.isDataArrayTexture||S.isCompressedArrayTexture)w0.setTexture2DArray(S,0),JJ=w.TEXTURE_2D_ARRAY;else w0.setTexture2D(S,0),JJ=w.TEXTURE_2D;w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,S.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,S.unpackAlignment);let l0=w.getParameter(w.UNPACK_ROW_LENGTH),zJ=w.getParameter(w.UNPACK_IMAGE_HEIGHT),y8=w.getParameter(w.UNPACK_SKIP_PIXELS),BJ=w.getParameter(w.UNPACK_SKIP_ROWS),G6=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,r0.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,r0.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,I0),w.pixelStorei(w.UNPACK_SKIP_ROWS,C0),w.pixelStorei(w.UNPACK_SKIP_IMAGES,z0);let QJ=F.isDataArrayTexture||F.isData3DTexture,TJ=S.isDataArrayTexture||S.isData3DTexture;if(F.isDepthTexture){let SJ=L0.get(F),FJ=L0.get(S),VJ=L0.get(SJ.__renderTarget),x9=L0.get(FJ.__renderTarget);R0.bindFramebuffer(w.READ_FRAMEBUFFER,VJ.__webglFramebuffer),R0.bindFramebuffer(w.DRAW_FRAMEBUFFER,x9.__webglFramebuffer);for(let O8=0;O8<E0;O8++){if(QJ)w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,L0.get(F).__webglTexture,j,z0+O8),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,L0.get(S).__webglTexture,t,$J+O8);w.blitFramebuffer(I0,C0,Y0,D0,h0,s0,Y0,D0,w.DEPTH_BUFFER_BIT,w.NEAREST)}R0.bindFramebuffer(w.READ_FRAMEBUFFER,null),R0.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(j!==0||F.isRenderTargetTexture||L0.has(F)){let SJ=L0.get(F),FJ=L0.get(S);R0.bindFramebuffer(w.READ_FRAMEBUFFER,$W),R0.bindFramebuffer(w.DRAW_FRAMEBUFFER,ZW);for(let VJ=0;VJ<E0;VJ++){if(QJ)w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,SJ.__webglTexture,j,z0+VJ);else w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,SJ.__webglTexture,j);if(TJ)w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,FJ.__webglTexture,t,$J+VJ);else w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,FJ.__webglTexture,t);if(j!==0)w.blitFramebuffer(I0,C0,Y0,D0,h0,s0,Y0,D0,w.COLOR_BUFFER_BIT,w.NEAREST);else if(TJ)w.copyTexSubImage3D(JJ,t,h0,s0,$J+VJ,I0,C0,Y0,D0);else w.copyTexSubImage2D(JJ,t,h0,s0,I0,C0,Y0,D0)}R0.bindFramebuffer(w.READ_FRAMEBUFFER,null),R0.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(TJ)if(F.isDataTexture||F.isData3DTexture)w.texSubImage3D(JJ,t,h0,s0,$J,Y0,D0,E0,o0,B0,r0.data);else if(S.isCompressedArrayTexture)w.compressedTexSubImage3D(JJ,t,h0,s0,$J,Y0,D0,E0,o0,r0.data);else w.texSubImage3D(JJ,t,h0,s0,$J,Y0,D0,E0,o0,B0,r0);else if(F.isDataTexture)w.texSubImage2D(w.TEXTURE_2D,t,h0,s0,Y0,D0,o0,B0,r0.data);else if(F.isCompressedTexture)w.compressedTexSubImage2D(w.TEXTURE_2D,t,h0,s0,r0.width,r0.height,o0,r0.data);else w.texSubImage2D(w.TEXTURE_2D,t,h0,s0,Y0,D0,o0,B0,r0);if(w.pixelStorei(w.UNPACK_ROW_LENGTH,l0),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,zJ),w.pixelStorei(w.UNPACK_SKIP_PIXELS,y8),w.pixelStorei(w.UNPACK_SKIP_ROWS,BJ),w.pixelStorei(w.UNPACK_SKIP_IMAGES,G6),t===0&&S.generateMipmaps)w.generateMipmap(JJ);R0.unbindTexture()},this.initRenderTarget=function(F){if(L0.get(F).__webglFramebuffer===void 0)w0.setupRenderTarget(F)},this.initTexture=function(F){if(F.isCubeTexture)w0.setTextureCube(F,0);else if(F.isData3DTexture)w0.setTexture3D(F,0);else if(F.isDataArrayTexture||F.isCompressedArrayTexture)w0.setTexture2DArray(F,0);else w0.setTexture2D(F,0);R0.unbindTexture()},this.resetState=function(){v=0,C=0,T=null,R0.reset(),V0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return r7}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=m0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=m0._getUnpackColorSpace()}}var U6=document.querySelector("#fit-canvas"),sZ=U6.closest("figure"),iZ=document.querySelector("#fit-description"),oZ=[...document.querySelectorAll("[data-fit]")],GU=window.matchMedia("(prefers-reduced-motion: reduce)"),rZ=U6.getContext("webgl2",{alpha:!0,antialias:!0}),EU=`
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
`,NU=`
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
`;function qU(){let J=new TQ({canvas:U6,context:rZ,antialias:!0,alpha:!0});J.setPixelRatio(Math.min(window.devicePixelRatio,2)),J.setClearColor(0,0);let Q=new C9,$=new T6(-4,4,2,-2,0.1,100);$.position.set(5.8,4.6,7.3),$.lookAt(0,-0.08,0);let Z=new hJ({vertexShader:EU,fragmentShader:NU,side:fJ,uniforms:{mode:{value:1}}}),W=new AJ(new _8(6.45,4.8,98,72),Z);W.frustumCulled=!1,Q.add(W);let H=new j9(7.1,21,new x0("#24345e"),new x0("#2a2d36"));H.position.y=-1.53,H.material.transparent=!0,H.material.opacity=0.72,Q.add(H);let Y=new f(-3.32,-1.52,2.64),K=[new f(3.65,-1.52,2.64),new f(-3.32,-1.52,-3.46),new f(-3.32,1.67,2.64)],X=new W6({color:"#efe8da",transparent:!0,opacity:0.67});for(let O of K)Q.add(new A6(new bJ().setFromPoints([Y,O]),X));function U(){J.render(Q,$)}function G(){let{clientWidth:O,clientHeight:M}=U6;if(O===0||M===0)return;let k=O/M,q=Math.max(4.38,k*2.47);$.left=-q,$.right=q,$.top=q/k,$.bottom=-q/k,$.updateProjectionMatrix(),J.setSize(O,M,!1),U()}new ResizeObserver(G).observe(U6),G();let N=0;return function(M){if(cancelAnimationFrame(N),GU.matches){Z.uniforms.mode.value=M,U();return}let k=performance.now(),q=Z.uniforms.mode.value;function D(P){let L=Math.min((P-k)/470,1),I=1-(1-L)**3;if(Z.uniforms.mode.value=q+I*(M-q),U(),L<1)N=requestAnimationFrame(D)}N=requestAnimationFrame(D)}}var DU=rZ?qU():null,aZ;for(let J of oZ)J.addEventListener("click",()=>{if(J.getAttribute("aria-pressed")==="true")return;let Q=J.dataset.fit==="nonlinear";oZ.forEach(($)=>$.setAttribute("aria-pressed",$===J)),iZ.textContent=iZ.dataset[J.dataset.fit],DU?.(Q?1:0),sZ.setAttribute("data-switching",""),clearTimeout(aZ),aZ=setTimeout(()=>sZ.removeAttribute("data-switching"),280)});})();
