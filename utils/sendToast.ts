import type { Toast } from "~/interfaces/Toast";

let timeout: ReturnType<typeof setTimeout>

export default function(options: Toast) {


  const state = useState<Toast | ''>('toast');

  if (timeout) {
    clearTimeout(timeout);
  }

  state.value = options;

  timeout = setTimeout(() => {
    state.value = ''
  }, options.time || 5 * 1000)

}