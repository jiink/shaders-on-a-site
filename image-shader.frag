#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_tex0; // This is the image! Get a pixel from this image using the texture2D() function.

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.xy;
    float d = length(uv);
    vec2 p = st + (uv / d) * cos(d * 5.0 - u_time * 5.0) * 0.05;
    gl_FragColor = texture2D(u_tex0, p);
}

/* 
Good blank slate to start from:
void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    gl_FragColor = texture2D(u_tex0, uv);
}
*/
