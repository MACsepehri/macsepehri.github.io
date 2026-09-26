import { FlexBox, Section, SectionContent, ProjectBox, ProjectImage, ProjectBoxContent } from "../../public/style/StyleComponents";

export default function BodyPart1() {
    return (
        <>
            <Section>
                <SectionContent style={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center'}}>
                    <h2 style={{fontSize:'33px'}}>پروژه ها</h2>
                    <FlexBox>
                        <ProjectBox className="ProjectBox">
                            <ProjectBoxContent>
                                <ProjectImage src="files/simorghmessanger.png" />
                                <h2>پیام رسان سیمرغ</h2><br />
                                <div className="ProjectContent">
                                    <p>بزودی شامل یک پیامرسان کاربردی و سریعی</p>
                                    <p>خواهیم بود و نکته ی جالب این پیامرسان،</p>
                                    <p>اوپن سورس بودنش هست. فرانت سایت با ریکت</p>
                                    <p>و بک اند با اکسپرس هستش.</p><br /><br />
                                    <FlexBox style={{gap:'15px'}}>
                                        <a href="https://gitlab.chabokan.net/artin231/simorghmessenger" target="_blank">گیتلب (فعال)</a>
                                        <a href="https://github.com/artin231/simorghmessenger" target="_blank">گیتهاب (غیر فعال)</a>
                                    </FlexBox>
                                </div>
                            </ProjectBoxContent>
                        </ProjectBox>
                    </FlexBox>
                </SectionContent>
            </Section>
        </>
    )
}