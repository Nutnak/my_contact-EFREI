import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../css/index.css';

export const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/api/auth/login', {
            email: email,
            password: password
        }, { withCredentials: true })
            .then((response) => {
                if (response.status === 200) {
                    navigate('/dashboard');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
            <h1 className="text-2xl font-extrabold text-white m-10">Se connecter</h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[500px]" onSubmit={onSubmit}>
                <div className="mb-4">
                    <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Adresse Mail
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Adresse mail"></input>
                </div>
                <div className="mb-6">
                    <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Mot de passe
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Mot de passe"></input>
                </div>
                <div className="flex flex-col items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Se connecter
                    </button>
                    <Link
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        to="/#"
                    >
                        Mot de passe oublié
                    </Link>
                </div>
            </form>
            <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/register">
                Pas encore inscrit ? Inscrivez-vous ici
            </Link>
        </div>

    );

};

