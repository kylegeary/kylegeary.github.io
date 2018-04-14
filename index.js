// Select color input, size input, and canvas

let color = $("#colorPicker");
let size = $("#sizePicker");
let canvas = $("#pixelCanvas");
let height = null;
let width = null;

/*
function submitValues() {
    const x = document.getElementById("heightRange").value;
    document.getElementById("height").innerHTML = x;

    const y = document.getElementById("widthRange").value;
    document.getElementById("width").innerHTML = y;
    }
*/

// When size is submitted by the user, call makeGrid()
function submitValues() {
  height = $("#inputHeight").val();
  width = $("#inputWidth").val();
    $('#startHeight').text(height);
    $('#startWidth').text(width);

  if (canvas.children().length > 0) {
    canvas.children().remove();
  }
  makeGrid(height, width);
}

function clearValues() {
$('#inputHeight').val(0);
$('#startHeight').text(0);
$('#inputWidth').val(0);
$('#startWidth').text(0);
canvas.children().remove();
}


//makeGrid function
function makeGrid(height, width) {
  let row, col;
  for (let ri = 0; ri < height; ri++) {
    row = $("<tr/>");
    canvas.append(row);
    for (let ci = 0; ci < width; ci++) {
      col = $("<td/>");
      row.append(col);
    }
  }
}

// Select a color value
canvas.on("mousedown", "td", function(e) {
  e.preventDefault();
  let colorOption = $("#colorPicker").val();
  $(this).css("background-color", colorOption);
});

canvas.on("mouseenter", "td", function(e) {
  if (e.buttons >= 1) {
    e.preventDefault();
    let colorOption = $("#colorPicker").val();
    $(this).css("background-color", colorOption);
  }
});

