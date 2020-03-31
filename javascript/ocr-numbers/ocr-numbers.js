
const NUM_0 = '' +
' _ ' +
'| |' +
'|_|' +
'   '

const NUM_1 = '' +
'   ' +
'  |' +
'  |' +
'   '

const NUM_2 = '' +
' _ ' +
' _|' +
'|_ ' +
'   '

const NUM_3 = '' +
' _ ' +
' _|' +
' _|' +
'   '

const NUM_4 = '' +
'   ' +
'|_|' +
'  |' +
'   '

const NUM_5 = '' +
' _ ' +
'|_ ' +
' _|' +
'   '

const NUM_6 = '' +
' _ ' +
'|_ ' +
'|_|' +
'   '

const NUM_7 = '' +
' _ ' +
'  |' +
'  |' +
'   '

const NUM_8 = '' +
' _ ' +
'|_|' +
'|_|' +
'   '

const NUM_9 = '' +
' _ ' +
'|_|' +
' _|' +
'   '

const getNthNumber = (numString = '', numCount = 0, index = 0) => {
  const offset = 3 * index
  let num = ''

  for (let i = 0; i < 4; i++) {
    num += numString.slice(offset + (i * numCount * 3), offset + (i * numCount * 3) + 3)
  }

  if (num === NUM_0) return '0'
  if (num === NUM_1) return '1'
  if (num === NUM_2) return '2'
  if (num === NUM_3) return '3'
  if (num === NUM_4) return '4'
  if (num === NUM_5) return '5'
  if (num === NUM_6) return '6'
  if (num === NUM_7) return '7'
  if (num === NUM_8) return '8'
  if (num === NUM_9) return '9'
  return '?'
}

export const convert = (numString = '') => {
  const parsedString = numString.replace(/\n/g, '')

  const lineCount = (numString.length - parsedString.length + 1) / 4
  const numCount = parsedString.length / (12 * lineCount)

  let retval = ''
  for (let line = 0; line < lineCount; line++) {
    const numsOnLine = parsedString.slice(line * numCount * 12, (line + 1) * numCount * 12)
    for (let i = 0; i < numCount; i++) retval += getNthNumber(numsOnLine, numCount, i)

    if (line + 1 < lineCount) retval += ','
  }

  return retval
};
