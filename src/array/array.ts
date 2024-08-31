export default function arraySample(): void {
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  // colors.push(10)
  console.log('Array array sample 1:', colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // even.push("10")
  console.log('Array array sample 2:', even)

  const ids: (string | number)[] = ['ABC', 123]
  ids.push('DEF')
  ids.push(456)

  console.log('Array array sample 3:', ids)

  // 配列の型推論
  const generateSomeArray = (): (number | string)[] => {
    const _someArray = []
    _someArray.push(123)
    _someArray.push('ABC')
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)
  // someArray.push(true)
  console.log('Array array sample 4:', someArray)

  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  // commands.push("git fetch")
  // commands[2] = "git pull"
  console.log('Array array sample 5:', commands)

  // 読み取り専用の定義方法
  const immutableNumbers: ReadonlyArray<number> = [1, 2, 3]
  // immutableNumbers.push(4)
  console.log('Array array sample 6:', immutableNumbers)

  const immutableNames: Readonly<string[]> = ['Tarou', 'Kazu', 'Yuto']
  // immutableNames.push("Takashi")
  console.log('Array array sample 7:', immutableNames)
}
