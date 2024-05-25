import { renderPhotos } from './js/render-functions.js';
import { getPhotos } from './js/pixabay-api.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onGallery);

function onGallery(event) {
  event.preventDefault();

  const userValue = event.target.elements.input.value;

  getPhotos(userValue).then(data => {
    console.log(data);
    //    .catch()
  });
}
