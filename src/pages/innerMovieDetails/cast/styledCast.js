import styled from "styled-components";


export const CastWrapper = styled.div`
.castTitle{
    text-align: center;
    font-weight: 300;
    font-size: 30px;
    color: #fafc6d;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #51a9fc;
}
.castList{
    display: flex;
    justify-content: center;
     flex-wrap: wrap;
    list-style: none;
}
.castItem{
margin-right: 20px;
     margin-bottom: 20px; 
     padding: 10px;
     width: 300px;
     border: 1px solid #fafc6d;
        box-shadow: 0 0 10px #ffffff;
}
.castName, .castCharacter{
    text-align: center;
    font-weight: 300;
    font-size: 25px;
    color: #ffffff;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #51a9fc;
}
.castCharacter{
font-size: 20px;
}
.castText{
      font-weight: 300;
    font-size: 20px;
    text-align:center;
    color: #ffffff;
}
`