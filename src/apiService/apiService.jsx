import axios from "axios";

export class ApiService {
    async getId() {
        const id = await axios.get('https://aviasales-test-api.kata.academy/search')
         return id.data.searchId
    }

    async getAllTickets(id) {
        try {
            const response = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
                    if (!response.data.stop) {
                        await this.getAllTickets(id)
                    } else {
                        return response.data.tickets
                    }
                    if (response.data.stop && response.data.tickets === undefined) {
                        await this.getAllTickets(id)
                    }
                    return response.data.tickets
        } catch (e) {
            await this.getAllTickets(id)
        }
    }
}