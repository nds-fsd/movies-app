const API_KEY = 'f55e122de29087fdb8b07b3bfe4ca984';
const PATH = 'https://api.themoviedb.org/3/';

export const request = ({
    url,
    body,
    method = 'GET',
    params,
    onSuccess = () => {},
    onError = () => {},
}) => {
  let parsedUrl = `${PATH}${url}?api_key=${API_KEY}`;
  if (params) {
    parsedUrl = `${parsedUrl}&${params}`;
  }
  fetch(parsedUrl, {
    method,
    body,
  })
  .then(async response => {
    const data = await response.json();

    // check for error response
    if (!response.ok) {
        // get error message from body or default to response statusText
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }
    onSuccess(data);
  })
  .catch(error => {
    console.error('There was an error!', error);
    onError(error);
  });
};
