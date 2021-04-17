import faker from 'faker'

export class Company {
  nameComp: string
  phrase: string
  location: {
    lat: number
    lng: number
  }
  constructor() {
    this.nameComp = faker.company.companyName()
    this.phrase = faker.company.catchPhrase()
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    }
  }
}
