import React from 'react';

const card = ({ card,cardState,setCardState,index }) => {

    const inactiveCard = (card)=>{
        return card.isActive ? <></> : ( 
            <div className = {card.isCardState} style={{display : 'block'}} >
                <p className = 'inactive-query' >The Kid Has Been Deactivated</p>
                <div className = 'btn-black' onClick={()=> {
                    let c = [...cardState];
                    c[index].isActive = true;
                    setCardState(c)
                } }  >Reactivate Kid</div>
            </div>
            )
    }
   
 return (
    <article className ='flexItems'>
        <div className ='cardHeader'>
            <div className ='imgContainer'><img src={card.image} alt='DP'/></div>
            <aside className ='userDetails'>
            <h2 className = 'userName' >{card.title}</h2> 
                <p className = 'userDesc'>{card.subtitle}</p>
                <p className = 'userDesc'>{card.desc}</p>
            </aside>
        </div> 
        <div className = 'line'></div>
        <div className = 'subjectContainer'>
            {inactiveCard(card)}
            {
            card.subjects.map( (subject,index) => {       
            return <div className = 'subjectDetails' key={subject.name}>
                        <div className = 'flexBetween'>
                            <div className = 'subjectName'>{subject.name}</div>
                            <div className = 'subjectPercentage'>{subject.percentage}%</div>
                        </div>
                        <div className="progress">
                            <div className={"bar  "+subject.color} style={{width: subject.percentage +'%'}}> </div>
                        </div>
                    </div>
                } )
            }
        </div>
    </article>
 );
};

export default card ;
