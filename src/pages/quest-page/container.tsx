import axios from 'axios';

axios("/quests-list").then(res => console.log(res.data));
