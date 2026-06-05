Markdown
# BOLAS-AMASSADAS

## Sobre o Projeto

Este projeto consiste em uma simulação interativa baseada em física 2D chamada **Bola ao Lixeiro**. A aplicação foi desenvolvida utilizando HTML, CSS e a biblioteca **p5.js** em conjunto com a engine de física **Matter.js**, criando uma mecânica realista onde o usuário precisa arremessar uma bola de papel amassada diretamente para dentro de uma lixeira.

Ao pressionar a barra de espaço no teclado, uma força e um impulso vetorial são aplicados sobre o corpo rígido da bola de papel, fazendo com que ela descreva uma trajetória parabólica influenciada pela gravidade até atingir o solo ou o alvo.

---

## Funcionalidades

* Mecânica de arremesso e aplicação de forças ativada através do teclado (Tecla Space).
* Simulação física realista de gravidade, massa, atrito e elasticidade utilizando `Matter.js`.
* Renderização de corpos rígidos dinâmicos (bola de papel) e corpos estáticos (chão e paredes da lixeira).
* Interface visual customizada com sprites para a lixeira (`dustbingreen.png`, `trashcan.png`) e para o projétil (`paper.png`).
* Atualização contínua do motor de física em perfeita sincronia com o ciclo de renderização gráfica.

---

## Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **p5.js** (e extensão: p5.play.js)
* **Matter.js** (Engine de física 2D)

---

## Objetivo

O principal objetivo deste projeto é aplicar os conceitos de balística e lançamento de projéteis em ambientes virtuais bidimensionais. O foco está na utilização da biblioteca Matter.js para aplicar forças estáticas e dinâmicas (`Matter.Body.applyForce`), além de estruturar o código utilizando Programação Orientada a Objetos (POO) para modular os elementos do cenário.

---

## Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados conceitos como:

* Programação Orientada a Objetos para a criação de classes reutilizáveis como `paper.js`, `dustbin.js` e `ground.js`.
* Manipulação de vetores de força e direção para gerar o efeito de arremesso parabólico.
* Configuração de propriedades físicas de colisão (restituição e fricção) para simular o comportamento de amassado do papel ao bater nas superfícies.
* Uso de captores de eventos de teclado nativos para disparar ações físicas instantâneas.
* Vinculação de imagens customizadas (sprites) a posições e ângulos calculados dinamicamente por uma engine de física.

---

## Como Executar

1. Clone este repositório:
```bash
git clone [https://github.com/seu-usuario/BOLAS-AMASSADAS.git](https://github.com/seu-usuario/BOLAS-AMASSADAS.git)
```

2. Acesse a pasta do projeto:

```bash
cd BOLAS-AMASSADAS]
```

3. Abra o arquivo index.html em seu navegador de preferência e utilize a barra de espaço para arremessar a bola de papel.

--- 

## Estrutura do Projeto
Nota: O nome da pasta raiz foi mantido como BOLAS-AMASSADAS... para seguir fielmente a imagem da árvore de diretórios enviada, adicionando o subtítulo "Bola ao Lixeiro" no escopo do projeto. O caminho de imagens utiliza o padrão de barra invertida (assets\img) conforme o seu repositório.

```text
BOLAS-AMASSADAS/
│
├── assets\img/
│   ├── dustbingreen.png
│   ├── paper.png
│   ├── trashcan.png
│   └── trashcangreen.png
│
├── scripts/
│   ├── dustbin.js
│   ├── ground.js
│   ├── matter.js
│   ├── p5.js
│   ├── p5.play.js
│   ├── paper.js
│   └── sketch.js
│
├── style/
│   └── style.css
│
├── index.html
└── README.md
```

---

## Licença

Este projeto foi desenvolvido exclusivamente para fins educacionais e de aprendizado.

Desenvolvido como prática de desenvolvimento de simulações e mecânicas de física com corpos rígidos, recriando o jogo Bola ao Lixeiro com p5.js e Matter.js.
