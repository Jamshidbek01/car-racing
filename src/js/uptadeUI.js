import './createUptade'
import reload from './reload';
import request from './request';
const uptadeForm = document.querySelector('#uptade-form')
const ul = document.querySelector('.cars')
const uptadeUI = (data) => {
    ul.innerHTML = ''
    data.forEach((car) => {
        ul.innerHTML += `
        <li>
            <div class="top d-flex justify-content-between">
                <div class="btns fs-5">
                    <button id="start" type="button" class="btn btn-primary btn-sm">Start</button>
                    <button id="stop" type="button" class="btn btn-primary btn-sm">Stop</button>
                    <button id="select" data-name="${car.name}" data-color="${car.color}" data-id="${car.id}" type="button" class="btn btn-primary btn-sm">Select</button>
                    <button id="delete" data-id="${car.id}" type="button" class="btn btn-danger btn-sm"><ion-icon
                     name="trash-outline"></ion-icon>
                    </button>
                </div>
                <div class="name">${car.name}</div>
            </div>
            <div class="bottom d-flex justify-content-between">
                        <svg style="color: ${car.color};" class="svg-inline--fa fa-car-side" aria-hidden="true" focusable="false"
        data-prefix="fas" data-icon="car-side" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
        data-fa-i2svg="">
        <path fill="currentColor"
            d="M171.3 96H224v96H111.3l30.4-75.9C146.5 104 158.2 96 171.3 96zM272 192V96h81.2c9.7 0 18.9 4.4 25 12l67.2 84H272zm256.2 1L428.2 68c-18.2-22.8-45.8-36-75-36H171.3c-39.3 0-74.6 23.9-89.1 60.3L40.6 196.4C16.8 205.8 0 228.9 0 256V368c0 17.7 14.3 32 32 32H65.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H385.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H608c17.7 0 32-14.3 32-32V320c0-65.2-48.8-119-111.8-127zm-2.9 207c-6.6 18.6-24.4 32-45.3 32s-38.7-13.4-45.3-32c-1.8-5-2.7-10.4-2.7-16c0-26.5 21.5-48 48-48s48 21.5 48 48c0 5.6-1 11-2.7 16zM160 432c-20.9 0-38.7-13.4-45.3-32c-1.8-5-2.7-10.4-2.7-16c0-26.5 21.5-48 48-48s48 21.5 48 48c0 5.6-1 11-2.7 16c-6.6 18.6-24.4 32-45.3 32z">
        </path>
    </svg>
                        <ion-icon name="flag"></ion-icon>
            </div>
        </li>
        `
    });
    let deleteBtn = document.querySelectorAll('#delete')
    deleteBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            request(`http://127.0.0.1:3000/garage/${btn.dataset.id}`, 'DELETE')
                .then((data) => {
                    reload()
                })
                .catch((err) => {
                    console.log(err);
                })
        })
    });
    let selectBtn = document.querySelectorAll('#select')
    selectBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            uptadeForm['uptade-car'].value = btn.dataset.name
            uptadeForm['uptade-car-color'].value = btn.dataset.color
        })
        uptadeForm.addEventListener('submit', (e) => {
            e.preventDefault()
            let name = uptadeForm['uptade-car'].value
            let color = uptadeForm['uptade-car-color'].value
            if (!name.trim()) {
                alert('Enter car name or car color!!!')
            } else {
                let uptadeCar = { name, color }
                request(`http://127.0.0.1:3000/garage/${btn.dataset.id}`, 'PUT', uptadeCar)
                reload()
            }
        })
    });
}
export default uptadeUI