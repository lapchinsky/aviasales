import axios from "axios";

export class ApiService {
    async getId() {
        const id = await axios.get('https://front-test.beta.aviasales.ru/search')
         return id.data.searchId
    }

    async getAllTickets(id) {
        try {
            const response = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`)
                    if (!response.data.stop) {
                        await this.getAllTickets(id)
                    } else {
                        return response.data.tickets
                    }
                    return response.data.tickets
        } catch (e) {
            await this.getAllTickets(id)
        }
    }
}