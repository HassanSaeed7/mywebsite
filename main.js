import './css/style.css'
const body = document.body;
let lastScroll = 0;
const targets = document.querySelectorAll('[data-src]');
const sections = document.querySelectorAll('.container');
const hamburgerBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.mobile-nav')
const hamburgerLinks = document.querySelectorAll('.hamburger-navlinks')


//lazy loading images
const lazyLoading = target => {
    const newObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                img.setAttribute('src', src);
                img.classList.add('fade');
                observer.disconnect();
            }
        })
    })
    newObserver.observe(target);
}
targets.forEach(lazyLoading);



//On large screens, hides the navbar when scrolling down, shows it when scrolling up
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        body.classList.remove('scroll-up')
    };
    if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-up')
        body.classList.add('scroll-down')
    }
    if (currentScroll < lastScroll && !body.classList.contains('scroll-up')) {
        body.classList.add('scroll-up')
        body.classList.remove('scroll-down')
    }
    lastScroll = currentScroll;

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (currentScroll >= (sectionTop)) {
            current = section.getAttribute('id');
        }
    });
    
    const navLi = document.querySelectorAll('.navLinks');
    navLi.forEach(item => {
		item.classList.remove('active');
		const href = item.getAttribute('href').substring(1);
		if (href === current) {
			item.classList.add('active');
		};
	});
});
    
//toggles the hamburger menu when you click it
hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('is-active');
    nav.classList.toggle('is-active')
})



//closes the hamburger navbar whenever a link is clicked
hamburgerLinks.forEach(item => item.addEventListener('click', () => {
    hamburgerBtn.classList.remove('is-active');
    nav.classList.remove('is-active');
    
}))

