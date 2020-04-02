//Code Challenge
//To what floor do the instructions take Santa?
const fs = require("fs");

//Long Answer

function question1() {
  fs.readFile("./santa.txt", (err, data) => {
    const directions = data.toString();
    const directionsArray = directions.split("");
    const answer = directionsArray.reduce((acc, currentvalue) => {
      if (currentvalue === "(") {
        return (acc += 1);
      } else if (currentvalue === ")") {
        return (acc -= 1);
      }
    }, 0);
    console.log(answer);
  });
}

//Short Answer

fs.readFile("./santa.txt", (err, data) => {
  const totalFloors = data.length;
  console.log(totalFloors);
  const floorUp = data
    .toString()
    .split("")
    .filter(da => da === "(").length;

  return console.log("Santa is on floor ", floorUp - (totalFloors - floorUp));
});
