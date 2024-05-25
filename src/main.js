import { renderPhotos } from './js/render-functions.js';
import { getPhotos } from './js/pixabay-api.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import octagon from '../src/img/octagon.svg';

const form = document.querySelector('.form');
const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const searchBtn = document.querySelector('.search-btn');

searchBtn.disabled = true;

loaderHide();

form.input.addEventListener('input', () => {
  searchBtn.disabled = !form.input.value.trim();
});

form.addEventListener('submit', onGallery);

function onGallery(event) {
  event.preventDefault();

  galleryContainer.innerHTML = '';

  loaderShow();

  const userValue = event.target.elements.input.value.trim();

  if (!userValue) {
    return;
  }

  searchBtn.disabled = true;

  getPhotos(userValue)
    .then(data => {
      if (data && data.hits && data.hits.length) {
        renderPhotos(data.hits);
      } else {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
    })
    .catch(error => {
      iziToast.error({
        message: error.message,
        position: 'topRight',
        backgroundColor: '#EF4040',
        theme: 'dark',
        iconUrl: octagon,
        maxWidth: 354,
        messageSize: '16',
      });
    })
    .finally(() => {
      loaderHide();
      searchBtn.disabled = true;
    });

  form.reset();
}

function loaderShow() {
  loader.style.display = 'inline-block';
}

function loaderHide() {
  loader.style.display = 'none';
}
