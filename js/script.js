class PiedraPapelTIjeras {
    options = ['papel', 'piedra', 'tijera']
    optionsImages = ['./img/papel.ico', './img/piedra.ico', './img/tijera.ico']

    constructor(){
        this.crearListeners()
    }

    onClickOption(element) {
        const index = parseInt(element.dataset.index) - 1;
        this.iniciarEvaluacion(index);
    }

    crearListeners() {
        const tijeraBtn = document.getElementById('elemento-tijera');
        const papelBtn = document.getElementById('elemento-papel');
        const piedraBtn = document.getElementById('elemento-piedra');



        tijeraBtn.addEventListener('click', () => this.onClickOption(tijeraBtn))
        papelBtn.addEventListener('click', () => this.onClickOption(papelBtn))
        piedraBtn.addEventListener('click', () => this.onClickOption(piedraBtn))
    }

    async randomizeSelection() {
        let selectedIndex;
        selectedIndex = await this.passOptionsAndGetLastIndex();
        return selectedIndex;
    }


    wait(ms) {
        return new Promise((resolve) => setTimeout(() => resolve(), ms));
    }

    async passOptionsAndGetLastIndex() {
        const times = 10;
        let startingAt = Math.floor(Math.random() * this.options.length);
        const machineElement = document.getElementById('machine_response');

        let currentIndex = startingAt;
        for (let i = 0; i < times; i++) {
            const currentUrl = this.optionsImages[currentIndex];
            machineElement.innerHTML = `<div class="icon_option"><img src="${currentUrl}" alt=""></div>`;
            await this.wait(100);
            if (i < times - 1) {
                if ((currentIndex + 1) === this.options.length) {
                    currentIndex = 0;
                } else {
                    currentIndex++;
                }
            }
        }
        return currentIndex;
    }


    async iniciarEvaluacion(itemIndex) {
        const machineSelectedIndex = await this.randomizeSelection();
        const machineSelected = this.options[machineSelectedIndex];
        const personSelected = this.options[itemIndex];
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
}

const juego = new PiedraPapelTIjeras() 
