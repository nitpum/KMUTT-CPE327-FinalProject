const cardType = {
  '4': 'Visa',
  '5': 'Mastercard'
}

export const state = () => ({
  method: {
    number: '0000-0000-0000-0000',
    expires: '00/00'
  },
  address: {
    name: '',
    addr1: '',
    addr2: '',
    country: ''
  }
})

export const getters = {
  cardExist: state => state.method.expires !== '00/00',
  method: state => ({
    type: cardType[state.method.number.split('')[0]] || 'Unknown type',
    ending: state.method.number.split('-').slice(-1)[0],
    expires: state.method.expires
  }),
  addressExist: state => !!state.address.name
}

export const mutations = {
  SET_METHOD(state, { number, expires }) {
    state.method.number = number
    state.method.expires = expires
  },
  REMOVE_METHOD(state) {
    state.method.number = '0000-0000-0000-0000'
    state.method.expires = '00/00'
  },
  SET_ADDRESS(state, { name, addr1, addr2, country }) {
    state.address = {
      name,
      addr1,
      addr2,
      country
    }
  },
  REMOVE_ADDRESS(state) {
    state.address = {
      name: '',
      addr1: '',
      addr2: '',
      country: ''
    }
  }
}
