// MENU TOGGLE
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.style.display =
        navLinks.style.display === 'block' ? 'none' : 'block';
});

// MODAL FUNCTIONALITY
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog.image-modal');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Open modal when clicking an image
gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const img = e.target;
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        const full = src.replace('sm', 'full');

        modalImage.src = full;
        modalImage.alt = alt;
        modal.showModal();
    }
});

// Close modal with X button
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal when clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.close();
    }
});
