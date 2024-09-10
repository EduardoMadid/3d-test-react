import styled from "styled-components";

export const NavStyle = styled.section`
    .nav{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        height: 10vh;
        background-color:#213550
    }
    .home{
        text-decoration:none;
        color:#fff;
        font-size:20px;
        text-transform:uppercase;
    }
    .home:hover{
        color: #f7f7f7;
        border-bottom:1px solid #fff;
    }
    .login{
        text-decoration:none;
        color:#fff;
        font-size:20px;
        text-transform:uppercase;
    }
    .login:hover{
        color: #f7f7f7;
        border-bottom:1px solid #fff;
    }
`;
