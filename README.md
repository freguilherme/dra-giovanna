# Site — Dra. Giovanna Luvizotto | Fisioterapia Pediátrica

Site institucional de apresentação e captação de pacientes para a Dra. Giovanna Luvizotto, fisioterapeuta pediátrica (CREFITO 3/396938-F), atendendo na Clínica GESTUS em Cerquilho — SP.

## Estrutura de arquivos

```
site-giovanna/
├── index.html          → conteúdo e estrutura de todas as seções
├── style.css            → identidade visual, layout e responsividade
├── script.js             → menu mobile, animações de scroll e trilha decorativa
└── assets/
    ├── giovanna-foto.png            → foto da Dra. Giovanna (seção Sobre)
    ├── edificio-monte-libano.png    → foto da fachada do prédio (seção Localização)
    ├── logo-mark.png                → marca compacta (cérebro), usada no header e no favicon
    └── logo-illustration.png        → ilustração completa (cérebro + bebês), usada como selo na seção Sobre
```

Os quatro arquivos e a pasta `assets/` precisam ficar sempre juntos, na mesma estrutura — os caminhos no HTML e no CSS são relativos.

## Seções do site

1. **Header** — logo, navegação e CTA fixo de WhatsApp.
2. **Hero** — chamada principal com ilustração animada da trilha de desenvolvimento motor.
3. **Sobre** — foto, formação (Conceito Neuroevolutivo Bobath e ABA) e credencial (CREFITO).
4. **Áreas de atuação** — Neuroreabilitação infantil, Fisioterapia respiratória, Atraso do desenvolvimento motor.
5. **Método** — como funciona o processo de atendimento (avaliação → plano → sessões → evolução).
6. **Para quem é** — sinais que indicam a necessidade de avaliação.
7. **Localização** — endereço da Clínica GESTUS com foto do prédio e link para o Google Maps.
8. **Contato** — cartões de WhatsApp, Instagram e localização, além do botão flutuante de WhatsApp.

## Identidade visual

| Token | Cor | Uso |
|---|---|---|
| `--bg` | `#E7E1E1` | fundo principal |
| `--bg-alt` | `#E1D4D4` | fundo das seções alternadas |
| `--rose` | `#D1B3B3` | acentos suaves, divisores |
| `--rose-deep` | `#7F4D4D` | botões, links, ícones, títulos em destaque |
| `--surface` | `#FBF9F8` | cards |
| `--ink` / `--ink-soft` | `#241D1D` / `#5D4F4F` | texto principal e secundário |

Paleta derivada das cores do cartão de visita da Dra. Giovanna. Tipografia: **Fraunces** (títulos), **Inter** (texto) e **Space Mono** (rótulos/CREFITO), carregadas via Google Fonts.

## Como visualizar localmente

Não precisa de servidor nem instalação — é só abrir o `index.html` direto no navegador (duplo clique ou arrastar pro Chrome/Safari/Firefox).

## Como publicar (gratuito)

**Netlify (recomendado, mais simples):**
1. Crie uma conta gratuita em [netlify.com](https://netlify.com).
2. No painel, procure a opção de deploy manual ("Deploy manually" / arrastar e soltar).
3. Arraste a pasta **inteira** `site-giovanna` (com os 3 arquivos + `assets/`).
4. O site fica no ar em segundos, em um endereço tipo `nome.netlify.app` (pode trocar depois nas configurações).

Alternativas gratuitas: Vercel, GitHub Pages, Cloudflare Pages.

## Como editar informações básicas

Direto no `index.html`, com Ctrl+F (ou Cmd+F):
- **Telefone/WhatsApp:** buscar por `5515996486480` (aparece nos links `wa.me`) e pelo texto `(15) 99648-6480`.
- **Instagram:** buscar por `giluvizotto.fisio`.
- **Endereço:** buscar por `Francisco Gaioto`.

Depois de editar, é só arrastar a pasta atualizada de novo no Netlify para publicar as mudanças.

## Observações

- Site 100% estático (HTML/CSS/JS puro), sem dependências externas além das fontes do Google Fonts.
- Totalmente responsivo, com menu hambúrguer no mobile.
- Respeita `prefers-reduced-motion` para quem desativa animações no sistema.
