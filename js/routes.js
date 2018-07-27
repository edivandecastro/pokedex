const routes = [
  { path: '/', component: Vue.component('home-page') },
  { path: '/:number', component: Vue.component('about-page') },
]

const myRouter = new VueRouter({routes})

myRouter.beforeEach((to, from, next) => {
  if (to.path !== '/') {
    var pokeNumber = to.path.slice(1);

    if (!pokeNumber.match(/\D/g)) {
      next(true)
    } else {
      next('/');
    }
  } else {
    next(true);
  }
})