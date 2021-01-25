import styled from "styled-components";

export const HomePageWrapper = styled.div`
.homePageTitle{
    text-align: center;
    font-weight: 500;
    color: #fafc6d;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #51a9fc;
}
.homePageList{
    list-style: none;
}
.homePageItem{
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
.homePageItem:not(:last-child){
    margin-bottom: 20px;
}
.navigation-link{
    display: block;
    margin: 0 auto;
    text-decoration: none;
    text-align: center;
    font: inherit;
    font-size: 20px;
    font-weight: 300;
    color: #ffffff;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #51a9fc;
    cursor: pointer;
     &:hover,&:focus{
        color: #fafc6d;
        text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #ffffff;
    }
}
`