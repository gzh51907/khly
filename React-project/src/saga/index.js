import {CHANGE_QTY} from '../store/action/cart'
import {takeEvery,takeLatest,call,apply} from 'redux-saga/effects';

import Api from '@/Api'


function* HelloSaga(){console.log(666)
    let res = yield 100;
    console.log(777,res);
    yield 200;
    console.log(888);
    return 300
 }
function* getData(){
    let res = yield call(Api.get,{act:'index'});
    console.log('getData:',res);
}

function * rootSaga(){
    yield takeEvery(CHANGE_QTY+'_ASYNC',HelloSaga);
    yield takeLatest('GET_DATA_ASYNC',getData);
}

export default rootSaga;