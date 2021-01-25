import styled from "styled-components";


export const DetailsMovieWrapper = styled.div`

.detailsMovieButton{
    display: block;
    margin:20px auto;
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
    .detailsMovieBlock{
        display: flex;
        padding: 20px;
        width: 80vw;
        margin: 20px auto;
        border: 1px solid #fafc6d;
        box-shadow: 0 0 10px #ffffff;
    }
    .detailsMovieInfoBlock{
        display: flex;
        flex-direction:column;
        justify-content: center;
    }
    .detailsMoviePoster{
        text-align: center;
        margin-right: 20px;
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
    font-size: 25px;
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
    .detailsPopularity{
        font-weight: 500;
    }
    .moreDetailsWrapper{
        padding: 20px;
        background-color:#301d6b;
    }

    .moreDetailsTitle{
        margin-top:0;
        margin-bottom: 10px;
        font-weight: 500;
        font-size: 30px;
        text-align:center;
        color: #fafc6d;
        text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #51a9fc;
    }
.moreDetailsLinkWrap{
    display: flex;
    justify-content: center
}
    .moreDetailsLink{
     padding: 5px;
     min-width: 150px;
    text-decoration: none;
    text-align: center;
        
        font-size: 30px;
        border: 1px solid #fafc6d;
        border-radius: 50px;
        color: #51a9fc;
        &:hover,&:focus{
        color: #ffffff;
        text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #ffffff;
    }
    }
    .moreDetailsLink:not(:last-child){
        margin-right: 30px;
    }
`