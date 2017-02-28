import { backendless as config } from '../config';

export const getProjects = () => new Promise((resolve) => {
  const xhr = new XMLHttpRequest();
  const type = 'GET';
  const url = 'https://api.backendless.com/v1/data/backendlessappventure';

  console.log('get')
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      resolve(JSON.parse(xhr.responseText));
    }
  };

  xhr.open(type, url, true);
  xhr.setRequestHeader('application-id', config.APPLICATION_ID);
  xhr.setRequestHeader('secret-key', config.SECRET_KEY);
  xhr.send(null);
});