const fetch = require('node-fetch');
const fs = require('fs/promises');
const { question } = require('readline-sync');
require('dotenv').config();
const token = process.env.token;
const key = process.env.key;

const destroyCard = async() => {
    const id = question('Insira o ID CARD: ')
    try {
        const fetchApi = await fetch(`https://api.trello.com/1/cards/${id}?key=${key}&token=${token}`, {
            method: 'DELETE'
        });
        return fetchApi;
    } catch (error) {
        console.log(error);
    }
};


destroyCard();