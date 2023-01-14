let instance

class DBConnection {
  constructor(uri) {
    if (instance) {
      throw new Error("Only one connection can exist!")
    }
    this.uri = uri
    instance = this
  }

  connect() {
    this.isConnected = true
    console.log(`DB ${this.uri} has been connected!`)
  }

  disconnect() {
    this.isConnected = false
    console.log("DB disconnected")
  }
}

const databaseConnector = Object.freeze(new DBConnection())
const connection = databaseConnector
