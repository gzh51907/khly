import React ,{Component} from 'react';

export function withnum(Innercomponent){
    let num = 666;

    return function (){
        return <Innercomponent num={num}/>
    }
}


export function withlength (Innercomponent){
    return class extends Component {
        constructor(){
            super();
            this.state ={
                length:5
            }
        }
        render(){
            return (
                <div>
                  <Innercomponent length={this.state.length} />
                </div>
            )
        }
    }
}