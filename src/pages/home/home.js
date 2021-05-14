import Hero from "./hero";
import Featured from './featuredSeries'
import Blog from "./blogSection";
import Project from "./projectSection";
import Contact from "./contact";
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Hero />
            <Featured />
            <Blog />
            <Project />
            <Contact />

        </>
    );
}
 
export default Home;