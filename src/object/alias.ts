export default function typeAliasSample(): void {
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object alias sample 1:', japan)

  const america: Country = {
    capital: 'Washington, D.C.',
    language: 'English',
    name: 'USA',
  }

  console.log('Object alias sample 2:', america)

  // Union Intersection
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // Union
  type Adventure = Knight | Wizard

  // Intersection
  type Paladin = Knight & Wizard

  const adventure1: Adventure = {
    hp: 100,
    // mp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連斬り',
  }

  const adventure2: Adventure = {
    hp: 90,
    mp: 40,
    weapon: '木の杖',
    magicSkill: 'ファイヤボール',
  }

  console.log('Object alias sample 3:', adventure1)
  console.log('Object alias sample 4:', adventure2)

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: '銀の剣',
    swordSkill: '三連斬り',
    magicSkill: 'ファイヤボール',
  }

  console.log('Object alias sample 5:', paladin)
}
