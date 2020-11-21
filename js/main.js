const products = [{
        label: "New!",
        img: "assets/images/product01.jpg",
        title: "product name",
        subtitle: "Far far away, behind the world mountains, far from the countries.",
        url: "#!",
    },
    {
        label: "New!",
        img: "assets/images/product02.jpg",
        title: "product name",
        subtitle: "Far far away, behind the world mountains, far from the countries.",
        url: "#!",
    },
    {
        label: "New!",
        img: "assets/images/product03.jpg",
        title: "product name",
        subtitle: "Far far away, behind the world mountains, far from the countries.",
        url: "#!",
    },
    {
        label: "",
        img: "assets/images/product04.jpg",
        title: "product name",
        subtitle: "Far far away, behind the world mountains, far from the countries.",
        url: "#!",
    },
    {
        label: "",
        img: "assets/images/product05.jpg",
        title: "product name",
        subtitle: "Far far away, behind the world mountains, far from the countries.",
        url: "#!",
    },
    {
        label: "",
        img: "assets/images/product06.jpg",
        title: "product name",
        subtitle: "Far far away, behind the world mountains, far from the countries.",
        url: "#!",
    },
    {
        label: "",
        img: "assets/images/product07.jpg",
        title: "product name",
        subtitle: "Far far away, behind the world mountains, far from the countries.",
        url: "#!",
    },
    {
        label: "",
        img: "assets/images/product08.jpg",
        title: "product name",
        subtitle: "Far far away, behind the world mountains, far from the countries.",
        url: "#!",
    },
];

const contentProducts = {
    title: "Products",
    subtitle: "",
    button: "View",
    url: "#!"
};

// Module Template

function templateContentProducts() {
    let template =`
        <div class="contentProducts__wrapper">
            <div class="contentProducts__heading">
                <h3 class="contentProducts__title anime">${contentProducts.title}</h3>
            </div>
            <div class="contentProducts__cards">
            </div>
            <div class="ctaContainer anime">
                <a href="${contentProducts.url}" class="cta cta01">view more</a>
            </div>
        </div>`;
    document.querySelector('.contentProducts').insertAdjacentHTML("beforeend", template);
};

templateContentProducts();

// Cards
products.forEach(function (el) {
    let templateCard = `
        <a class="contentProducts__card" href="${el.url}">
            <div class="contentProducts__label">${el.label}</div>
            <figure class="contentProducts__image">
                <img src="${el.img}" alt="${el.alt}">
            </figure>
            <div class="contentProducts__text">
                <h4 class="contentProducts__productTitle">${el.title}</h4>
                <div class="contentProducts__priceContainer">
                    <div class="contentProducts__priceFinal">590.000đ</div>
                    <div class="contentProducts__priceOriginal">690.000đ</div>
                </div>
                <div class="contentProducts__info">
                    <p class="contentProducts__link"><span>details</span><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#698ccd" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                    </svg>
                    </p>
                    <div class="contentProducts__view cta cta02">${contentProducts.button}</div>
                </div>
            </div>
        </a>`;
    document.querySelector('.contentProducts__cards').insertAdjacentHTML("beforeend", templateCard);
});

///////// Animate Modules //////////
const card = document.querySelectorAll('.contentProducts__card');
let delay = 1;


const anime = (element, animation) => {
    if (element.offsetParent != null) {

        if (!element.classList.contains(animation)) {
            element.classList.add(animation);

            element.style.animationDelay = `${delay}` * 0.2 + "s";
            delay++;
        }
    }
};

const isInViewport = (element) => {
    var bounding = element.getBoundingClientRect();
    return (
        bounding.bottom >= 0 &&
        bounding.right >= 0 &&
        bounding.top <= document.documentElement.clientHeight &&
        bounding.left <= document.documentElement.clientWidth
    )
};

const isItemVisible = (element, animation) => {
    if (isInViewport(element)) {
        if (window.innerWidth >= 300) {
            anime(element, animation);
        }
    }
};


// for viewport
const animeItem = (item, animation) => {
    item.forEach(item => {
        isItemVisible(item, animation);
    })
    delay = 1;
};


// for scroll
window.addEventListener('scroll', () => {
    if (window.innerWidth >= 300) {
        animeItem(card, "anime");
    }

});
// to load the animations

animeItem(card, "anime");

