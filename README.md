# WordTree

Experiment in building formalized common grammar and vocabulary meta-representation for several languages.

Problems with language translation are cause not by languages themselves being difficult but rather that spoken languages omit a lot of things and
are optimized by their native speakers to be short and meaningful which leads to ambiguity.

For example words 'you singular' and 'you plural' are indistinguishable in English unlike in many other languages where those are distinct words.

In fact languages share common grammar and vocabularly in the sense that every spoken language is just a rendition of some single common higher level language into a particular human language.

Metaphor: single common language is like a tree being lit by the sun and every particular language is just a shadow or reflection of this tree. Reflection in water, shadow on the ground or shadow on a rock would be different human languages. Translating between human languages is difficult becuase it is hard to reconstruct the full image of the tree from its shadow as many details are omitted or shortened. How exactly those details are omitted is specific to every language and reflects the particular way how it perceives the surrounding world and has developed over time. It is difficult to understand what would be the reflection of the tree in the water based on its shadow on the ground, then the most challenging thing in automated translation is reconstructing the common language representation based on a given fragment in some specific human language and we do not deal with this challenge in this project, we only try to build a subset of this common language.

Based on this metaphor the project is called WordTree.

This project is a simple experiment in building a subset of the+ single common higher level language that will be sufficient for describing a short text
that contains only positive descriptional sentences.

Text (in Finnish, source yle.fi):

'Lauantai on ollut lämmin päivä. Lämpimin paikka oli Kouvolan Utti, jossa oli melkein 25 astetta lämmintä. Pohjois-Suomessa oli lauantaina selvästi kylmempää kuin etelässä. Sää kylmenee myös etelässä jo sunnuntaina. Ensi viikko eli juhannusviikko on melko kylmä koko maassa. Ensi viikolla sataa myös vettä.'

Speculation:

The common language does not change much or stays unchanged unlike the individual languages that are its renditions. Then it is appropriate to describe it using mathematical formulas or pure functions in a programming language (functional programming).