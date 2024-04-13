import type { week } from "~/interfaces/week";

export default function(): week[] {
  const date: Date = new Date();

  const countDayOnMonth: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const weekDay: number = date.getDay();
  const monthDay: number = date.getDate();
  const month: number = date.getMonth();

  const weeks: string[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Cб', 'Вс'];
  const result: week[] = []

  let countMonthDay: number;

  if (weekDay > 1) {
    countMonthDay = monthDay - (weekDay - 1);
  } else if (weekDay === 0) {
    countMonthDay = monthDay - 6;
  } else {
    countMonthDay = monthDay;
  }

  for (let i = 0; i < weeks.length; i++) {
    if ((countMonthDay + i) > countDayOnMonth[month]) {

      let count: number = countDayOnMonth[month] - (countMonthDay + (weeks.length - 1));
      result.push({
        week: weeks[i],
        day: count + i
      },);

    } else {
      result.push({
        week: weeks[i],
        day: countMonthDay + i
      },)
    }

  }

  return result
}