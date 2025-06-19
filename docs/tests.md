# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

## Plano de Testes de Software

**Caso de Teste** | **CT01 - Cadastro e edição de perfil**
 :--------------: | ------------ |
**Procedimento**  | 1) Acesse o endereço www.teste.com.br. <br> 2) Clique em Login. <br> 3) Clique em Criar conta de acordo com o seu perfil de usuário. <br> 4) Preencha todos os campos do formulário de acordo com o seu perfil. <br> 5) Clique em Li e aceito os termos. <br> 6) Clique em Criar conta. <br> 7) Após criar sua conta, clique em seu nome de usuário. <br> 8) Clique em Perfil. <br> 9) Clique no botão Atualizar perfil. <br> 10) Atualize os dados cadastrais. <br> 11) Clique em Salvar alteracões. <br>
**Requisitos associados** | RF-001
**Resultado esperado** | Prosseguir com o cadastro e a edição dos dados de perfil
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro e atualizacão dos dados cadastrados no formulário
**Resultado obtido** | Sucesso 

**Caso de Teste** | **CT02 - Publicacão e Banco de Vagas**
 :--------------: | ------------ |
**Procedimento**  | 1) Após ter realizado seu login como empresa, clique no menu Vagas <br> 2) Clique no botão verde Cadastre uma oportunidade <br> 3) Preencha o formulário e caso queira, anexo um arquivo <br> 4) Clique em Cadastrar Vaga para enviar ou limpar para cancelar
**Requisitos associados** | RF-002
**Resultado esperado** | Após o login, empresas conseguem cadastrar vagas
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Autenticação e Login**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço www.teste.com.br <br> 2) Clique em Login <br> 3) Clique em Criar conta de acordo com o seu perfil de usuário <br> 4) Preencha todos os campos do formulário de acordo com o seu perfil <br> 5) Clique em Li e aceito os termos <br> 6) Clique em Criar conta <br>
**Requisitos associados** | RF-003
**Resultado esperado** | Prosseguir para a criação do cadastro e login
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - Filtro Avançado de Vagas**
 :--------------: | ------------
**Procedimento**  | 1) Clique na página de Vagas <br> 2) Clique no campo buscar, para pesquisar pelo título da vaga <br> 3) Clique em locais para filtrar pela localidade <br> 4) Clique em Todos os salários para filtrar pelo salário <br> 
**Requisitos associados** | RF-004
**Resultado esperado** | Usuário poderá filtrar as vagas de acordo com o seu título, localidade ou salário 
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Busca de Vagas**
 :--------------: | ------------
**Procedimento**  | 1) Clique em Vagas, após ter realizado seu login como usuário <br> 2) Utilize a barra de rolagem para se movimentar pelas vagas já postadas na plataforma<br>
**Requisitos associados** | RF-005
**Resultado esperado** | Prosseguir para a busca de vagas, após o login na plataforma
**Dados de entrada** | Procura nas vagas já postadas
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT06 - Favoritos**
 :--------------: | ------------
**Procedimento**  | 1) Clique em Vagas, após ter realizado seu login <br> 2) Clique no ícone da Estrela para favoritar uma vaga, dentre as disponibilizadas na plataforma <br> 
**Requisitos associados** | RF-006
**Resultado esperado** | Favoritar vaga
**Dados de entrada** | Favoritar vaga disponibilizada por meio de clique em ícone da estrela 
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT07 - Vagas cadastradas recentemente**
 :--------------: | ------------
**Procedimento**  | 1) Após o login como usuário, clique Home <br> 2) Utilize o botão de rolagem até a secão de oportunidades de emprego <br> 3) Visualize as vagas cadastradas recentemente <br> 
**Requisitos associados** | RF-007
**Resultado esperado** | Usuário visualiza vagas cadastradas recentemente
**Dados de entrada** | Visualização de vagas
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT08 - Sistema de Feedback**
 :--------------: | ------------
**Procedimento**  | 1) Clique para enviar o input <br> 2) Visualize a mensagem de sucesso ou de erro <br> 
**Requisitos associados** | RF-008
**Resultado esperado** | Usuário visualiza uma mensagem de retorno quanto ao input realizado
**Dados de entrada** | Inserção de dados
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT09 - Guia de Documentação**
 :--------------: | ------------
**Procedimento**  | 1) Clique em Recursos <br> 2) Dentro da caixa de Guia de Documentação, clique em Ver Detalhes <br> 3) Utilize o botão de rolagem para visualizar as informações sobre documentação<br>
**Requisitos associados** | RF-009
**Resultado esperado** | Usuário poderá visualizar um guia com informações sobre documentação 
**Dados de entrada** | Usuário utilizará botão de rolagem
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT10 - Recursos Educacionais**
 :--------------: | ------------
**Procedimento**  | 1) Clique em Recursos <br> 2) Dentro da Caixa de Recursos Educacionais, clique em Ver Detalhes <br> 3) Utilize o botão de rolagem para visualizar as informações sobre os recursos educacionais<br>
**Requisitos associados** | RF-010
**Resultado esperado** | Usuário poderá visualizar uma página com informações educacionais 
**Dados de entrada** | Usuário utilizará o botão de rolagem 
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT11 - Caixa de Sugestão de Recursos Adicionais**
 :--------------: | ------------
**Procedimento**  | 1) Clique em Recursos no menu de navegação <br> 2) Com o botão de rolagem, vá até o final da página e clique em Abrir Sugestão <br> 3) Preencha os dados solicitados. <br> 4) Clique em Enviar <br>
**Requisitos associados** | RF-011
**Resultado esperado** | Usuário poderá enviar uma sugestão de conteúdo para ser publicado na plataforma
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT12 - ÁREA PARA ONGS**
 :--------------: | ------------ 
**Procedimento**  | 1) Clique em ONGS no menu de navegação. <br> 2) Utilize o botão de rolagem para visualziar as informações <br> 
**Requisitos associados** | RF-012
**Resultado esperado** | Usuário pode visualizar as informações da página para ONGS
**Dados de entrada** | Visualizacão de informações
**Resultado obtido** | Sucesso

## Registro dos Testes de Software

|*Caso de Teste*                                 |*CT01*                                        |
|---|---|
|Requisito Associado | RF-001 - Cadastro e Edição de Perfil|
|Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/personal/1593064_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=ESM4phU_F3xFqf6pXTC9E7EBiHRVfbmRKLZn3FhFJwVzAw&e=wnEz7L| 

|*Caso de Teste*                                 |*CT02*                                        |
|---|---|
|Requisito Associado | RF-002 - Publicação e Banco de Vagas| 
|Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/personal/1593064_sga_pucminas_br/Documents/TESTES/CT_02.mov?csf=1&web=1&e=eB4G7V| 

|*Caso de Teste*                                 |*CT03*                                        |
|---|---|
|Requisito Associado | RF-003 - Autenticação e login|
|Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/personal/1593064_sga_pucminas_br/Documents/TESTES/CT_03.mov?csf=1&web=1&e=Z3wrGW| 

|*Caso de Teste*                                 |*CT04*                                        |
|---|---|
|Requisito Associado | RF-004 - Filtros Avançados de Vagas|
|Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/personal/1593064_sga_pucminas_br/Documents/TESTES/CT_04.mov?csf=1&web=1&e=mX9ZAa| 

|*Caso de Teste*                                 |*CT05*                                        |
|---|---|
|Requisito Associado | RF-005 - Busca de Vagas|
|Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/personal/1593064_sga_pucminas_br/Documents/TESTES/CT_05.mov?csf=1&web=1&e=3wRiSV| 

|*Caso de Teste*                                 |*CT06*                                        |
|---|---|
|Requisito Associado | RF-006 - Favoritos|
|Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/personal/1593064_sga_pucminas_br/Documents/TESTES/CT_06.mov?csf=1&web=1&e=xP9aBN| 

|*Caso de Teste*                                 |*CT07*                                        |
|---|---|
|Requisito Associado | RF-007 - Vagas Cadastradas Recentemente|
|Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/personal/1593064_sga_pucminas_br/Documents/TESTES/CT_07.mov?csf=1&web=1&e=AoGXuS| 

|*Caso de Teste*                                 |*CT08*                                        |
|---|---|
|Requisito Associado | RF-008 - Sistema de Feedback|
|Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/personal/1593064_sga_pucminas_br/Documents/TESTES/CT_08.mov?csf=1&web=1&e=vSOsKw| 

|*Caso de Teste*                                 |*CT09*                                        |
|---|---|
|Requisito Associado | RF-009 - Guia de Documentação|
|Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/personal/1593064_sga_pucminas_br/Documents/TESTES/CT_09.mov?csf=1&web=1&e=WPxkv9| 

|*Caso de Teste*                                 |*CT10*                                        |
|---|---|
|Requisito Associado | RF-010 - Recursos Educacionais|
|Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/personal/1593064_sga_pucminas_br/Documents/TESTES/CT_10.mov?csf=1&web=1&e=j44mw8| 

|*Caso de Teste*                                 |*CT11*                                        |
|---|---|
|Requisito Associado | RF-011 - Caixa de sugestão de recursos adicionais|
|Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/personal/1593064_sga_pucminas_br/Documents/TESTES/CT_11.mov?csf=1&web=1&e=1Qg4pR| 

|*Caso de Teste*                                 |*CT12*                                        |
|---|---|
|Requisito Associado | RF-012 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/personal/1593064_sga_pucminas_br/Documents/TESTES/CT_12.mov?csf=1&web=1&e=lgUq8O| 

## Avaliação dos Testes de Software

Os testes foram realizados de maneira satisfatória. Todos os requisitos funcionais previstos para o projeto foram desenvolvidos e implementados. Os testes dos requisitos Rf-01, RF-02 e RF-03, cujo objeto apresentavam duas ações (ex: cadastro e edição do perfil), foram mantidos em um único teste, razão pela qual as gravações de tela ficaram maiores para os CT-01, CT-02 e CT-03. 

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta; conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa migrante ou refugiada que deseja procurar vagas de emprego. Encontre no site como cadastrar seu perfil e procurar por vagas de seu interesse. |
| 2             | Você é uma empresa e deseja anunciar uma vaga. Encontre no site como cadastrar sua empresa e vagas para avaliação. |
| 3             | Você é uma ONG que deseja receber vagas e encaminhar currículos. Encontre no site vagas e como cadastrar currículos. |




## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28.02 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.


Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



