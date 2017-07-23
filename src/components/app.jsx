import React from 'react';
import Sequence from './Sequence';
import SequenceImg from './SequenceImg';
import {getFiles} from '../utils';

export default class App extends React.PureComponent {
    getListFiles(){
        var res = getFiles('assets/img/plan1/','jpg','back-',15);
        return res;
    }
    render(){
        return (
            <div className="hello">
                <SequenceImg list={this.getListFiles()} />
            </div>
        )
    }
}
