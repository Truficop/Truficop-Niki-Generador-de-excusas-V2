/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function excuseGenerator(whoList, actionList, whatList, whenList) {
  const who = Math.floor(Math.random() * whoList.length);
  const action = Math.floor(Math.random() * actionList.length);
  const what = Math.floor(Math.random() * whatList.length);
  const when = Math.floor(Math.random() * whenList.length);
  return (
    whoList[who] +
    " " +
    actionList[action] +
    " " +
    whatList[what] +
    " " +
    whenList[when]
  );
}

window.onload = function() {
  //write your code here
  const WHO_LIST = ["The dog", "My grandma", "The mailman", "My bird"];
  const ACTION_LIST = ["ate", "peed", "crushed", "broke"];
  const WHAT_LIST = ["my homework", "my phone", "the car"];
  const WHEN_LIST = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  const randomExcuse = excuseGenerator(
    WHO_LIST,
    ACTION_LIST,
    WHAT_LIST,
    WHEN_LIST
  );
  console.log(randomExcuse);
  document.getElementById("excuse").innerHTML = randomExcuse;
};
