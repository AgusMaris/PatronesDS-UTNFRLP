abstract class Registro {
  guardar(): void {
    if (this.validar() === false) {
      this.arrojarError()
      return
    }
    this.antesGuardar()
    this.guardarBD()
    this.despuesGuardar()
  }

  private guardarBD(): void {
    console.log('Guardando en BD')
  }

  abstract validar(): boolean
  abstract antesGuardar(): void
  abstract despuesGuardar(): void
  abstract arrojarError(): void
}

class Usuario extends Registro {
  private nombre: string
  private apellido: string
  constructor(nombre: string, apellido: string) {
    super()
    this.nombre = nombre
    this.apellido = apellido
  }

  validar(): boolean {
    if (this.nombre.length < 3 || this.nombre.length > 20) {
      return false
    }
    if (this.apellido.length < 3 || this.apellido.length > 20) {
      return false
    }
    return true
  }
  antesGuardar(): void {
    console.log('Antes de guardar Usuario')
  }
  despuesGuardar(): void {
    console.log('Enviando email de bienvenida')
  }
  arrojarError(): void {
    console.log('Error al guardar Usuario')
  }
}

class Post extends Registro {
  private autor: Usuario = null!
  private contenido: string
  constructor(contenido: string) {
    super()
    this.contenido = contenido
  }

  asignarAutor(usuario: Usuario) {
    this.autor = usuario
  }

  validar(): boolean {
    if (this.autor === null || this.autor.validar() === false) {
      return false
    }
    if (this.contenido.length < 10 || this.contenido.length > 100) {
      return false
    }
    return true
  }
  antesGuardar(): void {
    console.log('Antes de guardar Post')
  }
  despuesGuardar(): void {
    console.log('Redirigiendo al post')
  }
  arrojarError(): void {
    console.log('Error al guardar Post')
  }
}

function main() {
  const usuario = new Usuario('Ju', 'Perez')
  usuario.guardar()
  const post = new Post('Hola mundo')
  post.guardar()
  post.asignarAutor(usuario)
  post.guardar()
}

main()
