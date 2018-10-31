class FlightlessBird {
  constructor (bird) {
    this.name = bird.name
    this.height = bird.height
    this.flightless = true
    this.isExtinct = bird.isExtinct
    this.runningSpeed = bird.runningSpeed

  }
  toString() {
    if (this.isExtinct === true) {
      return (`The now-extinct ${this.name} was a flightless bird. It stood ${this.height} tall and could run at a speed of ${this.runningSpeed} mph`)
    } else {
    return (`The ${this.name} is a flightless bird. It stands ${this.height} tall and can run at a speed of ${this.runningSpeed} mph`)
    }
  }
}

const somaliOstrich = {
  name: "Somali Ostrich",
  height: "6.6 feet",
  isExtinct: false,
  runningSpeed: "43"
}

const emperorPenguin = {
  name: "Emperor Penguin",
  height: "48 in",
  isExtinct: false,
  runningSpeed: "1.7"
}

const southCassowary = {
  name: "Southern Cassowary",
  height: "5-6 feet",
  isExtinct: false,
  runningSpeed: "31"
}

const somOst = new FlightlessBird(somaliOstrich)
const empPeng = new FlightlessBird(emperorPenguin)
const southCass = new FlightlessBird(southCassowary)

console.log(somOst.toString())