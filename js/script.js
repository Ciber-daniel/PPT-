window.onload = function () {

}
/** */
const options = ['papel', 'piedra', 'tijera']
const optionsImages = ['../PPT/img/papel.ico', '../PPT/img/piedra.ico', '../PPT/img/tijera.ico']

const tijeraBtn = document.getElementById('elemento-tijera');
const papelBtn = document.getElementById('elemento-papel');
const piedraBtn = document.getElementById('elemento-piedra');

async function randomizeSelection() {
    let selectedIndex;

    selectedIndex = await passOptionsAndGetLastIndex();

    return selectedIndex;
}

async function wait(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

async function passOptionsAndGetLastIndex() {
    const times = 10;
    let startingAt = Math.floor(Math.random() * options.length);
    const machineElement = document.getElementById('machine_response');

    let currentIndex = startingAt;
    for (let i = 0; i < times; i++) {
        const currentUrl = optionsImages[currentIndex];
        machineElement.innerHTML = `<div class="icon_option"><img src="${currentUrl}" alt=""></div>`;
        await wait(100);
        if (i < times - 1) {
            if ((currentIndex + 1) === options.length) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
        }
    }
    return currentIndex;
}

async function iniciarEvaluacion(itemIndex) {
    const machineSelectedIndex = await randomizeSelection();
    console.log('Machine selected index', machineSelectedIndex)

    const machineSelected = options[machineSelectedIndex];
    console.log(machineSelected)
    const personSelected = options[itemIndex];
    console.log(personSelected)
    if (personSelected === 'tijera') {
        if (machineSelected === 'papel') {
            swal(
                'Buen trabajo!',
                'Ganaste la partida!',
                'success'
            )
        } else if (machineSelected === 'tijera') {
            swal('empate',
                'Has empatado',
                'success'

            )
        } else {
            swal(
                'Loser!',
                'Perdiste la partida!',
                'error'
            )
        }
    }
    if (personSelected === 'piedra') {
        if (machineSelected === 'tijera') {
            swal(
                'Buen trabajo!',
                'Ganaste la partida!',
                'success'
            )
        } else if (machineSelected === 'piedra') {
            swal('empate',
                'Has empatado',
                'success'
            )
        } else {
            swal(
                'Loser!',
                'Perdiste la partida!',
                'error'
            )
        }
    }
    if (personSelected === 'papel') {
        if (machineSelected === 'piedra') {
            swal(
                'Buen trabajo!',
                'Ganaste la partida!',
                'success'
            )
        } else if (machineSelected === 'papel') {
            swal('empate',
                'Has empatado',
                'success'

            )
        } else {
            swal(
                'Loser!',
                'Perdiste la partida!',
                'error'
            )
        }
    }
}


tijeraBtn.addEventListener('click', async function () {
    const index = parseInt(tijeraBtn.dataset.index) - 1;
    iniciarEvaluacion(index);
})

papelBtn.addEventListener('click', async function () {
    const index = parseInt(papelBtn.dataset.index) - 1;
    iniciarEvaluacion(index);
    console.log(index)
})

piedraBtn.addEventListener('click', async function () {
    const index = parseInt(piedraBtn.dataset.index) - 1;
    iniciarEvaluacion(index);
})
