function Mostrar(Lista) {
    console.log('\t Lista completa\n');
    for (let i = 0; i < Lista.length; i++) {
        console.log(`${i + 1} - ${Lista[i]}`);
    }
}

export { Mostrar }