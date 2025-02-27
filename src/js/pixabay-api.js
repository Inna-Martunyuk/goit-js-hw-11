const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '48245420-0c25989f875d1fe30dc45addb';

export function fetchPhotosByQuery(searchedQuery) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
