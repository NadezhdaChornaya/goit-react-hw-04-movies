import styled from "styled-components";


export const ReviewsWrapper = styled.div`
.reviewTitle{
 text-align: center;
    font-weight: 300;
    font-size: 30px;
    color: #fafc6d;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #51a9fc;
}
.reviewText, .reviewCreated{
    font-weight: 300;
    font-size: 20px;
    text-align:center;
    color: #ffffff;
}
.reviewCreated{
    font-weight: 400;
}
.reviewList{
    list-style: none;
}
.reviewItem{
    padding: 20px;
     margin-bottom: 20px;
     border: 1px solid #fafc6d;
     border-radius: 10px;
    box-shadow: 0 0 20px #ffffff;
    &:hover,&:focus{
        border: 1px solid #51a9fc;
        box-shadow: 0 0 20px #fafc6d;
    }
}
.reviewAuthor{
    font-weight: 500;
    font-size: 25px;
    text-align:center;
    color: #c0fcee;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #51a9fc; 
}

`