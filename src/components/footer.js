import React from "react"
import styled from "styled-components";

const FooterContainer = styled.footer`
    background: #F7F9F9;
    text-align: center;
    position: initial;
    padding: 18px;
    width: 100%;
    bottom: 0px;

`;

const Copyright = styled.h5`
    font-family: Nunito;
    font-weight: 400;
    font-size: 18px;
    margin: 32px auto;
`;

const SocialIcons = styled.div`
    width: 280px;
    margin: 38px auto 10px;
    padding-bottom: 0;
    align-self: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const IconLink = styled.a`
    text-decoration: none;
    outline: 0;
    @media (min-width: 420px) {
        width: 320px;
    }
`;

const Icon = styled.img`
    height: 30px;
    width: auto;
    transition: 0.23s;
    &:hover {
        transform: translate(0px, -6px);
    }
`;

const linkStyles = {
    height: "33px",
    width: "33px",
    padding: "0",
    margin: "0"
};

class Footer extends React.Component {
    render() {
        return (
            <FooterContainer>
                <SocialIcons>
                    <IconLink
                        style={linkStyles}
                        href="https://github.com/antwickler"
                        target="_blank"
                    >
                        <Icon
                            style={linkStyles}
                            src={require("../images/icons/github-logo-black.svg")}
                            alt="Github"
                        />
                    </IconLink>
                    <IconLink
                        style={linkStyles}
                        href="https://www.linkedin.com/in/antwickler/"
                        target="_blank"
                    >
                        <Icon
                            style={linkStyles}
                            src={
                                require("../images/icons/linkedin-logo-black.svg")
                            }
                            alt="Linkedin"
                        />
                    </IconLink>
                    <IconLink
                        style={linkStyles}
                        href="https://www.facebook.com/w.ratchawangmueang/"
                        target="_blank"
                    >
                        <Icon
                            style={linkStyles}
                            src={require("../images/icons/facebook-letter-logo-black.svg")}
                            alt="Facebook"
                        />
                    </IconLink>
                    <IconLink
                        style={linkStyles}
                        href="https://www.instagram.com/antwickler/"
                        target="_blank"
                    >
                        <Icon
                            style={linkStyles}
                            src={require("../images/icons/instagram-logo-black.svg")}
                            alt="Intstagram"
                        />
                    </IconLink>
                </SocialIcons>
                <Copyright>
                    © Weerasak Ratchawangmueang – {new Date().getFullYear()}
                </Copyright>
            </FooterContainer>
        );
    }
}

export default Footer
