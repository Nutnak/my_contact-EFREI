import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        axios.post('http://localhost:4000/api/auth/register', {
            email: data.email,
            password: data.password
        })
            .then((response) => {
                if(response.status === 200){
                    navigate('/login')
                };
            })
            .catch((error) => {
                console.log(error);
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
                        message: "Veuillez entrer une adresse email valide"
                    }
                })}></input>
                {errors.email && <span>{errors.email.message}</span>}
                <input name="password" type="password" {...register("password")}></input>
                <button type="submit">Envoyer</button>
            </form>
            <p>Déjà inscrit ? Connectez-vous <Link to="/login">ici</Link></p>
        </div>
    );

};

