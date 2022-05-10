import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUnresolvedBugs, loadBugs, resolveBug } from '../store/bugSlice'

const BugList = () => {
    const dispatch = useDispatch()
    const bugs = useSelector(getUnresolvedBugs)    

    useEffect(()=>   {
        dispatch(loadBugs())
    }, [dispatch])
    

    const handleBugResolved = (id) => {
        console.log(id)
        dispatch(resolveBug(id))
    }

    

    return (
            <ul >
                {bugs.map((bug) => 
                    <div  key={bug.id}>
                        <li >{bug.description} <button onClick={() => handleBugResolved(bug.id)}>Resolve Bug</button> </li>
                    </div>
                )}
            </ul>
    )
}

export default BugList;