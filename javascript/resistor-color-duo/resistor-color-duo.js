
export const value = ([color1, color2]) => {
  const colorCode = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  }

  return (colorCode[color1] * 10) + colorCode[color2]
}
