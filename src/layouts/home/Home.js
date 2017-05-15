import React, { Component } from 'react'
import SimpleStorageContract from '../../../build/contracts/SimpleStorage.json'
import store from '../../store'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageValue: 0
    }
  }

  componentWillMount() {
    // Ensure web3 is initialized, then instantiate contract.
    // Subscribe to store so we know once web3 is initialized.
    // See utils/getWeb3 for more info.

    store.subscribe(() => { this.instantiateContract() })
  }

  instantiateContract() {
    if (typeof store.getState().web3.web3Instance !== 'undefined') {
      /*
       * SMART CONTRACT EXAMPLE
       */

      const contract = require('truffle-contract')
      const simpleStorage = contract(SimpleStorageContract)
      simpleStorage.setProvider(store.getState().web3.provider)

      // Declaring this for later so we can chain functions on SimpleStorage.
      var simpleStorageInstance

      // Get current coinbase.
      store.getState().web3.web3Instance.eth.getCoinbase((error, coinbase) => {
        simpleStorage.deployed().then((instance) => {
          simpleStorageInstance = instance

          // Stores a value of 5.
          return simpleStorageInstance.set(5, {from: coinbase})
        }).then((result) => {
          // Get the value from the contract to prove it worked.
          return simpleStorageInstance.get.call(coinbase)
        }).then((result) => {
          // Update state with the result.
          return this.setState({ storageValue: result.c[0] })
        })
      })

    }
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Good to Go!</h1>
            <p>Your Truffle Box is installed and ready.</p>
            <h2>Smart Contract Example</h2>
            <p>The below will show a stored value of 5 by default if your contracts compiled and migrated successfully.</p>
            <p>Try changing the value stored on <strong>line 50</strong> of App.js.</p>
            <p>The stored value is: {this.state.storageValue}</p>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
