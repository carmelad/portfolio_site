document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const track = document.querySelector('.roll-track');

track.addEventListener('mouseenter', () => {
    track.computedStyleMap.animationPlayState = 'paused';
});
track.addEventListener('mouseleave', () => {
    track.computedStyleMap.animationPlayState = 'running';
});