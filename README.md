# PAC3-js

## Estructura de carpetes del projecte

```text
PAC3-js/
├── README.md
├── LICENSE
├── .gitignore
├── PEC3_Ej_PrAc/
│   └── ecommerce/
│       ├── README.md
│       ├── CHANGELOG.md
│       ├── angular.json
│       ├── package.json
│       ├── package-lock.json
│       ├── tsconfig.json
│       ├── tsconfig.app.json
│       ├── tsconfig.spec.json
│       ├── .prettierrc
│       ├── .editorconfig
│       ├── .gitignore
│       ├── .vscode/
│       ├── src/
│       │   ├── app/
│       │   │   ├── app.ts
│       │   │   ├── app.html
│       │   │   ├── article.model.ts
│       │   │   ├── article-item.component.ts
│       │   │   ├── article-list/
│       │   │   │   └── article-list.ts
│       │   │   ├── article-new-template/
│       │   │   │   └── article-new-template.ts
│       │   │   ├── article-new-reactive/
│       │   │   │   └── article-new-reactive.ts
│       │   │   └── navbar/
│       │   │       └── navbar.ts
│       │   ├── assets/
│       │   │   └── products/
│       │   │       ├── product-1.jpg
│       │   │       ├── product-2.jpg
│       │   │       └── product-3.jpg
│       │   └── styles.css
│       └── ...altres fitxers de configuració i recursos
└── ...altres fitxers o carpetes del repositori
```

## Crear una aplicació Angular d'e-commerce
- Generar el projecte base amb Angular CLI i configurar la carpeta `ecommerce`.
- Configurar els actius locals a `angular.json` per servir imatges des de `src/assets/products`.
- Crear l'estructura inicial de components i mòduls necessaris per al projecte.

## Definir el model d'article i crear el component d'item
- Afegir `src/app/article.model.ts` per definir la interfície `Article`.
- Incloure camps com `id`, `name`, `imageUrl`, `price`, `isOnSale` i `quantityInCart`.
- Crear `src/app/article-item.component.ts` per mostrar un sol article amb les seves dades.
- Implementar una vista que mostri el nom, la imatge, el preu i la icona de rebaixa quan correspongui.

## Mostrar una llista d'articles i gestionar esdeveniments
- Crear el component `src/app/article-list/article-list.ts`.
- Mostrar la llista d'articles amb `*ngFor` i reutilitzar `ArticleItemComponent`.
- Gestionar l'estat local amb Angular signals (`signal()`) per actualitzar la quantitat de cada article.
- Capturar l'esdeveniment de canvi de quantitat i actualitzar `quantityInCart` de l'article corresponent.

## Afegir una barra de navegació per canviar vistes
- Crear el component `src/app/navbar/navbar.ts`.
- Implementar botons per canviar entre les diferents vistes del projecte sense usar rutes.
- Connectar el `Navbar` amb el component `App` perquè el valor `selectedView` determine quina secció es mostra.

## Formulari amb plantilla per crear un article
- Crear `src/app/article-new-template/article-new-template.ts`.
- Implementar un formulari amb `FormGroup`, `FormControl` i validacions bàsiques (`required`, `pattern`).
- Mostrar errors de validació sota cada control en vermell quan el camp és invàlid i s'ha tocat o s'ha enviat el formulari.
- Reiniciar el formulari després d'enviar correctament les dades.

## Formulari reactiu amb validacions avançades
- Crear `src/app/article-new-reactive/article-new-reactive.ts`.
- Utilitzar `FormBuilder` per construir el formulari de manera reactiva.
- Afegir validacions sobre el preu, la URL de la imatge i un validador personalitzat per noms prohibits.
- Mostrar missatges d'error a sota dels controls amb estil vermell i validar dinàmicament.
- Registrar al `console` les dades del nou article quan el formulari és vàlid.

## Ajustar estils i documentació
- Aplicar estils CSS nets als formularis, botons i missatges d'error.
- Garantir que els missatges de validació es mostren sota els controls i que l'interfície és clara.
- Afegir documentació en `README.md` i un `CHANGELOG.md` amb els passos realitzats i els canvis per cada "commit".

## Notes finals
- El projecte està desenvolupat a `PAC3-js/PEC3_Ej_PrAc/ecommerce`.
- El servidor de desenvolupament s'inicia amb `ng serve`.
- La compilació en mode desenvolupament es fa amb `ng build --configuration development`.
