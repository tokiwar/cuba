import Header from "./components/header/Header";
import axios from "axios";
import {useEffect, useState} from "react";
import Section from "./components/section/Section";
import Footer from "./components/footer/Footer";
import CustomLoader from "./components/customLoader/CustomLoader";

function App() {
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(
            'http://localhost:3004/sections'
        ).then((resp) => {
            setSections(resp.data);
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        })
    }, []);
    if (!loading) {
        return (
            <>
                <Header/>
                {(sections)?.map((value) => {
                    return <Section key={value.id} {...value}/>
                })}
                <Footer/>
            </>
        );
    } else {
        return (
            <>
                <CustomLoader/>
            </>
        )
    }
}

export default App;
