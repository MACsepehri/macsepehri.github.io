import { Box, BoxContent, Cursor, HeaderImage, RouteBox } from "../../public/style/StyleComponents";

export default function Header() {
    return (
        <Box>
            <BoxContent>
                <RouteBox>
                    <div dir="rtl">
                        <h2>
                            سلام، من آرینم
                            <Cursor />
                        </h2>
                        <div style={{lineHeight:'0.5'}}>
                            <p>سلام. من آرین سپهری مهر هستم. برنامه نویسی که خیلی عجیب کد میزنه!</p>
                            <p>علاقه به وب دارم ولی ایده ندارم. زبان مورد علاقم پایتونه چون هم</p>
                            <p>سادست هم خیلی کاربردیه. من کسیم که بی دلیل <span dir="ltr">C++</span> و PHP</p>
                            <p>یاد گرفته به امیدی که یجا استفاده بشه که هنوز نشده.</p>
                            <p>در آخر یه زمانی به کثیف کد زدن معروف بودم و الان به سادیسم اعظم معروفم.</p>
                        </div>
                    </div>
                    <HeaderImage src="favicon.png" alt="آرین" />
                </RouteBox>
            </BoxContent>
        </Box>
)
}