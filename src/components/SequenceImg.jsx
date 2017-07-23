//SequenceImg
import React from 'react';


export default class SequenceImg extends React.PureComponent {
    generateBackgroundStyle(fileName){
        var res = {
            backgroundImage:"url("+fileName+")"
        };
        consol.log(res);
        return res;
    }
    render(){
        return (
            <ul className="back-img__seq-container">
              {this.props.list.map(function(listValue){
                    return <li>
                        <div className="back-img__container"
                        data-number={listValue.fileNumber}
                        style={{backgroundImage:"url("+listValue.fileUrl+")"}}>
                        </div>
                    </li>;
              })}
          </ul>
        )
    }
}
