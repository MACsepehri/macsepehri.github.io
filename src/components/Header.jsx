import { Header, HeaderContent, MyselfImage } from '../../public/assets/css/StyledComponents'

export default function HeaderComponent() {
    return (
        <Header>
            <HeaderContent>
                <MyselfImage src="../../public/image/myself.png" />
                <div style={{lineHeight:'0.5',marginTop:'3px'}}>
                    <h2 style={{fontSize:'40px'}}>سلام!</h2><br />
                    <p>من آرین سپهری مهر هستم. 12 ساله از بندر ماهشهر. از سال پنجم</p>
                    <p>برنامه نویسی را شروع کردم و درحال حاضر به اینکار بسیار علاقه دارم.</p>
                    <p>از یادگیری تا پروژه گرفتن.</p>
                </div>
            </HeaderContent>
        </Header>
    )
}