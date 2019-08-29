import axios from 'axios';
const api = {
  sendRequest(url, data, method, extraParam){
    const option = {
      baseURL: 'https://api.giphy.com/v1/',
      params: {
        api_key: 'XEZUjqegLG9jJPTlsUB75n56exaZV97A',
        ...extraParam
      },
      method: method,
      data: data
    };
    return axios(url, option);
  },
  get(url, {data, extraParam} = {}){
    return this.sendRequest(url, data, 'get', extraParam)
  }
};

export default api;