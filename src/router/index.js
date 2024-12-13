import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
  { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') },
  { path: '/projects', name: 'projects', component: () => import('@/views/ProjectsView.vue') },
  { path: '/resume', name: 'resume', component: () => import('@/views/ResumeView.vue') },
  { path: '/contact', name: 'contact', component: () => import('@/views/ContactView.vue') },
  { path: '/media', name: 'media', component: () => import('@/views/MediaView.vue') },
  { path: '/terms-and-conditions', name: 'terms-and-conditions', component: () => import('@/views/TermsAndConditionsView.vue') },
  { path: '/privacy-policy', name: 'privacy-policy', component: () => import('@/views/PrivacyPolicyView.vue') }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
