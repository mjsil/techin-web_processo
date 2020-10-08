import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";

import { Container, Header } from "./styles";

const Home = () => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [show, setShow] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        const [leftEmail] = input1.split("@");

        setName(leftEmail);
    }, [input1]);

    const Login = () => {
        setShow((show) => !show);
    };

    return (
        <Container>
            {show ? (
                <Header>
                    <img src={logo} alt="logo" />
                    <h1>Bem vindo {name}</h1>
                </Header>
            ) : (
                <Header>
                    <img src={logo} alt="logo" />
                    <input
                        name="email"
                        onChange={(e) => setInput1(e.target.value)}
                    />
                    <input
                        name="password"
                        onChange={(e) => setInput2(e.target.value)}
                    />

                    <button onClick={() => Login()}>Logar</button>
                </Header>
            )}
        </Container>
    );
};

export default Home;
