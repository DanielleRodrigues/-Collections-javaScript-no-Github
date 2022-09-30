"use strict";
/*Crie uma um programa para trabalhar com estoque de uma loja, o programa deverá trabalhar com
Collection do tipo Array de JavaScript para manipular os dados desse estoque,
o programa deverá atender as seguintes funcionalidades:

Armazenar dados da Array
Remover dados da Array;
Atualizar dados da Array.
Apresentar todos os dados da Array.*/
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var Remove_1 = require("./Remove");
var Menu_1 = require("./Menu");
var ShowList_1 = require("./ShowList");
var Add_1 = require("./Add");
var prompt = PromptSync();
var lista = [];
var opcao = 0;
do {
    (0, Menu_1.Menu)();
    opcao = Number(prompt('Selecione: '));
    switch (opcao) {
        case 1:
            (0, Add_1.Adicionar)(lista);
            break;
        case 2:
            (0, Remove_1.Retirar)(lista);
            break;
        case 3:
            (0, ShowList_1.Mostrar)(lista);
            (0, Remove_1.Retirar)(lista);
            (0, Add_1.Adicionar)(lista);
            break;
        case 4:
            (0, ShowList_1.Mostrar)(lista);
            break;
        case 5:
            console.log('Tchau tchau');
            break;
    }
} while (opcao != 5);
