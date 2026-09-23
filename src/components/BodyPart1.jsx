import { Box, BoxContent, GreenCircle, SkillsWrapper, SkillsColumn, SkillRow, LevelText } from "../../public/css/StyledComponents";

export default function BodyPart1() {
    const skills = [
        { name: 'پایتون', level: 'حرفه ای' },
        { name: 'ریکت جی اس', level: 'متوسط' },
        { name: 'نکست جی اس', level: 'متوسط' },
        { name: 'پی اچ پی', level: 'سطح پایین' },
    ];

    return (
        <Box>
            <BoxContent style={{ lineHeight: '0.5', textAlign:'right' }}>
                <h2>درباره ی من و مهارت هام</h2><br />
                <p>همان طور که قبلا عرض کردم برنامه نویسی رو از سال پنجم شروع کردم. بعد از 1 سال</p>
                <p>کدنویسی به وب علاقه پیدا کردم و رفتم توی این حوضه و کلی فریم وورک و زبان حدید</p>
                <p>یاد گرفتم.</p>

                <SkillsWrapper>
                    <SkillsColumn>
                        {skills.map((skill) => (
                            <SkillRow key={skill.name}>
                                <GreenCircle />
                                <span>{skill.name}</span>
                            </SkillRow>
                        ))}
                    </SkillsColumn>

                    <SkillsColumn>
                        {skills.map((skill) => (
                            <SkillRow key={skill.name}>
                                <LevelText>{skill.level}</LevelText>
                            </SkillRow>
                        ))}
                    </SkillsColumn>
                </SkillsWrapper>
            </BoxContent>
        </Box>
    )
}