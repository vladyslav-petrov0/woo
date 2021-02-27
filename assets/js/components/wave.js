const wave = () => {
    const btn = s('.btn--started');
    let clicked = 0;
    

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        makeBubble(e);
    });

    function makeBubble(e) {
        let wave = document.createElement('span');
        wave.classList.add('wave');
        btn.prepend(wave);

        wave.style.top = `${e.offsetY}px`;
        wave.style.left = `${e.offsetX}px`;

        let btnPromise = new Promise((resolve, reject) => {
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