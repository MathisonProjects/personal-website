import { createRouter, createWebHistory } from 'vue-router'

const DEFAULT_TITLE = 'Mathison Projects - I shall either find a way or make one'

const routes = [
  { path: '/', name: 'home', component: () => import('@/views/HomeView.vue'), meta: { title: 'Mathison Projects Inc - Home' } },
  { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue'), meta: { title: 'Mathison Projects Inc - About' } },
  { path: '/projects', name: 'projects', component: () => import('@/views/ProjectsView.vue'), meta: { title: 'Mathison Projects Inc - Projects' } },
  { path: '/resume', name: 'resume', component: () => import('@/views/ResumeView.vue'), meta: { title: 'Mathison Projects Inc - Resume' } },
  { path: '/contact', name: 'contact', component: () => import('@/views/ContactView.vue'), meta: { title: 'Mathison Projects Inc - Contact' } },
  { path: '/media', name: 'media', component: () => import('@/views/MediaView.vue'), meta: { title: 'Mathison Projects Inc - Media' } },
  { path: '/terms-and-conditions', name: 'terms-and-conditions', component: () => import('@/views/TermsAndConditionsView.vue'), meta: { title: 'Mathison Projects Inc - Terms and Conditions' } },
  { path: '/privacy-policy', name: 'privacy-policy', component: () => import('@/views/PrivacyPolicyView.vue'), meta: { title: 'Mathison Projects Inc - Privacy Policy' } }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to) => {
  const title = to.meta.title || DEFAULT_TITLE
  document.title = title
})

export default router
