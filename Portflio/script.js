/* Array of photo paths */
const photos = [

    'images/photo1.png',
    'images/photo2.png',
    'images/photo3.png',
    'images/photo4.png',
    'images/photo5.png',
    // Add more photos as needed

];

const captions = [
    'This is a head model that I made for my current project, an indie low poly style horror game.',
    'The Man this was a project in which I used clay to make a figure laying on their side',
    'There Be ELMO!! One of my pieces that was put up in a art show when I was at college.',
    'This was part of a series of photos in which I messed around with the cover. All of them looks like album covers from the early 2000s.',
    'This is a flying skull that I made for a fantasy style game '
];

let currentIndex = 0;

/* Event listener for DOMContentLoaded to initialize the gallery */
document.addEventListener('DOMContentLoaded', () => {

    const photoElements = document.querySelectorAll('.photo-wrapper img');
    const captionElements = document.querySelectorAll('.photo-caption span');

    /* Function to update the displayed photo and caption */
    function updatePhoto() {

        photoElements.forEach((img, index) => {
            img.style.display = (index === currentIndex) ? 'block' : 'none'; // Show current image
            img.style.opacity = 0; // Start with opacity 0 for fade effect
            setTimeout(() => {
                img.style.opacity = 1; // Fade in effect
            }, 100); // Delay for fade effect

            captionElements[index].textContent = captions[index]; // Update the caption
        });
    }

    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : photoElements.length - 1;
        updatePhoto();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < photoElements.length - 1) ? currentIndex + 1 : 0;
        updatePhoto();
    });

    // Initialize the first photo
    updatePhoto();
});
