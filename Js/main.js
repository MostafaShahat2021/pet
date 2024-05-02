document.getElementById('toggle-side-bar').addEventListener('click', () => {
  console.log('Clicked');
  document.querySelector('.side-bar').classList.toggle('show-side-bar');
});

document.querySelectorAll('.light-box-toggle').forEach((element) => {
  boxId = element.getAttribute('data-for');
  element.addEventListener('click', () => {
    document.getElementById(boxId).classList.toggle('show-light-box');
  });
});

let petShopCardContainer = document.querySelector('.petshop-card-container');
// console.log(petShopCardContainer);

const info = [
  {
    src: '../img/',
    title: 'Cat scratching ball',
    price: 200,
  },
  {
    src: './img/Frame7(1).png',
    title: 'Cute Pet Cat Warm',
    price: 400,
  },
  {},
];

info.map((el, index) => {
  petShopCardContainer.innerHTML += `
  <div class="petshop-card" id=${index}>
    <img src=${el.src} alt="no photo">
    <p class="title">${el.title}</p>
    <div class="details">
      <h4>${el.price} EGP</h4>
    </div>
  </div>
`;
});
