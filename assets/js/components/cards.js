const animCards = () => {

    function chckStts(btn) {
        if (btn == 'left') {
            if (cardIndex > 1 || cardPosition > 0) {
                btnLeft.classList.remove('locked');
            } else {
                btnLeft.classList.add('locked');
            };
        };

        if (btn == 'right') {
            if (cardIndex < 3 && cardPosition < (cardItemWidth * (cardItems.length - 1)) - cardMargin) {
                btnRight.classList.remove('locked');
            } else {
                btnRight.classList.add('locked');
            };
        }
    };

    const cardFirst = 'cards__item--first';
    const cardSecond = 'cards__item--second';
    const cardThird = 'cards__item--third';

    const cardSlider= s('.cards__slider');
    const cardItems = sA('.cards__item');
    const cardMargin = parseFloat(getComputedStyle(cardItems[0]).marginRight);
    const cardItemWidth = cardItems[0].offsetWidth + cardMargin;
    const cardText = sA('.cards__text');

    const btnLeft = s('.cards__arrow--left');
    const btnRight = s('.cards__arrow--right');

    const transitionDuration = parseFloat(getComputedStyle(cardItems[0]).transitionDuration);
    const transitionDurationMob = parseFloat(getComputedStyle(cardSlider).transitionDuration);
    let cardIndex = 1;
    let clicked = 0;
    let cardPosition = 0;

    if (window.innerWidth >= 1024) {

        btnRight.addEventListener('click', (e) => {
            let first = s(`.${cardFirst}`);
            let second = s(`.${cardSecond}`);
            let third = s(`.${cardThird}`);

            chckStts('right');
            chckStts('left');
            

            if (!btnRight.classList.contains('locked') && clicked == 0) {
                const promise = new Promise((resolve, reject) => {
                    for (let item of cardText) {
                        item.style.willChange = 'transform';
                    }

                    for (let item of cardItems) {
                        item.style.willChange = 'transform';
                    };

                    clicked = 1;

                    first.style.transform = `translateY(-${second.offsetHeight}px)`;
                    setTimeout(() => {
                        resolve();
                    }, transitionDuration * 650);
                });
        
                promise
                .then(() => {
                    return new Promise((resolve, reject) => {
                        first.classList.add(cardThird);
                        first.classList.remove(cardFirst);
        
                        setTimeout(() => {
                            resolve();
                        }, 100);
                    });
                })
                .then(() => {
                    first.style.transform = `translateY(0px)`;
        
                    second.classList.add(cardFirst);
                    second.classList.remove(cardSecond);
        
                    third.classList.add(cardSecond);
                    third.classList.remove(cardThird);
        
                    cardIndex += 1;

                    chckStts('right');
                    chckStts('left');
                    
                    setTimeout(() => {
                        for (let item of cardText) {
                            item.style.willChange = '';
                        };
                        
                        for (let item of cardItems) {
                            item.style.willChange = '';
                        };

                        clicked = 0;
                    }, 500)
                }); 
            };
                
        });

        btnLeft.addEventListener('click', (e) => {
            let first = s(`.${cardFirst}`);
            let second = s(`.${cardSecond}`);
            let third = s(`.${cardThird}`);

            chckStts('right');
            chckStts('left');

            if (!btnLeft.classList.contains('locked') && clicked == 0) {
                for (let item of cardText) {
                    item.style.willChange = 'transform';
                }

                for (let item of cardItems) {
                    item.style.willChange = 'transform';
                };

                clicked = 1;

                const promise = new Promise((resolve, reject) => {
                    first.classList.add(cardSecond);
                    first.classList.remove(cardFirst);
        
                    second.classList.add(cardThird);
                    second.classList.remove(cardSecond);
        
                    third.style.transform = `translateY(-${first.offsetHeight - 15}px)`;
                    
                    setTimeout(() => {
                        resolve();
                    }, 120);
                });
        
                promise
                .then(() => {
                    return new Promise((resolve, reject) => {
                        third.classList.add(cardFirst);
                        third.classList.remove(cardThird);
        
                        setTimeout(() => {
                            resolve();
                        }, transitionDuration * 600);
                    });
                })
                .then(() => {
                    third.style.transform = `translateY(0px)`;

                    cardIndex -= 1;
                    chckStts('left');
                    chckStts('right');

                    setTimeout(() => {
                        for (let item of cardText) {
                            item.style.willChange = '';
                        };
                        for (let item of cardItems) {
                            item.style.willChange = '';
                        };
                        clicked = 0;
                    }, 500)
                });
            }

        }); // btnleft 1024

    }; // if 1024

    if (window.innerWidth < 1024) {

        btnRight.addEventListener('click', (e) => {

            chckStts('right');
            chckStts('left');

            if (!btnRight.classList.contains('locked') && clicked == 0) {
                clicked = 1;
                setTimeout(() => {
                    clicked = 0;
                }, transitionDurationMob * 500);

                cardPosition += cardItemWidth;
                cardSlider.style.transform = `translateX(-${cardPosition}px)`;

                

                chckStts('right');
                chckStts('left');
            };
                
        });

        btnLeft.addEventListener('click', (e) => {

            chckStts('right');
            chckStts('left');

            if (!btnLeft.classList.contains('locked') && clicked == 0) {
                clicked = 1;
                setTimeout(() => {
                    clicked = 0;
                }, transitionDurationMob * 500);

                cardPosition -= cardItemWidth;
                cardSlider.style.transform = `translateX(-${cardPosition}px)`;

                

                chckStts('right');
                chckStts('left');
            };
                
        });
    };

}; // const