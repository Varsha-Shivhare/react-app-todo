import React from 'react';

class Options extends React.Component{
    render(){
        let name = this.props.name
        return(
            <div className="paragraph">
                <div>
                    <p> Hey, my name is {name}.</p>
                    <p> Don't you think so {name} is the prettiest name ever.</p> 
                    <p> I am glad that I have {name} as a name.</p>
                </div>
            </div>
        );
    }
}


export default Options;