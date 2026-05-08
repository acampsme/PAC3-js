# Historial de canvis del projecte Ecommerce

Aquest document descriu els canvis principals fets durant el desenvolupament de l'aplicació i els agrupa com si fossin commits.

## Inicialització del projecte
- Generar un projecte Angular nou amb Angular CLI 21.2.10.
- Configurar l'estructura bàsica del projecte amb els fitxers i directoris inicials.

## Crear el model d'articles
- Afegir `src/app/article.model.ts`.
- Definir la interfície `Article` amb propietats `id`, `name`, `imageUrl`, `price`, `isOnSale` i `quantityInCart`.
- Definir el tipus `ArticleQuantityChange` per fer servir en esdeveniments de canvi de quantitat.

## Crear el component d'item d'article
- Afegir `src/app/article-item.component.ts`.
- Implementar un component standalone que mostra les dades d'un article individual.
- Afegir propietats de presentació, vist amb `OnPush`, i emetre esdeveniments quan canvia la quantitat.

## Crear el component de llista d'articles
- Afegir `src/app/article-list/article-list.ts`.
- Mostrar una llista d'articles amb `*ngFor` i `ArticleItemComponent`.
- Emprar `signal()` per gestionar l'estat dels articles i actualitzar `quantityInCart` en resposta a esdeveniments.

## Afegir la barra de navegació
- Afegir `src/app/navbar/navbar.ts`.
- Crear un menú de canvi de vista per seleccionar entre la llista i els formularis.
- Utilitzar `selectedView` i `*ngIf` per canviar la vista mostrada sense rutes Angular.

## Afegir el formulari basat en plantilla
- Afegir `src/app/article-new-template/article-new-template.ts`.
- Crear un formulari amb `FormGroup`, `FormControl` i validacions bàsiques.
- Mostrar missatges d'error sota els controls quan els camps són invàlids.

## Afegir el formulari reactiu
- Afegir `src/app/article-new-reactive/article-new-reactive.ts`.
- Implementar un formulari reactiu amb `FormBuilder`.
- Afegeir validacions d'URL i un validador personalitzat per a noms prohibits.
- Mostrar missatges d'error sota el control amb estil vermell.

## Configurar actius i imatges locals
- Actualitzar `angular.json` per servir `src/assets`.
- Afegir imatges de productes a `src/assets/products`.
- Ajustar els `imageUrl` dels articles per utilitzar les imatges locals.

## Millorar l'estil i la presentació
- Ajustar CSS dels formularis i de la llista d'articles.
- Asegurar que els missatges de validació es mostren netament sota cada camp.
- Afegir estils responsius per a una presentació millor en pantalles més grans.

## Documentació i README
- Actualitzar `ecommerce/README.md` amb una explicació detallada del procés de creació.
- Afegir els passos de desplegament, components clau i notes de configuració.
