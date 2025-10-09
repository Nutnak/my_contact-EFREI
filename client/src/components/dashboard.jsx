import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ListAllContact } from "./listAllContact";

export const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/api/dashboard', { withCredentials: true })
            .then((response) => {
                // console.log(response)
            })
            .catch((error) => {
                if (error.response && error.response.status === 403) {
                    navigate('/login'); // Redirige si token absent ou invalide
                    // console.log(error.response)
                }
            });
    }, []);

    return (
        <div>
            <h1>Dashboard page</h1>
            {/* Ton contenu */}
            <ListAllContact/>
        </div>
    );
};