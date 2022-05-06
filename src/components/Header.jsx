import styled from "styled-components"
import colors from "../variables/colors.js"
import dropdown from "../assets/svgs/dropdown.svg"

const Header = styled.header`
    height: 100px;
    background-color: ${colors.dk_yellow_darker};
    color: ${colors.lt_yellow_lighter};
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    max-width: 90%;
    margin: auto;
    justify-content: space-between;
`

const FlexCenter = styled.div`
    display: flex;
    align-items: center;
`

export default (props) => {
    console.log(dropdown)
    return <Header>
        <Wrapper>
            <div>
                <span>Flavio's Portfolio</span>
            </div>
            <FlexCenter>
                <span>Menu</span>
                <img src={dropdown} alt="" width="20px"/>
            </FlexCenter>
        </Wrapper>
    </Header>
}