exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method = "POST">
    Nome do CLiente: <input type="text" name="qualquercoisa"><br>
    <button>Olá mundoo</button>
    </form>    
    `);
}

exports.trataPost = (req, res) => {
    res.send('Ei sou sua roda de post')
}