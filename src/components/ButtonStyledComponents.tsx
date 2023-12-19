import styled from 'styled-components';
import { colors } from '../theme';

export const ButtonStyledComponents = () => {

    const StyledButton = styled.button`
        background-color: ${colors.blue};
        color: white;
    `

    return <StyledButton>klicka här!</StyledButton>

}