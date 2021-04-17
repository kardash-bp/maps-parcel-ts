interface Mappable {
  location: { lat: number; lng: number }
}

export class Map {
  private googleMap: google.maps.Map
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    })
  }
  addMarker(obj: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: obj.location.lat,
        lng: obj.location.lng,
      },
    })
    const infoWindow = new google.maps.InfoWindow({ content: 'Hello!' })
    marker.addListener('click', () => {
      infoWindow.open(this.googleMap, marker)
    })
  }
}
