import React from 'react'

const Validation = ({userId, title, body}) =>{
    
    if(userId.length > 4){
        message = 'Įveskite vartotojo ID su mažesniu skaičiumi';
        return;
    }
    if(title.length < 5 || title.length >500){
        message = 'Įveskite pavadinimą ne trumpesnį nei 5 ir ne ilgesnį  nei 500 tekstą';
        return;
    }
    if(body.length < 10 || body.length >1500){
        message ='Įveskite tekstą ne trumpesnį nei 10 ir ne ilgesnį  nei 1500 tekstą';
        return;
    }

    return message
}
export default Validation

 