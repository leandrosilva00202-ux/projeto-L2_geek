import React, {useState} from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState(null);

    const handleSubmit = (e) => {
        e.prevenDefault();
        //aqui voce pode adicionar a logica para verificar as credenciais
        //por exemplo,vode pode fazer uma requisicao para um servidor
        //para verificar se as credenciais sao validas
        if (email === 'usuario@example.com' && senha === 'senha123') {
            alert('Login bem-sucedido!');
        } else {
            setErro('Credenciais invalidas');
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit}/>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
            <br/>
            <label>
                senha:
                <input type="password" value={senha} onChange={(e) => setEmail (e.target.value)} />
            </label>
            <br/>
            <button type="submit">entrar </button>
            {erro && <p style={{ color: 'red'}}>{erro}</p>}
        </>
    );
}

export default Login;