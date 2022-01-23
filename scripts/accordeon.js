const accordeon = () => {
    const charItems = document.querySelectorAll('.characteristics__item');

    charItems.forEach((item) => {
        const charButton = item.querySelector('.characteristics__title');
        const charContent = item.querySelector('.characteristics__description');

        charButton.addEventListener('click', (event) => {
            const { target } = event;

            for (let i = 0; i < charItems.length; i++) {
                const elem = charItems[i];
                const button = elem.querySelector('.characteristics__title');
                const content = elem.querySelector(
                    '.characteristics__description',
                );

                if (target.closest('.characteristics__item') !== elem) {
                    button.classList.remove('active');
                    content.classList.remove('open');
                    content.style.height = '';
                } else {
                    if (charContent.classList.contains('open')) {
                        charContent.style.height = '';
                    } else {
                        charContent.style.height =
                            charContent.scrollHeight + 'px';
                    }
                    charButton.classList.toggle('active');
                    charContent.classList.toggle('open');
                }
            }
        });
    });
};

accordeon();
