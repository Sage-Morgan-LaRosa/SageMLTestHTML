// Beaver images
const beaverImages = [
    'wa11-imgs-beaver/65b8e12a4071d.jpeg',
    'wa11-imgs-beaver/3981td.jpg',
    'wa11-imgs-beaver/41064-img_3872-dsqz-1.webp',
    'wa11-imgs-beaver/165101377.jpg',
    'wa11-imgs-beaver/aoyWVgA_460s.jpg',
    'wa11-imgs-beaver/Beaver-Memes-Pictures.png',
    'wa11-imgs-beaver/Beavers-of-Accokeek-Creek.jpg',
    'wa11-imgs-beaver/d6006692dfb772930080107fc2817809.jpg',
    'wa11-imgs-beaver/images.jpg',
    'wa11-imgs-beaver/mandy.gif',
    'wa11-imgs-beaver/q6l7ybv17koy.jpg',
    'wa11-imgs-beaver/y6qgq4wkbc861.webp'
];

// Road Runner images
const roadRunnerImages = [
    'wa11-imgs-roadrunner/7xggo57pxo881.jpg',
    'wa11-imgs-roadrunner/0061e2b959d9c01ceeaff0e44954c0d2da8c0a5480d0605d7a815ca2214a52bb_1.jpg',
    'wa11-imgs-roadrunner/660f9d55d4b0c.jpeg',
    'wa11-imgs-roadrunner/meme.jpg',
    'wa11-imgs-roadrunner/roadrunner-bye.gif'
];

// Initialize galleries
document.addEventListener('DOMContentLoaded', () => {
    initGallery('beaver-gallery', beaverImages);
    initGallery('roadrunner-gallery', roadRunnerImages);
});

function initGallery(galleryId, images) {
    const gallery = document.getElementById(galleryId);
    const mainImage = gallery.querySelector('.main-image');
    const thumbnailsContainer = gallery.querySelector('.thumbnails');
    const prevBtn = gallery.querySelector('.prev-btn');
    const nextBtn = gallery.querySelector('.next-btn');
    
    let currentIndex = 0;
    
    // Set first image
    mainImage.src = images[0];
    mainImage.alt = 'Image 1';
    
    // Create thumbnails
    images.forEach((imgSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        thumb.alt = `Thumbnail ${index + 1}`;
        if (index === 0) thumb.classList.add('active-thumb');
        
        thumb.addEventListener('click', () => {
            currentIndex = index;
            updateMainImage();
        });
        
        thumbnailsContainer.appendChild(thumb);
    });
    
    // Navigation functions
    function updateMainImage() {
        mainImage.src = images[currentIndex];
        mainImage.alt = `Image ${currentIndex + 1}`;
        
        // Update active thumbnail
        const thumbs = thumbnailsContainer.querySelectorAll('img');
        thumbs.forEach(thumb => thumb.classList.remove('active-thumb'));
        thumbs[currentIndex].classList.add('active-thumb');
    }
    
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateMainImage();
    }
    
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateMainImage();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);
}

// Toggle between galleries
const toggleBtn = document.getElementById('carousel-toggle');
const beaverGallery = document.getElementById('beaver-gallery');
const roadRunnerGallery = document.getElementById('roadrunner-gallery');

// Initially show only Beaver gallery
roadRunnerGallery.style.display = 'none';

toggleBtn.addEventListener('click', () => {
    if (roadRunnerGallery.style.display === 'none') {
        roadRunnerGallery.style.display = 'block';
        beaverGallery.style.display = 'none';
        toggleBtn.textContent = 'Show Beaver Gallery';
    } else {
        roadRunnerGallery.style.display = 'none';
        beaverGallery.style.display = 'block';
        toggleBtn.textContent = 'Show Road Runner Gallery';
    }
});

// Darken/Lighten functionality
const darkenBtn = document.getElementById('darken-btn');
const overlay = document.getElementById('overlay');

darkenBtn.addEventListener('click', () => {
    const isDark = darkenBtn.getAttribute('class') === 'dark';
    
    if (isDark) {
        darkenBtn.setAttribute('class', 'light');
        darkenBtn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    } else {
        darkenBtn.setAttribute('class', 'dark');
        darkenBtn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
});


