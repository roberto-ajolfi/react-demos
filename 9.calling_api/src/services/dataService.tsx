export default class TicketDataService {
    //apiURL: string = "https://localhost:9999/api/tickets";
    apiURL: string = "http://localhost:3000/testdata.json";

    async getTickets() {
        try {
            const promise = await fetch(this.apiURL);
            const data = await promise.json();

            return data;
        } catch(err) {
            return [];
        }
    }
}