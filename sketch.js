/* 
  The superellipse, learn more here:

      Learn more here:
  https://en.wikipedia.org/wiki/Superellipse

  https://mathworld.wolfram.com/Superellipse.html

  https://www.youtube.com/watch?v=JqkjQjtenPQ

  https://www.youtube.com/watch?v=PsZwsWbsfyY

  See a my first super ellipse sketch with a lot more explanation
  https://editor.p5js.org/mhoumann87/sketches/Xi48lU8M8

  Based on the Coding Trains Coding Challenge #19
  https://www.youtube.com/watch?v=z86cx2A4_3E&t=16s

*/

// We need a counter to keep track of our run through, and to be
// used as index for our arrays
let index = 0;
// We need a function that returns a negative, positive and the number zero
// to decide which quadrant of the cartesian coordinate system we are
sgn = value => (value < 0 ? 1 : value > 0 ? -1 : 0);

function setup() {
  createCanvas(500, 500);
  // We this animation to be slow
  frameRate(1);
  // Change the color mode from RGB to HBS
  colorMode(HSB);
  // We set the background in setup so we can see every ellipse
  background(0);
}

function draw() {
  strokeWeight(4);

  // Move the 0, 0 from left top corner to the middle
  translate(width * 0.5, height * 0.5);

  // We need two arrays, one for the value of n
  const ns = [5, 3, 2, 1.5, 1, 0.5, 0.3]; // 0.3
  // and one for the color
  const colors = [282, 275, 240, 120, 60, 30, 0];

  // Set the color based on index and colors array
  stroke(colors[index], 100, 100);
  fill(colors[index], 100, 100);

  // Set n based om index and the ns array
  const n = ns[index];
  // Ser variables for a and b to
  const a = 240;
  const b = 200;

  // Use beginShape(), endShape() and vertices to get closed shapes
  beginShape();

  // Draw the superellipse in a loop
  for (let angle = 0; angle < TWO_PI; angle += 0.1) {
    // Divide 2 by n
    const na = 2 / n;
    // Get the x and y values
    const x = pow(abs(cos(angle)), na) * a * sgn(cos(angle));
    const y = pow(abs(sin(angle)), na) * b * sgn(sin(angle));

    // Create a vertex based on x and y
    vertex(x, y);
  }

  endShape(CLOSE);

  index++;

  if (index == ns.length) noLoop();

  console.log(index);
}
