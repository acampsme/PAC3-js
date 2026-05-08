# Ecommerce

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.10.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.
## Creació de l'aplicació

Aquest projecte es va crear com un exercici d'aplicació Angular amb els següents passos principals:

1. Generar el projecte amb Angular CLI i configurar-lo en l'entorn de desenvolupament.
2. Crear el model `Article` a `src/app/article.model.ts` per definir les propietats dels productes: `id`, `name`, `imageUrl`, `price`, `isOnSale` i `quantityInCart`.
3. Desenvolupar el component `ArticleItemComponent` per mostrar un sol producte, incloent-hi el preu, l'etiqueta de rebaixa i el control de quantitat.
4. Crear el component `ArticleList` que usa `*ngFor` per mostrar una llista d'articles i actualitza la quantitat en el carret via events.
5. Afegir el component `Navbar` per canviar entre vistes amb `selectedView` i `*ngIf`, sense usar rutes Angular.
6. Implementar formularis per afegir nous articles:
   - `ArticleNewTemplate` amb formulari basat en plantilla i validació de camps.
   - `ArticleNewReactive` amb formulari reactiu, `FormBuilder`, validadors personalitzats i control d'estat del formulari.
7. Configurar els actius locals a `angular.json` per servir imatges des de `src/assets/products`.
8. Ajustar l'estil i l'estructura CSS per a una interfície neta i responsive.

### Components clau

- `src/app/article-item.component.ts`: component standalone que rep un article i emet canvis de quantitat.
- `src/app/article-list/article-list.ts`: component standalone que manté la llista d'articles amb `signal()` i actualitza l'estat.
- `src/app/navbar/navbar.ts`: component de navegació per canviar entre el catàleg i els formularis.
- `src/app/article-new-template/article-new-template.ts`: formulari de tipus template amb validacions bàsiques.
- `src/app/article-new-reactive/article-new-reactive.ts`: formulari reactiu amb `FormBuilder`, validació d'URL i validador de nom prohibit.

### Notes de desplagament

- Per iniciar el servidor de desenvolupament utilitza `ng serve`.
- Per compilar en mode desenvolupament utilitza `ng build --configuration development`.
- Les vistes del formulari mostren missatges d'error sota els controls amb color vermell quan hi ha validacions fallides.
## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
