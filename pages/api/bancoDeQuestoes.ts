import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual é a linguagem de programação mais utilizada para desenvolvimento web?', [
        RespostaModel.errada('Java'),
        RespostaModel.errada('C++'),
        RespostaModel.errada('Python'),
        RespostaModel.certa('JavaScript')
    ]),

    new QuestaoModel(202, 'Qual dessas estruturas de dados é geralmente usada para armazenar elementos em uma ordem específica?', [
        RespostaModel.errada('Pilha'),
        RespostaModel.errada('Árvore'),
        RespostaModel.errada('Hash Table'),
        RespostaModel.certa('Lista')
    ]),

    new QuestaoModel(203, 'Qual dos seguintes é um exemplo de linguagem de programação orientada a objetos?', [
        RespostaModel.errada('C'),
        RespostaModel.errada('SQL'),
        RespostaModel.errada('Assembly'),
        RespostaModel.certa('Python')
    ]),

    new QuestaoModel(204, 'Qual é o paradigma de programação que se concentra em dividir um problema em partes menores e resolvê-lo gradualmente?', [
        RespostaModel.errada('Funcional'),
        RespostaModel.errada('Orientada a Objetos'),
        RespostaModel.errada('Procedural'),
        RespostaModel.certa('Modular')
    ]),

    new QuestaoModel(205, 'O que é uma "API" em desenvolvimento de software?', [
        RespostaModel.errada('Algoritmo de Programação Inteligente'),
        RespostaModel.errada('Arquitetura de Processamento de Imagens'),
        RespostaModel.errada('Abordagem de Programação Iterativa'),
        RespostaModel.certa('Interface de Programação de Aplicativos')
    ]), 

    new QuestaoModel(206, 'Qual dessas linguagens de programação é mais comumente usada para desenvolvimento de aplicativos móveis iOS?', [
        RespostaModel.errada('Java'),
        RespostaModel.errada('Kotlin'),
        RespostaModel.errada('Objective-C'),
        RespostaModel.certa('Swift')
    ]),

    new QuestaoModel(207, 'Qual é a função do método render() em um comnponente React?', [
        RespostaModel.errada('Para atualizar o estado do componente'),
        RespostaModel.errada('Para definir propriedades no componente'),
        RespostaModel.errada('Para adicionar estilos CSS ao componente'),
        RespostaModel.certa('Para renderizar o componente na tela')
    ]),

    new QuestaoModel(208, 'O que é um estado (state) em React?', [
        RespostaModel.errada('Um conjunto de propriedades imutáveis de um componente'),
        RespostaModel.errada('Uma função que define o comportamento de um componente'),
        RespostaModel.errada('Uma forma de definir as rotas de navegação em um aplicativo React'),
        RespostaModel.certa('Um objeto que mantém dados mutáveis que afetam a renderização do componente')
    ]),
    
    new QuestaoModel(209, 'Qual é a maneira correta de passar dados de um componente pai para um componente filho em React?', [
        RespostaModel.errada('Usando o método setState'),
        RespostaModel.errada('Atribuindo diretamente os valores das variáveis do pai para as variáveis do filho'),
        RespostaModel.errada('Usando a função getDerivedStateFromProps('),
        RespostaModel.certa('Usando props')
    ]),

    new QuestaoModel(211, 'Qual comando é usado para recuperar dados de um banco de dados SQL', [
        RespostaModel.errada('UPDATE'),
        RespostaModel.errada('DELETE'),
        RespostaModel.errada('INSERT'),
        RespostaModel.certa('SELECT')
    ]),

    new QuestaoModel(212, 'Qual é a finalidade principal do TypeScript?', [
        RespostaModel.errada('Gerar código HTML automaticamente'),
        RespostaModel.errada('Facilitar o desenvolvimento de aplicações web'),
        RespostaModel.errada('Substituir completamente o JavaScript'),
        RespostaModel.certa('Compilar para JavaScript, adicionando tipagem estática opcional')
    ]),
    new QuestaoModel(213, 'Qual é a extensão de arquivo típica para arquivos TypeScript?', [
        RespostaModel.errada('.js'),
        RespostaModel.errada('.css'),
        RespostaModel.errada('.html'),
        RespostaModel.certa('.ts')
    ]),
    new QuestaoModel(214, 'O que são os tipos em TypeScript?', [
        RespostaModel.errada('Funções que retornam valores booleanos'),
        RespostaModel.errada('Palavras-chave reservadas usadas para declaração de variáveis'),
        RespostaModel.errada('Estruturas de dados que representam informações'),
        RespostaModel.certa('Descrições dos dados que podem ser associados a variáveis, parâmetros e retornos de função')
    ]),
    new QuestaoModel(215, 'O que é um benefício da tipagem estática em TypeScript?', [
        RespostaModel.errada('Redução do desempenho da aplicação'),
        RespostaModel.errada('Maior flexibilidade na escrita do código'),
        RespostaModel.errada('Aumento do tamanho do arquivo final gerado'),
        RespostaModel.certa('Identificação de erros de tipo em tempo de compilação')
    ]),
    new QuestaoModel(216, 'Qual é a principal ferramenta de linha de comando para compilar arquivos TypeScript?', [
        RespostaModel.errada('npm'),
        RespostaModel.errada('node'),
        RespostaModel.errada('webpack'),
        RespostaModel.certa('tsc')
    ]),
   
]

export default questoes 