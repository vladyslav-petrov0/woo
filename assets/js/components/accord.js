const accord = () => {
    const footerBold = sA('.footer__bold'),
        footerSection = sA('.footer__section'),
        footerLi = sA('.footer__li');
    

    if (window.innerWidth <= 768) {
        for (let item of footerBold) {
            const rect = item.getBoundingClientRect();
            item.parentElement.style.maxHeight = `${rect.height}px`;

            item.addEventListener('click', (e) => {
                if (e.target.parentElement.classList.contains('showed')) {
                    
                    item.parentElement.style.maxHeight = `${rect.height}px`;
                    e.target.parentElement.classList.remove('showed');

                } else {
                    let sectionHeight = 0;

                    for (let i of e.target.parentElement.children) {
                        const childParams = getComputedStyle(i);
                        sectionHeight += parseFloat(childParams.height) + parseFloat(childParams.marginBottom);
                    }

                    e.target.parentElement.style.maxHeight = `${sectionHeight}px`;
                    e.target.parentElement.classList.add('showed');
                }
            });
        };


    };
};