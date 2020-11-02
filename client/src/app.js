import React, { useEffect } from "react";
import { FooterContainer } from "./containers/footer";
import { JumbotronContainer } from "./containers/jumbotron";
import axios from "axios";
export default function App() {
    console.log("Welcome");
    useEffect(() => {
        axios("/api/data").then((res) => console.log(res));
        // .then((dt) => console.log(dt));
    }, []);

    return (
        <>
            <JumbotronContainer />
            <FooterContainer />
        </>
    );
}
