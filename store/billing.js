const cardType = {
  '4': 'Visa',
  '5': 'Mastercard'
}

export const state = () => ({
  method: {
    number: '0000-0000-0000-0000',
    expires: '00/00'
  }
})

export const getters = {
  cardExist: state => state.method.expires !== '00/00',
  method: state => ({
    type: cardType[state.method.number.split('')[0]] || 'Unknown type',
    ending: state.method.number.split('-').slice(-1)[0],
    expires: state.method.expires
  })
}

export const mutations = {
  SET_METHOD(state, { number, expires }) {
    state.method.number = number
    state.method.expires = expires
  },
  REMOVE_METHOD(state) {
    state.method.number = '0000-0000-0000-0000'
    state.method.expires = '00/00'
  }
}
