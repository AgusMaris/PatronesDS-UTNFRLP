interface IProducto {
  nombre: string
  getPrecio(): number
}

class Producto implements IProducto {
  constructor(public nombre: string, public precio: number) {}

  getPrecio(): number {
    console.log('Obteniendo precio de:', this.nombre, '-->', this.precio)
    return this.precio
  }
}

class Caja implements IProducto {
  private productos: IProducto[] = []

  constructor(public nombre: string) {}

  agregar(producto: IProducto) {
    this.productos.push(producto)
  }

  getPrecio(): number {
    console.log('Obteniendo precio de:', this.nombre)
    let total = 0
    for (const producto of this.productos) {
      total += producto.getPrecio()
    }
    return total
  }
}

function main() {
  const comboSonido = new Caja('kit sonido')
  comboSonido.agregar(new Producto('parlantes', 100))
  comboSonido.agregar(new Producto('subwoofer', 200))
  comboSonido.agregar(new Producto('cables', 10))

  const comboPc = new Caja('combo pc')
  comboPc.agregar(new Producto('monitor', 200))
  comboPc.agregar(new Producto('teclado', 50))
  comboPc.agregar(new Producto('mouse', 30))
  comboPc.agregar(comboSonido)

  console.log('\nTOTAL -->', comboPc.getPrecio())
}

main()
