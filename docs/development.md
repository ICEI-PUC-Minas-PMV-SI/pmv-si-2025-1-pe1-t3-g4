# Programação de Funcionalidades

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Artefato Criado | 
|------|-----------------------------------------|----| 
|RF-001| Cadastro e Edição de Perfil - Usuários podem criar perfis com informações específicas (migrantes, refugiados, recrutadores, ONGs) e atualizar dados como habilidades, experiências e contatos. |tela_cadastro.html, script.js, dados.json|
|RF-002| Publicação e Banco de Vagas - Recrutadores podem cadastrar vagas com descrição detalhada, e o sistema exibe e permite a busca dessas oportunidades com base no perfil do candidato. |tela_vagas.html, script.js, dados.json|
|RF-003| Autenticação e login - Usuários devem conseguir acessar a plataforma por e-mail e senha. |tela_vagas.html, script.js, dados.json|
|RF-004| Filtros Avançados de Vagas - Além de filtros básicos como localização e salário, permitir que os usuários filtrem oportunidades por requisitos como "sem necessidade de experiência", "flexível", "trabalho remoto" etc. |tela_vagas.html, script.js|
|RF-005| Busca de Vagas - Migrantes podem pesquisar oportunidades de acordo com suas preferências. |tela_vagas.html, script.js|
|RF-006| Favoritos - Usuários podem salvar vagas de interesse para acessar posteriormente. |tela_usuario.html, tela_vagas.html, script.js|
|RF-007| Vagas Cadastradas Recentemente - O sistema exibirá uma seção dedicada às vagas de emprego mais recentes publicadas na plataforma.|pagina_inicial.html, script.js|
|RF-008| Sistema de Feedback - Usuários visualizarão uma mensagem quanto ao conteúdo inserido nos campos. |recursos.html, script.js|
|RF-009| Guia de Documentação - Seção com informações sobre regularização de documentos essenciais para contratação. |recursos.html|
|RF-010| Recursos Educacionais - Área com conteúdos sobre cultura e legislação trabalhista brasileira. |recursos.html|
|RF-011| Caixa de sugestão de recursos adicionais - Usuários poderão sugerir temas ou assuntos para divulgação na plataforma. |recursos.html, script.js|
|RF-012| Área para ONGs - Módulo onde organizações podem listar cursos, suporte jurídico e assistência para os migrantes. |tela_OSC.html, script.js|

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


## Descrição das estruturas:

### Usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único do usuário            | 1                                              |
| Nome           | Texto             | Nome completo do usuário                  | Maria dos Santos                               |
| Email          | Texto             | Email do usuário                          | maria@email.com                                |
| Senha          | Texto             | Senha de acesso (armazenamento seguro)    | ****                                           |
| Tipo           | Texto             | Tipo de usuário (usuário, empresa, ong)   | migrante                                       |
| Idade          | Numero (Inteiro)  | Idade do usuário                          | 33                                             |
| Escolaridade   | Texto             | Nível de escolaridade                     | Ensino fundamental incompleto                  |
| Situação       | Texto             | Situação atual                            | Em situação de rua                             |
| TempoNoBrasil  | Numero (Inteiro)  | Tempo de residência no Brasil (anos)      | 7                                              |
| Objetivo       | Texto             | Objetivo profissional                     | Retonar ao mercado de trabalho                 |
| Interesse      | Lista de Texto    | Interesses pessoais                       | ["Ler", "Dançar"]                              |
| Status         | Texto             | Estado civil                              | Solteira                                       |
| Experiencias   | Lista de Texto    | Experiências profissionais anteriores     | ["Auxiliar de cozinha"]                        |
| Habilidades    | Lista de Texto    | Habilidades e competências                | ["Cozinhar", "Organizar"]                      |
| Contatos       | Lista de Texto    | Contatos adicionais                       | ["(31) 99999-9999"]                            |

### Vaga
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da vaga               | 1                                              |
| Titulo         | Texto             | Título da vaga	                         | Cozinheira                                     |
| EmpresaId      | Numero (Inteiro)  | ID da empresa responsável                 | 2                                              |
| Localização    | Texto             | Localização da vaga	                     | Belo Horizonte                                 |       
| Requisitos     | Lista de Texto    | Requisitos para a vaga	                 | ["Experiência em cozinha industrial"]          |
| Salario Numero | Numero (Inteiro)  | Salário oferecido	                     | 2500                                           |
| Descrição      | Texto             | Descrição detalhada da vaga               | Preparar refeições em restaurante              |
| DataPublicada  | Data              | Data de publicação da vaga                | 2025-06-22                                     |
| TipoContrato   | Texto             | Tipo de contrato (CLT, estágio, etc.)     | CLT                                            |
| Beneficios     | Lista de Texto    | Benefícios oferecidos                     | ["Vale transporte", "Alimentação"]             |

### Empresa
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da empresa            | 2                                              |
| Nome           | Texto             | Nome da empresa		                     | Rede de Supermercado X                         |
| Localização    | Texto             | Localização da empresa	                 | Região Metropolitana                           |       
| Vagas          | Numero (Inteiro)  | Quantidade de vagas abertas		         | 50                                             |
| Objetivo       | Texto             | Objetivo da empresa na plataforma	     | Recursos Humanos                               |
| ProcSeletivo   | Texto             | Responsável pelo processo seletivo	     | Preparar refeições em restaurante              |
| Contatos       | Lista de Texto    | Contatos da empresa	                     | ["contato@supermercadox.com"]                  |

### ONG
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da ONG                | 1                                              |
| Nome           | Texto             | Nome da organização		                 | ONG de Apoio a Migrantes                       |
| Serviços       | Lista de Texto    | Serviços oferecidos	                     | ["Documentação", "Cadastro de currículos"]     |       
| Objetivo       | Texto             | QObjetivo da organização			         | Apoiar migrantes e refugiados                  |
| Contatos       | Lista de Texto    | Contatos da organização		             | ["ongapoio@email.com"]                         |


