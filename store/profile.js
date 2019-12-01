export const state = () => ({
  signedIn: false,
  avatar: 'https://pbs.twimg.com/media/DxI2D7NW0AAqsPx.jpg',
  username: 'john_doe',
  googleSignin: 'john_doe@gmail.com',
  firstname: 'John',
  lastname: 'Doe',
  email: 'john@doe.com',
  tel: '+66855469978',
  company: 'Doe Tech Co., Ltd',
  address: `Doe Tech Co., Ltd
      228/24-25 Lat Phrao Road
      Chom Phon, Chatuchak,
      Bangkok 10900
      Thailand`
    .split('\n')
    .map(line => line.trim())
    .join('\n'),
  logs: [
    {
      no: 2,
      status: 'success',
      ip: '127.123.111.1',
      country: 'Thailand',
      date: 'May 23, 2019',
      time: '8.03'
    },
    {
      no: 1,
      status: 'fail',
      ip: '127.123.111.1',
      country: 'Thailand',
      date: 'May 23, 2019',
      time: '8.01'
    }
  ]
})

export const mutations = {
  SET_FIRSTNAME: (state, payload) => (state.firstname = payload),
  SET_LASTNAME: (state, payload) => (state.lastname = payload),
  SET_EMAIL: (state, payload) => (state.email = payload),
  SET_TEL: (state, payload) => (state.tel = payload),
  SET_COMPANY: (state, payload) => (state.company = payload),
  SET_ADDRESS: (state, payload) => (state.address = payload),
  SIGN_IN: (state, payload) => (state.signedIn = payload)
}

export const actions = {
  edit({ commit }, { firstname, lastname, email, tel, company, address }) {
    commit('SET_FIRSTNAME', firstname)
    commit('SET_LASTNAME', lastname)
    commit('SET_EMAIL', email)
    commit('SET_TEL', tel)
    commit('SET_COMPANY', company)
    commit('SET_ADDRESS', address)
  },
  signIn({ commit }) {
    return commit('SIGN_IN', true)
  },
  signOut({ commit }) {
    return commit('SIGN_IN', false)
  }
}
