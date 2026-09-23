import HeaderComponent from "./components/Header";
import BodyPart1 from "./components/BodyPart1";
import BodyPart2 from "./components/BodyPart2";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <>
            <div>
                <HeaderComponent/>
            </div>
            <div>
                <BodyPart1/>
                <BodyPart2/>
                <Footer/>
            </div>
        </>
    )
}