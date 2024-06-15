import type { CourseDetailed } from "~/interfaces/CourseDetailed";

export default async function(course: string) {

  const {data} = await useAPI<CourseDetailed>(`/courses/${course}/`);

  return data.value?.modules
}