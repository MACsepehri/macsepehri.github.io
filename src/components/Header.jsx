import { Section, SectionContent, FlexBox, Favicon, HeaderDiv } from "../../public/style/StyleComponents";

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
                    </FlexBox>
                </HeaderDiv>
            </SectionContent>
        </Section>
    )
}