const createForm = document.querySelector('#create-form')
import request from "./request"
import uptadeUI from "./uptadeUI"
import reload from "./reload"
createForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const color = createForm['create-car-color'].value
    const name = createForm['create-car'].value
    if (!name.trim()) {
        alert('Enter car name or color!!!')
    } else {
        const newCar = { name, color }
        request('http://127.0.0.1:3000/garage', "POST", newCar)
            .then((data) => {
                reload()
            })
            .catch((err) => {
                console.log(err);
            })
    }
    createForm.reset()
})