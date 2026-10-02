import { Box, BoxContent, KnowledgeDiv, KnowledgeImage, LineHeight, RouteBox } from "../../public/style/StyleComponents";

export default function Knowledge() {
    return (
        <Box>
            <BoxContent>
                <RouteBox>
                    <div dir="rtl">
                        <h2>دانش من</h2>
                    </div>
                    <div dir="ltr">
                        <KnowledgeDiv dir="ltr">
                            <div>
                                <KnowledgeImage src="image/python.png" alt="" />
                                <KnowledgeImage src="image/flask.png" alt="" />
                                <KnowledgeImage src="image/react.png" alt="" />
                                <KnowledgeImage src="image/nextjs.png" alt="" />
                                <KnowledgeImage src="image/php.png" alt="" />
                                <KnowledgeImage src="image/cpp.png" alt="" />
                            </div>
                        </KnowledgeDiv>
                    </div>
                    <div style={{ flexBasis: '100%', justifyContent:'center', textAlign:'center', margin:'auto' }}>
                        <hr />
                        <h2>تجربه</h2>
                        <LineHeight>
                            <p>در ابتدا با فلسک بیشتر پروژه میزدم و اینکارو تا 1 سال ادامه دادم</p>
                            <p>بعدش تصمیم گرفتم مسیر رو تغییر بدم و شروع کردم به یادگیری ریکت</p>
                            <p>و نکست جی اس. سپس چند تا از پروژه های قدیمی مانند سایت شخصی و</p>
                            <p>سایت فروشگاهی و غیره را با ریکت باز سازی کردم ولی در کار کردن با</p>
                            <p>فلسک بیشتر تجربه دارم.</p>
                        </LineHeight>
                    </div>
                </RouteBox>
            </BoxContent>
        </Box>
    )
}