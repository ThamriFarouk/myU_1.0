export class Teacher {


    constructor(public id: number, public name: String) {

    }

    public static fromJson(json: Object): Teacher {
        return new Teacher (
            json['id'],
           json['name']
            );
    }
}
