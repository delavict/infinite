import React from 'react';


export default class Sequence extends React.PureComponent {
    render(){
        return (
            <ul>
              {this.props.list.map(function(listValue){
                    return <li>{listValue}</li>;
              })}
          </ul>
        )
    }
}
