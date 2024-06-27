


export default defineNuxtRouteMiddleware(async (to, from) => {
    if (to.path === '/') {

        return navigateTo('/home/main');

    }

    if (to.path !== '/auth') {



    }

})