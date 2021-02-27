const bubbleOpacity = () => {
    function mainBubble() {
        if (window.innerWidth <= 1468) {
            const bubbleBurger = s('.opacity-bubble'),
                opacityItems = sA('.opacity-on'),
                rectBurger = bubbleBurger.getBoundingClientRect(),
                bubbleBurgerPosX = rectBurger.x;
    
            let posArray = [];
    
            window.addEventListener('scroll', opacityOnItems);
            opacityOnItems();
    
            function opacityOnItems() {
                posArray = [];
                const bubbleBurgerPosY = bubbleBurger.offsetHeight + rectBurger.y + pageYOffset;

                for (let item of opacityItems) {
                    rectItem = item.getBoundingClientRect();
        
                    const itemPosY = rectItem.y + pageYOffset,
                        itemPosX = item.offsetWidth + rectItem.x,
                        itemHeight = item.offsetHeight;
        
                    posArray.push([itemPosY, itemPosX, itemHeight]);
                }
    
                for (let item of posArray) {
                    if ((bubbleBurgerPosY > item[0] && bubbleBurgerPosY < item[0] + item[2]) && bubbleBurgerPosX < item[1]) {
                        bubbleBurger.classList.add('active');
                        break;
                    } else {
                        bubbleBurger.classList.remove('active');
                    };
                };
            };
        };
    }

    window.addEventListener('resize', mainBubble);
    mainBubble();
};


/*const bubbleOpacity = () => {
    if (window.innerWidth <= 1468) {
        const bubbleBurger = s('.opacity-bubble'),
            opacityItems = sA('.opacity-on'),
            rectBurger = bubbleBurger.getBoundingClientRect(),
            bubbleBurgerPosX = rectBurger.x;

        let posArray = [];

        for (let item of opacityItems) {
            rectItem = item.getBoundingClientRect();

            const itemPosY = rectItem.y + pageYOffset,
                itemPosX = rectItem.width + rectItem.x,
                itemHeight = rectItem.height;

            posArray.push([itemPosY, itemPosX, itemHeight]);
        }

        window.addEventListener('scroll', opacityOnItems);
        opacityOnItems();

        function opacityOnItems() {
            const bubbleBurgerPosY = (rectBurger.height / 2) + rectBurger.y + pageYOffset;

            for (let item of posArray) {
                if ((bubbleBurgerPosY >= item[0] && bubbleBurgerPosY <= item[0] + item[2]) && bubbleBurgerPosX <= item[1]) {
                    bubbleBurger.classList.add('active');
                    break;
                } else {
                    bubbleBurger.classList.remove('active');
                };
            };
        };
    };
};*/