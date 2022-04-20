import React,{useState} from "react";
import PropTypes from 'prop-types'

export const AddCategory= ({setCategories})=>{
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();//Evitar recarga de pagina
        inputValue!="" ? setCategories(cats=>[inputValue,...cats]) : alert("Agrega una palabra perro");        
    }
    return <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Buscar"
        />
    </form>

}   
AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}