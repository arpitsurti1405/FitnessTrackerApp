import Api from '@/services/Api'

export default {
  add (req) {
    return Api().post('workoutTypes', req)
  }
}
