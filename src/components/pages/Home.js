import React, {useState, useEffect} from "react";
import axios from  "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []) ;     //dependency otherwise loop will be infinite

    const loadUsers = async () => {
        const result =await axios.get("http://localhost:3002/users");
        setUser(result.data);
    }


    return (
    <div className= "container">

            <div className="py-4">
                <h1>Home page</h1>
                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>(
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                                View
                                </Link>
                                <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>
                                Edit
                                </Link>
                                <Link class="btn btn-danger">
                                Delete
                                </Link>
                                </td>
                            </tr> 
                            ))
                        }
                    </tbody>
                </table>


            </div>
    </div>    
    );
};

export default Home;

