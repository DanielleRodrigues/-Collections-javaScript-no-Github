"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retirar = void 0;
var ShowList_1 = require("./ShowList");
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function Retirar(lista) {
    ShowList_1.Mostrar;
    var posicaoRemover = prompt('O que deseja excluir?');
    var posicao = Number(posicaoRemover) - 1;
    lista.splice(posicao, 1);
}
exports.Retirar = Retirar;
