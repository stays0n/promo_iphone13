const tabs = () => {
    const tabs = document.querySelectorAll('.card-detail__change');
    const tabsTitle = document.querySelector('.card-details__title');
    const tabsPrice = document.querySelector('.card-details__price');
    const tabsImage = document.querySelector('.card__image_item');
    const documentTitle = document.querySelector('title');

    const tabsOptions = [
        {
            name: 'Graphite',
            memory: '128',
            price: 60000,
            image: 'img/iPhone-graphite.webp',
        },
        {
            name: 'Silver',
            memory: '256',
            price: 65000,
            image: 'img/iPhone-silver.webp',
        },
        {
            name: 'Sierra Blue',
            memory: '512',
            price: 70000,
            image: 'img/iPhone-sierra_blue.webp',
        },
    ];

    const changeContent = (index) => {
        const tab = tabsOptions[index];

        tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tab.memory}GB ${tab.name}`;
        tabsPrice.textContent = `${tab.price}₽`;
        // tabsImage.src = tab.image;
        tabsImage.setAttribute('src', tab.image);
        documentTitle.textContent = tab.name;
    };

    const changeActiveTab = (indexClickedTab) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove('active');

            if (index === indexClickedTab) {
                tab.classList.add('active');
            }
        });

        changeContent(indexClickedTab);
    };

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            changeActiveTab(index);
        });
    });

    changeContent(0);
};

tabs();
