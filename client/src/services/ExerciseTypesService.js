import Api from '@/services/Api'

export default {
  getAllExerciseTypes () {
    return Api().get('ExerciseTypes')
  }
}
