import { Bild } from "../components/Bild";
import { BildText } from "../components/BildText";
import { ButtonCSSModule } from "../components/ButtonCSSModule";
import { ButtonStyledComponents } from "../components/ButtonStyledComponents";
import { RedList } from "../components/RedList";
import { Title } from "../components/Title";


export const StartPage = () => (
    <>
        {/* Button med global styling */}
        <button className="red-button">En röd knapp</button>

        <ButtonCSSModule/>

        Styled components button: 
        <ButtonStyledComponents />


        <Title titelText="En katt sdfjk" />
        <BildText animalType="katt" speed={32}>
            Jag är children till BildText
        </BildText>

        <RedList>
            <li>Item 1</li>
            <li>Item 2</li>
        </RedList>


        <Bild
            sokvag="https://img.pixers.pics/pho_wat(s3:700/FO/48/55/00/52/700_FO48550052_f65db68f0a8ad7262d237ed876be12a0.jpg,700,587,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,537,jpg)/posters-sot-katt-pott-isolerade-pa-vit.jpg.jpg"
            hej="hej"
            nummer={123}
            bold={false}
            enFunktion={() => console.log('Hej hej')}
        />

    </>
)