import type { Lectures } from "~/interfaces/Lectures";

export default function(lectures: Lectures['lectures'], state: string): Lectures['lectures'] | null {
  if (state === 'По убыванию') {
    return lectures
  }
  if (state === 'По возрастанию') {
    return lectures.slice().reverse()
  }

  if (state === 'Прочитанные' || state === 'Выполненные') {
    return lectures.filter(value => value.read)
  }

  if (state === 'Невыполенные' || state === 'Непрочитанные') {
    return lectures.filter(value => !value.read)
  }

  return []
}