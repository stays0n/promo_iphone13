const scroll = () => {
    const links = document.querySelectorAll('.header-menu__item a');
    const cardDetailsLinkCharacteristics = document.querySelector(
        '.card-details__link-characteristics',
    );

    seamless.polyfill();

    /*
     * makeScrollable
     * collection: [NodeList or HTML Element]
     */
    function makeScrollable(collection) {
        const addScrollListener = (element) => {
            element.addEventListener('click', (event) => {
                event.preventDefault();

                const id = element.getAttribute('href').substring(1);
                const section = document.getElementById(id);

                if (section) {
                    // не кросбраузерно:
                    // section.scrollIntoView({
                    //     behavior: 'smooth',
                    //     block: 'start',
                    // });

                    // кросбраузерно:
                    seamless.elementScrollIntoView(section, {
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'center',
                    });
                }
            });
        };

        if (collection.length) {
            collection.forEach((elem) => addScrollListener(elem));
        } else {
            addScrollListener(collection);
        }
    }

    makeScrollable(links);
    makeScrollable(cardDetailsLinkCharacteristics);
};

scroll();
