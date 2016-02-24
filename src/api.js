// 所有的 API

const host = 'https://api.github.com/repos/facebook'

const api = {
  forks(repos) {
    return `${host}/${repos}/forks`
  },
  pulls(repos) {
    return `${host}/${repos}/pulls`
  }
}

export default api
