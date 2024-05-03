const toggleSideBar = document.getElementById('toggle-side-bar');
const sideBar = document.querySelector('.side-bar');
const lightBoxToggle = document.querySelectorAll('.light-box-toggle');
const petShopCardContainer = document.querySelector('.petshop-card-container');
const mainContainer = document.querySelector('.main-cont')

const info = [
  {
    src: './img/Frame7(1).png',
    title: 'Cat scratching ball',
    description: "Provide your cat with endless scratching enjoyment with our Cat Scratching Ball. Designed to keep claws sharp and spirits high, this innovative scratching ball offers a satisfying outlet for your feline friend's natural scratching instincts.",
    price: 200,
    detailsBtnId: 'd-1',
    closeBtnId: 'c-1',
  },
  {
    src: './img/Frame7(2).png',
    title: 'Cute Pet Cat Warm',
    description: "thermostatically controlled to automatically warm to your cat's normal body temperature only when your kitty is in the heated pet bed.",
    price: 400,
    detailsBtnId: 'd-2',
    closeBtnId: 'c-2',
  },
  {
    src: './img/Frame7(3).png',
    title: 'Cat Food Salmon Reflex Plus',
    description: "Complete and balanced formulated super premium dry cat food with salmon for all breed cats aged over 12 months",
    price: 100,
    detailsBtnId: 'd-3',
    closeBtnId: 'c-3',
  },
  {
    src: '../img/image2(1).png',
    title: 'Cat Food Salmon Reflex Plus',
    description: "Complete and balanced formulated super premium dry cat food with salmon for all breed cats aged over 12 months",
    price: 100,
    detailsBtnId: 'd-4',
    closeBtnId: 'c-4',
  },
  {
    src: '../img/Frame7(6).png',
    title: 'Plush Pet Toy',
    description: "Get the Funny Electronic Pet Dog Plush Dog Toy Walking Toy ",
    price: 100,
    detailsBtnId: 'd-5',
    closeBtnId: 'c-5',
  },
  {
    src: '../img/Frame7.png',
    title: 'Poodle',
    description: "Complete and balanced formulated super premium dry cat food with salmon for all breed cats aged over 12 months",
    price: 100,
    detailsBtnId: 'd-6',
    closeBtnId: 'c-6',
  },
  {
    src: '../img/product-2.jpg',
    title: 'Reflex Plus Adult',
    description: "Complete and balanced formulated super premium dry cat food with salmon for all breed cats aged over 12 months",
    price: 100,
    detailsBtnId: 'd-7',
    closeBtnId: 'c-7',
  },
  {
    src: '../img/Frame7(4).png',
    title: 'Alaskan Toy',
    description: "Get the Funny Electronic Pet Dog Plush Dog Toy Walking Toy ",
    price: 150,
    detailsBtnId: 'd-8',
    closeBtnId: 'c-8',
  },
];

toggleSideBar.addEventListener('click', () => {
  sideBar.classList.toggle('show-side-bar');
});

lightBoxToggle.forEach((element) => {
  boxId = element.getAttribute('data-for');
  element.addEventListener('click', () => {
    document.getElementById(boxId).classList.toggle('show-light-box');
  });
});

// create cards section dynamically

const createCards = () => {
  info.map((el) => {
    const card = document.createElement('div');
    card.classList.add('petshop-card');
    card.innerHTML = `
  <div>
    <img src=${el.src} alt=${el.title}>
    <p class="title">${el.title}</p>
    <div class="details">
      <h4>${el.price} EGP</h4>
    </div>
    <button id="${el.detailsBtnId}" type="button" class='btn'">Details</button>
  </div>
    `;
    petShopCardContainer.appendChild(card);

    // clicks button to open popup with details about the products
    const button = document.getElementById(`${el.detailsBtnId}`);
    button.addEventListener('click', () => {
      const popUp = document.createElement('section');
      popUp.innerHTML = `
      <div class="pop-up">
        <h3>${el.title}</h3>
        <img src=${el.src} alt=${el.title}>
        <p>${el.description}</p>
        <button class='btn' id=${el.closeBtnId}>close &#9747;</button>
      </div>
      `;
      document.body.prepend(popUp);
      mainContainer.style.display = "none"
      // click the close (X) button, the popup disappears.
      const popUpCloseBtn = document.getElementById(`${el.closeBtnId}`);
      popUpCloseBtn.addEventListener('click', () => {
        popUp.style.display = 'none';
        mainContainer.style.display = "block"
    });
    });
  });
};
createCards();
