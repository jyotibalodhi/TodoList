import axios from 'axios';

export const startFetchFun = async () => {
  const response = await axios
    .get(`https://jsonplaceholder.typicode.com/todos`)
    .then(res => {
      const responseTodos = res.data.slice(0, 2);
      result = responseTodos.map(a => {
        return {
          value: a.title,
          key: Math.random().toString(),
        };
      });
      return result;
    });
  return response;
};
