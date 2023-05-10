* Mon portfolio

Ceci est mon portfolio personnel où je présente mes compétences en tant que développeur frontend et backend, ainsi que mes réalisations dans ces domaines.
Fonctionnalités

    - Menu de navigation avec des liens vers différentes sections de la page
    - Effet de défilement actif : lorsque l'utilisateur fait défiler la page, le lien actif dans la barre de navigation est mis en évidence
    - Barre de navigation collante qui reste en haut de la page lors du défilement
    - Effets de révélation de défilement pour les différents éléments de la page
    - Effet de texte animé qui change régulièrement pour présenter mes compétences en tant que développeur
    - Affichage en temps réel de la température de Marseille en degrés Celsius
    - Formulaire de contact qui envoie un email à l'adresse à l'addresse que j'ai specifié, lorsqu'il est soumis.

* Technologies utilisées

    HTML
    CSS

Le fichier style.css contient des styles pour personnaliser l'apparence du site web. Voici un aperçu des styles utilisés :

    La police de caractère 'Oswald' est importée depuis Google Fonts et est utilisée pour les titres.
    La police de caractère 'Poppins' est également importée depuis Google Fonts et est utilisée pour le texte principal.
    La couleur de fond de l'ensemble de la page est définie sur var(--bg-color).
    Les couleurs principales du site sont définies comme variables CSS pour une personnalisation facile. Par exemple, la couleur principale est définie sur var(--main-color).
    Le header est positionné en haut de la page et est fixé lors du défilement.
    La section home contient une image flottante animée et du texte centré.
    La section about contient des informations sur l'auteur du site web.

Notez que ces styles sont donnés à titre d'exemple, et que chaque site web aura des styles uniques en fonction de sa conception et de ses besoins.

    JavaScript

* Comment utiliser

Cloner ce dépôt sur votre machine locale
Ouvrir le fichier `index.html` dans votre navigateur pour afficher la page.

* Scripts JavaScript

 Le fichier `index.html` inclut plusieurs scripts JavaScript qui fournissent les fonctionnalités susmentionnées. Les voici en détail :
Toggle icon navbar

Ce script permet à l'utilisateur de cliquer sur une icône de menu pour afficher ou masquer le menu de navigation. Il utilise la méthode `toggle` de la classe `classList` pour ajouter ou supprimer une classe active qui modifie l'apparence du menu.
Scroll Section `Active` Link

Ce script détecte la section active pendant le défilement de la page et met en évidence le lien correspondant dans la barre de navigation. Il utilise les propriétés `offsetTop` et `offsetHeight` des sections pour déterminer si elles sont visibles à l'écran et la méthode classList pour ajouter ou supprimer une classe `active` qui modifie l'apparence du lien.

Sticky Navbar

Ce script ajoute une classe `sticky` à la barre de navigation lorsqu'elle est dépassée par le défilement de la page. Cette classe modifie la position de la barre de navigation pour la maintenir en haut de la page pendant le défilement.

Remove Toggle icon and navbar when click navbar link (scroll)

Ce script supprime la classe `active` de l'icône du menu et du menu de navigation lorsque l'utilisateur clique sur un lien dans la barre de navigation. Cela masque le menu après que l'utilisateur ait sélectionné une section.


* Remove Toggle icon and navbar when click navbar link (scroll)

Ce script supprime la classe `active` de l'icône du menu et du menu de navigation lorsque l'utilisateur clique sur un lien dans la barre de navigation. Cela masque le menu après que l'utilisateur ait sélectionné une section.


* Scroll Reveal

Ce script utilise la bibliothèque ScrollReveal pour ajouter des effets de révélation de défilement à différents éléments de la page. Les effets comprennent l'origine de l'animation et la distance, la durée et le délai de l'animation.


* Typed Js

Ce script utilise la bibliothèque Typed.js pour afficher un texte animé qui change régulièrement pour présenter mes compétences en tant que développeur. Il utilise la méthode `new` pour créer une instance de la classe `Typed` et les propriétés s`trings`, `typeSpeed`, `backSpeed`, `backDelay` et `loop` pour définir les paramètres de l'animation.


* Récupération et affichage de la température de Marseille en degrés:

Le code utilise l'API openWeather pour récupérer les informations météorologiques de la ville de Marseille et afficher la température actuelle en degrés Celsius sur la page.

Le code commence par définir une constante APIKEY contenant la clé API openWeather. Ensuite, il construit une URL en utilisant la constante APIKEY et la ville de Marseille comme paramètres.

Ensuite, il utilise la méthode fetch() pour envoyer une requête GET à l'API openWeather avec l'URL construite. Lorsque la réponse est reçue, la méthode then() est utilisée pour extraire les données de la réponse sous forme de JSON.

Une fois les données extraites, la méthode then() est utilisée à nouveau pour afficher la température dans un élément HTML spécifié avec l'ID "temp-metric" et le nom de la ville dans un autre élément HTML spécifié avec l'ID "city-name".

Notez que le code utilise également la propriété innerHTML pour définir le contenu des éléments HTML.

Enfin, il est important de noter que le code doit être exécuté dans un environnement qui prend en charge l'API fetch(), comme un navigateur Web moderne.