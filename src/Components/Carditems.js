import React from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
function Carditems({img,title,author,reviews,overview}) {
    return (
       
        <div className="max-w-2xl border-2  " >
        <div className="Carditems grid grid-cols-2 px-32  " style={{alignItems:"center"}}  >
            <div className="Carditems__img  border-2 w-24   ">
                <img className="  " src="https://imgv2-2-f.scribdassets.com/img/word_document/317274694/original/216x287/4bb2ebde8d/1622343583?v=1"
                alt />
            </div>
            <div className="Carditems__info pt-10 ">
                <h3> Corporate Chanakya on Leadership </h3>
                <p>RadhaKrishan</p>
                 <div className="Carditems__stars">
                        <StarBorderIcon />  
                        <StarBorderIcon /> 
                        <StarBorderIcon /> 
                        <StarBorderIcon /> 
                        <StarBorderIcon /> 
                        <p>(34)</p>
                 </div>
                
                <div className="Carditems__overview">
                 <p className="lin" >Chanakya, the most powerful strategist of 4th Century BC, documented his ideas on leadership..
                     </p> 

                </div>

            </div>
        </div>
        </div>
       
    )
}

export default Carditems
