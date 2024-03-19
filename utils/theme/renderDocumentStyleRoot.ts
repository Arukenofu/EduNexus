import documentElementSetProperty from "~/utils/theme/documentElementSetProperty";

export default function () {
    const theme = useState('theme')

    if (localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark') {
        documentElementSetProperty('--bg', '#171717');
        documentElementSetProperty('--text', '#FFFFFF');
        documentElementSetProperty('--bg-secondary', '#2d2d2d');
        documentElementSetProperty('--text-secondary', '#9d9d9d');

        theme.value = 'dark';
    }

    else {
        documentElementSetProperty('--bg', '#FFFFFF');
        documentElementSetProperty('--text', '#171717');
        documentElementSetProperty('--bg-secondary', '#dedede');
        documentElementSetProperty('--text-secondary', '#3d3d3d');

        theme.value = 'light';
    }
}