const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');

gallery.addEventListener('click', (e) => {
    let img = document.createElement('img');
    if (e.target.tagName === "IMG") {
        img.src = e.target.src;
        img.className = 'lightbox';

        //add created image to overlay section
        //& enable overlay
        overlay.appendChild(img);
        overlay.classList.add('overlay_style');

    }

    // disable overlay & remove all IMG children
    overlay.addEventListener('click', () => {
        overlay.classList.remove('overlay_style');
        while (overlay.hasChildNodes()) {
            overlay.removeChild(overlay.firstChild)
        }
    })
})