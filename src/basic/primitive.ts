export default function primitiveSample() {
  const name = 'tsハック'
  // name = 123
  console.log('primitive sample 1:', typeof name, name)

  const age = 32
  // age = "32"
  console.log('primitive sample 2:', typeof age, age)

  const isSingle = false
  console.log('primitive sample 3:', typeof isSingle, isSingle)

  const isOver20: boolean = age >= 30
  console.log('primitive sample 4:', typeof isOver20, isOver20)
}
