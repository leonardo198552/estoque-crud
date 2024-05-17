import { createRouter, createWebHistory } from 'vue-router';
import EstoqueList from '../components/EstoqueList.vue';
import EstoqueAdd from '../components/EstoqueAdd.vue';
import EstoqueEdit from '../components/EstoqueEdit.vue';
import EstoqueView from '../components/EstoqueView.vue';

const routes = [
  { path: '/', component: EstoqueList },
  { path: '/add', component: EstoqueAdd },
  { path: '/edit/:id', component: EstoqueEdit },
  { path: '/view/:id', component: EstoqueView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
