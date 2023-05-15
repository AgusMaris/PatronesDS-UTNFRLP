interface Forma {
  dibujar: () => string
}

class Linea implements Forma {
  dibujar() {
    return 'Dibujando linea'
  }
}

class Texto implements Forma {
  dibujar() {
    return 'Dibujando texto'
  }
}

class Circulo implements Forma {
  dibujar() {
    return 'Dibujando circulo'
  }
}
class Dibujo implements Forma {
  private formas: Forma[]
  constructor() {
    this.formas = []
  }
  dibujar() {
    let canvas = ''
    for (const forma of this.formas) {
      canvas += forma.dibujar() + '\n'
    }

    return canvas
  }
  agregarForma(forma: Forma) {
    this.formas.push(forma)
  }
}

function main() {
  const linea1 = new Linea()
  const linea2 = new Linea()

  const dibujo1 = new Dibujo()
  dibujo1.agregarForma(linea1)
  dibujo1.agregarForma(linea2)
  dibujo1.agregarForma(new Circulo())

  const dibujo2 = new Dibujo()
  dibujo2.agregarForma(dibujo1)
  dibujo2.agregarForma(new Circulo())

  console.log(dibujo2.dibujar())
}

main()
