import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  },
  getUser (id) {
    return Api().post('user/id', id)
  },
  getAllUser () {
    return Api().getAllUser('user')
  }
}
