import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENTS = 'CREATE_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// redux-thunkの効果により、オブジェクトしか返せないものが、
// 非同期処理を実装できるようになった。
//＜修正前＞
// export const readEvents = () => ({
//     type: READ_EVENTS
// })
// 
//※dispatchは引数が１つのため、アローファンクションの()の削除が可能
export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    console.log(response)
    dispatch({ type: READ_EVENTS, response })
}

export const postEvent = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
    console.log(response)
    dispatch({ type: CREATE_EVENTS, response })
}