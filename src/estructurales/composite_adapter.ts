interface Componente {
  dibujar: () => string
}

class Linea implements Componente {
  dibujar() {
    return 'Dibujando linea'
  }
}

class Texto implements Componente {
  dibujar() {
    return 'Dibujando texto'
  }
}

class Circulo implements Componente {
  dibujar() {
    return 'Dibujando circulo'
  }
}
class Dibujo implements Componente {
  private formas: Componente[]
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
  agregarForma(forma: Componente) {
    this.formas.push(forma)
  }
}

interface Picture {
  show(): string
}

class JPGPicture implements Picture {
  show(): string {
    return 'Mostrando imagen jpg'
  }
}

class PNGPicture implements Picture {
  show(): string {
    return 'Mostrando imagen png'
  }
}

abstract class Target implements Componente {
  abstract dibujar(): string
}

class PictureAdapter extends Target {
  constructor(private picture: Picture) {
    super()
  }
  dibujar(): string {
    return this.picture.show()
  }
}

class Esfera {
  mostrar() {
    return `Dibujando esfera`
  }
}

class EsferaAdapter extends Target {
  constructor(private esfera: Esfera) {
    super()
  }
  dibujar(): string {
    return this.esfera.mostrar()
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

  // --- Utilizar picture ---

  dibujo2.agregarForma(new PictureAdapter(new JPGPicture()))
  dibujo2.agregarForma(new PictureAdapter(new PNGPicture()))
  dibujo2.agregarForma(new EsferaAdapter(new Esfera()))
  console.log(dibujo2.dibujar())
}

main()
