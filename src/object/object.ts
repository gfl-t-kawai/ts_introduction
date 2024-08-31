export default function objectSample(): void {
  // const a: object = {
  //     name: 'TakHack',
  //     age: 32
  // }
  // a.name

  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object object sample 1:', country)

  country = {
    language: 'English',
    name: 'USA',
  }

  console.log('Object object sample 2:', country)

  const takhack: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 32,
    lastName: 'Yamada',
    firstName: 'Tarou',
  }

  takhack.gender = 'male'
  takhack.lastName = 'Kawai'
  // takhack.firstName = 'Kotarou'

  console.log('Object object sample 3:', takhack)

  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }

  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('Object object sample 4:', capitals)
}
