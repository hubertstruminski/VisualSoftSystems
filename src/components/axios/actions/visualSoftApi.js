import axios from 'axios';
import { API_URL } from '../../../constants/apiConstants';

export const fetchMonitoringData = async () => {
    try {
        return await axios({
            method: 'GET',
            url: `${API_URL}/rekrutacja/202009/dane`,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch(error) {
        console.log(error);
    } 
}