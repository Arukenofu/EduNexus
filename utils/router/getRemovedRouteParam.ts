export default function(level: number = 1): string {
  const url: string = useRoute().fullPath;

  const parts: string[] = url.split('/');
  const countToRemove = level > 0 ? level : 1

  if (countToRemove >= parts.length) {
    return parts.slice(0, 1).join('/')
  } else {
    parts.splice(-countToRemove);
    return parts.join('/');
  }

}