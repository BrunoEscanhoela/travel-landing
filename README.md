# ⛩️ TOKYO — Travel Landing Page

Landing page de viagens com tema escuro, apresentando Tokyo como destino: tours populares, seção de vídeos e navegação totalmente responsiva.

**🔗 Site no ar:** [brunoescanhoela.github.io/travel-landing](https://brunoescanhoela.github.io/travel-landing/)

## ✨ Funcionalidades

- **Header fixo e transparente** que ganha fundo sólido ao rolar a página
- **Hero em tela cheia** com imagem de fundo, overlay em gradiente e título display
- **Grid de tours** com efeito de hover (elevação do card + zoom na imagem)
- **Seção de vídeos** com gradiente roxo-azul sobre foto de céu estrelado
- **Menu hambúrguer animado** no mobile, com painel lateral deslizante
- **Layout responsivo** para desktop, tablet e mobile (breakpoints 900px, 768px e 520px)

## 🛠️ Tecnologias

Sem frameworks, sem build tools, sem dependências:

- **HTML5** semântico, com atributos de acessibilidade (aria-label, aria-expanded, alt)
- **CSS3** com variáveis (custom properties), Flexbox, Grid e media queries
- **JavaScript puro (vanilla)** para o menu mobile e o efeito de scroll do header

## 📁 Estrutura

```
travel-landing/
├── index.html        página única com todas as seções
├── css/
│   └── style.css     estilos, variáveis do tema e responsividade
├── js/
│   └── script.js     menu hambúrguer e header dinâmico
└── assets/           imagens do site (JPG otimizado)
```

## 🚀 Como rodar localmente

Não precisa instalar nada. Clone e abra o `index.html` no navegador:

```bash
git clone https://github.com/BrunoEscanhoela/travel-landing.git
cd travel-landing
open index.html
```

Ou, se preferir um servidor local:

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## 🎨 Tema

| Cor | Uso |
|---|---|
| `#141d2b` | Fundo principal (azul-marinho) |
| `#1b2a3a` | Seções alternadas e cards |
| `#e8622c` | Destaque (laranja): links, botões e detalhes |

Tipografia: [Oswald](https://fonts.google.com/specimen/Oswald) para títulos e [Montserrat](https://fonts.google.com/specimen/Montserrat) para o corpo, via Google Fonts.

---

Feito por [Bruno Escanhoela](https://github.com/BrunoEscanhoela) com HTML, CSS e JavaScript puros.
