export interface Courses {
  courses: Course[],
  pages?: number
}

export interface Course {
  title: string,
  organization_name: string
  image: string
}