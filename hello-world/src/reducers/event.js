import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default (event = {}, action) => {
    switch(action.type) {
        case READ_EVENTS :
            // console.log(action.response.data) ・・・配列
            // console.log(_.mapKeys(action.response.data,'id')) ・・・オブジェクト
            return _.mapKeys(action.response.data,'id')
        default : 
            return event
    }
}