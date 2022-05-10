import React, {Component} from 'react';
import {connect} from 'react-redux';
import { loadBugs } from '../store/bugSlice';

class Bugs extends Component{
    componentDidMount(){
        this.props.loadBugs()
    }
    render() {
        return <>bugs</>
    }
}

const mapStateToProps = state => ({
    bugs: state.enetities.bugs.bugs
})

const mapDispatchToProps = dispatch => ({
    loadBugs: () => dispatch(loadBugs())
})



export default connect(mapStateToProps, mapDispatchToProps)(Bugs);