import renderDocumentStyleRoot from "~/utils/theme/renderDocumentStyleRoot";

export default function () {
    function set(value: string) {
        localStorage.setItem('theme', value)
    }

    if (!localStorage.getItem('theme')) {
        set('dark')
    }

    else if (localStorage.getItem('theme') === 'light') {
        set('dark')
    }

    else if (localStorage.getItem('theme') === 'dark') {
        set('light')
    }

    renderDocumentStyleRoot();
}