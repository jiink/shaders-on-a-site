#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;   // The mouse position
uniform sampler2D u_tex0; // This is the image! Get a pixel from this image using the texture2D() function.

void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv += sin(u_time) * 0.1; // Delete this line to start fresh
    gl_FragColor = texture2D(u_tex0, uv);
}

/* 
My example shader, a water ripple effect that follows your cursor:
void main(){
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.xy;
    vec2 cursorPos = (u_mouse.xy * 2.0 - u_resolution.xy) / u_resolution.xy;
    float d = length(distance(uv, cursorPos));
    vec2 p = st + (uv / d) * cos(d * 5.0 - u_time * 5.0) * 0.05;
    float nearCursor = smoothstep(0.1, 0.11, length(distance(uv, cursorPos)));
    gl_FragColor = texture2D(u_tex0, p);
}
*/
