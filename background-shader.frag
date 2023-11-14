#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    float red = uv.y + cos(u_time * 2.0);
    float blue = red + atan(sin(u_time));
    float green = uv.x + sin(u_time + uv.y);
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