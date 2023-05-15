class Medicion {
  constructor(public temperatura: number, public humedad: number, public presion: number) {}
}

interface ISensor {
  medir: () => Medicion
}

class SensorString {
  // temperatura|humedad|presion
  getMedicion() {
    return `31|50|1000`
  }
}

class SensorStringAdapter implements ISensor {
  constructor(private sensor: SensorString) {}
  medir(): Medicion {
    const res = this.sensor.getMedicion()
    const valores = res.split('|')
    const medicion = new Medicion(Number(valores[0]), Number(valores[1]), Number(valores[2]))
    return medicion
  }
}

class Controladora {
  private sensor: ISensor

  constructor(sensor: ISensor) {
    this.sensor = sensor
  }

  obtenerStatus() {
    const medicion = this.sensor.medir()

    if (medicion.temperatura > 30) {
      return 'Alerta de temperatura'
    }

    if (medicion.humedad > 80) {
      return 'Alerta de humedad'
    }

    if (medicion.presion > 1200) {
      return 'Alerta de presion'
    }
  }
}

function main() {
  const sensor = new SensorStringAdapter(new SensorString())
  const controladora = new Controladora(sensor)
  console.log(controladora.obtenerStatus())
}

main()
