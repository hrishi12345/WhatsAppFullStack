import { createContext,useEffect,useRef,useState } from "react";
import {io} from 'socket.io-client'
export const AccountContext=createContext(null);

const AccountProvider=({children})=>{
    const [account,setAccount]=useState()
    const [person,setPerson]=useState({})
    const [activeUsers,setActiveUsers]=useState([])
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const [groups,setGroups]=useState({})
    const [selectGroup,setSelectGroup]=useState(false)
    const socket=useRef()
    useEffect(()=>{
        socket.current=io('ws://localhost:8000')
    },[])

    return(
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setPerson,
            socket ,
            activeUsers,
            setActiveUsers,
            newMessageFlag,
            setNewMessageFlag,
            groups,
            setGroups,
            selectGroup,
            setSelectGroup
        }}>
            {children}
        </AccountContext.Provider>
    )
}
export default AccountProvider