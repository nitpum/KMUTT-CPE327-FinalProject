import moment from 'moment'

export const state = () => ({
  breadcrumbs: [],
  tickets: [
    {
      subject: "I'm forget the way back to my home please help",
      description: 'Please someone help me',
      created: moment('2019-12-1'),
      status: 'closed',
      assigned: 'Linus toward',
      priority: 'Very high',
      self: true,
      comments: [
        {
          avatar:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg/330px-LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg',
          fullname: 'Linus towards',
          content: 'Sorry?!',
          created: moment('2019-12-1')
        },
        {
          self: true,
          content: 'Ahhh!!! sorry, wrong website',
          created: moment('2019-12-1')
        }
      ]
    }
  ]
})

export const mutations = {
  SET_BREADCRUMBS: (state, payload) => (state.breadcrumbs = payload),
  ADD_TICKET: (state, payload) => state.tickets.push(payload),
  SET_TICKETS: (state, payload) => state.tickets = payload,
  SET_TICKET: (state, { index, ticket}) => state.tickets[index] = ticket,
  ADD_TICKET_COMMENT: (state, { index, comment}) => state.tickets[index].comments.push(comment)
}

export const actions = {
  ADD_TICKET_COMMENT({ state, commit }, { index, ticket }) {
    tickets[index] = ticket
    commit('SET_TICKET', tickets)
  }
}
