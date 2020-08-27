import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'Grognar',
  class: 'asd',
  race: 'ddd',
  background: 'rrr',
  alignment: 'ttt',
  health: {
    tempHP: 0,
    currentHP: 0,
    maxHP: 0,
    hitDiceMultiplier: 0,
    hitDiceSize: 0,
    hitDiceRemaining: 0,
    saveOne: false,
    saveTwo: false,
    saveThree: false,
    failOne: false,
    failTwo: false,
    failThree: false,
    armorClass: 0,
    initiative: 0,
    speed: 0,
  },
  abilities: [
    {
      name: 'strength',
      modifier: 0,
      score: 0,
    },
    {
      name: 'dexterity',
      modifier: 0,
      score: 0,
    },
    {
      name: 'constitution',
      modifier: 0,
      score: 0,
    },
    {
      name: 'intelligence',
      modifier: 0,
      score: 0,
    },
    {
      name: 'wisdom',
      modifier: 0,
      score: 0,
    },
    {
      name: 'charisma',
      modifier: 0,
      score: 0,
    },
  ],
  saves: [
    {
      name: 'strength',
      modifier: 0,
      prof: false,
    },
    {
      name: 'dexterity',
      modifier: 0,
      prof: false,
    },
    {
      name: 'constitution',
      modifier: 0,
      prof: false,
    },
    {
      name: 'intelligence',
      modifier: 0,
      prof: false,
    },
    {
      name: 'wisdom',
      modifier: 0,
      prof: false,
    },
    {
      name: 'charisma',
      modifier: 0,
      prof: false,
    },
  ],
  skills: [
    {
      name: 'acrobatics',
      ability: 'dex',
      modifier: 0,
      prof: false,
    },
    {
      name: 'animal handling',
      ability: 'wis',
      modifier: 0,
      prof: false,
    },
    {
      name: 'arcana',
      ability: 'int',
      modifier: 0,
      prof: false,
    },
    {
      name: 'athletics',
      ability: 'str',
      modifier: 0,
      prof: false,
    },
    {
      name: 'deception',
      ability: 'cha',
      modifier: 0,
      prof: false,
    },
    {
      name: 'history',
      ability: '',
      modifier: 0,
      prof: false,
    },
    {
      name: 'insight',
      modifier: 0,
      prof: false,
    },
    {
      name: 'intimidation',
      modifier: 0,
      prof: false,
    },
    {
      name: 'investigation',
      modifier: 0,
      prof: false,
    },
    {
      name: 'medicine',
      modifier: 0,
      prof: false,
    },
    {
      name: 'nature',
      modifier: 0,
      prof: false,
    },
    {
      name: 'perception',
      modifier: 0,
      prof: false,
    },
    {
      name: 'performance',
      modifier: 0,
      prof: false,
    },
    {
      name: 'persuasion',
      modifier: 0,
      prof: false,
    },
    {
      name: 'religion',
      modifier: 0,
      prof: false,
    },
    {
      name: 'sleight of hand',
      modifier: 0,
      prof: false,
    },
    {
      name: 'stealth',
      modifier: 0,
      prof: false,
    },
    {
      name: 'survival',
      modifier: 0,
      prof: false,
    },
  ],
  proficienciesAndLanguages:
    [
      {
        id: uuidv4(),
        title: '',
        content: '',
      },
    ],
  attacks:
    [
      {
        id: uuidv4(),
        name: '',
        bonus: '',
        damageType: '',
      },
    ],
  spells:
    [
      {
        id: uuidv4(),
        title: '',
        description: '',
      },
    ],
  equipment: '',
  wallet: {
    copper: '',
    silver: '',
    electrum: '',
    gold: '',
    platinum: '',
  },
  bio: [
    {
      title: 'personality',
      content: '',
    },
    {
      title: 'ideals',
      content: '',
    },
    {
      title: 'bonds',
      content: '',
    },
    {
      title: 'flaws',
      content: '',
    },
    {
      title: 'background details',
      content: '',
    },
  ],
};
