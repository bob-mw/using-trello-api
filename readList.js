const fetch = require('node-fetch');
const { question } = require('readline-sync');
require('dotenv').config();
const token = process.env.token;
const key = process.env.key;

const readList = async() => {
  const idList = question('Insira o ID da LISTA: ');
  try {
    const table = [];
    const fetchApi = await fetch(`https://api.trello.com/1/lists/${idList}/cards?key=${key}&token=${token}`, {
        method: 'GET'
    });
    const content = await fetchApi.json();
    content.map((card) => {
        table.push({ ID_CARD: card.id, NAME: card.name, DESC: card.desc });
    });
    console.table(table);

} catch (error) {
    console.log(error);
}
};


readList();