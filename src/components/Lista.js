import React from 'react';


//Component
const Lista = ({listCompra}) => {

    return (
      <>
        <ul>
            {listCompra.map((item, i) => {
                return (
                    <li key = {i}> 
                        {item}
                    </li>
                )
            })}
        </ul>
      </>
    );
};

export default Lista;