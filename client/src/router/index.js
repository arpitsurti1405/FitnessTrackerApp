import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserInfo from '@/components/UserInfo'
import ExerciseEquipments from '@/components/ExerciseEquipments'
import ExercisesType from '@/components/ExercisesType'
import WorkoutType from '@/components/WorkoutType'
import Register from '@/components/register'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/profile',
      name: 'profile',
      component: UserInfo
    },
    {
      path: '/equipmentType',
      name: 'equipmentType',
      component: ExerciseEquipments
    },
    {
      path: '/exerciseType',
      name: 'exerciseType',
      component: ExercisesType
    },
    {
      path: '/workoutType',
      name: 'workoutType',
      component: WorkoutType
    }
  ]
})
