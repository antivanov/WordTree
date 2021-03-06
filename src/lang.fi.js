define('lang.fi', ['lang', 'grammar', 'util'], function(Lang, Grammar, _) {

  var {Translation, Language, ActionTranslation, ObjectTranslation} = Lang;
  var {Actor, Word} = Grammar;

  class ActionTranslationFi extends ActionTranslation {

    constructor(opts) {
      opts.keyVowel = opts.keyVowel || '';
      opts.defaultForm = opts.defaultForm;
      opts.futureMatchesNow = true;
      super(opts);
      this.keyVowel = opts.keyVowel;
      super.conjugate();
    }

    getPresentForms() {
      var base = this.conjugationRoots.now + this.keyVowel;

      return {
        I: `${base}n`,
        you: `${base}t`,
        you_formal: `${base}t`,
        he: `${base}${this.keyVowel}`,
        she: `${base}${this.keyVowel}`,
        it: `${base}${this.keyVowel}`,
        we: `${base}mme`,
        you_plural_formal: `${base}tte`,
        you_plural: `${base}tte`,
        they: `${base}vat`
      };
    }

    getPastForms() {
      var base = this.conjugationRoots.past;

      return {
        I: `${base}in`,
        you: `${base}it`,
        you_formal: `${base}it`,
        he: `${base}i`,
        she: `${base}i`,
        it: `${base}i`,
        we: `${base}imme`,
        you_plural_formal: `${base}itte`,
        you_plural: `${base}itte`,
        they: `${base}ivat`
      };
    }
  }

  var translations = {
    sun: new ObjectTranslation({
      defaultForm: 'aurinko',
      asActor: Word.it,
      asSubject: 'auringon'
    }),
    sing: new ActionTranslationFi({
      root: 'laul',
      keyVowel: 'a',
      defaultForm: 'laulaa',
      conjugationRoots: {
        past: 'laulo'
      }
    }),
    do: new ActionTranslationFi({
      root: 'te',
      keyVowel: 'e',
      defaultForm: 'tehdä',
      conjugationRoots: {
        now: 'te',
        past: 'te'
      },
      conjugations: {
        now: {
          he_she_it: 'tekee',
          they: 'tekevät'
        },
        past: {
          he_she_it: 'teki',
          they: 'tekivät'
        }
      }
    }),
    go: new ActionTranslationFi({
      root: 'men',
      keyVowel: 'e',
      defaultForm: 'mennä',
      conjugations: {
        now: {
          they: 'menevät'
        },
        past: {
          they: 'menivät'
        }
      }
    }),
    sew: new ActionTranslationFi({
      root: 'omel',
      defaultForm: 'omella',
      keyVowel: 'e'
    }),
    build: new ActionTranslationFi({
      root: 'raken',
      defaultForm: 'rakentaa',
      keyVowel: 'a',
      conjugationRoots: {
        now: 'rakenn',
        past: 'rakens'
      },
      conjugations: {
        now: {
          he_she_it: 'rakentaa',
          they: 'rakentavat'
        }
      }
    }),
    give: new ActionTranslationFi({
      root: 'an',
      defaultForm: 'antaa',
      keyVowel: 'a',
      conjugationRoots: {
        now: 'ann',
        past: 'anno'
      },
      conjugations: {
        now: {
          he_she_it: 'antaa',
          they: 'antavat'
        },
        past: {
          he_she_it: 'antoi',
          they: 'antoivat'
        }
      }
    }),
    look: new ActionTranslationFi({
      root: 'kats',
      defaultForm: 'katsoa',
      keyVowel: 'o',
      conjugationRoots: {
        past: 'katso'
      }
    }),
    see: new ActionTranslationFi({
      root: 'nä',
      defaultForm: 'nähdä',
      keyVowel: 'e',
      conjugations: {
        now: {
          he_she_it: 'näkee',
          they: 'näkevät'
        },
        past: {
          he_she_it: 'näki',
          they: 'näkivät'
        }
      }
    }),
    want: new ActionTranslationFi({
      root: 'halu',
      keyVowel: 'a',
      conjugationRoots: {
        past: 'halus'
      }
    }),
    can: new ActionTranslationFi({
      root: 'vo',
      keyVowel: 'i',
      conjugationRoots: {
        past: 'vois'
      },
      conjugations: {
        now: {
          he_she_it: 'voi'
        }
      }
    }),
    shine: new ActionTranslationFi({
      root: 'paist',
      keyVowel: 'a',
      conjugationRoots: {
        past: 'paisto'
      }
    }),
    now: new Translation('nyt'),
    future: new Translation('tulevaisuus'),
    past: new Translation('menneisyys'),
    I: new Translation('minä'),
    you: new ObjectTranslation({
      defaultForm: 'sinä',
      asActor: Word.you,
      asSubject: 'sinut'
    }),
    you_formal: new Translation('sinä'),
    he: new Translation('hän'),
    she: new Translation('hän'),
    it: new ObjectTranslation({
      defaultForm: 'se',
      asActor: Word.it,
      asSubject: 'sitä'
    }),
    we: new Translation('me'),
    you_plural: new Translation('te'),
    you_plural_formal: new Translation('te'),
    they: new Translation('ne'),
    wet_snow_with_mud_and_ground: new Translation('loska'),
    snow_on_tree_branch: new Translation('tykky'),
    snow: new Translation('lumi'),
    this: new ObjectTranslation({
      defaultForm: 'tämä',
      asActor: Word.it,
      asSubject: 'tämän'
    }),
    that: new Translation('että'),
    one: new Translation('yksi'),
    one_of_some_kind: new Translation('yksi'),
    lake: new ObjectTranslation({
      defaultForm: 'järvi',
      asActor: Word.it,
      asMany: 'järviä'
    }),
    bird: new ObjectTranslation({
      defaultForm: 'lintu',
      asActor: Word.it,
      asMany: 'lintuja'
    }),
    wolf: new ObjectTranslation({
      defaultForm: 'susi',
      asActor: Word.it,
      asMany: 'susia'
    })
  };

  class Finnish extends Language {

    constructor(translations) {
      super('Finnish', translations);
    }

    translateObject(object, specifier, context) {
      var objectTranslation = this.wordTranslations[object.id];
      var objectForm = this.translateWord(object, context);

      if ((specifier === Word.many) && _.isDefined(objectTranslation.asMany)) {
        return objectTranslation.asMany;
      }
      return objectForm;
    }

    translateActor(actor) {
      return this.isActualPerson(actor) ? '' : super.translateActor(actor);
    }
  }

  return new Finnish(translations);
});