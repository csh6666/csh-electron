import { createRouter, createWebHistory } from 'vue-router'
const HomeIndex = () => import('../pages/home/HomeIndex.vue')
const ContactsIndex = () => import('../pages/contacts/ContactsIndex.vue')
const CollectionIndex = () => import('../pages/collection/CollectionIndex.vue')
const FolderIndex = () => import('../pages/folder/FolderIndex.vue')
const MomentsIndex = () => import('../pages/moments/MomentsIndex.vue')
const router = createRouter({
  history: createWebHistory(),
  routes: [
   { path: '/', component: HomeIndex },
   { path: '/contacts', component: ContactsIndex },
   { path: '/collection', component: CollectionIndex },
   { path: '/folder', component: FolderIndex },
   { path: '/moments', component: MomentsIndex },
  ],
})
 export default router