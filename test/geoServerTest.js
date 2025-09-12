
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

(async () => {
    try {
        const GEOSERVER_URL = (process.env.GEOSERVER_URL+"/rest/about/version.json")  || 'http://localhost:8000/geoserver/rest/about/version.json';
        const response = await axios.get(GEOSERVER_URL, {
            auth: {
                username: process.env.GEOSERVER_USERNAME || 'admin',
                password: process.env.GEOSERVER_PASSWORD || 'geoserver'
            }
        });
        console.log('GeoServer connection successful!');
        console.log('Version info:', response.data);
    } catch (error) {
        console.error('Failed to connect to GeoServer:', error.message);
    }
})();