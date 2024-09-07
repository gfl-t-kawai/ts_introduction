export default function genericsBasicSample() {
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log('Generics basic sample 1:', stringReduce(['May ', 'the ', 'force ', 'be ', 'you'], ''))

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log('Generics basic sample 2:', numberReduce([100, 200, 300], 1000))

  type Reduce = {
    (array: string[], initValue: string): string
    (array: number[], initValue: number): number
  }

  type GenericReduce<T> = {
    (array: T[], initialValue: T): T
  }

  const genericsStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 3:', genericsStringReduce(['MAKE ', 'TYPESCRIPT', 'GREAT ', 'AGAIN'], ''))

  const genericsNumberReduce: GenericReduce<number> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 4:', genericsNumberReduce([10, 20, 30], 100))

  // 完全な呼び出し
  type GenericsReduce2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], iniUialValue: U): U
  }

  type GenericReduce3<T> = (array: T[], initialValue: T) => T
  type GenericReduce4 = <T>(array: T[], initialValue: T) => T
}
