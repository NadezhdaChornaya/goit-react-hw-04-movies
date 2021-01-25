import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styled from "styled-components"

const LoaderWrapper = styled(Loader)`
margin: 20px auto;
text-align:center;
`

export const Spinner = () => {
    return (

        <LoaderWrapper
            type="ThreeDots"
            color="#51a9fc"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />

    )
}