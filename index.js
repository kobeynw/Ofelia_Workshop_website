// IMAGE GALLERY FUNCTIONALITY

let currentImageIndex = 1;

const urlParams = new URLSearchParams(window.location.search);
const clickedImageIndex = parseInt(urlParams.get('index')) || 1;
currentImageIndex = clickedImageIndex;

function showImage(index) {
    const imageElements = document.querySelectorAll('.slider-image');
    imageElements.forEach((image, i) => {
        if (i + 1 === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function nextImage() {
    if (currentImageIndex < 17) { // Change 3 to the total number of images in your set
        currentImageIndex++;
    } else {
        currentImageIndex = 1;
    }
    showImage(currentImageIndex);
}

function prevImage() {
    if (currentImageIndex > 1) {
        currentImageIndex--;
    } else {
        currentImageIndex = 17; // Change 3 to the total number of images in your set
    }
    showImage(currentImageIndex);
}

// Initial display
showImage(currentImageIndex);

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
      prevImage();
  } else if (event.key === 'ArrowRight') {
      nextImage();
  }
});


// COPY EMAIL ADDRESS FUNCTIONALITY

function copyEmailToClipboard() {
    const textarea = document.createElement('textarea');
    textarea.value = 'your.email@example.com';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    alert('Email address copied to clipboard!');
}

const emailElement = document.getElementById('email');
emailElement.addEventListener('click', copyEmailToClipboard);


// PLAY VIDEO ON LOAD AND CONTINUE LOOPING

var video = document.getElementById("myVideo");
video.src = "./picture/video1.mp4";
video.play();