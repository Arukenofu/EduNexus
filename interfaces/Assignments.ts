type exercise = 'Задание' | 'Quiz' | 'Кодинг' | 'Эссе';

export interface Assignments {
  id: number,
  module_id: number,
  course_id: number,
  title: string,
  description: string,
  content: object,
  days: string,
  assignment_type: exercise
}