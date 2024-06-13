import is from "@sindresorhus/is";


export default defineNuxtRouteMiddleware(async (to, from) => {
    if (to.path === '/') {

        return navigateTo('/home/main');

    }

    if (to.path !== '/auth') {

        if (!localStorage.getItem('token')) {
            return navigateTo('/auth')
        }

        const {data} = await useAPI('/profile')

        if (!data.value) {
            sendToast({
                type: "error",
                message: "Войдите в аккаунт"
            })

            return navigateTo('/auth')
        }

    }

})