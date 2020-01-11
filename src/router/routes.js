const Home = () => import('@/views/home/index.vue')

export default [
	{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]