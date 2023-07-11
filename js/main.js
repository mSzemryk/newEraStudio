document.addEventListener(
	'DOMContentLoaded',
	(menuToggle = () => {
		const nav = document.querySelector('.hamburger-menu')
        const allNavItems = document.querySelectorAll('.nav-item')
    	nav.classList.toggle('d-none')
        
        nav.addEventListener('click', ()=>{
            nav.classList.add('d-none')
           
        })
	})




)
