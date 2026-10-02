import { Box, BoxContent, LineHeight, RouteBox } from "../../public/style/StyleComponents";

export default function Contact() {
    return (
        <Box>
            <BoxContent>
                <RouteBox>
                    <div dir="rtl">
                        <h2>ارتباط با من</h2>
                        <LineHeight>
                            <p>اگر علاقه دارید با سادیسم اعظم در ارتباط باشید</p>
                            <p>به راحتی میتوانید اینکار را انجام دهید!</p>
                        </LineHeight>
                    </div>
                    <LineHeight dir="rtl">
                        <p>ایمیل : <a style={{color:'#005fd4',textDecoration:'none'}} href="mailto:macsepehri@gmail.com">macsepehri@gmail.com</a></p>
                        <p>آی دی در بله : <a style={{color:'#005fd4',textDecoration:'none'}} href="https://web.bale.ai/@macsepehri" target="_blank">@macsepehri</a></p>
                    </LineHeight>
                </RouteBox>
            </BoxContent>
        </Box>
    )
}