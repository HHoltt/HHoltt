import { useRef } from 'react';
import users from '../data/user.json';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const userRef = useRef(null);
    const passRef = useRef(null);
    const navigate = useNavigate();

    const login = () => {
        if( userRef.current && passRef.current ) {
            const { current: { value: user } } = userRef;
            const { current: { value: pass } } = passRef;

            const us = (users as []).find( (u: { username: string, password: string }) => u.username === user && u.password === pass );

            if( us ) {
                sessionStorage.setItem("user", us);
                return navigate("/home");
            } else {
                sessionStorage.removeItem("user");
            }
        }
    }

    return (
        <>
            <form>
                <input type="text" id="user" ref={ userRef } /><br/>
                <input autoComplete='off' type="password" id="pass" ref={ passRef } /><br/>
                <button onClick={ login }>Enviar</button>
            </form>
        </>
    );
};

export default Login;
