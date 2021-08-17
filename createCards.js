const fetch = require('node-fetch');
const fs = require('fs/promises');
const { question } = require('readline-sync');
require('dotenv').config();
const token = process.env.token;
const key = process.env.key;

const createCards = async() => {
    const docName = question('Insira o nome do documento: ');
    const idList = question('Insira o ID LIST: ')
    const doc = await fs.readFile(`${docName}.json`, 'utf8');
    const cards = JSON.parse(doc);
    cards.map(async({ name, desc }) => {
        try {
            const fetchApi = await fetch(`https://api.trello.com/1/cards?key=${key}&token=${token}&idList=${idList}&name=${name}&desc=${desc}`, {
                method: 'POST'
            });
            const content = await fetchApi.json();
            console.table([{ ID_CARD: content.id, NAME: content.name, LINK: content.shortUrl }])
        } catch (error) {
            console.log(error);
        }
    });
};


createCards();