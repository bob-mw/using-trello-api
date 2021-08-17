const fetch = require('node-fetch');
const { question } = require('readline-sync');
require('dotenv').config();
const token = process.env.token;
const key = process.env.key;

const updateCard = async() => {
  const id = question('Insira o ID do CARD: ');
  const name = question('Insira um novo nome para o CARD: ')
  const desc = question('Insira uma nova descricao: ')

    try {
        const fetchApi = await fetch(`https://api.trello.com/1/cards/${id}?key=${key}&token=${token}&name=${name}&desc=${desc}`, {
            method: 'PUT'
        });
        const content = await fetchApi.json();
        console.table([{ CARD: content.name, LINK: content.shortUrl }])
    } catch (error) {
        console.log(error);
    }
};


updateCard();