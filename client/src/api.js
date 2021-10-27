export const createApiClient = () => {
  return {
    getOrders: (queryObj) => {
      const url = new URL(`http://localhost:3001/api/products`);
      url.search = new URLSearchParams(queryObj).toString();
      return fetch(url)
        .then((res) => res.json())
        .then((data) => data.status === 'success' && data.data)
        .catch((err) => console.log(err.message));
    },
  };
};
