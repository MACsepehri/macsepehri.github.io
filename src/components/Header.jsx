import { HeaderBox, Flex } from "../../public/style/StyleComponents";

export default function Header() {
    return (
        <HeaderBox>
            <Flex>
                <div style={{textAlign:'right',marginRight:'20px'}}>
                    <h1>CodeArea | مسابقات برنامه نویسی ایران</h1>
                </div>
                <div style={{position:'absolute',left:'20px',top:'30px'}}>
                    <a href="/about">درباره ی ما</a>
                </div>
            </Flex>
        </HeaderBox>
    )
}