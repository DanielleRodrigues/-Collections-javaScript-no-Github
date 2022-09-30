import { Mostrar } from './ShowList';
import PromptSync = require('prompt-sync');

const prompt = PromptSync();

function Retirar(lista) {
    Mostrar
    const posicaoRemover = prompt('O que deseja excluir?');
    const posicao = Number(posicaoRemover) - 1
    lista.splice(posicao, 1);
}
export { Retirar };