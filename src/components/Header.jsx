import { Section, SectionContent, FlexBox, Favicon, HeaderDiv, ContactLink, EmailIcon } from "../../public/style/StyleComponents";

export default function Header() {
    return (
        <Section>
            <SectionContent>
                <HeaderDiv>
                    <FlexBox style={{gap:'50px'}}>
                        <div>
                            <Favicon src="favicon.png" alt="Favicon" />
                        </div>
                        <div style={{lineHeight:'0.5',textAlign:'right'}}>
                            <h1>سلام! من آرینم.</h1><br />
                            <p>من آرین سپهری مهر هستم ملقب به MACsepehri هستم.</p>
                            <p>روزانه زبان ها و فریم وورک های جدید یاد میگیرم</p>
                            <p>و پروژه های مختلف میزنم.</p>
                        </div>
                    </FlexBox><br />
                    <div style={{margin:'auto',textAlign:'center'}}>
                        <ContactLink href='mailto:macsepehri@gmail.com'><EmailIcon src="files/email.png" alt="EmailPNG" /><span style={{color: '#a8e3ff',marginRight:'10px'}}>ارتباط با من</span></ContactLink>
                    </div>
                </HeaderDiv>
            </SectionContent>
        </Section>
    )
}