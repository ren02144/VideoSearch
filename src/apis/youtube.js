import axios from 'axios';

const KEY='AIzaSyAJRlmJLzwMbSh3Wd6AyO343gg4RbbCtxI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        //show 5 videos for every search
        key: KEY
    }
});