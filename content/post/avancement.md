+++
Categories = ["blog"]
Description = "Première article sur l'avancement du site."
Tags = ["design", "web", "markdown"]
date = "2016-01-29T10:01:59+01:00"
title = "Avancement"

+++
Avancement
----------
Le site commence à prendre forme. Les articles sont triés par catégories et
par tags. Une pages contenant les archives (inexistante) éxiste et une
police un peu plus jolie est utilisé.

Evidement ce n'est pas terminé :

1. le blog n'a pas de nom
2. les couleurs sont...
3. la mise en page laisse à désirer
4. quelques images ne seraient pas de trop

Malgrès tout, cela ne nous empèche pas d'écrire des articles et de les poster.

Articles
--------
Les articles de ce blog sont écrit en Markdown[^1], c'est un "language" permettant
la mise en forme de texte via une syntax plutôt... visuel. Par example :

```markdown
Titre 1
=======

Ci-dessus un titre Markdown de niveau 1. OK, on dirait qu'on essai de faire
de la mise en page sur une machine à écrire, mais un processeur Markdown va
transformer votre titre souligné en un jolie document PDF ou HTML.

De plus, les retours à la ligne n'ont pas d'importance, la longueur des lignes
sera adapté au format de destination. Par contre, les paragraphes sont conservés.

Titre 2
-------

Ci-dessus un titre de niveau 2, toujours en ASCII, mais avec un simple trait.
Enfin, pour completer notre exemple, une liste à puce :

- item 1
- item 2
- item 3

Et un tableau :

Name    | Age
--------|------
Bob     | 27
Alice   | 23

```

Il est aussi possible d'insérer des URL,
de formater du texte, d'ajouter des notes de bas de page, etc...
Et tout ça avec le confort de notepad !

Processeur Markdown
-------------------

La conversion de text Markdown vers un format plus agréable à lire
est réaliser par un programme. Ce blog utilise Blackfriday[^2], c'est un
processeur open-source permettant de faire la conversion Markdown &#8680; HTML et
Markdown &#8680; LaTeX.

La Suite
--------

Esperons que cet article ouvre la voie à un site plus esthétique et
d'inombrables articles !


[^1]: Markdown sur [Wikipedia](https://en.wikipedia.org/wiki/Markdown)
[^2]: Blackfriday sur [GitHub](https://github.com/russross/blackfriday)
