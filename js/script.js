/** */
const options = ["papel", "piedra", "tijera"];
const optionsImages = [
  "./img/papel.ico",
  "./img/piedra.ico",
  "./img/tijera.ico",
];

const optionsContainer = document.getElementsByClassName("container_space")[0];
const htmlWrite = `
            <div id="elemento-papel" data-index="1" class="icon_option">
              <img src="./img/papel.ico" alt="" />
            </div>
            <br />
            <div id="elemento-piedra" data-index="2" class="icon_option">
              <img src="./img/piedra.ico" alt="" />
            </div>
            <br />
            <div id="elemento-tijera" data-index="3" class="icon_option">
              <img src="./img/tijera.ico" alt="" />
            </div>
          </div>`;

async function randomizeSelection() {
  let selectedIndex;

  selectedIndex = await passOptionsAndGetLastIndex();

  return selectedIndex;
}

async function wait(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

async function passOptionsAndGetLastIndex() {
  const times = 15;
  let startingAt = Math.floor(Math.random() * options.length);
  const machineElement = document.getElementById("machine_response");

  let currentIndex = startingAt;
  for (let i = 0; i < times; i++) {
    const currentUrl = optionsImages[currentIndex];
    machineElement.innerHTML = `<div class="icon_option"><img src="${currentUrl}" alt=""></div>`;
    await wait(100);
    if (i < times - 1) {
      if (currentIndex + 1 === options.length) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
    }
  }
  return currentIndex;
}

async function startEvaluation(itemIndex) {
  const machineSelectedIndex = await randomizeSelection();

  const machineSelected = options[machineSelectedIndex];
  const personSelected = options[itemIndex];
  if (personSelected === "tijera") {
    if (machineSelected === "papel") {
      swal("Buen trabajo!", "Ganaste la partid  a!", "success");
      optionsContainer.innerHTML = `${htmlWrite}`;
      addListeners();
    } else if (machineSelected === "tijera") {
      swal("empate", "Has empatado", "info");
      optionsContainer.innerHTML = `${htmlWrite}`;
      addListeners();
    } else {
      swal("Loser!", "Perdiste la partida!", "error");
      optionsContainer.innerHTML = `${htmlWrite}`;
      addListeners();
    }
  }
  if (personSelected === "piedra") {
    if (machineSelected === "tijera") {
      swal("Buen trabajo!", "Ganaste la partida!", "success");
      optionsContainer.innerHTML = `${htmlWrite}`;
      addListeners();
    } else if (machineSelected === "piedra") {
      swal("empate", "Has empatado", "info");
      optionsContainer.innerHTML = `${htmlWrite}`;
      addListeners();
    } else {
      swal("Loser!", "Perdiste la partida!", "error");
      optionsContainer.innerHTML = `${htmlWrite}`;
      addListeners();
    }
  }
  if (personSelected === "papel") {
    if (machineSelected === "piedra") {
      swal("Buen trabajo!", "Ganaste la partida!", "success");
      optionsContainer.innerHTML = `${htmlWrite}`;
      addListeners();
    } else if (machineSelected === "papel") {
      swal("empate", "Has empatado", "info");
      optionsContainer.innerHTML = `${htmlWrite}`;
      addListeners();
    } else {
      swal("Loser!", "Perdiste la partida!", "error");
      optionsContainer.innerHTML = `${htmlWrite}`;
      addListeners();
    }
  }
}

function addListener(element, image, nameIdentificator) {
  element.addEventListener("click", () => {
    const index = parseInt(element.dataset.index) - 1;
    optionsContainer.innerHTML = `<div id="elemento-${nameIdentificator}" data-index=${element.dataset.index} class="icon_option">
      <img src=${image} alt=""/>
    </div>`;
    startEvaluation(index);
  });
}

function addListeners() {
  // buttons
  const papelBtn = document.getElementById("elemento-papel");
  const piedraBtn = document.getElementById("elemento-piedra");
  const tijeraBtn = document.getElementById("elemento-tijera");

  // add listeners
  addListener(papelBtn, optionsImages[0], options[0]);
  addListener(piedraBtn, optionsImages[1], options[1]);
  addListener(tijeraBtn, optionsImages[2], options[2]);
}

window.onload = function () {
  addListeners();
};
