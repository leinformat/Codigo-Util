
window.addEventListener('DOMContentLoaded', (event) => {
    let links = document.querySelectorAll('a[target=_blank]');	
		links.forEach(lnk =>{
			lnk.setAttribute("rel", "noopener noreferrer");
			console.log(lnk);
		})
	});
