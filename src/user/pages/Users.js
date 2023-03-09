import React from 'react'
import UsersList from '../components/UsersList'

function Users() {
    const USERS = [
        {
            id: 'u1',
            name: 'John Doe',
            image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp',
            places: 3,
        },
        {
            id: 'u2',
            name: 'Max Pomthon',
            image: 'https://mdbcdn.b-cdn.net/img/new/avatars/1.webp',
            places: 2,
        },
        {
            id: 'u3',
            name: 'Roy Jessica',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO3gDxTuVlpv8Twexlge7_BE5hWVLea8hMM_atQ8jXkoMt5CY6-tdrM8fUwUlCprpE4Y8&usqp=CAU',
            places: 1,
        }
    ]
    return (
        <UsersList items={USERS} />
    )
}

export default Users