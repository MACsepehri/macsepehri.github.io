import HeaderComponent from "./components/Header";
import BodyPart1 from "./components/BodyPart1";
import BodyPart2 from "./components/BodyPart2";

export default function Home() {
    return (
        <>
            <div>
                <HeaderComponent/>
            </div>
            <div>
                <BodyPart1/>
                <BodyPart2/>
            </div>
        </>
    )
}