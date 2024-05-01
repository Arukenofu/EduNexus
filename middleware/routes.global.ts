
import getToken from "~/utils/getToken";

export default defineNuxtRouteMiddleware(async (to, from) => {
    if (to.path === '/') {
        return navigateTo('/home/main')
    }

    if (to.path !== '/auth' && !useCookie('token').value) {

        return navigateTo('/auth');

    } else {



    }
})