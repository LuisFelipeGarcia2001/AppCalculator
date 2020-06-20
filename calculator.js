function calculator(type, value) {
  var displayChanger = document.getElementById('result')
  if (type === 'action') {
    if (value === 'c') {
      // clear display
      displayChanger.value = ''
    }
    if (value === '+' | value === '-' | value === '*' | value === '/') {
      //add math operators
      displayChanger.value += value
    }
    if (value === "=") {
      //calculate the entire math and show the result on display
      var result = eval(displayChanger.value)
      displayChanger.value = result
    }
  } else if (type === 'number') {
    //add number to display
    displayChanger.value += value
  }
}