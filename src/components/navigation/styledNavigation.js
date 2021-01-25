import styled from "styled-components";


export const NavigationWrapper = styled.div`
display: flex;
justify-content: space-around;
align-items:center;
background-color: #2d2642;
.navigation-link{
text-decoration: none;
font: inherit;
    font-size: 30px;
    font-weight: 700;
    color: #ffffff;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #51a9fc;
    cursor: pointer;
    &:hover,&:focus{
        color: #51a9fc;
        text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #ffffff;
    }
}
.navigation-link-active{
    color:#fafc6d;
}

.navigationList{
    display: flex;
    justify-content: center;
    list-style: none;
    
}
.navigationItem:not(:last-child){
    margin-right: 20px;
}
.navigationTitle{
     color: transparent;
     -webkit-text-stroke: 1px #fafc6d;
     text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #ffffff;
}
SVG {
  width: 100px;
  height: 100px;
  fill: #ffffff;}
`