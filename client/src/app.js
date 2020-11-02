import React, { useEffect } from "react";
import { FooterContainer } from "./containers/footer";
import { JumbotronContainer } from "./containers/jumbotron";

export default function App() {
    useEffect(() => {
        fetch("/api/data")
            .then((res) => res.json())
            .then((res) => console.log(res));
    });

    return (
        <>
            <JumbotronContainer />
            <FooterContainer />
        </>
    );
}
