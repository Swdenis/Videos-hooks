import axios from 'axios';

const KEY = 'AIzaSyA_VIiz6o20M1KC8xT0KQiGq7Lq-lL_4jw';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video',
    }
});