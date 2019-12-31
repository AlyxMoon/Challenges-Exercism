
export const proverb = (...args) => {
  const consequences = args.slice()
  const qualifier = consequences[consequences.length - 1].qualifier || ''
  if (qualifier) consequences.pop()

  let prov = ''
  for (let i = 1; i < consequences.length; i++) {
    prov += `For want of a ${consequences[i - 1]} the ${consequences[i]} was lost.\n`
  }
  prov += `And all for the want of a ${qualifier ? qualifier + ' ' : ''}${consequences[0]}.`

  return prov
}
