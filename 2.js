"use strict";

var canvas;
var t=0;
var gl;
var vertices = new Float32Array([
		 0.4,  0.1,  0,
		 0.3,  0,  0,
		 0.5,  0,  0,
		 0.4, -0.1,  0
	]);
function initRotSquare(){
	canvas = document.getElementById( "rot-canvas" );
	gl = canvas.getContext("webgl2");
	if( !gl ){
		alert( "WebGL isn't available" );
	}

	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

	var program = initShaders( gl, "rot-v-shader", "rot-f-shader" );
	gl.useProgram( program );

	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );

	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 3, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	renderSquare();
}

function f1(){
	canvas = document.getElementById( "rot-canvas" );
	gl = canvas.getContext("webgl2");
	if( !gl ){
		alert( "WebGL isn't available" );
	}
	
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
	
	var program = initShaders( gl, "rot-v-shader", "rot-f-shader" );
	gl.useProgram( program );
	
	vertices[1]+=0.2;
	vertices[4]+=0.2;
	vertices[7]+=0.2;
	vertices[10]+=0.2;
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );
	
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 3, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	renderSquare();
}
function f2(){
	canvas = document.getElementById( "rot-canvas" );
	gl = canvas.getContext("webgl2");
	if( !gl ){
		alert( "WebGL isn't available" );
	}
	
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
	
	var program = initShaders( gl, "rot-v-shader", "rot-f-shader" );
	gl.useProgram( program );
	
	vertices[1]-=0.2;
	vertices[4]-=0.2;
	vertices[7]-=0.2;
	vertices[10]-=0.2;
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );
	
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 3, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	renderSquare();
}
function f3(){
	canvas = document.getElementById( "rot-canvas" );
	gl = canvas.getContext("webgl2");
	if( !gl ){
		alert( "WebGL isn't available" );
	}
	
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
	
	var program = initShaders( gl, "rot-v-shader", "rot-f-shader" );
	gl.useProgram( program );
	
	vertices[0]-=0.2;
	vertices[3]-=0.2;
	vertices[6]-=0.2;
	vertices[9]-=0.2;
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );
	
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 3, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	renderSquare();
}
function f4(){
	canvas = document.getElementById( "rot-canvas" );
	gl = canvas.getContext("webgl2");
	if( !gl ){
		alert( "WebGL isn't available" );
	}
	
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
	
	var program = initShaders( gl, "rot-v-shader", "rot-f-shader" );
	gl.useProgram( program );
	
	vertices[0]+=0.2;
	vertices[3]+=0.2;
	vertices[6]+=0.2;
	vertices[9]+=0.2;
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );
	
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 3, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	renderSquare();
}
function f5(){
	canvas = document.getElementById( "rot-canvas" );
	gl = canvas.getContext("webgl2");
	if( !gl ){
		alert( "WebGL isn't available" );
	}
	
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
	
	var program = initShaders( gl, "rot-v-shader", "rot-f-shader" );
	gl.useProgram( program );
	
	
	vertices[3]+=0.2;
	vertices[6]-=0.2;
	
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );
	
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 3, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	renderSquare();
}
function f6(){
	canvas = document.getElementById( "rot-canvas" );
	gl = canvas.getContext("webgl2");
	if( !gl ){
		alert( "WebGL isn't available" );
	}
	
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
	
	var program = initShaders( gl, "rot-v-shader", "rot-f-shader" );
	gl.useProgram( program );
	
	
	vertices[3]-=0.2;
	vertices[6]+=0.2;
	
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );
	
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 3, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	renderSquare();
}
function f7(){
	canvas = document.getElementById( "rot-canvas" );
	gl = canvas.getContext("webgl2");
	if( !gl ){
		alert( "WebGL isn't available" );
	}
	
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
	
	var program = initShaders( gl, "rot-v-shader", "rot-f-shader" );
	gl.useProgram( program );
	
	vertices[1]-=0.2;
	vertices[10]+=0.2;
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );
	
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 3, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	renderSquare();
}
function f8(){
	canvas = document.getElementById( "rot-canvas" );
	gl = canvas.getContext("webgl2");
	if( !gl ){
		alert( "WebGL isn't available" );
	}
	
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
	
	var program = initShaders( gl, "rot-v-shader", "rot-f-shader" );
	gl.useProgram( program );
	
	vertices[1]+=0.2;
	vertices[10]-=0.2;
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );
	
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 3, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	renderSquare();
}
function f9(){
	canvas = document.getElementById( "rot-canvas" );
	gl = canvas.getContext("webgl2");
	if( !gl ){
		alert( "WebGL isn't available" );
	}
	
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
	
	var program = initShaders( gl, "rot-v-shader", "rot-f-shader" );
	gl.useProgram( program );
	
	t=0.2;
	var a1=vertices[0]*Math.cos(t)-vertices[1]*Math.sin(t);
	var b1=vertices[0]*Math.sin(t)+vertices[1]*Math.cos(t);
	var a2=vertices[3]*Math.cos(t)-vertices[4]*Math.sin(t);
	var b2=vertices[3]*Math.sin(t)+vertices[4]*Math.cos(t);
	var a3=vertices[6]*Math.cos(t)-vertices[7]*Math.sin(t);
	var b3=vertices[6]*Math.sin(t)+vertices[7]*Math.cos(t);
	var a4=vertices[9]*Math.cos(t)-vertices[10]*Math.sin(t);
	var b4=vertices[9]*Math.sin(t)+vertices[10]*Math.cos(t);
	vertices[0]=a1;vertices[1]=b1;vertices[3]=a2;vertices[4]=b2;
	vertices[6]=a3;vertices[7]=b3;vertices[9]=a4;vertices[10]=b4;
	
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );
	
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 3, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	renderSquare();
}
function f10(){
	canvas = document.getElementById( "rot-canvas" );
	gl = canvas.getContext("webgl2");
	if( !gl ){
		alert( "WebGL isn't available" );
	}
	
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
	
	var program = initShaders( gl, "rot-v-shader", "rot-f-shader" );
	gl.useProgram( program );
	
	t=-0.2;
	var a1=vertices[0]*Math.cos(t)-vertices[1]*Math.sin(t);
	var b1=vertices[0]*Math.sin(t)+vertices[1]*Math.cos(t);
	var a2=vertices[3]*Math.cos(t)-vertices[4]*Math.sin(t);
	var b2=vertices[3]*Math.sin(t)+vertices[4]*Math.cos(t);
	var a3=vertices[6]*Math.cos(t)-vertices[7]*Math.sin(t);
	var b3=vertices[6]*Math.sin(t)+vertices[7]*Math.cos(t);
	var a4=vertices[9]*Math.cos(t)-vertices[10]*Math.sin(t);
	var b4=vertices[9]*Math.sin(t)+vertices[10]*Math.cos(t);
	vertices[0]=a1;vertices[1]=b1;vertices[3]=a2;vertices[4]=b2;
	vertices[6]=a3;vertices[7]=b3;vertices[9]=a4;vertices[10]=b4;
	
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );
	
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 3, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	renderSquare();
}

function renderSquare(){
	gl.clear( gl.COLOR_BUFFER_BIT );
	gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );
}