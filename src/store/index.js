// 1:引入
import {createStore} from 'redux'

// 初始化状态
const defaultState={
    arr:[{username:"zhangsan"}]
}

// reducers就是一个函数
const reducers=function(state=defaultState,action){
    const {type,data}=action
    switch(type){
        case 'USER_ADD':
            state.arr.push({username:data})
            console.log(state,"data")
        break;
        case 'USER_DEL':
            state.arr.splice(data,1)
            console.log(state,"data")
        break;
    }
   return state
}


// 2:创建store实例  store是action和reducers的桥梁
const store=createStore(reducers);

export default store;