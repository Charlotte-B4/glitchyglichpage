//make comments like this in the script.js file
//by adding two slashes at the start of lines of code you can 'comment out' the code
//it's helpful to write comments to keep track of what each line of code does

//a function to select random item from a list (do not edit)
const buttonEmail = document.getElementById("poem");
function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
var i = 0;
var speed = 50;

//function for network error message
const sent1 = [
  "writing is hard" ,
  "steal - steal - steal" ,
  "why not steal the letters" ,
  "and still be an author",
  "you are the author" ,
  "out of range.",
  "it's the ideas.",
  "bad connection.",
];

const buttonRetry = document.getElementById("button-network");

function changeResultsError() {
  const paragraph = document.getElementById("networkError");
  paragraph.innerText = getRandomFromList(sent1);
}
buttonRetry.addEventListener("click", changeResultsError);
//end of network error function

//function dropdown menu (do not edit this first part)
function addEval(evalText) {
  const subjectContent = document.getElementById("subject-content");
  subjectContent.innerText = evalText;
}
//when selected in the dropdown menu, the x variables trigger the associated text. Edit the x variables (and make sure to also update them in the index.html file) and edit the associated text/emojis within the quotes
//think about what use you might have for a dropdown menu: you could have someone select their 'mood' and give them an appropriate song, a bit of good or bad advice, an emoji, etc.
function dropdownFunction() {
  var x = document.getElementById("subject").value;
  if (x === "window") {
    addEval("blocking the wind. its comfortable. maybe too comfortable.");
  } else if (x === "wind") {
    addEval("blocked by the window, which means 'wind eye' according to a certain other search engine. eyes see too much and block ideas.");
  } else if (x === "ice") {
    addEval("walking down the muddy path to the creek. rushing water. construction happening across the bank. i should've worn gloves.");
  } else if (x === "possum") {
    addEval("the possum that won't stop snacking from the orange tree. the other possum who slept in the floating flower-bed outside the kitchen window.");
  } else if (x === "thaw") {
    addEval("people always say I shouldn't wear socks to bed - i will freeze without them - them as in the socks and the squabbles.");
  }
}
//end of dropdown function

//start of haiku function
//lists of variables: replace all of the 5 and 7 syllable constants in the two arrays below. The more constants you write, the more variety you will have in your poem
const fiveSyllables = [
  "i need to get up",
  "feel the winter breeze",
  "thaw out the pages",
  "connection is bad",
  "no letters press down",
];
const sevenSyllables = [
  "neurons frozen by the wind",
  "the ink is like a slushie",
  "the pen skates along the page",
  "how do i sculpt a symbol",
  "in a place as cold as this",
];
//code for haiku function (do not edit)
const buttonHaiku = document.getElementById("button-haiku");
function changeResults() {
  const paragraph = document.getElementById("haiku-1-1");
  const paragraphTwo = document.getElementById("haiku-1-2");
  const paragraphThree = document.getElementById("haiku-1-3");
  const paragraphFour = document.getElementById("haiku-2-1");
  const paragraphFive = document.getElementById("haiku-2-2");
  const paragraphSix = document.getElementById("haiku-2-3");
  const paragraphSeven = document.getElementById("haiku-3-1");
  const paragraphEight = document.getElementById("haiku-3-2");
  const paragraphNine = document.getElementById("haiku-3-3");
  paragraph.innerText = getRandomFromList(fiveSyllables);
  paragraphTwo.innerText = getRandomFromList(sevenSyllables);
  paragraphThree.innerText = getRandomFromList(fiveSyllables);
  paragraphFour.innerText = getRandomFromList(fiveSyllables);
  paragraphFive.innerText = getRandomFromList(sevenSyllables);
  paragraphSix.innerText = getRandomFromList(fiveSyllables);
  paragraphSeven.innerText = getRandomFromList(fiveSyllables);
  paragraphEight.innerText = getRandomFromList(sevenSyllables);
  paragraphNine.innerText = getRandomFromList(fiveSyllables);
}
buttonHaiku.addEventListener("click", changeResults);
//end of haiku function

//start of search function
const textWrapper = document.getElementById("text-wrapper");
const textInput = document.getElementById("text-input");
//search function constants
//play with Google search function to come up with search terms most relevant to you. Think about how these search terms tell a story. Replace all of the placeholder text below (phrases in red font) with search terms of your own. If you keep the phrases organised alphabetically, you can ensure you have enough results for each word.
const words = [
  "announcement: the bus leaves in 5 minutes. you’re still at home.",

  "buy a bag that’s light enough",
  
  "chapstick for cold lips",

  "dance heels to weigh me down",
  
  "exercise-induced asthma symptoms",

  "foot cramp? get some running shoes",
  
  "good form!",
  
  "hot on your toes!",
  
  "icy morning",
  
  "just what I needed today",
  
  "K.",
  
  "languid morning cut short",
  
  "minutes away from stop - two",
  
  "no one around - the great run won’t be too embarrassing",
  
  "only one minute delayed -",
  
  "poked in the eye by a rogue tree branch",
  
  "quick! stop searching! you don't have time!",
  
  "road work ahead",
  
  "swinging keychains to knock against the empty water bottle",
  
  "two <em>more</em> minutes delayed. thank God.",
  
  "ultimate tips for how to reset one's sleep schedule",
  
  "very very cold hands",
  
  "why did I forget the pages from the printer? it's the reason I'm running late today",
  
  "xbox for sale. (want one after this)",
  
  "yeti. feel like a wailing yeti.",
  
  "zero minutes left. (made it)",
];
//search function (do not edit)
function changeText(e) {
  const searchWord = e.target.value.toLowerCase().trim();
  const resultWords = words.filter((word) =>
    word.toLowerCase().startsWith(searchWord)
  );
  // clear exist words
  while (textWrapper.firstChild) {
    textWrapper.removeChild(textWrapper.firstChild);
  }
  if (searchWord != "") {
    for (var i = 0; i < resultWords.length; i++) {
      const line = document.createElement("div");
      line.innerHTML = resultWords[i];
      textWrapper.appendChild(line);
    }

    if (resultWords.length === 0) {
      const line = document.createElement("div");
      line.innerHTML = "no results";
      textWrapper.appendChild(line);
    }
  }
}
textInput.addEventListener("input", changeText);
// end search function code

//start of code for poem

const subjects =
    "floating words, the corners in the garden, orange-eating possums, figure-skating leaves".split(
      ","
    ),
  verbs =
    "survey, assess, thaw, replenish, quench, hide, cuddle, help".split(
      ","
    ),
  objects =
    "smashed heaters, broken windows, crushed ice, faded ink, empty pages, stagnent thoughts".split(
      ","
    );
// set up the counter
let counter = 0;

// a function to pull a random item from a list
function getRandomFromList2(list) {
  return list[Math.floor(Math.random() * list.length)];
}
// add a line to the poem constructed from the lists of words
function addLine(indent = false) {
  // create the line
  const line = document.createElement("div");
  if (indent === true) {
    // indent is true so add an indent class
    line.classList.add("indent");
  }
  const text =
    getRandomFromList2(subjects) +
    " " +
    getRandomFromList2(verbs) +
    " " +
    getRandomFromList2(objects);
  const lineText = document.createTextNode(text);
  line.appendChild(lineText);
  // get the poem
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// add a blank line to the poem
function addBlankLine() {
  const line = document.createElement("div");
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// remove the first line from the poem
function removeFirstLine() {
  const poem = document.getElementById("poem");
  poem.removeChild(poem.childNodes[0]);
}
// implement the rules of the poem
function processPoem() {
  counter++;
  if (counter % 5 === 0) {
    addBlankLine();
  } else if (counter % 5 === 2 || counter % 5 === 4) {
    // if the second or fourth line add the line with an indent
    addLine(true);
  } else {
    addLine();
  }
  if (counter > 15) {
    removeFirstLine();
  }
}
window.setInterval(processPoem, 2000);
