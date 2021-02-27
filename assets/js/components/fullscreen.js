const fullscreen = () => {
    const burger = s('.burger'),
        bubbleBurger = s('.opacity-bubble'),
        headerNav = s('.header__nav'),
        headerItem = sA('.header__item span'),
        search = s('.search');

    let clicked = 0;

    burger.addEventListener('click', (e) => {
        e.preventDefault();

        if (clicked == 0) {
            burger.classList.toggle('switched');

            if (burger.classList.contains('switched')) {
                burger.classList.add('whited');
            };
        };

        if (burger.classList.contains('switched') && clicked == 0) {
            let burgerPromise = new Promise((resolve, reject) => {
                clicked = 1;
                bubbleBurger.classList.remove('active');

                for (let item of sA('.header__item')) {
                    item.style.willChange = 'transform';
                }

                let bubble = document.createElement('div');
                bubble.classList.add('bubble');
                bubble.style.top = `${e.clientY}px`;
                bubble.style.left = `${e.clientX}px`;

                document.body.prepend(bubble);
                setTimeout(() => {
                    bubble.classList.add('fullscreen');
                }, 1);

                const durationTime = parseFloat(
                    getComputedStyle(bubble).transitionDuration
                );

                document.body.style.overflow = 'hidden';
                headerNav.classList.add('displayed');

                setTimeout(() => {
                    resolve();
                }, durationTime * 400);
            });

            burgerPromise
            .then(() => {
                for(let item of headerItem) {
                    item.classList.add('visible');
                }

                setTimeout(() => {
                    clicked = 0;
                }, 1.71429 * 1000);
            });
            
        } else {
            if (clicked == 0) {
                const durationTime = parseFloat(
                    getComputedStyle(s('.bubble')).transitionDuration
                );
    
                let burgerPromise = new Promise((resolve, reject) => {
    
                    clicked = 1;
    
                    s('.bubble').style.top = `${e.clientY}px`;
                    s('.bubble').style.left = `${e.clientX}px`;
                    s('.bubble').style.transitionTimingFunction = `ease-in`;
    
                    for(let item of headerItem) {
                        item.style.transitionDelay = '0s';
                        item.classList.remove('visible');
                    }
    
                    setTimeout(() => {
                        resolve();
                    }, 40);
                });
    
                burgerPromise
                .then(() => {
                    return new Promise((resolve, reject) => {
                        for(let item of headerItem) {
                            item.style.transitionDelay = '';
                        };

                        setTimeout(() => {
                            headerNav.classList.remove('displayed');
                        }, 400);
                        
                        s('.bubble').classList.remove('fullscreen');
                        document.body.style.overflow = '';
    
                        setTimeout(() => {
                            resolve();
                        }, durationTime * 1000);
                    });
                })
                .then(() => {
                    burger.classList.remove('whited');
                    s('.bubble').remove();
                    bubbleBurger.classList.add('active');
    
                    clicked = 0;
                });
            };
        };
    });
};