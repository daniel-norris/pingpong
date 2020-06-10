import React from 'react' 

const Form = ({ children }) => (
    <form
        className="d-flex flex-column p-2">
            { children }
    </form>
);

export default Form; 