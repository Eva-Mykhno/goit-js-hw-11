export function getPhotos(input) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '20488832-3f7ee310b3351fba3525ae600',
    q: input,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${BASE_URL}?${params}`;

  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}
