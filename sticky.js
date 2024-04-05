// Function to toggle sticky behavior
function toggleSticky(form,stickyElementOffsetTop) {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop >= stickyElementOffsetTop) {
		// Set position to fixed and adjust position based on scroll
		form.classList.add('mortgage-calculator__is-sticky');
	} else {
		// Restore original position
		form.classList.remove('mortgage-calculator__is-sticky');
	}
}

// Function to toggle sticky behavior
function handlerToggleSticky(module) {
	// DOM VARIABLES
	const section = module.closest(".dnd-section");
	const row = module.closest(".dnd-row");
	const paddingTop = parseInt(window.getComputedStyle(section).paddingTop);
	const offsetRight = window.innerWidth - (row.offsetLeft + row.offsetWidth);
	const toggleButton = module.querySelector('.mortgage-calculator--sticky-open');
  
	if(window.innerWidth > 992){
		module.style.top = (section.offsetTop + paddingTop)+'px';
	}else{
		module.style.top = (section.offsetTop-30)+'px';
	}
	
	module.style.right = offsetRight+'px';

	const stickyElementOffsetTop = module.offsetTop;
	window.addEventListener('scroll', ()=>toggleSticky(module,stickyElementOffsetTop));
	
	toggleButton.addEventListener("click",()=>{
		toggleButton.closest(".mortgage-calculator--sticky").classList.toggle('mortgage-calculator--sticky-show');
	});
}

!!module.classList.contains('mortgage-calculator--sticky') ? handlerToggleSticky(module) : null;
