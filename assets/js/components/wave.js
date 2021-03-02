const wave = () => {
    const btn = s('.btn--started'),
        btnPurple = s('.btn--purple');
    
    btnPurple.addEventListener('click', (e) => {
        e.preventDefault();
        makeBubble(e);
    });

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        makeBubble(e);
    });

    function makeBubble(e) {
        const wave = document.createElement('span');
        wave.classList.add('wave');
        e.target.prepend(wave);

        wave.style.top = `${e.offsetY}px`;
        wave.style.left = `${e.offsetX}px`;

        const btnPromise = new Promise((resolve, reject) => {
            wave.classList.add('wave--active');

            setTimeout(() => {
                resolve();
            }, 600);
        });

        btnPromise
        .then(() => {
            return new Promise((resolve, reject) => {
                wave.classList.add('wave--remove');

                setTimeout(() => {
                    resolve();
                }, 600);
            });
        })
        .then(() => {
            wave.remove();
        });
    };

}; // container end