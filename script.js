const inputs = document.getElementsByClassName("TimesheetSlat__input")



const inputsWithWeekendDaysLiveCollection = [];

for (let i = 0; i < inputs.length; i++) {
  if (i%5 === 0 || i%6 === 0) {
    inputs[i].className = `${inputs[i].className} weekendDay`
  }
  inputsWithWeekendDaysLiveCollection.push(inputs[i])
}

for (let i = 0; i < inputsWithWeekendDaysLiveCollection.length; i++) {
  if (inputsWithWeekendDaysLiveCollection[i].className.split(' ').includes("weekendDay")) {
    inputsWithWeekendDaysLiveCollection[i].value = 0
    continue;
  }
  
  inputsWithWeekendDaysLiveCollection[i].value = 8
}

// for (let i = 0; i < inputs.length; i++) {
  
//   if (inputs[i].className.split(' ').includes("TimesheetSlat__input--disabled")) {
//     continue;
//   }
  
//   // if we are on a friday increase the counter
//   if (i%6 === 0 || i%7 === 0) {
//     console.log('weekend')
//     inputs[i].value = 0
//     continue;
//   }
  
//   inputs[i].value = 8
// }
