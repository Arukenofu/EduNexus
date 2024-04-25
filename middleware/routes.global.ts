export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/') {
        return navigateTo('/home/main')
    }

    // if (to.path !== '/auth' && !useCookie('token').value) {

        // return navigateTo('/auth');

    // }
})