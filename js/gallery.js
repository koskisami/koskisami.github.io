document.addEventListener('DOMContentLoaded', function () {
    // wire thumbnails to carousel (bootstrap5)
    document.querySelectorAll('#galleryGrid .thumb').forEach(function (el) {
        el.addEventListener('click', function (evt) {
            evt.preventDefault();
            var idx = parseInt(el.getAttribute('data-bs-slide-to'), 10);
            var carouselEl = document.getElementById('galleryCarousel');
            var carousel = bootstrap.Carousel.getOrCreateInstance(carouselEl);
            carousel.to(idx);
        });
    });

    var carouselEl = document.getElementById('galleryCarousel');
    if (!carouselEl) return;

    // pause any playing video before slide changes
    carouselEl.addEventListener('slide.bs.carousel', function () {
        document.querySelectorAll('#galleryCarousel video').forEach(function (v) {
            try { v.pause(); v.currentTime = 0; } catch (e) {}
        });
    });

    // after slide shown, if it's a video autoplay it (muted to allow autoplay in some browsers)
    carouselEl.addEventListener('slid.bs.carousel', function () {
        var activeVideo = carouselEl.querySelector('.carousel-item.active video');
        if (activeVideo) {
            activeVideo.muted = false; // set to true if you want autoplay without user gesture
            activeVideo.play().catch(function () {});
        }
    });
});