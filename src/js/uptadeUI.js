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
                        <i style="color: ${car.color};" class="fa-solid fa-car-side"></i>
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
    let carId;
    selectBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            uptadeForm['uptade-car'].value = btn.dataset.name
            uptadeForm['uptade-car-color'].value = btn.dataset.color
        })
        carId = btn.dataset.id
    });
    uptadeForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let name = uptadeForm['uptade-car'].value
        let color = uptadeForm['uptade-car-color'].value
        if (!name.trim()) {
            alert('Enter car name or car color!!!')
        } else {
            let uptadeCar = { name, color }
            request(`http://127.0.0.1:3000/garage/${carId}`, 'PUT', uptadeCar)
            reload()
        }
    })
}
export default uptadeUI