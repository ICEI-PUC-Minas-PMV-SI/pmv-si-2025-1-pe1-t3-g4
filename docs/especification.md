# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto.

Caso deseje atribuir uma imagem a sua persona, utilize o site https://thispersondoesnotexist.com/

## Personas

|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Maria tem 33 anos, não possui ensino superior e está em situação de rua. Está no Brasil há 7 anos. Tem o desejo de retornar ao mercado de trabalho formal. 
Gosta de ler, dançar, é solteiro. Está em busca de uma vaga para trabalhar de segunda à sexta-feira e sábado, sem prejudicar seu desejo de estudar.|

Júlia tem 37 anos, não possui ensino superior e tem experiência com serviços gerais. Está no Brasil há 12 anos. Deseja trabalhar como cozinheira. Gosta de passar um tempo com os filhos, ir à Igreja. Ela gostaria de trabalhar em localidades próximas de sua residência. Atualmente labora em condições degradentes, mas precisa reunir recursos para trazer sua filha do seu país.  

Paulo recém completou 18 anos e deseja uma vaga como menor aprendiz. Fala bem português e está no Brasil há 03 anos. Vive com seus pais e seus irmãos. Mora em uma cidade da região metropolitana de Belo Horizonte. 

Ricardo migrou parao Brasil há 03 meses. Já está documentado e em busca de seu primeiro emprego, nunca trabalhou com nenhum contrato formalizado. Gostaria de trabalhar como pintor. 

Helena tem 16 anos, chegou no Brasil há 01 ano. Atualmente trabalha em tempo integral, com jornada de 44h semanais, o que a impede de estudar. Ela gostaria de trabalhar como menor aprendiz e deseja realizar um curso técnico. 

Construtora Civil A, sediada em Minas Gerais, mas com filiais em todo o Brasil. Possui muitas vagas disponíveis e pelo seu programa de diversidade, gostaria de empregar pessoas migrantes e refugiadas, mas não sbae como pode contatá-las. 

Rede de Supermercado X, com atuação na região metropolitana, deseja empregar um número elevado de pessoas e gostaria de contratar pessoas migrantes e refugiadas para vários tipos de trabalho. 



Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| Edição de Perfil – Usuários podem atualizar dados como habilidades, experiências e contatos. |PRIORIDADE?|
|RF-002| Publicação de Oportunidades – Recrutadores podem cadastrar vagas com descrição detalhada. |PRIORIDADE?|
|RF-003| Busca de vagas - Migrantes podem pesquisar oportunidades de acordo com suas qualificações. |PRIORIDADE?|
|RF-004| Favoritos – Usuários podem salvar vagas de interesse para acessar posteriormente. |PRIORIDADE?|
|RF-005| Sugestões personalizadas - O sistema pode recomendar vagas com base no perfil do usuário. |PRIORIDADE?|
|RF-006| Sistema de Feedback – Empresas podem fornecer retornos sobre candidaturas realizadas. |PRIORIDADE?|
|RF-007| Guia de Documentação – Seção com informações sobre regularização de documentos. |PRIORIDADE?|
|RF-008| Recursos educacionais - Área com conteudos sobre cultra e legislação trabalhista. |PRIORIDADE?|



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva | MÉDIA | 
|RNF-002| A aplicação deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Proibição de utilização de frameworks.|
|02| Proibição de contratação de prestadores de serviços.|
|03| Limitações tecnológicas.|
|04| Limitação de prazo.|
|05| Limitação da modalidade de armazenamento escolhida (local storage).|


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
