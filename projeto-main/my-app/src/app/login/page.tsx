"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const login = () => {

        // Simulação de autenticação
        if (email === "exemplo@gmail.com" && senha === "admin123") {
            router.push("/");
        } else {
            setError("E-mail ou senha inválidos");
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={login} className={styles.form}>
                <h2>Login</h2>
                <div>
                    <h2>E-mail:</h2>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.input}/>
                </div>
                <div>
                   <h2>Senha:</h2>
                    <input
                        type="senha"
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                        className={styles.input}/>
                </div>
                {error && <p className={styles.error}>{error}</p>} <button type="submit" className={styles.button}>
                    Entrar
                </button>
                <button type="button" onClick={() => router.push("/")} className={styles.buttonSecondary}>
                    Voltar para a página inicial
                </button>
            </form>
        </div>
    );
}
