export default function(): string {
  const theme = useState('theme', () => 'dark');

  if (theme.value === 'dark') {
    return 'iconoir:sun-light'
  }

  else {
    return 'iconoir:half-moon'
  }
}