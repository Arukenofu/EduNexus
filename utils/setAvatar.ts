export default function(value: string) {
  const base = useRuntimeConfig().public.apiBase

  if (value?.startsWith('storage')) {
    return `background-image: url('${base.slice(0, -3)}file/${value}')`
  }

  return `background-image: url('${value}')`
}