window.addEventListener('load', function() {
    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
	} else {
           menu.style.display = 'block';
        }
    })
})