const positionPopupRelativeToElement = (popupWrapper, element) => {
  const rect = element.getBoundingClientRect();
  const mapContainer = element.closest(".tab-map--display-on-desktop");
  
  const offsetXMap = mapContainer.getBoundingClientRect().left;
  const offsetYMap = mapContainer.getBoundingClientRect().top;
  
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  const viewportHeight = window.innerHeight;
  if (centerY < viewportHeight / 2) {
    popupWrapper.style.top = `${centerY-offsetYMap}px`;
    popupWrapper.style.left = `${centerX-offsetXMap-popupWrapper.getBoundingClientRect().width/2}px`;
    
    popupWrapper.classList.add('position-bottom');
    popupWrapper.classList.remove('position-top');
  } else {
    popupWrapper.style.top = `${centerY-offsetYMap-popupWrapper.getBoundingClientRect().height}px`;
    popupWrapper.style.left = `${centerX-offsetXMap-popupWrapper.getBoundingClientRect().width/2}px`;
    
    popupWrapper.classList.add('position-top');
    popupWrapper.classList.remove('position-bottom');
  }
}