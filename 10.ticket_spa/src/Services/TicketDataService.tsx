import Ticket from "../Models/Ticket";

export default class TicketDataService {
    //apiURL: string = "https://localhost:44328/api/ticketanon";
    //apiURL: string = "https://icticketing.azurewebsites.net/api/ticketanon";
    apiURL: string = "https://icticketing.azurewebsites.net/api/ticket";
    basicHeaders: Headers = new Headers({
        "Authorization": "Basic " + btoa("guest1:Gu&st!"),
        "Accept": "application/json",
        "Content-Type": "application/json"
    });

    async getTickets() {
        try {
            const promise = await fetch(this.apiURL, {
                headers: this.basicHeaders
            });
            const data = await promise.json();

            return data;
        } catch(err) {
            return [];
        }
    }

    async getTicketById(id: string) {
        try {
            const promise = await fetch(this.apiURL + '/' + id, {
                headers: this.basicHeaders
            });
            const data = await promise.json();

            return data;
        } catch(err) {
            return [];
        }
    }

    async deleteTicketById(id: string) {
        try {
            const promise = await fetch(this.apiURL + '/' + id, { 
                method: 'DELETE',
                headers: this.basicHeaders
            });
            const data = await promise.json();

            return;
        } catch(err) {
            return;
        }
    }

    async createNewTicket(ticket: Ticket) {
        try {
            const promise = await fetch(this.apiURL, { 
                method: 'POST',
                headers: this.basicHeaders,
                body: JSON.stringify(ticket)
            });
            const data = await promise.json();

            return;
        } catch(err) {
            return;
        }
    }

    async updateTicket(ticket: Ticket) {
        try {
            const promise = await fetch(this.apiURL + '/' + ticket.id, { 
                method: 'PUT',
                headers: this.basicHeaders,
                body: JSON.stringify(ticket)
            });
            const data = await promise.json();

            return;
        } catch(err) {
            return;
        }
    }
}