const fetch = require('node-fetch');
const { question } = require('readline-sync');
require('dotenv').config();
const token = process.env.token;
const key = process.env.key;

const createBoard = async() => {
  const name = question('Insira um nome para o Board: ')
  try {
      const fetchApi = await fetch(`https://api.trello.com/1/boards/?key=${key}&token=${token}&name=${name}`, {
          method: 'POST'
      });
      const content = await fetchApi.json();
      console.table([{ ID_BOARD: content.id, NAME: content.name, LINK: content.shortUrl }]);
  } catch (error) {
      console.log(error);
  }
}

createBoard();