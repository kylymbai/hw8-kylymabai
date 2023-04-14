import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getUsers } from '../store/userSlice'
import { useEffect } from 'react'

export default function UserPage() {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.userReducer) 

   useEffect(() => {
    dispatch(getUsers())
   },[dispatch])

  return (
    <div>
        <h1>Users Name List</h1>
        {
            user.map(item => (
                <li>{item.name}</li>
            ))
        }
    </div>
  )
}
