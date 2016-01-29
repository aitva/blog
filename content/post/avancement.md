+++
Categories = ["blog"]
Description = "Première article sur l'avancement du site."
Tags = ["design", "web", "hugo"]
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
la mise en forme du texte sous un format plutôt... hum, visuel. Par example :
```markdown
Titre 1
=======

Ci-dessus un titre en ASCII-art qui sera formaté en tire PDF
ou HTML. Les retours à la ligne ne sont la que pour l'auteur et les
paragraphes seront adaptés à l'écran du lecteur.

Titre 2
-------

Ci-dessus un titre de seconde zone, toujours en ASCII-art. Enfin, pour notre
bonheur une liste à puce :

- item 1
- item 2
- item 3
```

Je pourrais continuer comme ça un moment, il est possible d'insérer des tableaux,
de formater du texte, d'ajouter des notes de bas de page, etc...
Tout ça sans editeur de texte et avec un format lisible.

Processeur Markdown
-------------------

La conversion de text Markdown vers un format plus agréable à lire
est réaliser par un programme. Ce blog utilise Blackfriday[^2], c'est un
processeur open-source permettant de faire la conversion `Markdown -> HTML` et
`Markdown -> LaTeX`.

La Suite
--------

Esperons que cet article ouvre la voie à un site plus esthétique et
d'inombrables articles !


[^1]: Markdown sur [Wikipedia](https://en.wikipedia.org/wiki/Markdown)
[^2]: Blackfriday sur [GitHub](https://github.com/russross/blackfriday)
