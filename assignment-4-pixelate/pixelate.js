let rowCount = 0;
let colCount = 16;
let canColor = false;

/**
 * Function to set color to a box
 */

const setBoxColor = box => {
  let color = document.getElementById("color").value;
  box.style.backgroundColor = color;
};

/**
 * Function to add event listeners to a box
 */
const addAllEventListeners = box => {
  box.addEventListener("click", function(event) {
    setBoxColor(box);
  });

  box.addEventListener("mousedown", function(event) {
    setBoxColor(box);
    canColor = true;
  });

  box.addEventListener("dragenter", function(event) {
    setBoxColor(box);
    canColor = true;
  });

  box.addEventListener("mouseover", function(event) {
    if (canColor) {
      setBoxColor(box);
    }
  });

  box.addEventListener("dragover", function(event) {
    if (canColor) {
      setBoxColor(box);
    }
  });

  box.addEventListener("mouseup", function(event) {
    setBoxColor(box);
    canColor = false;
  });

  box.addEventListener("dragend", function(event) {
    setBoxColor(box);
    canColor = false;
  });
};

// Function to update rowCounter on the page
const updateRowCounter = () => {
  document.getElementById("rowCounter").innerHTML = "(" + rowCount + ")";
};

// Function to update colCounter on the page
const updateColCounter = () => {
  document.getElementById("colCounter").innerHTML = "(" + colCount + ")";
};

updateRowCounter();
updateColCounter();

/**
 * Add/Remove Rows&Columns
 */
document.getElementById("addRow").addEventListener("click", function(event) {
  let row = document.createElement("TR");
  for (let i = 0; i < colCount; i++) {
    let box = document.createElement("TD");
    box.style.backgroundColor = "gray";
    addAllEventListeners(box);
    row.appendChild(box);
  }
  document.getElementById("tableBody").appendChild(row);
  rowCount++;
  updateRowCounter();
});

document.getElementById("remRow").addEventListener("click", function(event) {
  let tableBody = document.getElementById("tableBody");
  tableBody.removeChild(tableBody.childNodes[rowCount - 1]);
  if (rowCount > 0) {
    rowCount--;
    updateRowCounter();
  }
});

document.getElementById("addCol").addEventListener("click", function(event) {
  for (let i = 0; i < rowCount; i++) {
    let tableBody = document.getElementById("tableBody"); // Grabs the table body
    let tableRow = tableBody.rows[i]; // Grabs the current row
    let box = document.createElement("TD"); // Creates a box to add
    box.style.backgroundColor = "gray"; // Sets background color to gray
    addAllEventListeners(box);
    tableRow.appendChild(box); // Append child to the current row
  }
  colCount++;
  updateColCounter();
});

document.getElementById("remCol").addEventListener("click", function(event) {
  for (let i = 0; i < rowCount; i++) {
    let tableBody = document.getElementById("tableBody"); // Grabs the table body
    let tableRow = tableBody.rows[i]; // Grabs the current row
    tableRow.removeChild(tableRow.childNodes[colCount - 1]); // Removes the 1st child in the current row
  }
  if (colCount > 0) {
    colCount--;
    updateColCounter();
  }
});

/**
 * Fill All Cells
 * Fill Empty Cells
 * Clear Cells
 */

document
  .getElementById("fillAllCells")
  .addEventListener("click", function(event) {
    let color = document.getElementById("color").value;
    let tableBody = document.getElementById("tableBody");
    for (let i = 0, row; (row = tableBody.rows[i]); i++) {
      for (let j = 0, col; (col = row.cells[j]); j++) {
        col.style.backgroundColor = color;
      }
    }
  });

document
  .getElementById("fillEmptyCells")
  .addEventListener("click", function(event) {
    let tableBody = document.getElementById("tableBody");
    let color = document.getElementById("color").value;
    for (let i = 0, row; (row = tableBody.rows[i]); i++) {
      for (let j = 0, col; (col = row.cells[j]); j++) {
        if (col.style.backgroundColor == "gray") {
          col.style.backgroundColor = color;
        }
      }
    }
  });

document
  .getElementById("clearCells")
  .addEventListener("click", function(event) {
    let tableBody = document.getElementById("tableBody");
    for (let i = 0, row; (row = tableBody.rows[i]); i++) {
      for (let j = 0, col; (col = row.cells[j]); j++) {
        col.style.backgroundColor = "gray";
      }
    }
  });
