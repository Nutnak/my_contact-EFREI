import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import '../css/registerForm.css'
import { useState } from "react";

export const RegisterForm = () => {
    const [errorServer, setErrorServer] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        axios.post('http://localhost:4000/api/auth/register', {
            email: data.email,
            password: data.password
        })
            .then((response) => {
                if (response.status === 200) {
                    navigate('/login')
                };
            })
            .catch((error) => {
                if(error.response.status === 400) {
                    setErrorServer('Cet email est déjà utilisé')
                };
            });
    };

    return (
        <div className="form-main-container">
            <h1 className='App-title'>Créer un compte</h1>
            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                <input name="email" {...register("email", {
                    required: true,
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Veuillez entrer une adresse email valide."
                    }
                })}></input>
                {errors.email && <span className="error_form">{errors.email.message}</span>}
                <input name="password" type="password" {...register("password")}></input>
                <button type="submit">Envoyer</button>
                {errorServer && <span className="error_form">{errorServer}</span>}
            </form>
            <p>Déjà inscrit ? Connectez-vous <Link to="/login">ici</Link></p>
        </div>
    );

};

