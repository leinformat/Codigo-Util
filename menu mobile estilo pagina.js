// Create a div container to the element to go back to the previus menu
document.querySelectorAll('.mega-menu__mobile .submenu').forEach((e) => {
  const title = document.createElement('div')
  title.classList.add('sidbar__menu-title-container')
  e.prepend(title)

  const div = document.createElement('div')
  div.classList.add('sidbar__back-container')
  e.prepend(div)
})

// Create a element to go back to the previus menu
document.querySelectorAll('.sidbar__back-container').forEach((e) => {
  const a = document.createElement('a')
  a.classList.add('sidbar__back-botton')
  e.append(a)
})

// Next and back submenu function
document.querySelectorAll('.mega-menu__mobile li.has-submenu').forEach((e) => {
  e.querySelector('.menu-link').addEventListener('click', () => {
    const sidebarSubmenu = e.querySelector('ul.submenu')
    sidebarSubmenu.classList.add('active')
  })
  e.querySelector('.sidbar__back-botton').addEventListener('click', () => {
    
    const sidebarSubmenu = e.querySelector('ul.submenu')
    sidebarSubmenu.classList.remove('active')
  })
 
  // Create submenu title
  const elemnt = e.querySelector('.sidbar__back-botton');
  elemnt.append(`${e.querySelector('a').textContent}`);
})