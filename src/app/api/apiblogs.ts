import {Blog} from '../models/models';

export const BASE_URL = 'http://localhost:1337'

export const fetchBlogs = async (): Promise<any> =>{
    const response = await fetch(`${BASE_URL}/api/blogs?populate=*`);

    if(!response.ok){
        throw new Error('Response was not successful');
    }

    return response.json();
}