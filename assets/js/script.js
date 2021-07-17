const descriptions = document.getElementsByClassName("description");
//moment for the date
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
var currentHour = parseInt(moment().format("H"));
var todoForm = document.querySelector(".todo-form");
var btns = document.querySelectorAll(".saveBtn");

var textAreaValue = [];

function createTables() {
  // Local variable

  const tables = $(`
  <table>
        <tbody>
          <tr class="row">
            <td class="hour">9 AM</td>
            <td id="9" class="description">
              <form class="todo-form">
              <textarea data-index="1" id="text-area" class="text-area" data-text="nine"></textarea>
            </td>
            <td id="saveBtn" class="9">
              <i class="far fa-save fa-1.5x saveBtn"></i>
            </td>
          </form>
          </tr>
          <tr class="row">
            <td class="hour">10 AM</td>
            <td id="10" class="description">
              <form class="todo-form">
                <input data-index='2' id="text-area" data-text="ten"></input>
              </td>
              <td id="saveBtn">
                <i class="far fa-save fa-1.5x saveBtn"></i>
              </td>
            </form>
          </tr>
          <tr class="row">
            <td class="hour">11 AM</td>
            <td id="11" class="description">
              <form class="todo-form">
                <input data-index="3" id="text-area" data-text="eleven"></input>
              </td>
              <td id="saveBtn">
                <i class="far fa-save fa-1.5x"></i>
              </td>
            </form>
          </tr>
          <tr class="row">
            <td class="hour">12 PM</td>
            <td id="12" class="description">
              <form class="todo-form">
                <input data-index="4" id="text-area" data-text="twelve"></input>
            </td>
            <td id="saveBtn"> 
              <i class="far fa-save fa-1.5x"></i>
            </td>
          </tr>
          <tr class="row">
            <td class="hour">1 PM</td>
            <td id="13" class="description">
              <form class="todo-form">
                <input data-index="5" id="text-area"></input>
            </td>
            <td id="saveBtn">
              <i class="far fa-save fa-1.5x"></i>
            </td>
          </tr>
          <tr class="row">
            <td class="hour">2 PM</td>
            <td id="14" class="description">
              <form class="todo-form">
                <input data-index="6" id="text-area"></input>
            </td>
            <td id="saveBtn">
              <i class="far fa-save fa-1.5x"></i>
            </td>
          </tr>
          <tr class="row">
            <td class="hour">3 PM</td>
            <td id="15" class="description">
              <form class="todo-form">
                <input data-index="7" id="text-area"></input>
            </td>
            <td id="saveBtn">
              <i class="far fa-save fa-1.5x"></i>
            </td>
          </tr>
          <tr class="row">
            <td class="hour">4 PM</td>
            <td id="16" class="description">
              <form class="todo-form">
                <input data-index="8" id="text-area"></input>
            </td>
            <td id="saveBtn">
              <i class="far fa-save fa-1.5x"></i>
            </td>
          </tr>
          <tr class="row">
            <td class="hour">5 PM</td>
            <td id="17" class="description">
              <form class="todo-form">
                <input data-index="9" id="text-area"></input>
            </td>
            <td id="saveBtn">
              <i class="far fa-save fa-1.5x"></i>
            </td>
          </tr>
        </tbody>
      </table>
  `);
  // append table to tableContainer
  $(".container").append(tables);
}

createTables();

// set color for timeblocks
Array.from(descriptions).forEach((description) => {
  let descriptionIdString = description.id,
    descriptionHour;
  if (descriptionIdString) {
    descriptionHour = parseInt(descriptionIdString);
    // console.log(descriptionHour);
  }
  if (descriptionHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === descriptionHour) {
      setColor(description, "red");
    } else if (currentHour < descriptionHour) {
      setColor(description, "green");
    } else if (currentHour > descriptionHour) {
      setColor(description, "lightgrey");
    } else {
      setColor(description, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

// update btns
for (i of btns) {
  i.addEventListener("click", function () {
    console.log(textArea.value);
    console.log(i);
  });
}

const textArea = $(".text-area").value;
console.log(textArea);
