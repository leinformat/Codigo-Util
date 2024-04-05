// All Modules
const blogTabsModules = document.querySelectorAll('.blog-tabs');

//Scroll Tabs into the View
const handlerScrollIntoView = (element, position="start") =>{
	element.scrollIntoView({ behavior: 'smooth', block: position });
}
const handlerTabs = (button,module,currentTab) =>{
	//Scroll Tabs into the View
	handlerScrollIntoView(module);
	
	// Tab Button active
	module.querySelector('.blog-tabs__tab-button.tab-active').classList.remove('tab-active');
	button.classList.add('tab-active');

	// Tab content active
	module.querySelector('.blog-tabs__tabs-item.tab-active').classList.remove('tab-active');
	currentTab.classList.add('tab-active');
}

// Update page in url
const replaceUrl = (url,number,action)=> {
	let splitUrl = url.split('/');
	
	splitUrl[splitUrl.length - 1] = number;

	const newUrl = splitUrl.join('/');
	return newUrl
}

// Update Each link to Active or inactive
const handlerPaginationButton = (currentPage,currentTab,totalPages)=> {
	const nextLink = currentTab.querySelector('.pagination__link--next');
	const prevLink = currentTab.querySelector('.pagination__link--prev');
	
	currentTab.querySelector('.pagination__link--active').classList.remove('pagination__link--active');
	currentTab.querySelector('[data-page-number="' + currentPage + '"]').classList.add('pagination__link--active');
	
	currentPage > 1 ? prevLink.classList.remove('pagination__link--disabled') : prevLink.classList.add('pagination__link--disabled');
	
	currentPage >= totalPages ? nextLink.classList.add('pagination__link--disabled') : nextLink.classList.remove('pagination__link--disabled');
}

const handlerPagination = (currentTab,loader,module) =>{
	const linksToPage = currentTab.querySelectorAll('.pagination__link');
	const totalPages = !!currentTab.querySelector('.blog-tabs__pagination-container') ? linksToPage.length - 2 : false;
	
	let currentPage = 1;
	linksToPage.forEach(link =>{
		link.addEventListener("click", async (event)=>{
			event.preventDefault();
			handlerScrollIntoView(module);
			if(link.dataset.page == "increment"){
				currentPage++;
				link.href = replaceUrl(link.href,currentPage);
				await fetchData(link,currentTab,loader,true);
				link.href = replaceUrl(link.href,currentPage+1);
			}else if(link.dataset.page == "decrement"){
				currentPage--;
				link.href = replaceUrl(link.href,currentPage);
				await fetchData(link,currentTab,loader,true);
				link.href = replaceUrl(link.href,currentPage+1);
			}else{
				await fetchData(link,currentTab,loader,true);
				currentPage = link.dataset.pageNumber;
			}
			
			handlerPaginationButton(currentPage,currentTab,totalPages);
		});
	});
}

const handlerRender = (data,currentTab,pagination) =>{
	const notFoundMessage = `<h4 class="blog-tabs--not-results-found">No results found. Please try a different topic or tag name.</h4>`;
	const container = !!pagination ? currentTab.querySelector('.blog-tabs__card-posts') : currentTab;
	if(!data) return container.innerHTML = notFoundMessage;
	container.innerHTML = "";
	container.append(data);
} 

const fetchData = async (data,currentTab,loader, pagination) =>{
	const blogUrl = !!pagination ? data.href : data.dataset.url;
	const blogType = data.dataset.type;
  try {
		loader.classList.add('blog-tabs--loading');
    const response = await fetch(blogUrl);
    if (!response.ok) {
      return handlerRender(false,currentTab,pagination);
    }
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
		let newPosts = null;
		if(!!pagination){
			newPosts = blogType == 'popular' ? doc.querySelector('.blog-tabs__card-popular-posts') : doc.querySelector('.blog-tabs__recents-by-tag .blog-tabs__card-posts');
		} else{
			newPosts = blogType == 'popular' ? doc.querySelector('.blog-tabs__card-popular-posts') : doc.querySelector('.blog-tabs__recents-by-tag');
		}
		// Card Render
		return handlerRender(newPosts,currentTab,pagination);
  } catch (error) {
    console.error('Fetch error:', error);
    // Handle error as needed
  }finally{
		loader.classList.remove('blog-tabs--loading');
	}
}

// Each Module
blogTabsModules.forEach(module =>{
	// DOM VARIABLES
	const tabButtons = module.querySelectorAll('.blog-tabs__tab-button');
	const tabContents = module.querySelectorAll('.blog-tabs__tabs-item');	
	const loader = module.querySelector('.blog-tabs__loader-container');
	
	//handlerScrollIntoView(module)
	// First Pagination
	const firstTabItems = module.querySelector('.blog-tabs__tabs-item'); 
	handlerPagination(firstTabItems,loader,module)
	
	const tagContainer = module.querySelector('.blog-tabs__tabs-titles');
	const currentTag = tagContainer.dataset.currentTag;
	tagContainer.querySelector('.blog-tabs__tab-button.tab-active').classList.remove('tab-active');
	
	tagContainer.querySelector(`[data-tag="${currentTag}"]`).classList.add('tab-active');
		
	
	// Tab Listeners
	for (const button of tabButtons) {
    button.addEventListener("click", async ()=>{
			const index = button.dataset.index;
			const currentTab = module.querySelector(`.blog-tabs__tabs-item--${index}`);
			handlerTabs(button,module,currentTab);
			
			await fetchData(button,currentTab,loader);
			
			handlerPagination(currentTab,loader,module);
		});
  }
});