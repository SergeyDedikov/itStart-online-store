export const DB_URL: string = 'https://sergeydedikov.github.io/data';

export async function getProducts() {
  return await fetch(DB_URL + '/data.json')
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          const message =
            data.message || "При запросе товаров произошла ошибка";
          return Promise.reject(message);
        });
      }
    });
}
