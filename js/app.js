;
(function () {
    "use strict";

    const photos = document.querySelectorAll('img[src^="img/history"]');
    const songsList = document.querySelector('.ba-songs-list');
    
    photos.forEach(function (element) {
        element.addEventListener('mouseover', changeColor);
        element.addEventListener('mouseout', changeColorBack);
    });
    
    function changeColor() {
        const imageSrc = this.src;

        this.src = imageSrc.replace('first', 'hover');
    }
    function changeColorBack() {
        const imageSrc = this.src;

        this.src = imageSrc.replace('hover', 'first')
    }
    

    // songs
    
    songsList.addEventListener('click', function (e) {

		e.preventDefault();
        const actionButton = e.target;
        
        if (actionButton.dataset.action !== 'play') return;

        const audioId = actionButton.dataset.id,
            audio = document.getElementById(audioId);
            const allAudios = document.querySelectorAll('audio');

            


            allAudios.forEach(function (audioItem) {
                if (audioItem != audio) {
                    audioItem.pause();
                }
    
            });
            

            audio.paused ?  audio.play() : audio.pause();

            const allPlayBtn = document.querySelectorAll('[data-action="play"]');

		allPlayBtn.forEach(btnItem => {

			if (btnItem != actionButton) {
				btnItem.classList.remove('pulse');
			}

		});

		actionButton.classList.toggle('pulse');


    });
    
})();