import './css/style.css'
const targets = document.querySelectorAll('[data-src]');
const sections = document.querySelectorAll('.container');
const body = document.body;
let lastScroll = 0;

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
})
    





