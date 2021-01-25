import styled from "styled-components";


export const Ul = styled.ul`
list-style: none;
text-align:center;
.moviePageItem{
    margin: 20px auto;
     width: 50vw;
     padding: 10px;
     border: 1px solid #fafc6d;
     border-radius: 10px;
    box-shadow: 0 0 10px #ffffff;
    &:hover,&:focus{
        border: 1px solid #51a9fc;
    }
}
.moviePageLink{
    color: #ffffff;
        font-size: 20px;
        text-decoration: none;
        &:hover,&:focus{
        color: #fafc6d;
        text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #ffffff;
}
  &:visited{color: #51a9fc;}
}
`