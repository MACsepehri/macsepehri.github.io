import { BaseSection, Section, LoginSection, InputBox, SubmitLoginButton } from "../../public/style/StyleComponents";
import Header from "./Header";

function render(isLogin) {
    if (isLogin===false) {

        // Render Login
        return (
            <LoginSection>
                <h2>برای شروع وارد شوید.</h2><br />
                <div>
                    <InputBox type="text" placeholder="نام کاربری" /><br />
                    <SubmitLoginButton>ورود</SubmitLoginButton>
                </div>
            </LoginSection>
        )

    } else {}
}

export default function Box({isLogin}) {
    return (
        <>
            <BaseSection>
                <Section>
                    <Header />
                    {render(isLogin)}
                </Section>
            </BaseSection>
        </>
    )
}