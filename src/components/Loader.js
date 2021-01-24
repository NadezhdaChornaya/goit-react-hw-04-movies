import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Spinner = () => {
    return (

        <Loader
            type="ThreeDots"
            color="#51a9fc;"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />

    )
}