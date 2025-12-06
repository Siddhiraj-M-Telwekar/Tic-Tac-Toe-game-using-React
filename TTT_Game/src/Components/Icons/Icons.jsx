import {FaTimes,FaPen,FaRegCircle} from 'react-icons/fa'

function Icons({name}){
    if(name=="Circle"){
        return <FaRegCircle/>
    }
    if(name=="Cross"){
        return <FaTimes/>
    }
    else{
        return <FaPen/>
    }
}

export default Icons;