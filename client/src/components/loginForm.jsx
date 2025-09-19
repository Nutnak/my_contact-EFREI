import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/api/auth/login', {
            email: email,
            password: password
        }, { withCredentials: true })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="form-main-container">
            <h1 className='App-title'>Créer un compte</h1>
            <form className="form-container" onSubmit={onSubmit}>
                <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                <button type="submit">Envoyer</button>
            </form>
            <p>Pas encore inscrit ? Inscrivez-vous <Link to="/register">ici</Link></p>
        </div>
    );

};

