## Conectando usuários com o Google Provider Next Auth
![signin (1)](https://user-images.githubusercontent.com/96249621/226487724-14527d5d-95ec-4a04-a904-36b8e9033bb2.svg)
![tela de login (1)](https://user-images.githubusercontent.com/96249621/226487780-adaa08bd-6761-4bc3-811a-4920ea904fe8.svg)

## Listagem Pelo usuário
![User1 (1)](https://user-images.githubusercontent.com/96249621/226488025-4f6db382-4241-420e-83b0-c7f34d065e9e.svg)
![User2 (1)](https://user-images.githubusercontent.com/96249621/226488033-60ca4e78-123f-4269-9213-62c213a7e95e.svg)

## Registrar Pelo usuário
![Register1 (1)](https://user-images.githubusercontent.com/96249621/226488165-51921cb8-902b-4364-94ba-056d5cbcfbcd.svg)
![Register2 (1)](https://user-images.githubusercontent.com/96249621/226488175-65fdbb21-033d-4bb6-bf0b-7d6a0a268c87.svg)

## Atualizar Pelo usuário
![Update1 (1)](https://user-images.githubusercontent.com/96249621/226488310-1a61e63e-99a3-4c52-a818-84664ccd8cc0.svg)
![Update2 (1)](https://user-images.githubusercontent.com/96249621/226488314-bf504324-d280-4ed7-9c6b-61d2518b6518.svg)

## Deletar Pelo usuário
![Delete1 (1)](https://user-images.githubusercontent.com/96249621/226488488-f27888dc-8d30-4301-99e8-cebd8ff2c7db.svg)
![Delete2 (1)](https://user-images.githubusercontent.com/96249621/226488493-8da1e22a-7106-43ce-9ab3-7ea820594e25.svg)

## Setup
1. cd nextjs-firebase <br />

2. npm install --save <br />

3. Autenticar seu email na Plataforma do Firebase em: "Authentication" > Sign-in method > Google > informe seu usuário de gmail.<br />

4. Criar o banco de dados em "Firestore Database" > Nome do Banco de dados(todos) e as colunas<br /> com: title(string), detail(string), timestamp(timestamp)<br />

5. Preencha os dados de conexão no arquivo <b>firebase.js</b> na plataforma do Firebase.<br />
Siga os passos para receber os dados de conexão: Visão geral do Projeto > Adicionar Projeto ><br />
criar projeto em produção ou modo de teste(30 dias de acesso as informações do banco) <br />
e pronto, seus dados de conexão será gerado automaticamente pelo Firebase.<br />

6. Gerar chave secreta em: Configuração de Projeto > Contas de Serviço > Clique no botão "Gerar <br /> nova chave privada", renomeie a chave para "secrets.json" e mova o arquivo para a raiz do<br />projeto.

7. Definir Índices compostos é necessário para realizar determinadas consultas no seu banco de dados do firestore.<br />

8. npm run dev <br />
