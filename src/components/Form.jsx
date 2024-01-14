import * as React from "react"
import { useState } from "react";
import styled from "styled-components"

const StyledForm = styled.form`
    max-width: 300px;
    display: grid; 
    grid-template-columns: 20px 280px; 
    margin: 48px auto !important;
    row-gap: 10px;
    align-items:center;
    
    input {
        width: 100%;
        border-radius: 8px;
        text-indent:8px;
    }

    textarea {
        border-radius: 8px;
        text-indent:8px;
    }
`

function Form() {

    const [formData, setFormData] = useState({
        firstName: "", 
        lastName: "", 
        comment: ""
    }) 

    console.log(formData)

    function handleChange(event) {

        const {name, value} = event.target

        setFormData(prevFormData =>  {
            return {
                ...prevFormData, 
                [name]: value
            }
        })

    }

    return <>
    <StyledForm>
        
        <i className="fa fa-user icon"></i>
        <input type="text" placeholder="First Name" name="firstName" onChange={handleChange} value={formData.firstName} />
        <i className="fa fa-user icon"></i>
        <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} value={formData.lastName} />
        <i className="fa-regular fa-comment"></i>
        <textarea rows="4" placeholder="Kommentar" name="comment"  onChange={handleChange} value={formData.comment} />
        
    </StyledForm>
    </>
}

export default Form; 