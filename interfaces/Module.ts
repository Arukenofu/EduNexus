export interface Module {
  name: string,
  lectures: {
    read: number,
    length: number
  },
  assignments: {
    done: number,
    length: number
  }
}