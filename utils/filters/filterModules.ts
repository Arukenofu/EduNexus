import type { Forum } from "~/interfaces/Forum";
import type { Lectures } from "~/interfaces/Lectures";
import type { Assignments } from "~/interfaces/Assignments";

export default async function(value: Lectures['lectures'] | Forum | Assignments, course: string ) {
  const modules = await getModules(course);
}