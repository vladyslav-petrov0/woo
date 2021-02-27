const animOnScroll = () => {
    const animItems = sA('.anim-items');
    const windowHeight = window.innerHeight;

    function offsetTop(el) {
        const rect = el.getBoundingClientRect();
        return rect.top + pageYOffset;
    }

    function scrolling() {
        if (animItems.length > 0) {
            for (let item of animItems) {
                const itemHeight = item.offsetHeight,
                    itemOffset = offsetTop(item),
                    itemStart = 2,
                    itemPoint = windowHeight - itemHeight / itemStart;

                if (itemHeight > windowHeight) {
                    itemPoint = windowHeight - windowHeight / itemStart;
                }

                if (itemPoint + pageYOffset >= itemOffset) {
                    item.classList.add('animated');
                };
            };
        };
    }

    window.addEventListener('scroll', scrolling);
    setTimeout(scrolling, 500);
};