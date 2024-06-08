import { useFetch } from "#app"
import sendToast from "~/utils/sendToast";

type useFetchType = typeof useFetch;


export const useAPI: useFetchType = (path, options = {}) => {
  const config = useRuntimeConfig()

  options.baseURL = config.public.apiBase;
  options.timeout = 7 * 1000;
  options.server = false;

  options.onResponseError = (error) => {
    sendToast({type: 'error', message: error.response['_data']?.error_message || 'Произошла неизвестная ошибка'})
  }

  options.headers = {
    ...options.headers,
     Authorization: "Bearer " + getToken() || '',
  };
  

  return useFetch(path, options)
}