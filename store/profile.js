export const state = () => ({
  avatar: 'https://pbs.twimg.com/media/DxI2D7NW0AAqsPx.jpg',
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
})

export const mutations = {
  SET_FIRSTNAME: (state, payload) => (state.firstname = payload),
  SET_LASTNAME: (state, payload) => (state.lastname = payload),
  SET_EMAIL: (state, payload) => (state.email = payload),
  SET_TEL: (state, payload) => (state.tel = payload),
  SET_COMPANY: (state, payload) => (state.company = payload),
  SET_ADDRESS: (state, payload) => (state.address = payload)
}

export const actions = {
  edit({ commit }, { firstname, lastname, email, tel, company, address }) {
    commit('SET_FIRSTNAME', firstname)
    commit('SET_LASTNAME', lastname)
    commit('SET_EMAIL', email)
    commit('SET_TEL', tel)
    commit('SET_COMPANY', company)
    commit('SET_ADDRESS', address)
  }
}
