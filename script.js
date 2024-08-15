const inputs = document.getElementsByClassName("TimesheetSlat__input")

for (let i = 0; i < inputs.length; i++) {
  if ((i+1)%7 === 6 || (i+1)%7 === 0) {
    inputs[i].value = 0;
    continue;
  }

  inputs[i].value = 8;
}

// downsides 
// very reliant on page structure and class names of elements
// if they decide to "start the week" (currently it's always monday) with a different day, it will break