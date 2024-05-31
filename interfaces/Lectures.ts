export interface Lectures {
  lectures: {
    assignment_id: number,
    module_id: number,
    description: string,
    content: string,
    days: string,
    assignment_type_id: number,
    title: string
  }[]
}