let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showNextItem() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].classList.add('active');
}

setInterval(showNextItem, 3000); // Cambia de imagen cada 3 segundos

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabs a');
    const mediaItems = document.querySelectorAll('.media');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            const tag = this.getAttribute('data-tag');

            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            mediaItems.forEach(item => {
                if (tag === 'all' || item.classList.contains(tag)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

