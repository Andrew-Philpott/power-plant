import "./css/styles.css";

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

const stateChanger = storeState({ soil: 0, light: 0, hydration: 0 });

//function factory
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

const miracleGrow = changeState("soil")(10);
const natural = changeState("soil")(5);
const peanutButter = changeState("soil")(0);

const sun = changeState("light")(5);
const UV = changeState("light")(-5);

const water = changeState("hydration")(10);
const tea = changeState("hydration")(2);
const gasoline = changeState("hydration")(-20);

$(document).ready(function () {
  Start();
});
function Start() {
  createPlantCountForm();
  attachPlantCountListener();
}
function createPlantCountForm() {
  const main = $("#app");
  const userFrom = `<div id='plant-count-input'><p>How many plants would you like to make?<button value="1" class="plant-count-button">One</button><button value="2" class="plant-count-button">Two</button><button value="3" class="plant-count-button">Three</button></div>`;
  return main.html(userFrom);
}
function attachPlantCountListener() {
  $("#plant-count-input").on("click", ".plant-count-button", function () {
    const plantCount = $(this).val();
    createPlantNameAndPropertiesPage(plantCount);
  });
}
function createPlantNameAndPropertiesPage(plantCount) {
  createPlantNameAndPropertiesForm(plantCount);
  attachPlantNameAndPropertiesListener();
}
function attachPlantNameAndPropertiesListener() {
  $("#name-and-property-form").submit(function (event) {
    event.preventDefault();
    const plantNames = Array.from($(".plant-name"));
    const plantPropertyCount = Array.from($(".plant-property-count"));

    for (let i = 0; i < plantNames.length; i++) {
      console.log($(plantNames[i]).val());
      console.log($(plantPropertyCount[i]).val());
    }
  });
  // .on("click", ".plant-count-button", function () {
  //   const plantCount = $(this).val();
  //   createPlantNameAndPropertiesForm(plantCount);
  // });
}
function createPlantNameAndPropertiesForm(plantCount) {
  let result = `<div class="jumbotron">Plant builder</div><form id="name-and-property-form">`;
  const plantCountToInt = parseInt(plantCount);
  let a = ``;
  let b = ``;
  let c = ``;
  if (plantCountToInt === 1) {
    a = `What is the plant's name?`;
    b = `6`;
    c = b;
  } else {
    a = `What are their names?`;
    b = `6`;
    c = `6`;
  }
  result += `
  <div class="form-row">
  <div class="col-${b}"><h3>${a}</h3></div><div class="col-${c}"><h3>How many properties?</h3></div></div>`;
  for (let i = 0; i < plantCount; i++) {
    let header;
    if (plantCountToInt === 1) {
      header = "'s";
    } else {
      header = " " + (i + 1) + "'s";
    }
    result += `<div class="form-row plant-name-property-container">
    <div class="col-${b} form-group">${createNameInput(i, header)}</div>
    <div class="col-${c} form-group">${createPropertyCountSelect(i)}</div>
    </div>`;
  }

  result += `<button id="create-plants" type="submit">Create Plants</div>`;
  const main = $("#app").html(result);
  return main;
}
function createNameInput(i, header) {
  const result = `<label for="plant-${i}-name">Plant${header} name</label>
    <input
    type="text"
    class="form-control plant-name"
    id="plant-${i}-name" required
  />`;
  return result;
}
function createPropertyCountSelect(i) {
  const result = `<label for="plant-${i}-count"><br></label><select class="form-control plant-property-count" id="property-count-${
    i + 1
  }" required>
  <option value="">Select...</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  </select>`;
  return result;
}

function definePlantFunctions(plants) {
  const result = ``;
  for (let i = 0; i < plants.length; i++) {
    result += `<label for="plant-${i}-name">Plant${header} name</label>
    <input
    type="text"
    class="form-control plant-name"
    id="plant-${i}-name" required
  />`;
  }
}

function propertyDescription(plant) {}
function propertyFunction(plant) {}
// function createPlantInputContainers(plantCount) {
//   let columnSize;
//   if (plantCount === 3) {
//     columnSize = 4;
//   } else if (plantCount === 2) {
//     columnSize = 6;
//   } else if (plantCount === 1) {
//     columnSize = 12;
//   }
//   for (let i = 0; i < plantCount; i++) {}
// }

// function createPlantInput(plantCount) {
//   let columnSize;
//   const plantCountToInt = parseInt(plantCount);
//   if (plantCountToInt === 3) {
//     columnSize = 4;
//   } else if (plantCountToInt === 2) {
//     columnSize = 6;
//   } else if (plantCountToInt === 1) {
//     columnSize = 12;
//   }
//   let result = `<div class="row">`;
//   for (let i = 0; i < plantCount; i++) {
//     result += `<div class='col-${columnSize}'><h2>Plant # ${i}</h2>${createInput(
//       i
//     )}</div>`;
//   }
//   result += `</div>`;
//   return result;
// }

// function createInput(number) {
//   const plantProperties = `
//   <label for="plant-${number}">Property</label>
//   <input
//     type="text"
//     class="form-control"
//     id="plant-${number}-propone"
//   />
//   <label for="plant-${number}">Property</label>
//   <input
//     type="text"
//     class="form-control"
//     id="plant-${number}-proptwo"
//   />
//   <label for="plant-${number}">Property</label>
//   <input
//     type="text"
//     class="form-control"
//     id="plant-${number}-propthree"
//   />`;
//   return plantProperties;
// }
