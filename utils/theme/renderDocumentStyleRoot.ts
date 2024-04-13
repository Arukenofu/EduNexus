import documentElementSetProperty from "~/utils/theme/documentElementSetProperty";

export default function () {
    const theme = useState('theme')

    if (localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark') {
        documentElementSetProperty('--bg', '#171717');
        documentElementSetProperty('--text', '#e8eaed');
        documentElementSetProperty('--bg-secondary', '#2d2d2d');
        documentElementSetProperty('--text-secondary', '#9d9d9d');
        documentElementSetProperty('--bg-third', '#101010')
        documentElementSetProperty('--border', '#2d2d2d')
        documentElementSetProperty('--ui-secondary', '#171717')

        theme.value = 'dark';
    }

    else {
        documentElementSetProperty('--bg', '#efefeb');
        documentElementSetProperty('--text', '#171717');
        documentElementSetProperty('--bg-secondary', '#d7d7d7');
        documentElementSetProperty('--text-secondary', '#3d3d3d');
        documentElementSetProperty('--bg-third', '#ffffff')
        documentElementSetProperty('--border', '#e0e0e0');
        documentElementSetProperty('--ui-secondary', '#efefeb')

        theme.value = 'light';
    }
}