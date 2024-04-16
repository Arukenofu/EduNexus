type exercise = 'Задание' | 'Quiz' | 'Кодинг' | 'Эссе';

export interface Assignments {
  id: number,
  module_id: number,
  description: string,
  content: object,
  assignment_type: exercise
}