export class ExamCalendar {

    public id: String;
    public class: String;
    public name: String;
    public schoolYear: String;
    public exams: String;

    constructor(id, class, name, schoolYear, exams) {
        this.id = id;
        this.class = class;
        this.name = name;
        this.schoolYear = schoolYear;
        this.exams = exams;
    }
}