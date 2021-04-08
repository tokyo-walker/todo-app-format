export class Todo {
    private id: number;
    private name: string;
    private deadline: Date;
    private isFavorite: boolean;

    constructor(id: number, name: string, deadline: Date, isFavorite: boolean ) {
        this.id = id;
        this.name = name;
        this.deadline = deadline;
        this.isFavorite = isFavorite;
    }
}