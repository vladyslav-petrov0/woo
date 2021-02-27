const mouseAnim = () => {

    function rotateItem(item, value, dir) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            if (dir == '+') {
                item.style.transform = 'translate(' + x * value + 'px, ' + y * value + 'px)';
            }

            if (dir == '-') {
                item.style.transform = 'translate(-' + x * value + 'px, -' + y * value + 'px)';
            }
        });
    }
  
    if (window.innerWidth >= 1570) {
        rotateItem(s('.coll-item--first'), 10, '+');
        rotateItem(s('.coll-item--second'), 20, '-');
    }

    if (window.innerWidth > 1024) {
        rotateItem(s('.dev-img--second'), 15, '+');
        rotateItem(s('.develop__img'), 15, '-');
    }
};


/*const mouseAnim = () => {

    function rotateItem(item, value, dir) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            if (dir == '+') {
                item.style.transform = 'translate(' + x * value + 'px, ' + y * value + 'px)';
            }

            if (dir == '-') {
                item.style.transform = 'translate(-' + x * value + 'px, -' + y * value + 'px)';
            }
        });
    }
  
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1570) {
            rotateItem(s('.coll-item--first'), 10, '+');
            rotateItem(s('.coll-item--second'), 20, '-');
        } else {
            
        };
    
        if (window.innerWidth > 1024) {
            rotateItem(s('.dev-img--second'), 15, '+');
            rotateItem(s('.develop__img'), 15, '-');
        } else {
            
        };
    });
    
};*/

