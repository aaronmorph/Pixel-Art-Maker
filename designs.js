//Size Input from DOM elements
const sizePicker = document.getElementById('sizePicker');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const canvas = document.getElementById('pixelCanvas');

// Colour Input
const canvasColor = document.getElementById('colorPicker');


//event listener for grid
document.getElementById('sizePicker').addEventListener('submit', function(event) {
    event.preventDefault();
    const gridHeight = document.getElementById('inputHeight').value;
    const gridWidth = document.getElementById('inputWidth').value;
    makeGrid(gridHeight, gridWidth);
});

// Make Grid plus event listener
function makeGrid(height, width) {
    canvas.innerHTML = ""; //resetting canvas from https://www.w3schools.com/jsref/prop_html_innerhtml.asp
    //for the table I looked at the following for assistance https://knowledge.udacity.com/questions/64355
    //I also used Lesson 4 10. Increment and Decrement onwards.
      for (var h = 0; h < height; h++) {
        const row = canvas.insertRow('tr');
        for (var w = 0; w < width; w++) {
          const cell = row.insertCell('td');
          cell.addEventListener('click', function(event) {
            const color = document.getElementById('colorPicker');
            event.target.style.backgroundColor = color.value;
          });   
        }
    }
}

//Defaults to a 10 x 10 grid when page is opened/refreshed 
makeGrid(10, 10);
