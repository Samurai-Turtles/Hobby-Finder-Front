# Guia de Contribuição para Projeto React

## 1. Estrutura do Projeto

- **Código-fonte:**
  - Local: `src/`
  - Organização da estrutura de pastas seguindo as diretrizes:
    - **assets:** Armazena imagens e fontes.
    - **components:** Local onde serão colocados os componentes que serão reutilizados no sistema como `Inputs`, `Buttons`, `Cards`, entre outros (Para cada componente cria-se um `.tsx` onde o nome do arquivo é o nome do componente).
    - **pages:** Representa todas as telas do sistema. Para cada tela deve haver um arquivo `.tsx` contendo o código dessa, onde o nome do arquivo é o nome da tela.
    - **hooks:** Contém arquivos `.ts` onde cada um desses contém um conjunto de funções em comum dependentes do React (elas usam `useState`, `useEffect`, etc) para lógica reutilizável (Por exemplo, `useAuth.ts` contém funções de autenticação de usuários como login, logout, entre outras).
    - **utils:** Contém arquivos `.ts` onde cada um desses contém um conjunto de funções auxiliares genéricas que não dependem do React (geralmente usadam em manipulação de dados, validações, entre outros).
  - As estruturas dos subdiretórios devem estar organizadas de forma similar ao seguinte exemplo:
  ```
    ./src
      ├── assets/
      │   ... ... ...
      ├── components/
      |   ├── ui/                 # Conjunto de componentes básicos que o Chakra UI fornece
      |   ├── inputs/
      |   |   └── InputSubmit.tsx
      |   ├── cards/
      │   ... ... ...
      ├── pages/
      |   └── Login.tsx
      │   ... ... ...
      ├── hooks/
      |   └── useAuth.ts          # Gerenciamento de autenticação
      │   └── useFetch.ts         # Requisições HTTP genéricas
      │   ... ... ...
      ├── utils/
      |   └── formatarDados.ts
      |   └── validacoes.ts
      └── ... ... ...
  ```

## 2. Convenções de Código

### Nomeação

- **Pastas de Telas e Componentes:** Utilizar _PascalCase_
  - Usar essa convenção no nome de cada Tela/Componente em seu arquivo `.tsx`.
  - Ex.: `Login.tsx`.
- **Demais Pastas e Arquivos .ts:** Utilizar _camelCase_
  - Usar tanto nas demais pastas como nos arquivos `.ts` como observados acima em `hooks` e `utils`.
  - Ex.: `useAuth()`, `useFetch()`.

## 3. Fluxo de Trabalho com Git

### Branches

- **main:** Contém o código estável, pronto para produção.
- **dev:** Branch para integração e testes de novas funcionalidades.
- **feature/nome-da-feature:** Para desenvolvimento de novas funcionalidades.
- **refactor/nome-do-refactor:** Para refatoração de código, deixe explícita qual a região do código a ser refatorada.
- **fix/nome-do-fix:** Para correções de bugs ou de problemas graves, deixe explícito qual o problema a ser resolvido.
- Nenhuma branch deve ser criada a partir da main, exceto a branch `dev`.

### Pull Requests e Code Review

- Sempre abrir um Pull Request (PR) direcionado à branch `dev`.
- PRs devem conter uma descrição clara, referenciando as issues correspondentes.
- Exigir, pelo menos, dois revisores para aprovar o PR antes do merge. Priorize aqueles que estão designados como 'watchers' da sua task, no Taiga. Caso não haja, solicite revisão de um dos gerentes.

## 5. Commits e Documentação

### Mensagens de Commit

- Utilize mensagens de commit claras e seguindo o padrão:
  - `feat`: adiciona uma nova funcionalidade ao sistema;
  - `fix`: correção de algum bug;
  - `refactor`: refatoração de um método completo ou trecho de código;
  - `test`: adição de um novo teste;
  - `docs`: adição/edição de uma documentação;
  - `style`: alteração do estilo de código, sem alteração funcional.
- Mensagens devem explicar o "porquê" da alteração.
- Ex.: `style: Estilizando o submit button`.
