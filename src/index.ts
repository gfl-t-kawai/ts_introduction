// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello World!')
// world.sayHello(root)

// 03.基本型
// import { primitiveSample, notExistSample, anySample, unknownSample } from './basic'
// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

// 04.関数の型定義
import { logMessage } from './function/basic'
import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'

logMessage('Hello TypeScript!')
isUserSignedIn('ABC', 'TakHack')
isUserSignedIn('DEF')
isUserSignedIn2('ABC')
const sum = sumProductsPrice(100, 200, 300, 400)
console.log('Function parameters sample 5: ' + sum)
