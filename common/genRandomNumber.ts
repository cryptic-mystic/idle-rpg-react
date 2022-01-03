const genRandomNumber = (max: number = 1, min: number = 0) =>
  Math.floor(Math.random() * (max - min) + min)

export default genRandomNumber
