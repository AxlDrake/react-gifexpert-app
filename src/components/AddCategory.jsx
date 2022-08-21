import { useState } from "react"

export function AddCategory( { onNewCategory } ) {
    
  const [inputValue, setInputValue] = useState('One Punch');

  const onInputChange = ( { target } ) => {
    setInputValue( target.value );
  }

  const onSubmit = ( event ) => {
        event.preventDefault();
        const value = inputValue.trim()
        if( value.length <= 1 ) return;

        //setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory( value );
        
  }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
    
  )
}