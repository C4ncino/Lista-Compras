import React, { useState } from 'react';


const Input = ({setNewItem}) =>{
    const [item, setItem] = useState("");
    
    const onChange = (e) => {
        if (e.target.name === "item"){
            setItem(e.target.value);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if(item !== ""){
            setNewItem(item);
            setItem("");
        }
    };

    return(
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <input 
                        type = "text" 
                        name = "item" 
                        id = "item"
                        value = {item}
                        onChange = {onChange} 
                    />
                    <button> Guardar </button>
                </div>
                
            </form>
        </>
    );
};

export default Input;