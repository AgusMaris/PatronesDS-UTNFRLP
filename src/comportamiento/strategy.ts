class Coordenada {
  constructor(public x: number, public y: number) {}
}

// Mal ejemplo

class _Navegador {
  construirRuta(a: Coordenada, b: Coordenada, tipoDesplazamiento: string) {
    if (tipoDesplazamiento === 'auto') {
      const distancia = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
      return distancia * 2
    } else if (tipoDesplazamiento === 'pie') {
      const distancia = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
      return distancia * 10
    } else if (tipoDesplazamiento === 'bici') {
      const distancia = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
      return distancia * 5
    } else {
      throw new Error('Tipo de desplazamiento no soportado')
    }
  }
}

// Buen ejemplo
class Navegador {
  private estrategia: EstrategiaDesplazamiento
  constructor(estrategia: EstrategiaDesplazamiento) {
    this.estrategia = estrategia
  }

  construirRuta(a: Coordenada, b: Coordenada) {
    return this.estrategia.calcularRuta(a, b)
  }

  cambiarEstrategia(estrategia: EstrategiaDesplazamiento) {
    this.estrategia = estrategia
  }
}

interface EstrategiaDesplazamiento {
  calcularRuta(a: Coordenada, b: Coordenada): number
}

class EstrategiaDesplazamientoAuto implements EstrategiaDesplazamiento {
  calcularRuta(a: Coordenada, b: Coordenada) {
    const distancia = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
    return distancia * 2
  }
}

class EstrategiaDesplazamientoPie implements EstrategiaDesplazamiento {
  calcularRuta(a: Coordenada, b: Coordenada) {
    const distancia = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
    return distancia * 10
  }
}

class EstrategiaDesplazamientoBici implements EstrategiaDesplazamiento {
  calcularRuta(a: Coordenada, b: Coordenada) {
    const distancia = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
    return distancia * 5
  }
}

function main() {
  const a = new Coordenada(0, 0)
  const b = new Coordenada(10, 10)

  const navegador = new Navegador(new EstrategiaDesplazamientoAuto())
  console.log(`Demora en auto: ${navegador.construirRuta(a, b)} minutos`)
  navegador.cambiarEstrategia(new EstrategiaDesplazamientoPie())
  console.log(`Demora a pie: ${navegador.construirRuta(a, b)} minutos`)
  navegador.cambiarEstrategia(new EstrategiaDesplazamientoBici())
  console.log(`Demora en bici: ${navegador.construirRuta(a, b)} minutos`)
}

main()
