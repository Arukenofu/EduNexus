



export const useRouteParams = (paramName?: string): any  => {

  if (paramName) {
    return useRoute().params[paramName];
  } else {
    return useRoute().params
  }

}