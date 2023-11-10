import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectUsers } from "../reduxSlices/userSlice";

function DisplayDatar() {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    console.log("displayDataR is rendered")
    console.log("users-----", users);
    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.Firstname}</h2>
                    <h2>{user.lastName}</h2>
                </div>
            ))}
        </div>
    )
}
export default DisplayDatar;