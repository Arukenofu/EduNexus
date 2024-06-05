export interface CourseDetailed {
  modules: string[],

  teachers: {
    firstname: string,
    surname: string
  }[],

  details?: {
    id: number,
    description: string,
    image: string
  },

  enrolled: bigint
}