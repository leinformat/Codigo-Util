// Detect the click outside a specific node
const handlerCLickOutSide = (node) => {
	document.addEventListener("click", function(event) {
		if (!node.contains(event.target)) {
			!!node.classList.contains('search-mongodb__active') && node.classList.remove('search-mongodb__active');
		}
	});
}