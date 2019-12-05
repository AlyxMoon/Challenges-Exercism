
export const convert = (num) => {
  return `${num % 3 ? '' : 'Pling'}${num % 5 ? '' : 'Plang'}${num % 7 ? '' : 'Plong'}` || `${num}`
};
