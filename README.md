
## Execução

Atenção! 
Antes de executar esse arquivo, favor baixar também o back end, e inicializar. Ele será responsável pelas informações apresentadas na tela.
Link: https://github.com/belatcms/copa-back




## Alterando URL

Antes de iniciar o projeto, favor entrar no caminho " copa-front > src > services > api.js ", é onde você deverá colocar o link da sua localhost utilizada para executar o back end.
Lembrando que não é necessário colocar "/" no final. 
O seu arquivo deverá ficar parecido com isso: 

***************************
import axios from 'axios'
const api = axios.create({
  baseURL: 'https://localhost:44322'  <-- SUA URL AQUI
})
export default api
***************************



## Imagem do projeto

Página inicial do projeto

![page1](https://user-images.githubusercontent.com/28361987/93031089-90ea6480-f5fe-11ea-8eab-b7f0e338fa7d.png)



Página Resultado

![alt text](https://github.com/belatcms/copa-front/tree/master/src/assets/images/page2.png "pag result")
