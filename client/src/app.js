import React, { useEffect } from "react";
import { FooterContainer } from "./containers/footer";
import { JumbotronContainer } from "./containers/jumbotron";

export default function App() {
    console.log("Welcome");
    useEffect(() => {
        fetch("/api/data").then((res) => console.log(res));
    }, []);

    return (
        <>
            <JumbotronContainer />
            <FooterContainer />
        </>
    );
}
