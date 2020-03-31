
const verses = [
  'a Partridge in a Pear Tree',
  'two Turtle Doves',
  'three French Hens',
  'four Calling Birds',
  'five Gold Rings',
  'six Geese-a-Laying',
  'seven Swans-a-Swimming',
  'eight Maids-a-Milking',
  'nine Ladies Dancing',
  'ten Lords-a-Leaping',
  'eleven Pipers Piping',
  'twelve Drummers Drumming',
]

const days = [
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
  'ninth',
  'tenth',
  'eleventh',
  'twelfth',
]

export const recite = (startVerse, endVerse = startVerse) => {
  return [...Array(endVerse - startVerse + 1)].map((_, i) => i + startVerse)
    .map(day => `On the ${days[day - 1]} day of Christmas my true love gave to me:` +
      [...Array(day)].map((_, i) => day - i)
        .map(line => `${(day > 1 && line === 1) ? ' and' : ''} ${verses[line - 1]}`)
        .join(',') + '.'
    )
    .join('\n\n') + '\n'
};
