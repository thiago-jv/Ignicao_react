import React from 'react';

class ClassComponent extends React.Component<{ name: string }> {

    constructor(props: any){
        super(props)
        console.log('constructor reached')
    }

    componentDidMount()  {
        console.log('did mount reached')
    }

    componentDidUpdate() {
        console.log('did update reached')
    }

    state = {
        name: 'Mundo!!!'
    }

    render() {
        console.log('render reached')
        return <div>
            <p>name: { this.state.name }</p>
            <button onClick={() => { 
                this.setState({ name: 'Thiago'})
                }}>Clik Here</button>
            </div>
    }
}

export default ClassComponent