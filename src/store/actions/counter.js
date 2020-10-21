import * as actionTypes from './actionTypes';


export const counterIncriment = () => ({type:actionTypes.COUNTER_INCRIMENT});
export const counterDecriment = () => ({type:actionTypes.COUNTER_DECRIMENT});

export const counterIncrimentAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(counterIncriment());
    }, 2000)
}