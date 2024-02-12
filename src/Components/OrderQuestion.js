import React, {useState} from 'react';
import Question from './Question';

function OrderQuestion(){
    const [qcount, setQcount] = useState(1);
    const [score, setScore] = useState(0);

    const handelClick = () => setQcount(qcount+1);

    const handelOption = (event) => {
        if(event.target.value === 'Amazon' || event.target.value === 'South africa' || event.target.value === 'Squid game' || event.target.value === 'Minato' || event.target.value === 'Hong Kong'){
            setScore(score+1);
        } 
    };

    return<Question count={qcount} onClick={handelClick} option={handelOption} score={score}/>
};
export default OrderQuestion;

  