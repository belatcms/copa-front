
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

js [ import axios from 'axios'
const api = axios.create({
  baseURL: 'https://localhost:44322'  <-- SUA URL AQUI
})
export default api ]


## Imagem do projeto

Página inicial do projeto
![page1](https://user-images.githubusercontent.com/28361987/93032339-6ea91480-f607-11ea-8c6b-0761b4555aab.png)

Página Resultado
![page2](https://user-images.githubusercontent.com/28361987/93032338-6d77e780-f607-11ea-8013-2adf30fa462b.png)

