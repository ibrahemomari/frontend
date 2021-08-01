import React, { Component } from 'react'
class Update extends Component {
    render() {
        return (
            <>
                <form 
                    onSubmit={(e)=>this.props.updateFunction(e)}
                >
                    <lable>id</lable>
                    <input type="type" name="id" value={this.props.id}/>

                    <lable>title</lable>
                    <input type="type" name="title" defaultValue={this.props.title}/>

                    <lable>description</lable>
                    <input type="type" name="descrption" defaultValue={this.props.descrption}/>

                    <lable>img</lable>
                    <input type="type" name="img" defaultValue={this.props.img}/>
                    
                    <input type="submit"/>
                </form>
            </>
        )
    }
}

export default Update
