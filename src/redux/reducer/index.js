import {type} from './../action'
const initialState={
    meneuName:'首页'
}
export default (state=initialState,action)=>{
    switch (action) {
        case type.SWITCH_MENU:
            return {
                ...state,
                meneuName:action.meneuName
            }
            break;
        default:
            break;

    }
}
