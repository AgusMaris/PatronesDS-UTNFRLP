class Observado {
  private observers: Observer[]
  constructor() {
    this.observers = []
  }
  agregar(o: Observer) {
    this.observers.push(o)
  }
  notificar() {
    for (const observer of this.observers) {
      observer.update()
    }
  }
}

interface Observer {
  update(): void
}

class Sensor extends Observado {
  private temperatura: number
  constructor() {
    super()
    this.temperatura = 0
  }
  getTemperatura() {
    return this.temperatura
  }
  setTemperatura(t: number) {
    this.temperatura = t
    this.notificar()
  }
  checkTemperatura() {
    this.setTemperatura(+(Math.random() * 100).toFixed())
  }
}

class Rociador implements Observer {
  update() {
    this.rociar()
  }
  rociar() {
    console.log('Rociando...')
  }
}

class EstacionBomberos implements Observer {
  update() {
    this.llamar()
  }
  llamar() {
    console.log('Llamando a estacion de bomberos...')
  }
}

class Alarma implements Observer {
  constructor(private sensor: Sensor) {}
  update() {
    this.sonar()
  }
  sonar() {
    console.log(
      `Encendiendo alarma -> Preguntando al sensor la temperatura actual: ${this.sensor.getTemperatura()}`
    )
  }
  getTemperatura() {
    return this.sensor.getTemperatura()
  }
}

const sensor = new Sensor()
sensor.agregar(new Alarma(sensor))
sensor.agregar(new Rociador())
sensor.agregar(new EstacionBomberos())
sensor.checkTemperatura()
console.log(`Temperatura: ${sensor.getTemperatura()}`)
