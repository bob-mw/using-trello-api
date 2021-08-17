const fetch = require('node-fetch');
const { question } = require('readline-sync');
require('dotenv').config();
const token = process.env.token;
const key = process.env.key;


const getListOnBoard = async() => {
  const id = question('Insira o ID do Board, por favor: ')
  try {
      const table = [];
      const fetchApi = await fetch(`https://api.trello.com/1/boards/${id}/lists?key=${key}&token=${token}`, {
          method: 'GET'
      });
      const content = await fetchApi.json();

      content.map(({ name, id }) => table.push({ ID_LIST: id, NAME: name }));

      console.table(table);

  } catch (error) {
      console.log(error);
  }
}

getListOnBoard();