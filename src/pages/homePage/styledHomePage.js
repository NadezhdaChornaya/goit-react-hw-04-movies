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
    color: #c0fcee;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #51a9fc;
    cursor: pointer;
     &:hover,&:focus{
        color: #fafc6d;
        text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #ffffff;
    }
}
`