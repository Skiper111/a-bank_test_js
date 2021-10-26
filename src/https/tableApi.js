import {$host} from './index';

export const fetchTable = async () => {
    try {
        const {data} = await $host.get('/posts')
        return data
    } catch (e) {
        alert(e)
    }


}