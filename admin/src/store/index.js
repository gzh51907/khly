import {createStore,applyMiddleware,compose} from 'redux';

//引入调试工具中间件
import {composeWithDevTools} from 'redux-devtools-extension';

//引入redux-saga
import createSagaMiddleware from 'redux-saga';

//创建saga中间件
const sagaMiddleware = createSagaMiddleware();

import rootReducer from './reducer';

//将sagaMiddleware 连接至Store
let enhancer = applyMiddleware(sagaMiddleware);


//利用compose处理多个中间件
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        composeWithDevTools()
    )
);

//运行Saga配置
import rootSaga from '../saga'
sagaMiddleware.run(rootSaga);

export default store;