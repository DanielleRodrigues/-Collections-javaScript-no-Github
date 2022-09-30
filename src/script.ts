/*Crie uma um programa para trabalhar com estoque de uma loja, o programa deverá trabalhar com 
Collection do tipo Array de JavaScript para manipular os dados desse estoque, 
o programa deverá atender as seguintes funcionalidades:

Armazenar dados da Array
Remover dados da Array;
Atualizar dados da Array.
Apresentar todos os dados da Array.*/

import PromptSync = require('prompt-sync');
import { Retirar } from './Remove';
import { Menu } from './Menu';
import { Mostrar } from './ShowList';
import { Adicionar } from './Add';


const prompt = PromptSync();
const lista: string[] = [];
let opcao = 0;

do {
    Menu();
    opcao = Number(prompt('Selecione: '));

    switch (opcao) {
        case 1:
            Adicionar(lista);
            break;
        case 2:
            Retirar(lista);
            break;
        case 3:
            Mostrar(lista);
            Retirar(lista);
            Adicionar(lista);
            break;
        case 4:
            Mostrar(lista);
            break;
        case 5:
            console.log('Tchau tchau');
            break;
    }
} while (opcao != 5);


