const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

container = document.querySelector('.container');
const div = document.createElement('div');



for (let i = 0; i <  elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagger = document.createElement(tag);
    let textor = document.createTextNode(texto);
    tagger.appendChild(textor);
    div.appendChild(tagger);
}

container.appendChild(div);