import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

function templatePhotos(images) {
  return images
    .map(image => {
      return `<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      data-source="${image.largeImageURL}"
      alt="${image.tags}"
    />
  </a>
  <div>
  <p class="info-image">${image.likes}</p>
  <p class="info-image">${image.views}</p>
  <p class="info-image">${image.comments}</p>
  <p class="info-image">${image.downloads}</p>
  </div>
</li>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.8,
  captionsData: 'alt',
  captionDelay: 250,
});

export function renderPhotos(images) {
  const markUp = templatePhotos(images);
  gallery.insertAdjacentHTML('afterbegin', markUp);
  lightbox.refresh();
}
