import documentElementSetProperty from "~/utils/theme/documentElementSetProperty";

export default function () {
    const theme = useState('theme')

    if (localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark') {
        documentElementSetProperty('--bg', '#09090B');
        documentElementSetProperty('--text', '#FAFAFA');
        documentElementSetProperty('--bg-secondary', '#27272A');
        documentElementSetProperty('--text-secondary', '#A1A1AA');
        documentElementSetProperty('--bg-third', '#101010');
        documentElementSetProperty('--border', '#1f1f22');
        documentElementSetProperty('--ui-secondary', '#171717');
        documentElementSetProperty('--text-soft', '#dcdcdc')
        documentElementSetProperty('--bg-fourth', '#1e1e1e')

        theme.value = 'dark';
    }

    else {
        documentElementSetProperty('--bg', '#FFFFFF');
        documentElementSetProperty('--text', '#09090b');
        documentElementSetProperty('--bg-secondary', '#f4f4f5');
        documentElementSetProperty('--text-secondary', '#71717A');
        documentElementSetProperty('--bg-third', '#ffffff')
        documentElementSetProperty('--border', '#e7e7ea');
        documentElementSetProperty('--ui-secondary', '#efefeb');
        documentElementSetProperty('--text-soft', '#171717')
        documentElementSetProperty('--bg-fourth', '#FFFFFF')

        theme.value = 'light';
    }
}