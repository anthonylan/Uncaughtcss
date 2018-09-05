
const triger = document.querySelectorAll('#trigger');
const sideBar = document.querySelector('#sidebar');
const trasparent = document.querySelector('#transparent');

for(let i = 0; i < triger.length; i++){
  
    triger[i].addEventListener('click', (e) => {
        e.preventDefault();
        sideBar.style.transform = 'translateX(10px)';
        trasparent.style.display = 'table';
    })
    
}

trasparent.addEventListener('click', closeNav);

function closeNav(){
    this.style.display = 'none';
    sideBar.style.transform = 'translateX(-100%)';
}


let gitLink = document.querySelector('.git').addEventListener('click', () => {
    location.assign('https://github.com/anthonylan/uncaught');
})







