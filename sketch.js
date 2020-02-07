//DISCRETE FOURIER TRANSFORM

let x = [];
let y = [];  //signal
let fourierX;
let fourierY;


let time = 0;
let path = [];
/**
 * 
 * 
 */

function setup() {
    createCanvas(1500,1500);

    let angle = 0;

    for(let i = 0; i < 100; i++) {
        angle = map(i, 0, 100, 0, TWO_PI);
        x[i] = -log(angle);
        }

    for(let i = 0; i < 100; i++) {
        angle = map(i, 0, 100, 0, TWO_PI);
        y[i] = 100*sin(angle); 
     }
    fourierY = dft(y); //compute dft of signal
    fourierX = dft(x);
  
}
/**
 * 
 * 
 */
function epiCycles(x ,y, rotation, fourier) {
    
    for(let i =0; i < fourier.length; i++) {
        let prevx = x;
        let prevy = y;
   
        let freq = fourier[i].freq ;
        let amp = fourier[i].amp;
        let phase = fourier[i].phase;

        x += amp * cos(freq * time + phase + rotation);
        y += amp * sin(freq * time + phase + rotation);

        stroke(255, 100);
        noFill();
        ellipse(prevx, prevy, amp * 2);
        stroke(255);
        line(prevx, prevy, x, y);
        
    }
    return createVector(x, y);

}
/**
 * 
 * 
 */

function draw() {
    background(0);
    translate(0,100);
    let vx = epiCycles(400, 50, 0, fourierX);
    let vy = epiCycles(50, 400, HALF_PI, fourierY);
    let v = createVector(vx.x, vy.y);
    path.unshift(v);

   
    line(vx.x, vx.y, v.x, v.y);
    line(vy.x, vy.y, v.x, v.y);
    beginShape();
    noFill();
    for(let i = 0; i < path.length; i++) {
        vertex(path[i].x , path[i].y);
    }
    endShape();
    const dt = TWO_PI / fourierY.length;
    time += 0.001;

}
