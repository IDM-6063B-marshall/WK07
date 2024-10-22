// TODO: load text
//       count words

let mStrings = "";

function preload() {
  mStrings = loadStrings("../assets/article.txt");
  //see article in assets folder
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  //give me the whole first thing that is in the string (whole article in this case)
let mString = mStrings[0];
  // print(mString, mString.length);

  //counting the words
  let mWords = mString.toLowerCase().split(" ");

  //creating a dictionary aka an associative array
  let wordCounts = {};

  // if the words is in the dictionary, see how many times i've seen it and add 1 to the number of times; if not, start at 1
  //This creates a list of every word and how many discrete times it appears
  for (let idx = 0; idx < mWords.length; idx++) {
    let mWord = mWords[idx].replace(".", ""); // replaces all period with nothing

    if (mWord in wordCounts) {
      wordCounts[mWord] = wordCounts[mWord] + 1;
    } else {
      wordCounts[mWord] = 1;
    }
    print(wordCounts);
  }
  
}

function draw() {}
