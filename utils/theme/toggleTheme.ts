import renderDocumentStyleRoot from "~/utils/theme/renderDocumentStyleRoot";

export default function () {

    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark');
    }

    else if (localStorage.getItem('theme') === 'light') {
        localStorage.setItem('theme', 'dark');
    }

    else if (localStorage.getItem('theme') === 'dark') {
        localStorage.setItem('theme', 'light');
    }

    renderDocumentStyleRoot();
}