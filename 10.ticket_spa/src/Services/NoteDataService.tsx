import TicketView from "../Models/TicketViewModel";
import Ticket from "../Models/TicketModel";
import Note from "../Models/Note";

export default class NoteDataService {
    apiURL: string = "https://localhost:44328/api/note";
    basicAuthAccount: string = process.env.REACT_APP_USERNAME + ":" + process.env.REACT_APP_PASSWORD
    basicHeaders: Headers = new Headers({
        "Authorization": "Basic " + btoa(this.basicAuthAccount),
        "Accept": "application/json",
        "Content-Type": "application/json",
        "TenantCode": String(process.env.REACT_APP_TENANT_NAME)
    });

    async getNotesByTicketId(ticketId: string) {
        try {
            const promise = await fetch(this.apiURL + '?ticketId=' + ticketId, {
                headers: this.basicHeaders
            });
            const data = await promise.json();

            return data;
        } catch(err) {
            return [];
        }
    }

    async getNoteById(id: string) {
        try {
            const promise = await fetch(this.apiURL + '/' + id, {
                headers: this.basicHeaders
            });
            const data = await promise.json();

            return data;
        } catch(err) {
            return {};
        }
    }

    async deleteNoteById(id: string) {
        try {
            const promise = await fetch(this.apiURL + '/' + id, { 
                method: 'DELETE',
                headers: this.basicHeaders
            });

            return;
        } catch(err) {
            return;
        }
    }

    async createNewNote(note: Note) {
        try {
            const promise = await fetch(this.apiURL, { 
                method: 'POST',
                headers: this.basicHeaders,
                body: JSON.stringify(note)
            });

            return;
        } catch(err) {
            return;
        }
    }
}