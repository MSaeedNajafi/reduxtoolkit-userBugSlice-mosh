//manuall approach to get the store

import React, {Component} from 'react';
import StoreContext from '../context/storeContext';
import { loadBugs } from '../store/bugSlice';


class Bugs extends Component{
    //1 do this
    static contextType = StoreContext

    //2 do this
    state = { bugs: [] };

    //3 use this fucntion
    componentDidMount(){

        //4 get the store from context 
        const store = this.context;


        // 5 mae sure to return the method for unsubscribe, otherwise this will always be tehre even if u dont it to be
        this.unsubscribe =  store.subscribe(()=> {
            //get the bugs fron the store
            const bugsInStore = store.getState().entities.bugs.bugs

            //6 make sure the bugs have changed to change the state, if u forget tio do this, you are going to cause memory leaks to our applciation
            if(this.state.bugs !== bugsInStore){
                this.setState({bugs: bugsInStore})
            }
        })

        store.dispatch(loadBugs())

    }

    // 7 dont forget to subscribe, call the unsubscribe function here 
    componentWillUnmount() {
        this.unsubscribe();

    }

    render() {
        return <ul>{this.state.bugs.map((bug) => <li key={bug.id}>{bug.description}</li>)}</ul>
    }
}

// Bugs.contextType = StoreContext;

export default Bugs;

