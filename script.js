

// have to get elements by the classname of TimesheetSlat__data
// then have to 

// we can check how many are disabled and that is the modulo

// if 0 are disabled we are on monday
// if 1 is disabled we are on tuesday
// if 2 are disabled we are on wednesday
// if 3 are disabled we are on thursday

const inputs = document.getElementsByClassName("TimesheetSlat__input")

const validInputs = []

for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].className.split(' ').includes("TimesheetSlat__input--disabled")) {
    continue;
  }
  
  inputs[i].value = 8
  validInputs.push(inputs[i]);
}
