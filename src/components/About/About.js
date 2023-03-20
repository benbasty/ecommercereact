import AboutHeader from "../AboutHeader/AboutHeader";
import NewsLetter from "../NewsLetter/NewsLetter";
import AboutPage from "./AboutPage";
import Feature from "../Features/Feature";
import AboutAppDescription from "./AboutAppDescription";
const About = () => {
    return(
        <section>
            <AboutHeader />
            <AboutPage />
            <AboutAppDescription />
            <Feature />
            <NewsLetter />

        </section>
    )
}
export default About;