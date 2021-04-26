import Header from "./components/header/Header";
import axios from "axios";
import {useEffect, useState} from "react";
import Section from "./components/section/Section";
import Footer from "./components/footer/Footer";
import CustomLoader from "./components/custom-loader/CustomLoader";
import OnTopButton from "./components/on-top-button/OnTopButton";
import "./App.css";

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
            }, 1000);
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
                <OnTopButton/>
                <div className={'modals'}></div>
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
