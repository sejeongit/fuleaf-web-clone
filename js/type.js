// let content = "스투키";
// const text = document.querySelector(".text");
// let i = 0;

// function typing(){
//   let txt = content[i++];
//   text.value += txt;
//   if(i > content.length){
//     text.value = "";
//     return false;
//   }
// }
// setInterval(typing, 400);

var typeText = document.querySelector(".text");
var textToBeTyped = "스투키";
var textToBeTypedArr = ["스투키", "몬스테라"];
var index = 0, isAdding = true, textToBeTypedIndex = 0;
 
function playAnim() {
  setTimeout(function () {
    // set the text of typeText to a substring of the text to be typed using index.
    typeText.value = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
    if (isAdding) {
      // adding text
      if (index > textToBeTypedArr[textToBeTypedIndex].length) {
        // no more text to add
        isAdding = false
        //break: wait 2s before playing again
        setTimeout(function () {
          playAnim()
        }, 2000)
        return
      } else {
        // increment index by 1
        index++
      }
    } else {
      // removing text
      if (index === 0) {
        // no more text to remove
        isAdding = true
        //switch to next text in text array
        textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
      } else {
        // decrement index by 1
        index--
      }
    }
    // call itself
    playAnim()
    return false;
  }, isAdding ? 250 : 100)
}
// start animation
playAnim()

