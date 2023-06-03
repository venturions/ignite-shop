# Ignite Shop

Aplicação que consome a API da Stripe para realizar a compra de camisetas.

## Tecnologias

Utilizei as seguintes tecnologias e frameworks no desenvolvimento do projeto:

- React
- Next.js 12
- TypeScript
- Stitches
- Zustand

## Conceitos Utilizados

Durante o desenvolvimento do projeto, foram aplicados os seguintes conceitos:

- Acessibilidade: Foram adotadas boas práticas de acessibilidade, para garantir que pessoas com deficiência possam utilizar a aplicação de forma inclusiva.
- Consumo de API: Através da API da Stripe, foram obtidas as informações dos produtos e também todo o fluxo de checkout da aplicação.
- Clean Code: No desenvolvimento do projeto, foram adotados princípios de clean code, como organização do código em componentes reutilizáveis, nomenclatura clara, simplicidade, legibilidade e manutenibilidade.

## Instalação e Execução

Para instalar a aplicação, siga as etapas abaixo:

1. Clone o repositório: `git clone https://github.com/venturions/ignite-shop.git`
2. Acesse o diretório raiz do projeto no terminal.
3. Execute o comando `npm install` para instalar as dependências necessárias.

Para executar a aplicação:

1. No terminal, dentro do diretório raiz do projeto, execute o comando `npm run dev`.
2. Acesse `http://localhost:3000/` em seu navegador.

**PS: Não é necessário usar um cartão de crédito válido na plataforma da Stripe. Utilize o cartão: 4242 4242 4242 4242 e o restante dos dados podem ser aleatórios.**

**Certifique-se de ter o Node.js e o npm instalados em seu sistema antes de prosseguir com a instalação e execução da aplicação.**

## Informações sobre a Stripe

A Stripe é uma plataforma popular de processamento de pagamentos que fornece um conjunto de APIs para que as empresas possam aceitar e gerenciar pagamentos online. Ela oferece recursos como suporte a diferentes métodos de pagamento, faturamento de assinaturas e prevenção contra fraudes.

Para utilizar a API da Stripe em seus próprios projetos, é necessário criar uma conta na Stripe e obter chaves de API. Essas chaves são utilizadas para autenticar a sua aplicação e interagir com a API da Stripe.

No projeto Ignite Shop, a API da Stripe é utilizada para obter informações dos produtos e gerenciar todo o fluxo de checkout da aplicação. A integração com a Stripe permite que os usuários façam pagamentos de forma segura, incluindo a inserção de dados de cartão de crédito.

A Stripe disponibiliza uma documentação completa e recursos para auxiliar os desenvolvedores na integração dos serviços. Você pode consultar a documentação da Stripe [aqui](https://stripe.com/docs) para mais informações sobre como utilizar a API da Stripe, incluindo guias, exemplos de código e documentação de referência.
