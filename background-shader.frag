#ifdef GL_ES    // Don't worry about this
precision mediump float;
#endif

uniform vec2 u_resolution; // The size of the canvas
uniform float u_time;   // The elapsed time, in seconds

void main(){
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    float red = uv.y + cos(u_time * 2.0);
    float blue = red + atan(sin(u_time));
    float green = uv.x + sin(u_time + uv.y);
    // Output to screen
    gl_FragColor = vec4(red, green, blue, 1.0);
}

/* 
Good blank slate to start from:
void main(){
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    float green = uv.x;
    // Output to screen
    gl_FragColor = vec4(0.0, green, 0.0, 1.0);
}
*/