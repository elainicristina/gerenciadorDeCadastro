import axios from "axios"
import { URL, headers } from "../Constants/url"
import { formatDate } from '../utils/date';

export class PhoneService {

    static getPhoneList = async () => {
        try {
            const response = await axios.get(
                URL.getPhoneList,
                {headers: headers}
            )

            return response.data;
        }
        catch (error) {
            console.log(error)
            return null
        }
    }

    static getPhone = async (id) => {
        const endpoint = URL.getPhone.replace(':id', id);

        try {
            const response = await axios.get(
                endpoint,
                {headers: headers}
            )

            return response.data;
        }
        catch (error) {
            console.log(error)
            return null
        }
    }

    static deletePhone = async (id) => {
        const endpoint = URL.deletePhone.replace(':id', id);

        try {
            const response = await axios.delete(
                endpoint,
                {headers: headers}
            )

            return response.data;
        }
        catch (error) {
            console.log(error)
            return null
        }
    }

    static updatePhone = async (id, data) => {
        const endpoint = URL.updatePhone.replace(':id', id);

        try {
            const payload = {
                model: data.model,
                brand: data.brand,
                price: data.price,	
                date: data.date,
                endDate: data.endDate,
                color: data.color,
                code: id
            }

            const response = await axios.patch(
                endpoint,
                payload,
                {headers: headers}
            )

            return response.data;
        }
        catch (error) {
            console.log(error)
            return null
        }
    }

    static createPhone = async (data) => {
        try {
            const payload = {
                model: data.model,
                brand: data.brand,
                price: data.price,	
                date: formatDate(data.date),
                endDate: formatDate(data.endDate),
                color: data.color,
                code: data.code
            }

            const response = await axios.post(
                URL.insertPhone,
                payload,
                {headers: headers}
            )

            return response.data;
        }
        catch (error) {
            console.log(error)
            return null
        }
    }

}