export default function(assignment_id: number) {
  switch (assignment_id) {
    case 1: return 'lecture';
    case 2: return 'quiz';
    case 3: return 'code';
    case 4: return 'match';
    case 5: return 'fill-in';
  }
}