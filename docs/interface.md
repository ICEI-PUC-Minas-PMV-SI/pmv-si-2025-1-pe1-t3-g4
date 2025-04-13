## Projeto de Interface

O projeto de interface da plataforma Trabalho Sem Fronteiras foi elaborado a partir de diretrizes visuais e de acessibilidade:<br>
1. Se discutiu a importância de uma plataforma com elementos que não desviassem a atenção ou prejudicassem a experiência do usuário;<br> 
2. as cores escolhidas devem expressar um ambiente neutro, para que os conteúdos registrados pelos usuários, como perfis, vagas e conexões sejam os destaques da página;<br> 
3. a disposição adequadas dos menus, como cabeçalho e rodapé com botões de fácil visualização pelos usuários;<br> 
4. os principais botões e recursos foram pensados para atender pessoas com distintos níveis de conhecimento sobre páginas web.<br>

Os requisitos funcionais RF-001, RF-002, RF-003, relacionados ao cadastro e edição de perfil (RF-001), publicação e banco de vagas (RF-002), e autenticação e login (RF-003), foi discutido que a melhor localização seria após a página inicial, após o clique do usuário em uma das três opções disponíveis:<br> 
1. vagas, para procura de oportunidades por pessoas migrantes e refugiadas;<br>
2. empresas, para que organizações conheçam outras que já aderiram à plataforma e possam ofertar vagas;<br>
3. OSC-ONG, perfil para que organizações da sociedade civil possam realizar o match entre vagas e candidatos.<br>

O requisito funcional RF-004, sobre os filtros avançados de vagas, será exibido após o cadastro ou login, com a autenticação do usuário, quando a pessoa migrante ou refugiada clicar no botão "candidato". Os requisitos RF-006 e RF-007, sobre as opções de favoritar vagas e ver sugestões personalizadas, a partir de vagas aplicadas, também estarão na página do "candidato".

Os requisitos funcionais RF-005 e RF-012, para busca e sistema de match de vagas e área para OSC-ONGs, será exibido após o clique do usuário no botão "OSC-ONG", onde as organizações poderão ver perfis de candidatos e vagas disponíveis para publicação.

Os requisitos funcionais RF-009, RF-010 e RF-011, sobre o guia de documentações, recursos educacionais e checklist de documentação foram incorporados na aba "Recursos".

O requisito funcional RF-008, sistema de feedback, estará presentes nas páginas de autenticação e login, caso o usuário não preencha todos os campos obrigatórios, bem como na página de "vagas", "empresas" e "OSC-ONG", caso tentem prosseguir com os processos de candidatura ou oferta sem as informações obrigatórias.

## Userflow

Para o desenvolvimento do UserFlow, a plataforma Miro foi utilizada, por permitir a criação de formas que evidenciassem os caminhos pelos quais os usuários acessariam a plataforma. O fluxo se iniciou pela página inicial, com exibição no menu de navegação superior, com os  botões "home", "vagas", "empresas", "OSC-ONG", "recursos" e "sobre". Caso o usuário clique em uma das primeiras opções de "vagas", "empresas", "OSC-ONG", será redirecionado para a página de Cadastro ou Login, para realizar novo registro ou acesso de usuário já registrado. A depender do perfil selecionado, o candidato, empresa ou OSC, terá após a página de login, uma página específica com os conteúdos relacionados ao seu registro.

Os candidatos poderão em sua respectiva aba, registrar ou atualizar seu currículo, procurar vagas dentre as disponibilizadas pelas empresas e publicadas pelas OSC's, bem como enviar e acompanhar sua candidatura.

As empresas poderão visualizar em sua aba, outras empresas que já participam da plataforma, bem como disponibilizar vagas para divulgação, além de receber e revisar candidaturas.

As OSC's poderão em sua aba visualizar e publicar programas de apoio, visualizar vagas publicadas pelas empresas e publicá-las para que os candidatos possam se aplicar. A conciliação entre a empresa e o candidato será intermediado pelas OSC's para garantir a não publicação de vagas que não cumpram requisitos mínimos, como empresas com registro (CNPJ), modo de contratação por meio do contrtato indicado na Consolidação das Leis Trabalhistas, coleta da declaração de não submissão ao trabalho degradante ou análogo ao escravo.

Ao final dos caminhos possíveis a serem percorridos pelos usuários, em caso de envio da candidatura ou da conciliação de vagas entre pessoas e empresas, será exibida a mensagem "Processo concluído!".

![Exemplo de UserFlow](img/userflow.jpg)

## Wireframes

A tela inicial apresenta um menu superior com as principais seções da plataforma, logo (TSF), "home", "vagas", "empresas", "OSC-ONG", "recursos" e "sobre". O corpo da página será composto pelos botões de cadastro ou login, com apresentação à sua lateral de imagens, links, em formato carrossel. A apresentação da plataforma estará abaixo, com a indicação da missão e do objetivo do projeto Trabalho Sem Fronteiras.

Em seguida, será exibido a seção de Oportunidades, em que os usuários poderão ver vagas ofertadas, com caixa para imagens, título e informações da vaga.

Após a seção Oportunidades, será exibida Empresas Parceiras, com indicação de empresas que já participam da plataforma.

Em seguida, os Recursos Adicionais serão exibidos, para que o candidato veja exemplos de recursos que poderá acessar em aba específica.

Por fim, será exibido o rodapé, com a logo, menu centralizado das opções do menu de navegação do cabeçalho, além de informações de contato com a plataforma, à lateral direita.

### Exemplo

A tela inicial apresenta um menu lateral com as principais seções do portal, enquanto a navigation bar, ao topo, apresenta informações de envio de imagens ou navegação pela galeria de fotos. A área central apresenta a galeria de fotos na forma de uma grade. Nesta tela, são apresentados os seguintes requisitos

![Exemplo de Wireframe](img/wireframe-example.png)


 
> **Links Úteis**:
> - [Protótipos vs Wireframes](https://www.nngroup.com/videos/prototypes-vs-wireframes-ux-projects/)
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [Axure](https://www.axure.com/edu) (Licença Educacional)
> - [InvisionApp](https://www.invisionapp.com/) (Licença Educacional)
