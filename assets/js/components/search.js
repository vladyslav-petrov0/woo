const search = () => {
    const icon = s('.search__img');
    const input = s('.search__input');
    const durationTime = parseFloat(getComputedStyle(input).transitionDuration);

    icon.addEventListener('click', () => {
        if (input.classList.contains('search--showed')) {
            setTimeout(() => {
                input.value = '';
            }, durationTime * 700);
        } else {
            setTimeout(() => {
                input.focus();
            }, durationTime * 900);
        };

        input.classList.toggle('search--showed');
    });
};