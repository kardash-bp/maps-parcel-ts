import faker from 'faker'
import { Mappable } from './Map'
export class User implements Mappable {
  name: string
  description: string
  location: {
    lat: number
    lng: number
  }
  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: +faker.address.longitude(),
    }
    this.description = `Username: ${this.name}`
  }
}
