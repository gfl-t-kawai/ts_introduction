export default function tupleSample(): void {
  const response: [number, string] = [200, 'OK']
  // response = [400, "Bad Request", "Email param is missing"]
  // response = ["400", "Bad"]
  console.log('Array tuple sample 1:', response)

  const girlFriends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko']
  girlFriends.push('Misa')
  console.log('Array tuple sample 2:', girlFriends)
}
