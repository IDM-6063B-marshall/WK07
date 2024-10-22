// TODO: strings and text
//       iterate letters
//       iterate words

let mString =
  "Computers and networks are more than mere tools: They are like living things, themselves.";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  textSize(16);

  //prints words, prints length, makes lowercase
  // print(mString, mString.length, mString.toLowerCase());
  // text(mString, 100, 100);
  // rect(100, 100, 200, 10);

  //iterate through the list of characters

  for (let idx = 0; idx < mString.length; idx++) {
    //mChar = my character (we will extract one character from this list)
    let mChar = mString[idx];
    // let x = random(width);
    // let y = random(height);
    let pos = map(idx, 0, mString.length, 0, height)
    if (mChar <= "c") {
      textSize(40);
    } else {
      textSize(16);
    }

    // text(mChar, x, y);

    text(mChar, pos, pos);
  }
}

function draw() {}
