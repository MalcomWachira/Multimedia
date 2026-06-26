const video = document.getElementById('wildlifeVideo');
const button = document.getElementById('videoBtn');
const videoWrapper = document.querySelector('.video-wrapper');

video.addEventListener('play', () => {
    button.textContent = 'Hide Video';
});
video.addEventListener('pause', () => {
    button.textContent = 'Play Video';
});

button.addEventListener('click', () => {
    if (!video.paused && !video.ended) {
        video.pause();
        videoWrapper.style.display = 'none';
        button.textContent = 'Play Video';
    } else {
        videoWrapper.style.display = 'block';
        video.play().catch(error => {
            console.log("Autoplay/Play prevented by browser policy: ", error);
        });
        button.textContent = 'Hide Video';
    }
});
