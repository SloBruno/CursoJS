//Função que retorna True se a imagem estiver em formato paisagem

const ePaisagem = (largura, altura) => largura> altura;

console.log(ePaisagem(300, 500));