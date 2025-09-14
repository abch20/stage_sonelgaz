import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const GEOSERVER_URL = process.env.GEOSERVER_URL || 'http://localhost:8000/geoserver';

const renderMap = async (req, res) => {
    //todo make layer name dynamic
    try {
        const response = await axios.get(`${GEOSERVER_URL}/wms`, {
            params: {
                service: 'WMS',
                version: '1.1.0',
                request: 'GetMap',
                layers: "algeria",
                styles: "", // must include even if empty
                bbox: '-8.898980140686035,17.954708099365234,12.240395545959473,37.08985137939453',
                width: 4000,
                height: 4000,
                srs: 'EPSG:4326', // keep consistent with bbox
                format: 'image/png', // make sure this is correct
                transparent: true,
            },
            responseType: 'arraybuffer', // ⚡️ important to get binary image data
        });

        res.set('Content-Type', 'image/png');
        res.send(response.data);
    } catch (error) {
        console.error('Error rendering map:', error.response?.data || error.message);
        res.status(500).send('Error rendering map');
    }
};

// todo: make typeName dynamic
const renderFeatures = async (req, res) => {
  try {
    const url = GEOSERVER_URL + "/stage/ows";
    const response = await axios.get(url, {
      params: {
        service: "WFS",
        version: "1.0.0",
        request: "GetFeature",
        typeName: "stage:communes_algerie",
        outputFormat: "application/json",
        srsName: "EPSG:4326",
      },
      responseType: "json",
      maxRedirects: 0,
    });

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "Error fetching communes:",
      error.response?.data || error.message
    );

    res.status(500).json({
      success: false,
      message: "Error fetching communes",
      error: error.message,
    });
  }
};

const drawing = async (req, res) => {
    //todo make layer name dynamic
    try {
       
    } catch (error) {

    }
};

export { renderMap, renderFeatures };