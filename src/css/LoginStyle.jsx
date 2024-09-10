import styled from "styled-components";

export const LoginStyle = styled.section`
.container{
    width:100%;
    height: 85vh;
    display:flex;
    justify-content: center;
    align-items: center;
}
.container-login{
    width:100%;
    min-height:65%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    padding:15px;
    background:transparent;
}
.login{
    width:350px;
    margin-right:50px;
    background:transparent;
}
.login-form{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
}
.titulo-login{
    display:block;
    font-size:40px;
    line-height:1.3;
    text-align:center;
}
.w-input{
    width:100%;
    position:relative;
    margin-top:30px;
    margin-bottom:30px;
    border-bottom:2px solid #d9d9d9;
}
.w-input:hover{
    border-bottom:2px solid #213550;
}
.input-form{
    font-size:1rem;
    line-height:1.2;
    display:block;
    width:100%;
    height:30px;
    padding:0 5px;
    border:none;
    outline:none;
}
.login-btn{
    width:100%;
    display:flex;
    justify-content:center;
}
.login-form-btn{
    font-size:1rem;
    width:100%;
    height:50px;
    background:#213550;
    color:#fff;
    text-transform:Uppercase;
    border-radius:15px;
    transition: all 0.4s;
}
.login-form-btn:hover{
    box-shadow:5px 5px 5px blue;
}
.utilidades{
    margin-top:30px;
    margin-left:-40px;
    list-style:none;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}
.text1{
    color:#213550;
    text-decoration:none;
}
.text2{
    color:darkblue;
    text-transform:uppercase;
    text-decoration:none;
    text-align:center;
}
.img{
    width:300px;
    height:400px;
    border-radius:10px;
}
.img:hover{
    
}

`