import type { RouteParams } from "vue-router";


export const useRouteParams = () => {

    return computed<RouteParams>(() => useRoute().params);

}