import type { LocationQuery } from "vue-router";

export default function () {

  return computed<LocationQuery>(() => useRoute().query)

}