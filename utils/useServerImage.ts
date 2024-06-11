export default function(value) {
  const base = useRuntimeConfig().public.apiBase

  return `${base.slice(0, -3)}file/assets${value}`
}