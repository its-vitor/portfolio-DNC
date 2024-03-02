import Blog from "../Components/Blog";
import Header from "../Components/Header";
import Introduction from "../Components/Introduction";
import Projects from "../Components/Projects";
import Socials from "../Components/Socials";

export default function Page() {
    return (
        <>
            <Header />
            <Introduction />
            <Blog />
            <Projects />
            <Socials />
        </>
    )
}