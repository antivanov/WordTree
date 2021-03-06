define('lang.nl', ['lang', 'grammar', 'util'], function(Lang, Grammar, _) {

  var {Translation, Language, ActionTranslation, ObjectTranslation} = Lang;
  var {Word} = Grammar;

  class ActionTranslationNl extends ActionTranslation {

    constructor(opts) {
      opts.defaultForm = opts.root + 'en';
      if (!_.isDefined(opts.conjugationRoots)) {
        opts.conjugationRoots = {};
      }
      if (!_.isDefined(opts.conjugationRoots['past'])) {
        opts.conjugationRoots['past'] = `${opts.root}d`;
      }
      opts.futureMatchesNow = true;
      super(opts);
      super.conjugate();
    }

    getPresentForms() {
      var base = this.conjugationRoots.now;
      var otherPersonForm = `${base}t`;
      var pluralForm = `${base}en`;

      return {
        I: base,
        you: otherPersonForm,
        you_formal: otherPersonForm,
        he: otherPersonForm,
        she: otherPersonForm,
        it: otherPersonForm,
        we: pluralForm,
        you_plural_formal: pluralForm,
        you_plural: pluralForm,
        they: pluralForm
      };
    }

    getPastForms() {
      var base = this.conjugationRoots.past;
      var pluralForm = `${base}en`;

      return {
        I: base,
        you: base,
        you_formal: base,
        he: base,
        she: base,
        it: base,
        we: pluralForm,
        you_plural_formal: pluralForm,
        you_plural: pluralForm,
        they: pluralForm
      };
    }
  }

  var translations = {
    sun: new ObjectTranslation({
      defaultForm: 'zon',
      asActor: Word.it
    }),
    sing: new ActionTranslationNl({
      root: 'zing',
      conjugationRoots: {
        past: 'zong'
      }
    }),
    do: new ActionTranslationNl({
      root: 'do',
      conjugationRoots: {
        now: 'doe',
        past: 'deed'
      },
      conjugations: {
        now: {
          plural: 'doen'
        }
      }
    }),
    go: new ActionTranslationNl({
      root: 'ga',
      conjugationRoots: {
        past: 'ging'
      },
      conjugations: {
        now: {
          other_single: 'gaat',
          plural: 'gaan'
        }
      }
    }),
    sew: new ActionTranslationNl({
      root: 'naai',
      conjugations: {
        past: {
          I: 'naaide',
          other_single: 'naaide'
        }
      }
    }),
    build: new ActionTranslationNl({
      root: 'bouw',
      conjugations: {
        past: {
          I: 'bouwde',
          other_single: 'bouwde'
        }
      }
    }),
    give: new ActionTranslationNl({
      root: 'gev',
      conjugationRoots: {
        now: 'geef',
        past: 'gaf'
      },
      conjugations: {
        now: {
          plural: 'geven'
        },
        past: {
          plural: 'gaven'
        }
      }
    }),
    look: new ActionTranslationNl({
      root: 'kijk',
      conjugationRoots: {
        past: 'keek'
      },
      conjugations: {
        past: {
          plural: 'keken'
        }
      }
    }),
    see: new ActionTranslationNl({
      root: 'zie',
      conjugationRoots: {
        past: 'zag'
      },
      conjugations: {
        now: {
          plural: 'zien'
        }
      }
    }),
    want: new ActionTranslationNl({
      root: 'wil',
      conjugationRoots: {
        past: 'wilde'
      },
      conjugations: {
        now: {
          he_she_it: 'wil',
          plural: 'willen'
        },
        past: {
          plural: 'wilden'
        }
      }
    }),
    can: new ActionTranslationNl({
      root: 'kan',
      conjugationRoots: {
        past: 'kond'
      },
      conjugations: {
        now: {
          you: 'kunt',
          you_formal: 'kunt',
          he_she_it: 'kan',
          plural: 'kunnen'
        },
        past: {
          I: 'kon',
          other_single: 'kon'
        }
      }
    }),
    shine: new ActionTranslationNl({
      root: 'schijn',
      conjugationRoots: {
        past: 'scheen'
      },
      conjugations: {
        past: {
          plural: 'schenen'
        }
      }
    }),
    now: new Translation('nu'),
    future: new Translation('toekomst'),
    past: new Translation('verleden'),
    I: new Translation('ik'),
    you: new Translation('je'),
    you_formal: new Translation('u'),
    he: new Translation('hij'),
    she: new Translation('zij'),
    it: new Translation('het'),
    we: new Translation('we'),
    you_plural: new Translation('jullie'),
    you_plural_formal: new Translation('u'),
    they: new Translation('ze'),
    wet_snow_with_mud_and_ground: new Translation('sneeuw'),
    snow_on_tree_branch: new Translation('sneeuw'),
    snow: new ObjectTranslation({
      defaultForm: 'sneeuw',
      asActor: Word.it,
      isCountable: false
    }),
    this: new Translation('dit'),
    that: new Translation('dat'),
    one: new Translation('een'),
    one_of_some_kind: new Translation('een'),
    lake: new ObjectTranslation({
      defaultForm: 'meer',
      asActor: Word.it,
      asSpecificObject: 'het',
      asMany: 'meren'
    }),
    bird: new ObjectTranslation({
      defaultForm: 'vogel',
      asActor: Word.it,
      asMany: 'vogels'
    }),
    wolf: new ObjectTranslation({
      defaultForm: 'wolf',
      asActor: Word.it,
      asMany: 'wolven'
    })
  };

  //TODO: Create a separate class ObjectTranslationNl and move most of the logic now in the language class to their: mode modular and object-oriented
  //TODO: Define the proper articles for all ObjectTranslation for Dutch
  class Dutch extends Language {

    constructor(translations) {
      super('Dutch', translations);
    }

    //TODO: Do we need a separate method 'getArticleForObject'?
    getArticleForObject(object) {
      //TODO: Implement getting the actual article, should depend also on the specifier, merge with getArticle method
      return 'de';
    }

    getArticle(specifier, objectTranslation) {
      if (specifier === Word.this || specifier === Word.that) {
        return _.isDefined(objectTranslation.asSpecificObject) ? objectTranslation.asSpecificObject : 'de';
      }
      if (specifier === Word.one) {
        return objectTranslation.isCountable ? 'een' : '';
      }
      return '';
    }

    translateObject(object, specifier, context) {
      var objectTranslation = this.wordTranslations[object.id];
      var objectForm = this.translateWord(object, context);

      if (specifier !== Word.many) {
        return [this.getArticle(specifier, objectTranslation), objectForm].join(' ').trim();
      } else {
        return _.isDefined(objectTranslation.asMany) ? objectTranslation.asMany : `${objectForm}en`;
      }
    }

    translateActor(actor) {
      return this.isActualPerson(actor) ? super.translateActor(actor) : `${this.getArticleForObject(actor)} ${super.translateActor(actor)}`;
    }
  }

  return new Dutch(translations);
});