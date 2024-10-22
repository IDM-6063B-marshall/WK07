// TODO: strings and text
//       iterate letters
//       iterate words

let mString =
  "Computers and networks are more than mere tools: They are like living things, themselves.";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  textSize(16);

  // printing words based on their division by a space
  let mWords = mString.split(" ");
  print(mWords);

  for (let idx = 0; idx < mString.length; idx++) {
    let pos = map(idx, 0, mWords.length, 0, width);
    text(mWords[idx], pos, pos);

    if (mWords[idx] == "are") {
      textSize(64);
    } else {
      textSize(64);
    }
  }
}

function draw() {}
