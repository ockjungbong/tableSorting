function speak () {
    console.log(this.sound)
  }
  var realDuck = {
    sound: 'quack!',
    speak: speak
  }
  var rubberDuck = {
    sound: 'beep beep',
    speak: speak
  }
  realDuck.speak()   // quack!
  rubberDuck.speak() // beep beep