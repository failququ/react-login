import styled from 'styled-components';


export const LoginHeader = styled.h1`
font-family: 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 64px;
line-height: 78px;
text-align:center;
`

export const FormButton = styled.button`
    width: 640px;
    height: 60px;
    background: #4A67FF;
    border-radius: 8px;
    font-size: 18px;
    line-height: 22px;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-top: 40px;

    &:disabled {
        background: #99A9FF;;
    }
`

export const LoginInput = styled.input`
    width: 640px;
    height: 60px;
    background: #F5F5F5;
    border-radius: 8px;
    border: none;
    padding-left: 20px;
    margin-top: 10px;
    margin-bottom: 21px;
`

export const LoginForm = styled.form`
    width: 640px;
    margin: 0 auto;
    margin-top: 56px;
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
font-family: 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
`

export const ErrorDiv = styled.div`
    font-family: 'Helvetica Neue', sans-serif;
    position: relative;
    width: 640px;
    height: 60px;
    background: #F5E9E9;
    border: 1px solid #E26F6F;
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 209px;
`

export const InErrorDiv = styled.span`
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: #FFC8C8;
    border-radius: 50%;
    color: #EE6565;
    font-size: 14px;
    line-height: 17px;
    font-family: 'Helvetica Neue', sans-serif;
    text-align: center;
`

export const ErrorText = styled.span`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 54px;
`

export const LogOutBtn = styled.button`
    width: 200px;
    height: 60px;
    background: #F5F5F5;
    border-radius: 8px;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    border: none;
    margin-top: 50px;
    cursor: pointer;
`

export const ProfileGreetingsDiv = styled.div`
    margin-top: 340px;
    font-family: 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
`

export const ProfilePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CheckBox = styled.div`
    display:flex;
    gap: 14px;
`