export const state = () => ({
  breadcrumbs: [],
  tickets: []
})

export const mutations = {
  SET_BREADCRUMBS: (state, payload) => (state.breadcrumbs = payload),
  ADD_TICKET: (state, payload) => state.tickets.push(payload)
}
