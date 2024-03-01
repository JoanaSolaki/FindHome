# FindHome

Un brief réalisé durant la formation Simplon, un site web immobilier avec des annonces dynamiques codé en HTML/CSS/Javascript. <br>
Le projet était à faire en solitaire.<br>

## Lien

[![website](https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://joanasolaki.github.io/FindHome/index.html)

[![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/file/C2l4IpStS8SdjRntgE6qe0/Immobilier?type=design&node-id=0%3A1&mode=design&t=R8DMO0RGI9PY2rw3-1)

## Contexte du projet

Ce projet adopte la POO en JavaScript pour organiser le code de manière modulaire et réutilisable. Les annonces immobilières seront modélisées sous forme d'objets, ce qui en simplifie la manipulation et la gestion. Les classes seront conçues selon le principe d'encapsulation, garantissant que chaque classe contient toutes les données et fonctions nécessaires à son fonctionnement autonome.

Votre projet reposera sur une classe fondamentale `BienImmobilier` 🏠, qui regroupera les attributs universels des biens immobiliers, tels que `id`, `titre`, `description`, `prix`, et `adresse`.

Vous enrichirez cette base par des classes spécialisées telles que `Appartement`, `Maison`, et `Terrain`, chacune héritant de `BienImmobilier` et y ajoutant ses spécificités.

Par exemple, la classe `Appartement` pourrait se distinguer par des propriétés supplémentaires comme `étage` et `ascenseur`, tandis que `Maison` pourrait se singulariser par la présence d'un `jardin` et d'un `garage`.

Vous êtes encouragés à explorer au-delà de ces suggestions en introduisant de nouvelles classes ou en adaptant les existantes selon les besoins de votre application.
