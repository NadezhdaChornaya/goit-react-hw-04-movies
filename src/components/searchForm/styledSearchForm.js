import styled from "styled-components";


export const Form = styled.form`
display: block;
margin: 20px;
text-align: center;
.formInput{
    margin-right: 20px;
    padding: 10px;
    width: 50vw;
    height: 50px;
    font-size: 20px;
    border: 1px solid #fafc6d;
    border-radius: 10px;
    box-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #ffffff;
}
.formButton{
    /* display: block;
    margin:20px auto; */
	width: 100px;
    height: 50px;
    padding: 10px 5px; 
    font-size: 20px;
    border-radius: 50px;
    border-color: transparent;
    color: #ffffff;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #51a9fc;
    box-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #ffffff;
    background-color:#51a9fc;

	cursor: pointer;
    outline: none;
     &:hover,&:focus{
        color: #51a9fc;
        background-color:#fafc6d;
        text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #ffffff;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}
    }

`