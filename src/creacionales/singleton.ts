class Impresora {
  private cola: string[] = []
  private static instance: Impresora = null!
  private constructor() {
    console.log('Creando unica instancia de Impresora')
  }

  static getInstance(): Impresora {
    console.log('Obteniendo instancia de Impresora')
    if (this.instance === null) {
      this.instance = new Impresora()
    }
    return this.instance
  }

  encolar(str: string) {
    this.cola.push(str)
  }

  imprimir() {
    console.log
    console.log('Imprimiendo\n-------------------------------')
    for (const str of this.cola) {
      console.log(`-- ${str} --`)
    }
    console.log('-------------------------------')
    this.cola = []
  }

  verCola() {
    console.log('Documentos en cola:', this.cola)
  }
}

function main() {
  const impresora1 = Impresora.getInstance()

  impresora1.encolar('hola')

  const impresora2 = Impresora.getInstance()

  impresora2.encolar('mundo')

  impresora1.verCola()

  impresora2.imprimir()

  impresora1.verCola()
}

main()
