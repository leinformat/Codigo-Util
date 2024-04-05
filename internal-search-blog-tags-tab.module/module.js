const blogTagsTabModules = document.querySelectorAll('.blog-tags-tab');

const handlerSelect = (button,module) =>{
	module.querySelector('.blog-tags-tab__tab-content.active').classList.remove('active');
	module.querySelector('.blog-tags-tab__title.active').classList.remove('active');
  
	module.querySelector(`.blog-tags-tab__tabs-select option[data-id="${button.dataset.id}"]`).selected = true;
	module.querySelector(`.blog-section__tab-title[data-id="${button.dataset.id}"]`).classList.add('active');
	module.querySelector(`.blog-tags-tab__tab-content[data-id="${button.dataset.id}"]`).classList.add('active');
	
	if(button.dataset.type == 'text_content') module.querySelector('.blog-tags-tab__Search-input').focus();
}

const handlerSearch = (event,textContent,contentClone,content) => {
	content.innerHTML =  contentClone.innerHTML;
	const searchQuery = event.target.value.toLowerCase().trim();
	if(searchQuery.length >= 4){
		const allNodes = content.querySelectorAll('*:not(br)');
		const arrayNodes = [...allNodes];
		arrayNodes.forEach((node,indexNode) => node.childNodes.forEach(childNode =>{
			if(childNode.nodeName == "#text"){
				const contenido =childNode.nodeValue;
				if(contenido.toLowerCase().includes(searchQuery)){
					// Create a regular expression for the search query (global, case insensitive)
					const regex = new RegExp(searchQuery, 'gi');
					// Define the replacement HTML with the search query wrapped in <mark> tags
					const replacement = `<mark id="blog-tags-tab--mark-${indexNode}">${searchQuery}</mark>`;
					// Replace the matched text with the marked text
					const contenidoMarcado = contenido.replace(regex, replacement);							
					// Replace the original text node content with the marked content
					node.innerHTML = contenidoMarcado;
				}
			}
		}));		
	}
}
const handlerMatchesCounter = (matchesArr,up,total,down) =>{
	let currentMatch = 0;
	const matches = [...matchesArr];  
	if(matches.length > 0){
		up.closest('.blog-tags-tab__internal-Search').classList.add('blog-tags-tab--active');
		matches[currentMatch].scrollIntoView({behavior: "smooth",block: 'center'});
		currentMatch++;
		//actual.textContent = currentMatch;
		down.addEventListener("click",(event)=>{
			event.stopPropagation();
			
			if(currentMatch < matches.length){
				currentMatch++;
				//actual.textContent = currentMatch;
				matches[currentMatch-1].scrollIntoView({behavior: "smooth",block: 'center'});
				up.classList.add('button--active');
				
			}else{
				down.classList.remove('button--active');
			}
		});
		up.addEventListener("click",(event)=>{
			event.stopPropagation();
			if(currentMatch > 1){
				matches[currentMatch-1].scrollIntoView({behavior: "smooth",block: 'center'});
				currentMatch--;
				down.classList.add('button--active');
				//actual.textContent = currentMatch;
			}
		});
		
	}else{
		up.closest('.blog-tags-tab__internal-Search').classList.remove('blog-tags-tab--active');
	}	
	
	total.textContent = matches.length;
}

blogTagsTabModules.forEach( module =>{
	const tabButton = module.querySelectorAll('.blog-tags-tab__title');
	const tabSelect = module.querySelector('.blog-tags-tab__tabs-select');
	const allTextContent = module.querySelectorAll('.blog-tags-tab__text-content');
	
	// DESKTOP
	tabButton.forEach( button =>{
		button.addEventListener("click",()=>{
			handlerSelect(button,module)
		});
	});
	
  // MOBILE
	tabSelect.addEventListener("change",(event)=>{
		const button = event.target.options[event.target.selectedIndex]
		handlerSelect(button,module);
	});

	// IF Text Content
	if(!!allTextContent.length){
		allTextContent.forEach(textContent =>{
			const contentClone = textContent.querySelector('.blog-tags-tab__text-content-text').cloneNode(true);
			const content = textContent.querySelector('.blog-tags-tab__text-content-text');
			//const matchesActual = textContent.querySelector('.blog-tags-tab__matches-actual');
			const matchesTotal = textContent.querySelector('.blog-tags-tab__matches-total');
			const matchesUp = textContent.querySelector('.blog-tags-tab__matches-up');
			const matchesDown = textContent.querySelector('.blog-tags-tab__matches-down');
			
			textContent.querySelector('.hs-search-field__input').addEventListener("input",(event) =>{
				handlerSearch(event,textContent,contentClone,content);
				
				const marks = textContent.querySelectorAll('mark');
				//handlerMatchesCounter(marks,matchesActual,matchesTotal,matchesUp,matchesDown);
				handlerMatchesCounter(marks,matchesUp,matchesTotal,matchesDown);
			});
		});
	}
});
