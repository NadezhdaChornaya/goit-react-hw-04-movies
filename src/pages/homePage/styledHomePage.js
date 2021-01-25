import styled from "styled-components";

export const HomePageWrapper = styled.div`
.homePageTitle{
    text-align: center;
    font-weight: 500;
    font-size: 50px;
    color: #fafc6d;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #51a9fc;
}
.homePageList{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
}
.homePageItem{
   
    width: 400px;
     padding: 10px;
     margin-right: 20px;
     margin-bottom: 20px;
     border: 4px solid #fafc6d;
     border-radius: 10px;
    box-shadow: 0 0 20px #ffffff;
    &:hover,&:focus{
        border: 4px solid #51a9fc;
        box-shadow: 0 0 20px #fafc6d;
    }
}
/* .homePageItem:not(:nth-child(3n+3)){
margin-right: 20px;
}
.homePageItem:not(:nth-last-child(n+2)){
    margin-bottom: 20px;
} */
.homePagePoster{
    margin: 20px auto;
    width: 300px;
}
.navigation-link{
    display: block;
    margin: 0 auto;
    text-decoration: none;
    text-align: center;
    font: inherit;
    font-size: 30px;
    font-weight: 400;
    color: #ffffff;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #51a9fc;
    cursor: pointer;
     &:hover,&:focus{
        color: #fafc6d;
        text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #ffffff;
    }
    &:visited{
        color: #51a9fc;
    }
}
`