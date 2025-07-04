# Especificações do Projeto

O projeto Trabalho Sem Fronteira possui como objetivo geral desenvolver uma plataforma em que pessoas migrantes e refugiadas poderão se cadastrar para a busca por empregos e empresas poderão ofertar vagas, cujos processos seletivos poderão ser acompanhados por ONG's ou OSC's, por meio de um software. 

A metodologia utilizada para a redação das especificações do projeto foi descritiva, a partir da identificação de 12 personas, suas histórias de usuário e da enumeração dos requisitos funcionais e não funcionais. 

Para identificação das personas, foi realizada uma pesquisa com uma pessoa migrante, responsável em uma OSC por intermediar processos seletivos e acompanhar processos de cadastro, preparo do currículo e acompanhamento de vagas para garantir maior precisão às personas elencadas. 

## Personas

1. Maria tem 33 anos, não possui ensino superior e está em situação de rua. Está no Brasil há 7 anos. Tem o desejo de retornar ao mercado de trabalho formal. 
Gosta de ler, dançar, é solteiro. Está em busca de uma vaga para trabalhar de segunda à sexta-feira e sábado, sem prejudicar seu desejo de estudar.

2. Júlia tem 37 anos, não possui ensino superior e tem experiência com serviços gerais. Está no Brasil há 12 anos. Deseja trabalhar como cozinheira. Gosta de passar um tempo com os filhos, ir à Igreja. Ela gostaria de trabalhar em localidades próximas de sua residência. Atualmente labora em condições degradentes, mas precisa reunir recursos para trazer sua filha do seu país.  

3. Paulo recém completou 18 anos e deseja uma vaga como menor aprendiz. Fala bem português e está no Brasil há 03 anos. Vive com seus pais e seus irmãos. Mora em uma cidade da região metropolitana de Belo Horizonte. 

4. Ricardo migrou parao Brasil há 03 meses. Já está documentado e em busca de seu primeiro emprego, nunca trabalhou com nenhum contrato formalizado. Gostaria de trabalhar como pintor. 

5. Helena tem 16 anos, chegou no Brasil há 01 ano. Atualmente trabalha em tempo integral, com jornada de 44h semanais, o que a impede de estudar. Ela gostaria de trabalhar como menor aprendiz e deseja realizar um curso técnico.
   
6. Pierre tem 19 anos, chegou ao Brasil há 01 ano pela sua aprovação no Programa de Educação Conveniada - PECG, é de um país da comunidade de línguas portuguesas. Estuda matemática computacional e nunca trabalhou de carteira assinada. Sua família não consegue mantê-lo mais no Brasil, razão pela qual está em busca de emprego. 

7. Construtora Civil A, sediada em Minas Gerais, mas com filiais em todo o Brasil. Possui muitas vagas disponíveis e pelo seu programa de diversidade, gostaria de empregar pessoas migrantes e refugiadas, mas não sbae como pode contatá-las. Processo seletivo será realizado pela área de Recursos Humanos da empresa. 

8. Rede de Supermercado X, com atuação na região metropolitana, deseja empregar um número elevado de pessoas e gostaria de contratar pessoas migrantes e refugiadas para vários tipos de trabalho. Processo seletivo será realizado pela área de Recursos Humanos da empresa.

9. Adriana possui uma empresa de pequeno porte denominada Mais Salgados e deseja contratar uma cozinheira com experiência. Não possui departamento de Recursos Humanos e ela mesmo fará o processo seletivo. 
    
10. Empresa 123, do ramo de frigoríficos, deseja contratar um número elevado de pessoas para uma de suas novas fábricas. Processo seletivo será realizado pela área de Recursos Humanos e pela direção da empresa. 

11. Uma organização sem fins lucrativos que recebe pessoas migrantes e refugiadas para orientações sobre inserção no mercado de trabalho, auxilia nos processos seletivos. Apoia para realização do cadastro e preenchimento das informações, como o campo de experiências. 

12. Organização da sociedade civil de defesa de direitos que orienta pessoas migrantes e refugiadas para inserção no mercado de trabalho formal. Fornece apoio para dúvidas sobre o mercado de trabalho, questões contratuais e trabalhistas, além de intermediar processos seletivos por setor específico.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO `MIGRANTE`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Preciso cadastrar e atualizar meu currículo sem dificuldades.|Ser selecionado para oportunidades de emprego.|
|Administrador (perfil).| Alterar preferências da conta.| Garantir usabilidade da plataforma às minhas necessidades.|

|EU COMO `REFUGIADO`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Preciso cadastrar e atualizar meu currículo sem dificuldades.|Ser selecionado para oportunidades de emprego.| Ser selecionado para oportunidades de emprego.|
|Administrador (perfil).| Alterar preferências da conta.| Garantir usabilidade da plataforma às minhas necessidades.|

|EU COMO... `EMPRESA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Criar uma conta para cadastrar e divulgar oportunidades.| Atrair candidatos para inserção laboral.|
|Administrador (de publicações, gestão de vagas, filtros).| Filtrar candidatos por habilidades, experiências e formação.| Encontrar profissionais com o perfil desejado para realização das tarefas esperadas.|

|EU COMO... `ONG`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Perfil para receber indicações de oportunidades e requisitos das vagas.| Para acompanhar processos seletivos e registrar candidaturas.|
|Administrador (vagas a serem exibidas).| Alterar permissões, preferências e gerir publicações.| Permitir que possam acompanhar processos seletivos.|

|EU COMO... `OSC`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Perfil para receber indicações de oportunidades e requisitos das vagas.| Para acompanhar processos seletivos e registrar candidaturas.| Para acompanhar processos seletivos e registrar candidaturas.|
|Administrador (vagas a serem exibidas.)| Alterar permissões, preferências e gerir publicações. | Permitir que possam acompanhar processos seletivos.|

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| Cadastro e Edição de Perfil - Usuários podem criar perfis com informações específicas (migrantes, refugiados, recrutadores, ONGs) e atualizar dados como habilidades, experiências e contatos. |ALTA|
|RF-002| Publicação e Banco de Vagas - Recrutadores podem cadastrar vagas com descrição detalhada, e o sistema exibe e permite a busca dessas oportunidades com base no perfil do candidato. |ALTA|
|RF-003| Autenticação e login - Usuários devem conseguir acessar a plataforma por e-mail e senha. |ALTA|
|RF-004| Filtros Avançados de Vagas - Além de filtros básicos como localização e salário, permitir que os usuários filtrem oportunidades por requisitos como "sem necessidade de experiência", "flexível", "trabalho remoto" etc. |MÉDIA|
|RF-005| Busca de Vagas - Migrantes podem pesquisar oportunidades de acordo com suas preferências. |MÉDIA|
|RF-006| Favoritos - Usuários podem salvar vagas de interesse para acessar posteriormente. |MÉDIA|
|RF-007| Vagas Cadastradas Recentemente - O sistema exibirá uma seção dedicada às vagas de emprego mais recentes publicadas na plataforma.|BAIXA|
|RF-008| Sistema de Feedback - Usuários visualizarão uma mensagem quanto ao conteúdo inserido nos campos. |MÉDIA|
|RF-009| Guia de Documentação - Seção com informações sobre regularização de documentos essenciais para contratação. |BAIXA|
|RF-010| Recursos Educacionais - Área com conteúdos sobre cultura e legislação trabalhista brasileira. |BAIXA|
|RF-011| Caixa de sugestão de recursos adicionais - Usuários poderão sugerir temas ou assuntos para divulgação na plataforma. |BAIXA|
|RF-012| Área para ONGs - Módulo onde organizações podem listar cursos, suporte jurídico e assistência para os migrantes. |MÉDIA|

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Responsividade - Plataforma adaptável para dispositivos móveis e desktops, com interface responsiva e compatível com leitores de tela. |ALTA| 
|RNF-002| Usabilidade - Interface intuitiva e fácil de navegar. |ALTA| 
|RNF-003| Tempo de Resposta - Sistema deve carregar páginas e buscar dados rapidamente. |ALTA| 
|RNF-004| Privacidade e Segurança - O acesso aos dados armazenados no Local Storage deve ser protegido por senha local, garantindo privacidade, já que refugiados e imigrantes podem estar em situações vulneráveis. |ALTA| 
|RNF-005| Design Acessível - Seguir padrões de acessibilidade para garantir uma interface inclusiva para usuários com deficiência. |MÉDIA| 
|RNF-006| Prevenção de Perda de Dados - O sistema deve sempre solicitar confirmação antes de excluir informações, evitando exclusões acidentais. |MÉDIA| 
|RNF-007| Compatibilidade com Navegadores - O sistema deve funcionar corretamente nos principais navegadores. |ALTA| 
|RNF-008| Uso Inteligente do Espaço - O sistema deve armazenar apenas as informações essenciais no Local Storage para evitar atingir o limite de 5MB. |MÉDIA| 
|RNF-009| Armazenamento Local Fácil - Os dados do usuário são salvos automaticamente no navegador, sem que ele precise fazer algo extra. |ALTA| 
|RNF-010| Exibição de recursos - Recursos serão exibidos em formato de carrossel. |MÉDIA| 
|RNF-011| Legalidade - O sistema deve garantir a conformidade com as leis de proteção de dados. |MÉDIA| 
|RNF-012| Enviar sugestão - O usuário pode enviar sugestões a serem abordadas na pagina de recursos. |MÉDIA| 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Proibição de utilização de frameworks.|
|02| Proibição de contratação de prestadores de serviços.|
|03| Limitações tecnológicas.|
|04| Limitação de prazo.|
|05| Limitação da modalidade de armazenamento escolhida (local storage).|
