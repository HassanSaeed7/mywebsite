import './css/style.css'

const targets = document.querySelectorAll('[data-src]')

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
    newObserver.observe(target)
}

targets.forEach(lazyLoading);



    
