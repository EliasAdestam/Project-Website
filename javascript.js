    // SWIPER GALLERY KNAPPAR SKRIPT (IMPORTERAD FRÅN SWIPER) //
    const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

    // RÄKNA UPP SIFFROR PÅ STATISTIKEN (CHATGPT HJÄLPT)
    function startCountUp(target, elementId) {
    let count = 0;
    const targetNumber = target;

    function updateNumber() {
        count += 1;
        document.getElementById(elementId).innerText = count;

        if (count < targetNumber) {
            const remaining = targetNumber - count;
            const interval = Math.max(500 / remaining, 2);
            setTimeout(updateNumber, interval);
        }
    }

    // Observer som ser till att function updateNumber inte callas förrän statistiken är synlig
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Startar countdown genom att calla function updateNumber
                updateNumber();
                observer.unobserve(entry.target);
            }
        });
    });

    // Observe each element with the specified IDs
    const elements = document.querySelectorAll(`#${elementId}`);
    elements.forEach(element => observer.observe(element));
    }

    // Callar countanimation
    startCountUp(170, 'race');
    startCountUp(64, 'podiums');
    startCountUp(23, 'wins');
    
    // GO TO TOP EFTER TRYCK PÅ HEADER
    document.getElementById('home').addEventListener('click', function() {
        event.preventDefault();
      window.scrollTo({
        top: 0, // Specificerar att det ska vara hela vägen upp
        behavior: 'smooth' // Gör skrollen upp smooth
      });
    });