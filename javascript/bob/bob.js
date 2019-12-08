
export const hey = (message = '') => {
  const trimmedMessage = message.replace(/\s/g, '')

  const isQuestion = trimmedMessage[trimmedMessage.length - 1] === '?'
  const isShouting = /^(?=.*[A-Z])[^a-z]+$/.test(trimmedMessage)

  let response = 'Whatever.'

  if (isQuestion && isShouting) response = 'Calm down, I know what I\'m doing!'
  else if (isShouting) response = 'Whoa, chill out!'
  else if (isQuestion) response = 'Sure.'
  else if (trimmedMessage.length === 0) response = 'Fine. Be that way!'

  return response
};
