import Ticket from "../Models/Ticket";

export default class TicketDataService {
    //apiURL: string = "https://localhost:44328/api/ticket";
    apiURL: string = "https://icticketing.azurewebsites.net/api/ticket";

    async getTickets() {
        try {
            const promise = await fetch(this.apiURL);
            const data = await promise.json();

            return data;
        } catch(err) {
            return [];
        }
    }

    async getTicketById(id: string) {
        try {
            const promise = await fetch(this.apiURL + '/' + id);
            const data = await promise.json();

            return data;
        } catch(err) {
            return [];
        }
    }

    async deleteTicketById(id: string) {
        try {
            const promise = await fetch(this.apiURL + '/' + id, { method: 'DELETE'});
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
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
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
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ticket)
            });
            const data = await promise.json();

            return;
        } catch(err) {
            return;
        }
    }
}