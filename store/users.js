const state = () => ({
  users: [
    {
      id: 0,
      avatar: 'https://pbs.twimg.com/media/DxI2D7NW0AAqsPx.jpg',
      username: 'john_doe',
      googleSignin: 'john_doe@gmail.com',
      firstname: 'John',
      lastname: 'Doe',
      email: 'john@doe.com',
      password: '1234',
      tel: '+66855469978',
      company: 'Doe Tech Co., Ltd',
      address: `Doe Tech Co., Ltd
      228/24-25 Lat Phrao Road
      Chom Phon, Chatuchak,
      Bangkok 10900
      Thailand`
        .split('\n')
        .map(line => line.trim())
        .join('\n')
    }
  ]
})

const mutations = {
  ADD_USER: (stete, payload) => state.users.push(payload)
}
