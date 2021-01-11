const axios = require('axios')


const requisicoes = {


requestLogin: async (email,senha) => {
    
    return await axios.get("https://passport.oasgames.com/?m=login&email="+email+"&pwd="+senha+"&remember=1&callback=jQuery17206608213630937556_1610255984310&_=1610255996227",{headers:
    {
    'accept': '*/*',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    'cache-control': 'no-cache',
    'dnt': '1',
    'pragma': 'no-cache',
    'referer': 'https://naruto.oasgames.com/',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'}
})
.then((response) => {
    return response
})
.catch((response) => {
    return response
})
}}

module.exports = requisicoes