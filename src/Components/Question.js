import React from 'react';

function Question({count, onClick, option, score}){
    switch(count){
        case 1:
        return(
            <div className='App'>
                <h4>What company was originally called "Cadabra"?</h4>
                <h5><input type="radio" name="company-1" value="Google"/><label htmlFor="Google"> Google</label></h5>
                <h5><input type="radio" name="company-1" value="Nike"/><label htmlFor="Nike"> Nike</label></h5>
                <h5><input type="radio" name="company-1" value="Amazon" onChange={option}/><label htmlFor="Amazon"> Amazon</label></h5>
                <h5><input type="radio" name="company-1" value="Netflix"/><label htmlFor="Netflix"> Netflix</label></h5>
                <button className="btn btn-success" onClick={onClick}>Submit</button>
            </div>
        );
        case 2:
        return(
            <div className='App'>
                <h4>What Netflix show had the most streaming views in 2021?</h4>
                <h5><input type="radio" name="show-2" value="All of us dead"/><label htmlFor="All of us dead">All of us dead</label></h5>
                <h5><input type="radio" name="show-2" value="Squid game"  onChange={option}/><label htmlFor="Squid game">Squid game</label></h5>
                <h5><input type="radio" name="show-2" value="Resident evil"/><label htmlFor="Resident evil">Resident evil</label></h5>
                <h5><input type="radio" name="show-2" value="Peaky Blenders"/><label htmlFor="Peaky Blenders">Peaky Blenders</label></h5>
                <button className="btn btn-success" onClick={onClick}>Submit</button>
            </div>
        );
        case 3:
        return(
            <div className='App'>
                <h4>In what country was Elon Musk born? </h4>
                <h5><input type="radio" name="musk-3" value="America"/><label htmlFor="America">America</label></h5>
                <h5><input type="radio" name="musk-3" value="England"/><label htmlFor="England">England</label></h5>
                <h5><input type="radio" name="musk-3" value="South africa" onChange={option}/><label htmlFor="South africa">South africa</label></h5>
                <h5><input type="radio" name="musk-3" value="Europe"/><label htmlFor="Europe">Europe</label></h5>
                <button className="btn btn-success" onClick={onClick}>Submit</button>
            </div> 
        );
        case 4:
        return(
            <div className='App'>
                <h4>Name of Yellow flash of leaf in naroto?</h4>
                <h5><input type="radio" name="leaf-4" value="Minato" onChange={option}/><label htmlFor="Minato">Minato</label></h5>
                <h5><input type="radio" name="leaf-4" value="Naruto"/><label htmlFor="Naruto">Naruto</label></h5>
                <h5><input type="radio" name="leaf-4" value="Boruto"/><label htmlFor="Boruto">Boruto</label></h5>
                <h5><input type="radio" name="leaf-4" value="Soruto"/><label htmlFor="Soruto">Soruto</label></h5>
                <button className="btn btn-success" onClick={onClick}>Submit</button>
            </div>
        );
        case 5:
        return(
            <div className='App'>
                <h4>What country has the highest life expectancy?</h4>
                <h5><input type="radio" name="life-5" value="Hong Kong" onChange={option}/><label htmlFor="Hong Kong">Hong Kong</label></h5>
                <h5><input type="radio" name="life-5" value="Taiwan"/><label htmlFor="Taiwan">Taiwan</label></h5>
                <h5><input type="radio" name="life-5" value="America"/><label htmlFor="America">America</label></h5>
                <h5><input type="radio" name="life-5" value="India"/><label htmlFor="India">India</label></h5>
                <p><button className="btn btn-success" onClick={onClick}>Submit</button></p>
            </div>
        );
        default: 
            return(
                <div className='App'>
                    <h1>Your Score for this Quiz is {score} out of 5</h1>
                    <h1>Thank you!!</h1>
                </div>
            );
    }
}
export default Question;