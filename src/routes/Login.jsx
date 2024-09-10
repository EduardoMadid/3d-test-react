import {useRef, useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { LoginStyle } from '../css/LoginStyle';
import image1 from '../assets/image1.jpg'

const Login =()=>{

    //Hook-useRef- pega a referencia de um componente ou elemento do DOM
    const usuario =useRef();
    const senha =useRef();

    //Hook-useState - Manipula o estado da variavel
    const [usuarios,setUsuarios]=useState([]);

    //Hook - useNavigate - redireciona para o componente
    const navigate = useNavigate();

    //criando validação de login

    function validade(){
        for(let i =0; i <usuarios.length; i++){
            if(
                usuarios[i].usuario ==usuario.current.value &&
                usuarios[i].senha == senha.current.value
            ){
                return true;
            }
        }
    }


    //criando a função handleSubmit

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(validade()){
            let token =
                Math.random().toString(16).substring(2)+
                Math.random().toString(16).substring(2)
                sessionStorage.setItem("usuario",usuario.current.value);
                sessionStorage.setItem("senha", token);
                navigate("/Dashboard")       
        }else{
            alert("usuario/senha inválidos")
        }
    }

    //Hook- useEffect vai buscar os dados para o login

    useEffect(()=>{
        fetch("http://localhost:5000/usuarios/")
        //promise
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setUsuarios(res);
        })
    },[])

    return(
        <LoginStyle>
        <section className="container">
            <div className="container-login">
            <div className="login">

                {/*Form*/}
                <form className="login-form" onSubmit={handleSubmit}>
                    {/*Titulo do login*/}
                    <span className="titulo-login">Faça seu Login</span>
                    {/*Campo input do usuario*/}
                    <div className="w-input">
                        <input
                            type="text"
                            className="input-form"
                            id="usuario"
                            ref={usuario}                        
                        />
                        <span placeholder="usuario"></span>
                    </div>
                        {/*Campo input do senha*/}
                    <div className="w-input">
                        <input
                            type="password"
                            className="input-form"
                            id="senha"
                            ref={senha}
                        />
                        <span placeholder="Senha"></span>
                    </div>

                    {/*Botão do Login */}

                    <div className="login-btn">
                        <button type="submit" className="login-form-btn">Login</button>
                    </div>

                    {/*Utils*/}
                    
                    <ul className="utilidades">
                        <li>
                            <span className="text1">Esqueçeu sua senha?</span>
                        </li>

                        <li>
                            <span className="text1">Não tem conta? </span>
                            <a href="#" className="text2">
                                Criar
                            </a>
                        </li>
                    </ul>
                </form>
            </div>
            <img className='img' src={image1} alt="Imagem logo"/>
            </div>
        </section>
        </LoginStyle>
    )
}
export default Login