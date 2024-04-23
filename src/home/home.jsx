import { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';
import { Link } from "react-router-dom";

export default function Home() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/getAllUser')
            .then(users => {
                setUsers(users.data.data)
                console.log(users.data.data)
            })

            .catch(err => console.log(err))
    }, [])
    // console.log(users);
    return (
        <div>
            <Link to="/signup"><input type='button' value="Add" className='hp'></input> </Link>
            <div className='w-100 vh-100 d-flex justify-content-center hp1'>

                <div className='w-50'>
                    <table className='table table-hover'>
                        <thead className='table-danger'>
                            <tr>
                                <th>
                                    fname
                                </th>
                                <th>
                                    lname
                                </th>
                                <th>
                                    email
                                </th>
                                <th>password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users == "" || users == null ? "" : users.map(user => {
                                    // console.log();
                                    return <tr>
                                        <td>{user.fname}</td>
                                        <td>{user.lname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
