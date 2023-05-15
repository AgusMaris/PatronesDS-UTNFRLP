interface ISensor {
  medir: () => string
}

class SensorXML {
  getMedicionXML() {
    return `
  <temperatura> 25 </temperatura>
  <humedad> 50 </humedad>
  <presion> 100 </presion>
  `
  }
}

class SensorJSON {
  getMedicionJSON() {
    return `
  {
    "temperatura": 25,
    "humedad": 50,
    "presion": 100
  }
  `
  }
}

class XMLSensorAdapter implements ISensor {
  private sensor: SensorXML
  constructor(sensor: SensorXML) {
    this.sensor = sensor
  }
  medir(): string {}
}

class Controladora {
  private sensor: ISensor
  constructor(sensor: ISensor) {
    this.sensor = sensor
  }
  obtenerStatus() {
    const medicion = this.sensor.medir()
    const object = JSON.parse(medicion)
    if (object.temperatura > 30 || object.humedad > 80 || object.presion > 120) {
      return 'Alerta'
    }
  }
}
