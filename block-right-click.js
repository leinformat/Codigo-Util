// Function to block right-click
function blockRightClick(event) {
	console.log('Right click');
	event.preventDefault(); // Prevents the default right-click action
}

// Add event listener for right-click
document.addEventListener('contextmenu', blockRightClick);