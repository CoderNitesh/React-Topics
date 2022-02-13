import React from 'react'

export default function Table(props) {
    const {users} = props
    return (
        <table className="table my-3">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">gender</th>
                </tr>
                </thead>
                <tbody>
                    {
                        users.map( user => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                            </tr>
                            )
                        )   
                    }
                </tbody>
            </table>
    )
}
