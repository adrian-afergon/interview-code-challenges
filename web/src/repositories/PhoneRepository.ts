import axios, {AxiosResponse} from 'axios';
import {Phone} from "../models/Phone";

type PhoneDTO = Phone;

export interface PhoneRepository {
    getPhones: () => Promise<Phone[]>
}

interface ServerResponse {
    status: number
    data: PhoneDTO[]
}

export const phoneRepository: PhoneRepository = {
    getPhones: async () => {
        try {
            const response: AxiosResponse = await axios.request<ServerResponse>({
                url: 'http://localhost:3000/phones',
            });
            return response.data.map(mapPhoneDTO);
        } catch (error) {
            console.error('PhoneRepository', error);
            throw error;
        }

    }
};

const mapPhoneDTO = (phoneDTO: PhoneDTO): Phone => ({
    id: phoneDTO.id,
    color: phoneDTO.color,
    description: phoneDTO.description,
    imageFileName: phoneDTO.imageFileName,
    manufacturer: phoneDTO.manufacturer,
    name: phoneDTO.name,
    price: phoneDTO.price,
    processor: phoneDTO.processor,
    ram: phoneDTO.ram,
    screen: phoneDTO.screen
});
