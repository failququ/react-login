import React from 'react';
import { ErrorDiv, ErrorText, InErrorDiv } from '../styles';
import { TErrorMessage} from '../types';

const ServerError = (props: TErrorMessage) => {
    return (
    <ErrorDiv>
        <InErrorDiv>!</InErrorDiv><ErrorText>{props.errorMessage}</ErrorText>
    </ErrorDiv>
    );
};

export default ServerError;