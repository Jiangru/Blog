const Home = () => import('@/views/home/index.vue')
const BlogHome = () => import('@/views/blog/index.vue')
const Article = () => import('@/views/blog/article.vue')

export default [
	{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '蒋如意的主页'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogHome,
    meta: {
      title: '蒋如意的博客'
    }
  },
  {
    path: '/blog/article',
    name: 'Article',
    component: Article
  }
]