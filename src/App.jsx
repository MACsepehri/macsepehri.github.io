import { useEffect, useState } from "react"
import Box from "./components/Box"

export default function Home() {
  const [isLogin, setLogin] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('isLogin');

        if (stored === null) {
            localStorage.setItem('isLogin', 'false');
            setLogin(false);
        } else {
            setLogin(stored === 'true');
        }
    }, []);

    return (
        <>
            <Box isLogin={isLogin} />
        </>
    )

}