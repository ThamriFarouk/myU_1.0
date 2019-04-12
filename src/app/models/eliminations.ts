export class Eliminations {
  constructor(public course, public nbabsences, public maxAbsencesAllowed) {
    this.course = course;
    this.nbabsences = nbabsences;
    this.maxAbsencesAllowed = maxAbsencesAllowed;
  }

  isEliminated() {
    if (this.nbabsences >= this.maxAbsencesAllowed) {
      return true;
    } else {
      return false;
    }
  }
}
