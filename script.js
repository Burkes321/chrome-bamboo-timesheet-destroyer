const inputs = document.getElementsByClassName("TimesheetSlat__input")

for (let i = 0; i < inputs.length; i++) {
  if ((i+1)%7 === 6 || (i+1)%7 === 0) {
    inputs[i].className = `${inputs[i].className} weekendDay`
  }
}

for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].className.split(' ').includes("weekendDay")) {
    inputs[i].value = 0
    continue;
  }
  
  inputs[i].value = 8
}
