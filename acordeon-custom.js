// VARIABLES
const accordionItem = document.querySelectorAll('.accordeon-container__item');
const accordionButton = document.querySelectorAll('.accordeon-container__toShow');

// LOGIC
accordionButton.forEach( ( itemBtn , indexBtn )=>{
    itemBtn.addEventListener('click', ()=>{
    // HIDE - SHOW  
    if(accordionItem[indexBtn].classList.contains('active--button')) return accordionItem[indexBtn].classList.remove('active--button');
    
    // HIDE ALL UNCLICKED ITEM
    accordionItem.forEach( accItem =>{
        accItem.classList.remove('active--button');
    })
    // SHOW CLICKED ITEM
     accordionItem[indexBtn].classList.add('active--button');
    })
})


/**---------------------- VERSION 2  ---------------------------*/

// All Accordion Modules
const accordionModules =  document.querySelectorAll('.accordion');
  
  // Accordion Module
  accordionModules.forEach(accordionModule =>{
    let accordionItems = accordionModule.querySelectorAll('.accordion-item');
    let accordionButtons = accordionModule.querySelectorAll('.accordion-header');
    
     // All Accordion Buttons
     accordionButtons.forEach(button =>{
       button.addEventListener("click",()=>{
        // Current Accordion
        let currentAccordion = button.parentNode;
         
        // HIDE - SHOW  
        if(currentAccordion.classList.contains('active--button')) return button.parentNode.classList.remove('active--button');
         
        // HIDE ALL UNCLICKED ITEM
        accordionItems.forEach( accItem =>{
             accItem.classList.remove('active--button');
        })
        // SHOW CLICKED ITEM
        currentAccordion.classList.add('active--button');
       });
     });
})


/**---------------------- VERSION 3  ---------------------------*/

function initAccordion(accordion) {
  // VARIABLES
    const accordionItem = accordion.querySelectorAll('.accordion-item');
    const accordionButton = accordion.querySelectorAll('.accordion-header');
    
    // LOGIC
    accordionButton.forEach( ( itemBtn , indexBtn )=>{
        itemBtn.addEventListener('click', ()=>{
        // HIDE - SHOW  
        if(accordionItem[indexBtn].classList.contains('active--button')){
          accordionItem[indexBtn].querySelector('.accordion-content').style.maxHeight = '0';
          return accordionItem[indexBtn].classList.remove('active--button');
        } 
        
        // HIDE ALL UNCLICKED ITEM
        accordionItem.forEach( accItem =>{
            accItem.classList.remove('active--button');
            accItem.querySelector('.accordion-content').style.maxHeight = '0';
        })
        // SHOW CLICKED ITEM
         const accordionCurrentItem = accordionItem[indexBtn];
         const accordionContent = accordionCurrentItem.querySelector('.accordion-content');
         accordionCurrentItem.classList.add('active--button');
         accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        })
    })
}

window.addEventListener('load', function() {
  // Get all the sliders on the page
  const accordions = document.querySelectorAll('.accordion');

  // Initialize each slider
  accordions.forEach(accordion => {
    initAccordion(accordion);
  });
});