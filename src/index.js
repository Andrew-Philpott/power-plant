import "./css/styles.css";

$(document).ready(function () {
  Start();
});
function Start() {
  createPlantCountForm();
  attachPlantCountListener();
}
function createPlantCountForm() {
  const main = $("#app");
  const userFrom = `<div id="plant-count-container">
  <label for="plant-count">How many plants?</label>
  <div class="row">
    <div class="col-6">
      <select class="form-control" id="plant-count" required>
        <option value="">Select...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-6">
      <button id="plant-count-button" class="btn btn-primary">
        Create
      </button>
    </div>
  </div>
</div>`;
  return main.html(userFrom);
}
function attachPlantCountListener() {
  $("#plant-count-button").on("click", function () {
    const plantCount = $("#plant-count option:selected").val();
    createPlantNameAndPropertiesPartial(plantCount);
  });
}
function createPlantNameAndPropertiesPartial(plantCount) {
  createPlantNameAndPropertiesForm(plantCount);
  attachPlantNameAndPropertiesListener();
}
function attachPlantNameAndPropertiesListener() {
  $("#create-plants").on("click", function (event) {
    event.preventDefault();
    const plantNameElements = $(".plant-name");
    const plantPropertyCount = $(".plant-property-count");
    let plants = [];
    for (let i = 0; i < plantNameElements.length; i++) {
      let plant = [
        $(plantNameElements[i]).val(),
        $(plantPropertyCount[i]).val(),
      ];
      plants.push(plant);
    }
    createPlantsPage(plants);
  });
}
function createPlantNameAndPropertiesForm(plantCount) {
  const nameAndPropertiesForm = $("#customize");
  if (nameAndPropertiesForm) {
    $("#customize").remove();
  }
  let result = ``;
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
  <div id="customize" class="form-row">
  <div class="col-${b}"><h3>${a}</h3></div><div class="col-${c}"><h3>How many properties?</h3></div>`;
  for (let i = 0; i < plantCount; i++) {
    let header;
    if (plantCountToInt === 1) {
      header = "'s";
    } else {
      header = " " + (i + 1) + "'s";
    }
    result += `
    <div class="col-${b} form-group">${createNameInput(i, header)}</div>
    <div class="col-${c} form-group">${createPropertyCountSelect(i)}</div>
    `;
  }

  result += `<button id="create-plants" type="submit">Create Plants</div>`;
  const main = $("#plant-count-container").append(result);
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

// function definePlantFunctions(plants) {
//   const result = ``;
//   for (let i = 0; i < plants.length; i++) {
//     result += `<label for="plant-${i}-name">Plant${header} name</label>
//     <input
//     type="text"
//     class="form-control plant-name"
//     id="plant-${i}-name" required
//   />`;
//   }
// }

// function propertyDescription(plant) {}
// function propertyFunction(plant) {}
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

function createPlantsPage(plants) {
  let columnSize;
  let count = plants.length;
  if (count === 3) {
    columnSize = 4;
  } else if (count === 2) {
    columnSize = 6;
  } else if (count === 1) {
    columnSize = 12;
  }
  let result = `<div id="game"><div class="row">`;
  for (let i = 0; i < count; i++) {
    result += `<div class='col-${columnSize}'>${createPlant(plants[i])}</div>`;
  }
  result += `</div></div>`;
  return $("#app").html(result);
}

function createPlant(plant) {
  const miracleGrow = changeState("soil")(10);
  const naturalFood = changeState("soil")(5);
  const peanutButter = changeState("soil")(0);
  const sun = changeState("light")(5);
  const blueLight = changeState("light")(10);
  const UV = changeState("light")(-20);
  const water = changeState("hydration")(10);
  const tea = changeState("hydration")(2);
  const gasoline = changeState("hydration")(-20);

  const soil = [
    [
      "soil",
      [
        [miracleGrow, "Miracle Grow", "10"],
        [naturalFood, "Natural food", "5"],
        [peanutButter, "Peanut butter", "0"],
      ],
    ],
  ];
  const light = [
    [
      [
        "light",
        [sun, "Sun light", "10"],
        [blueLight, "Blue light", "10"],
        [UV, "Ultraviolet light", "-20"],
      ],
    ],
  ];
  const hydration = [
    [
      "hydation",
      [
        [water, "Water", "10"],
        [tea, "Tea", "2"],
        [gasoline, "Gasoline", "-20"],
      ],
    ],
  ];

  let result = `<h1>${plant[0]}</h1>`;
  const numOfAbilities = parseInt(plant[1]);
  let types = [soil, light, hydration];
  result += `<div class="plant-buttons">`;

  for (let i = 0; i < numOfAbilities; i++) {
    result += createAbilityButtons(plant, types, i);
  }
  result += `</div>`;
  return result;
}
function createAbilityButtons(plant, types, i) {
  let result = ``;
  // let plantName = plant[0];
  for (let j = 0; j < 3; j++) {
    result += `<button id="${plant[0]}${types[j][0]}${i}" class="ability">Give ${types[j][0]} (${types[j][1][j][2]})</button>`;
  }

  return result;
  // $("#game").on("click", ".ability", function () {
  //   const newState = stateChanger(ability);
  //   // let pizzaCrust = $(this).text();
  //   // createPizzaSizesView(pizzas, pizzaCrust);
}

//the buttons id needs to be the type soil, light, hydration
//The button needs to say what it does with add
//and we need a div element to store the value

// function createAbiliyListeners(numOfAbilities) {

// }

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

const stateChanger = storeState({ soil: 0, light: 0, hydration: 0 });

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};
