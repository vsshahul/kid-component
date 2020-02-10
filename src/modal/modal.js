import React from 'react';
import './modal.css';
import avatar from '../assets/avatar.jpg';
const Modal = ( {cardState,isModelOpen,setModel,setCardState} ) => {

  const addkid = [
    {label : 'Title', var : 'title'},
    {label : 'Sub title', var : 'subtitle'},
    {label : 'Description', var : 'desc'}
    ];
    
  const subjects = ['Mathematics','Chemistry','Physics','English']
  const addCard = () =>{
    const cardDup = [...cardState];
    cardDup.push(newKid);
    setCardState(cardDup);
    setModel(false);
  }

  const [newKid,setNewKid] =  React.useState (
    {
        image: avatar,
        title: '',
        subtitle: '',
        desc: '',
        subjects: [
          { name: 'Mathematics', percentage: '', color: 'progressBlue' },
          { name: 'Chemistry', percentage: '', color: 'progressYellow' },
          { name: 'Physics', percentage: '', color: 'progressRed' },
          { name: 'English', percentage: '', color: 'progressGreen' }
        ]
    }
  );

  const changeHandler = (event,vaar) => {
    console.log(event.target.value); 
    const temp = {...newKid};
    temp[vaar] = event.target.value ;
    setNewKid(temp);

  };

  const changeMarks = (event,index) => {
    const tempMarks = {...newKid};
    tempMarks.subjects[index].percentage = event.target.value;
    setNewKid(tempMarks);
  }
    return <div className='modal' style={{display: isModelOpen?'block':'none' }}><div className='card-modal'>
          <header className='header-modal'>
            Add kid
            <span className='floatRight' onClick={ ()=> setModel(false) }><i className="mdi mdi-close-box-outline"/></span>
          </header> 
          <main className='main-modal'>
             {
                 addkid.map((kid)=>{
                     return  <div key={kid.label} className='content-modal'>
                     <div className='content-label-modal'>{kid.label}</div>
                     <div className='content-input-modal'>
                         <input type='text' onChange={(event)=>changeHandler(event,kid.var)} value={newKid[kid.var]} />
                     </div>
                 </div>
                 })
             }
             {
              subjects.map((subject,index)=>{
                return  <div key={index} className='content-modal'>
                <div className='content-label-modal'>{subject}</div>
                <div className='content-input-modal'>
                    <input type='text' onChange={(event)=>changeMarks(event,index)} value={newKid.subjects[index].percentage} />
                </div>
            </div>
            }) 
             }
          </main>
          <footer className='footer-modal'> 
            <div className='btn-black' onClick={ ()=> addCard() }>Add</div>
            <div className='btn-black' onClick={ ()=> setModel(false) }>Close</div>
          </footer>
    </div>  
    </div> 
}

export default Modal;