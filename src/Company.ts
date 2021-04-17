import faker from 'faker'
import { Mappable } from './Map'

export class Company implements Mappable {
  nameComp: string
  description: string
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
    this.description = `Company: ${this.nameComp} - Catchphrase: ${this.phrase}`
  }
}
