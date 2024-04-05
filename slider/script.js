let listImages = document.querySelectorAll('.container img');
let count = 0;

function hide(n){
    listImages.forEach((img,i) =>{
        img.classList.add('hide__image');
        if(i === n){
            img.classList.remove('hide__image');
        }
    })
}

hide(count);

setInterval(()=>{
    if(count >= listImages.length) count = 0;
    hide(count);
    count++
},1200)



// Update 23-08-23

// All Modules
const equipmentDetailsModules = document.querySelectorAll('.equipment-details');

const hideImage = (number,images,groupImg) =>{
  groupImg.querySelector('.equipment-details--active-image').classList.remove('equipment-details--active-image');
  images[number].classList.add('equipment-details--active-image');
}

// Each Module
equipmentDetailsModules.forEach(module =>{
  const groupImages = module.querySelector('.equipment-details__images');
  const delay = groupImages.dataset.delay;
  const images = module.querySelectorAll('.equipment-details__image');
  let count = 1;
  
  setInterval(()=>{
    if(count >= images.length) count = 0;
    hideImage(count,images,groupImages);
    count++
  },delay)
});