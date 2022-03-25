import React from 'react';
import { ErrorDiv, ErrorText, InErrorDiv } from '../styles';

const ServerError = (props: any) => {
    return (
    <ErrorDiv>
        <InErrorDiv>!</InErrorDiv><ErrorText>{props.login}</ErrorText>
    </ErrorDiv>
    );
};

export default ServerError;