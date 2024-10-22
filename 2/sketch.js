// TODO:
//   load image
//   pixel list
//   channels
// an image is a list of colors

let mImg;

function preload() {
  mImg = loadImage("../assets/secret_01.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  image(mImg, 0, 0);

  mImg.loadPixels();
  // this males mImg.pixels (my image dot pixels, a list) available for us to use
  // TODO: for loop here
  // iterate through the pixels to get the red value of the pixel
  //need to iterate by 4 to always get the red value of a pixel
  // if we had nine pixels, the length of this image would be 9 * 4 (each piz)
  // in p5js loadimage, there are always 4 values (red green blue alpha) -- it adds even if they didn't have it before
  for (let idx = 0; idx < mImg.pixels.length; idx+=4){
    let redVal = mImg.pixels[idx + 0];
    let greenVal = mImg.pixels[idx+1];
    let blueVal = mImg.pixels[idx+2];
    let alphaVal = mImg.pixels[idx + 3];

    //we want to assign the green and blue values to 0 to black them out
mImg.pixels[idx+1]=0
mImg.pixels[idx+2]=0


  }
  mImg.updatePixels();

  image(mImg, 0, 0);
}

function draw() {}
