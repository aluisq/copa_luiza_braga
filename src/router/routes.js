
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/index.vue') },
      { path: '/home', component: () => import('pages/index.vue') },
      { path: '/galeria', component: () => import('pages/galeria.vue') },
      { path: '/oportunidades', component: () => import('pages/oportunidades.vue') },
      { path: '/cronograma', component: () => import('pages/cronograma.vue') },
      { path: '/estatistica', component: () => import('pages/estatistica.vue') },
      { path: '/home/america', component: () => import('pages/america.vue') },
      { path: '/home/central', component: () => import('pages/central.vue') },
      { path: '/home/salgueiro', component: () => import('pages/salgueiro.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
