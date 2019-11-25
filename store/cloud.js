export const state = () => ({
  services: [
    {
      name: 'ubuntu-s-1vcpu-1gb-sg1',
      image: 'Ubuntu 18.04.3 (LTS) x64',
      region: 'SG1',
      cpu: '1 vCPUs',
      memory: '1GB',
      storage: '25GB',
      price: '($5/mo)',
      ipv4: '192.81.217.239'
    },
    {
      name: 'ubuntu-s-1vcpu-1gb-sg1',
      image: 'Ubuntu 18.04.3 (LTS) x64',
      region: 'SG1',
      cpu: '1 vCPUs',
      memory: '1GB',
      storage: '25GB',
      price: '($5/mo)',
      ipv4: '192.81.217.239'
    },
    {
      name: 'ubuntu-s-1vcpu-1gb-sg1',
      image: 'Ubuntu 18.04.3 (LTS) x64',
      region: 'SG1',
      cpu: '1 vCPUs',
      memory: '1GB',
      storage: '25GB',
      price: '($5/mo)',
      ipv4: '192.81.217.239'
    }
  ]
})

export const mutations = {
  ADD_SERVICE(state, { name, image, region, cpu, memory, storage, price, ipv4 }) {
    state.services.push({
      name, image, region, cpu, memory, storage, price, ipv4
    })
  }
}