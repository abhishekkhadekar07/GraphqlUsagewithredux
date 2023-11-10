import { gql, useQuery } from '@apollo/client'
import React from 'react'

const GET_DATA = gql`
query Getdata{
    users{
        id 
       Firstname
        lastName
      }
}
`;
const DisplayData = () => {
    const { loading, error, data } = useQuery(GET_DATA);
    if (loading) return <div>loading..</div>
    if (error) return <div>error..</div>
    const muchdata = data.users;
    console.log(muchdata);
    return (
        <div>
            {muchdata.map((user) => (
                <div key={user.id}>
                    <h2>{user.Firstname}</h2>
                    <h2>{user.lastName}</h2>
                </div>
            ))}
        </div>
    )
}

export default DisplayData