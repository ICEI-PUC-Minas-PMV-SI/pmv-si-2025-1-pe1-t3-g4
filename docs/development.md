# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade |
|------|------------------------|------------|
|RF-001|Cadastro e Edição de Perfil - Usuários podem criar perfis com informações específicas (migrantes, refugiados, recrutadores, ONGs) e atualizar dados como habilidades, experiências e contatos. |ALTA|
|RF-002|Publicação e Banco de Vagas - Recrutadores podem cadastrar vagas com descrição detalhada, e o sistema exibe e permite a busca dessas oportunidades com base no perfil do candidato.|ALTA|
|RF-003|Autenticação e login: Usuários devem conseguir acessar a plataforma por e-mail e senha.|ALTA|

### Requisitos Nao Funcionais

|ID    | Descrição do Requisito | Prioridade |
|------|------------------------|------------|
|RNF-001|Compatibilidade com Navegadores – O sistema deve funcionar corretamente nos principais navegadores (Chrome, Firefox, Edge, Safari). | ALTA |
|RNF-002|Suporte Multilíngue: Interface e comunicação em diversos idiomas (Português, Espanhol, Inglês, Francês, Árabe, etc.). | ALTA |

## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

