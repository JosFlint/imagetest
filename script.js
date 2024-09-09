document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const overlay = document.querySelector('.overlay');

    // Access the user's camera
    navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: { ideal: 'environment' }, // Prefer rear camera
            width: { ideal: 1920 }, // Set to 1080p resolution
            height: { ideal: 1080 },
            frameRate: { ideal: 30 } // Ideal frame rate for smooth video
        }
    })
    .then(stream => {
        video.srcObject = stream;
        video.play();

        // Set the overlay image source
        overlay.src = 'overlay.png'; // Replace with the path to your overlay image
    })
    .catch(err => {
        console.error('Error accessing the camera: ', err);
    });
});
