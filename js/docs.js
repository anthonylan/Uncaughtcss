/*const trigger = document.querySelector('.sidenav-trigger');
const sidenav = document.querySelector('.sidenav');

trigger.addEventListener('click', () => {
    sidenav.classList.toggle('is-open')
})*/


const modalTrigger = document.querySelector('.modal-trigger');
const modal = document.querySelector('.modal');

//open modal
modalTrigger.addEventListener('click', () => {
    modal.classList.add('modal-is-active')
})

window.addEventListener('click', closeModal); //close modal

//close modal function
function closeModal(e){
    if(e.target == modal){
        modal.classList.remove('modal-is-active')
    }
}
