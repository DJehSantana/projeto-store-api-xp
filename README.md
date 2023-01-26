# Store API XP
Projeto de uma API para uma loja com NodeJs e Postgres, realizado durante bootcamp de NodeJs da XP Educação IGTI.

### Tecnologias utilizadas:

<div>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="50px" height="50px" /> <img src="https://user-images.githubusercontent.com/105378159/188524475-83652b5c-76fa-444e-8c10-faed1d113d7b.png" width="50px" height="50px" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="50px" height="50px" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="50px" height="50px"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" width="50px" height="50px" />  
</div>

 ### Configuração do ambiente de desenvolvimento

 1. Clonar o repositório
 1. Instalar as dependências com o gerenciador de pacotes `npm`
 1. Configurar as variáveis de ambiente `PORT` e `DATABASE_URL`
 1. Rodar o servidor executando o comando `npm start`
 
 ### Rotas e métodos:
 
 <table>
  <thead>
    <th>Endpoint</th>    
    <th>Método</th>
    <th>Função</th>
  </thead>
  <tbody>    
    <td>/client</td>    
    <td>GET</td>
    <td>Lista todos os clientes</td>
  </tbody>
  <tbody>
    <td>/client/:id</td>    
    <td>GET</td>
    <td>Lista os dados do cliente de ID correspondente ao informado</td>
  </tbody> 
  <tbody>
    <td>/client</td>    
    <td>POST</td>
    <td>Cria o registro de um novo cliente</td>
  </tbody>
  <tbody>
    <td>/client/:id</td>    
    <td>DELETE</td>
    <td>Apaga do BD o cliente de ID correspondente ao informado</td>
  </tbody>
  <tbody>
    <td>/client</td>    
    <td>PUT</td>
    <td>Atualiza todos os dados do cliente selecionado</td>
  </tbody>  
  <tbody>    
    <td>/supplier</td>    
    <td>GET</td>
    <td>Lista todos os fornecedores</td>
  </tbody>
  <tbody>
    <td>/supplier/:id</td>    
    <td>GET</td>
    <td>Lista os dados do fornecedor de ID correspondente ao informado</td>
  </tbody> 
  <tbody>
    <td>/supplier</td>    
    <td>POST</td>
    <td>Cria o registro de um novo fornecedor</td>
  </tbody>
  <tbody>
    <td>/supplier/:id</td>    
    <td>DELETE</td>
    <td>Apaga do BD o fornecedor de ID correspondente ao informado</td>
  </tbody>
  <tbody>
    <td>/supplier</td>    
    <td>PUT</td>
    <td>Atualiza todos os dados do fornecedor selecionado</td>
  </tbody> 
  <tbody>    
    <td>/product</td>    
    <td>GET</td> 
    <td>Lista todos os produtos</td>
  </tbody>
  <tbody>
    <td>/product/:id</td>    
    <td>GET</td>
    <td>Lista os dados do produto de ID correspondente ao informado</td>
  </tbody> 
  <tbody>
    <td>/product</td>    
    <td>POST</td>
    <td>Cria o registro de um novo produto</td>
  </tbody>
  <tbody>
    <td>/product/:id</td>    
    <td>DELETE</td>
    <td>Apaga do BD o produto de ID correspondente ao informado</td>
  </tbody>
  <tbody>
    <td>/product</td>    
    <td>PUT</td>
    <td>Atualiza todos os dados do produto selecionado</td>
  </tbody>
  <tbody>    
    <td>/sale</td>    
    <td>GET</td> 
    <td>Lista todas as vendas, ou os resultados das pesquisas através de query string (por produto, cliente e fornecedor)</td>
  </tbody>
  <tbody>
    <td>/sale/:id</td>    
    <td>GET</td>
    <td>Lista os dados da venda de ID correspondente ao informado</td>
  </tbody> 
  <tbody>
    <td>/sale</td>    
    <td>POST</td>
    <td>Cria o registro de uma nova venda</td>
  </tbody>
  <tbody> 
    <td>/sale/:id</td>    
    <td>DELETE</td>
    <td>Apaga do BD a venda de ID correspondente ao informado</td>
  </tbody>
  <tbody>
    <td>/sale</td>    
    <td>PUT</td>
    <td>Atualiza os dados value e date da venda selecionada</td>
  </tbody>
 </table>


