import styled from "styled-components"
import { MoonIcon } from '@heroicons/react/solid'
import { useContext } from "react"
import ThemeContext from "./ThemeContext"

const Toggler = () => {
    const theme = useContext(ThemeContext)
    return (
        <StyledLabel>
            <input type="checkbox" checked={theme.darkMode} onChange={() => theme.setDarkMode(!theme.darkMode)} />
            <div>
                <MoonIcon />
            </div>
        </StyledLabel>
    )
}

export default Toggler

const StyledLabel = styled.label`
input{
    position:fixed;
    left:-999999px;
}
input ~ div{
    width:28px;
    height:14px;
    background-color:#eee;
    border-radius:7px;
    position:relative;
}
svg{
    height:14px;
    color:#fff;
    background-color:#ccc;
    border-radius:7px;
    position:absolute;
    top:1px;
    left:1px;
    transition:all .5s ease;
}
input:checked ~ div{
    background-color:#668;
    svg{
        background-color:#224;
        left:14px;
    }
}
`;