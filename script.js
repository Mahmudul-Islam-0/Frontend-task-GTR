const videoContainer = document.getElementById('videoContainer');
const thumbnail = document.getElementById('thumbnail');
const playButton = document.getElementById('playButton');
const videoPlayer = document.getElementById('videoPlayer');



videoContainer.addEventListener('click', function () {
    thumbnail.style.display = 'none';
    playButton.style.display = 'none';
    videoPlayer.style.visibility = 'none';
    videoPlayer.style.display = 'block';
    videoPlayer.play();
});

const hamMenu =document.querySelector('.ham_menu');
const mobileNavigation =document.querySelector('.mobile_navigation');

hamMenu.addEventListener('click', () =>{
    hamMenu.classList.toggle('active');
    mobileNavigation.classList.toggle('active');
})