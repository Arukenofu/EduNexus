import { useFetch } from "#app"
import type { ReturnType } from "birpc";

type useFetchType = typeof useFetch;

let timeoutId: ReturnType<typeof setTimeout>;

const onError = (error: Error) => {
  const state = useState('isError')

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  state.value = error;

  timeoutId = setTimeout(() => {
    state.value = ''
  }, 15 * 1000)
}


export const useAPI: useFetchType = (path, options = {}) => {
  const config = useRuntimeConfig()

  options.baseURL = "http://localhost:8080/api";
  options.timeout = 7 * 1000;
  options.server = false;

  options.onResponseError = ({error}) => {
    onError(error!)
  }

  options.onRequestError = ({error}) => {
    onError(error!)
  }

  return useFetch(path, options)
}