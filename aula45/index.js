function retornahora(data){
    if(data && !(data instanceof Date)){
        throw new Error('Espera-se uma instância de Date válida');
    }

    if (!(data)){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
}

try{
const hora = retornahora('21/02/1955 22:01');
console.log(hora);
}catch(e){
    console.log('Espera-se uma instância de Date válida')
}
finally{
    console.log('Tenha um bom dia!')
}