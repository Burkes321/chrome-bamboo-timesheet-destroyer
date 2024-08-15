const inputWrappers = document.querySelectorAll(".TimesheetSlat");

const filteredInputs = Array.from(inputWrappers).filter((input) => {
  // add more classes that are not valid, or maybe it will be easier to just target the valid ones. 
  return input.classList.length === 1 || (!input.classList.contains("js-timesheet-showWeekends") && !input.classList.contains('TimesheetSlat--disabled'))
});

for (let i = 0; i < filteredInputs.length; i++) {
  const input = filteredInputs[i].querySelector('input')
  input.value = 8;
  if (i === filteredInputs.length - 1) {
    input.focus()
  }
}

// downsides 
// very reliant on page structure and class names of elements
// if they decide to "start the week" (currently it's always monday) with a different day, it will break