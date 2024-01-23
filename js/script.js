new Typed('#typed', {
    strings: ['Reviews', 'Customers'],
    typeSpeed: 75,
    loop: true,
    cursorChar: '✏️',
});

document.addEventListener('mousemove', function(e) {
    this.querySelectorAll('[data-toggle="parallax"]').forEach(function(elem) {
        const speed = elem.getAttribute('data-speed') || 1;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        console.log(x, y);
        elem.style.transform = `translate(${x}px, ${y}px)`;
    });
});