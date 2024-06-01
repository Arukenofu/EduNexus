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
  }, 15 * 1000)

}