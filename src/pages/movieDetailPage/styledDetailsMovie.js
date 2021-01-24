import styled from "styled-components";


export const DetailsMovieWrapper = styled.div`
padding: 30px;
.detailsMovieButton{
    display: block;
    margin:0 auto;
	width: 300px;
    height: 70px;
    padding: 5px 10px; 
    font-size: 25px;
    border-radius: 50px;
    border-color: transparent;
    color: #ffffff;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #51a9fc;
    background-color:#51a9fc;

	cursor: pointer;
    outline: none;
     &:hover,&:focus{
        color: #51a9fc;
        background-color:#fafc6d;
        text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #ffffff;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}
    }
    .detailsMovieTitle{
        text-align: center;
    font-weight: 500;
    color: #fafc6d;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #51a9fc;
    }
    .detailsTagline, .detailsRuntime{
        text-align: center;
    font: inherit;
    font-size: 30px;
    font-weight: 300;
    color: #c0fcee;
    }
    .detailsOverView, .detailsPopularity{
           text-align: center;
    font: inherit;
    font-size: 20px;
    font-weight: 300;
    color: #ffffff;
    }
`