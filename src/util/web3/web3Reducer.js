const initialState = {
  provider: null,
  web3Instance: null
}

const web3Reducer = (state = initialState, action) => {
  if (action.type === 'WEB3_INITIALIZED')
  {
    return Object.assign({}, state, {
      provider: action.payload.provider,
      web3Instance: action.payload.web3Instance
    })
  }

  return state
}

export default web3Reducer
