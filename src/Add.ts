import PromptSync = require('prompt-sync');

const prompt = PromptSync();

function Adicionar(lista) {
    const posicao = lista.length;
    const item = prompt('Insira um novo item na lista: ');
    lista[posicao] = item;
    console.log(`O item: ${item} foi insirido a lista`);
}

export { Adicionar };