
## Execução

Atenção! 
Antes de executar esse arquivo, favor baixar também o back end, e inicializar. Ele será responsável pelas informações apresentadas na tela.
Link: https://github.com/belatcms/copa-back

## Rodando o projeto localmente

### Clone o projeto

git clone https://github.com/belatcms/copa-front

### Instale as dependências

npm install

### Rode o copa-front
npm run start

### Alterando URL

Antes de iniciar o projeto, favor entrar no caminho " copa-front > src > services > api.js ", é onde você deverá colocar o link da sua localhost utilizada para executar o back end.
Lembrando que não é necessário colocar "/" no final. 
O seu arquivo deverá ficar parecido com isso: 

javascript [ import axios from 'axios'
const api = axios.create({
  baseURL: 'https://localhost:44322'  <-- SUA URL AQUI
})
export default api ]


## Imagem do projeto

Página inicial do projeto

![alt text](https://github.com/belatcms/copa-front/tree/master/src/assets/images/page1.png "pag ini")


Página Resultado

![alt text](https://github.com/belatcms/copa-front/tree/master/src/assets/images/page2.png "pag result")
