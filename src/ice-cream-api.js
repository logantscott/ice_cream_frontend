import Request from 'superagent';

export const getIceCream = async(apiQuery) => {
const url = 'https://hidden-forest-86930.herokuapp.com/icecream'
// const query = apiQuery ? apiQuery : '';
// console.log('query', query);
let data = await Request.get(url);
return data;
}