import { Header, HeaderContent, MyselfImage, ContactButton, EmailIcon, ContactSpan } from '../../public/css/StyledComponents'

export default function HeaderComponent() {
    return (
        <Header>
            <HeaderContent>
                <MyselfImage src="image/myself.png" />
                <div style={{lineHeight:'0.5',marginTop:'-40px'}}>
                    <h2 style={{fontSize:'40px'}}>سلام!</h2><br />
                    <p>من آرین سپهری مهر هستم. 12 ساله از بندر ماهشهر. از سال پنجم</p>
                    <p>برنامه نویسی را شروع کردم و درحال حاضر به اینکار بسیار علاقه دارم.</p>
                    <p>از یادگیری تا پروژه گرفتن.</p><br />
                    <ContactButton onClick={()=>{window.location.href='mailto:macsepehri@gmail.com'}}><EmailIcon src='image/email.png'/><ContactSpan>ارتباط با من</ContactSpan></ContactButton>
                </div>
            </HeaderContent>
        </Header>
    )
}