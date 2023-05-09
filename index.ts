interface IInterface {
  print: (str: string) => void
}

class MyConsole implements IInterface {
  print(str: string) {
    console.log(str)
  }
}

new MyConsole().print('hello world')
