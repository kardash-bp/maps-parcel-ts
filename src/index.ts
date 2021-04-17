import { Company } from './Company'
import { User } from './User'
import { Map } from './Map'

const map = new Map('map')
const user = new User()
const comp = new Company()

map.addMarker(user)
map.addMarker(comp)
