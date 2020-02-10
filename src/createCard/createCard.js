import React from 'react';
import './createCard.css'

const CreateCard = ({setModel}) => {
    return <>
    <article className ='flexItems createCard'>
        <div className='center'>
        <div className='text'>You can add one more kid as per your subscription plan. </div>
        <div className='btn-black' onClick={()=>setModel(true)} >Add Kid</div>
        </div>
    </article>
    </>
}

export default CreateCard;