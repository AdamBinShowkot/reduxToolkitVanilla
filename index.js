const {store}=require('./redux/app');
const {counterAction}=require('./redux/featues/counter')

console.log(`Initial state : `,store.getState());

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(counterAction.increment())
store.dispatch(counterAction.increment())
store.dispatch(counterAction.increment())
store.dispatch(counterAction.decrement())