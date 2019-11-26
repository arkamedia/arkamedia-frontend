import Axios from 'axios'

const baseUrl = `http://192.168.6.180:9600/v1/api/product`

export const getFlashSale = async (page, limit) => {
    try {
        const result = await Axios.get(`${baseUrl}/flash?page=${page}&limit=${limit}`);
            return result.data;
    }
    catch (err) {
        return console.log(err);
    }
}

export const getBookByType = async (type, page, limit) => {
    try {
        const result = await Axios.get(`${baseUrl}/book?book_type=${type}&page=${page}&limit=${limit}`);
            return result.data;
    }
    catch (err) {
        return console.log(err);
    }
}

export const getProductByType = async (type, page, limit) => {
    try {
        const result = await Axios.get(`${baseUrl}/category?cat_name=${type}&page=${page}&limit=${limit}`);
            return result.data;
    }
    catch (err) {
        return console.log(err);
    }
}

export const getProductByID = async (id) => {
    try {
        const result = await Axios.get(`${baseUrl}/id/${id}`);
            return result.data;
    }
    catch (err) {
        return console.log(err);
    }
}
