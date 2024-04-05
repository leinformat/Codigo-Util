let header = document.querySelector('.header');
let sticky = header.offsetTop;
let ache3 = document.querySelector('.ocultar').offsetTop;

console.log(sticky, window.pageYOffset,ache3,window.innerHeight)

addEventListener('scroll',()=>{
    sticky >= window.pageYOffset ? header.classList.remove('sticky') : header.classList.add('sticky');

    ache3 >= window.pageYOffset ? null : header.classList.remove('sticky');
    console.log(window.scrollY)

})

if ((window.innerHeight + window.scrollY) == document.body.clientHeight){

    console.log('LLegamos al final del bloque');

}