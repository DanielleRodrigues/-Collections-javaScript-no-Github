"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mostrar = void 0;
function Mostrar(Lista) {
    console.log('\t Lista completa\n');
    for (var i = 0; i < Lista.length; i++) {
        console.log("".concat(i + 1, " - ").concat(Lista[i]));
    }
}
exports.Mostrar = Mostrar;
