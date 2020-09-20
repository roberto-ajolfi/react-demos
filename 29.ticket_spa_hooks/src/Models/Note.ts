export default class Note {
    constructor(
        public id: number,
        public text: string,
        public created: Date,
        public ticketId: number
    ) {
    }
}