import axios from 'axios';
import React, { Component } from 'react'
import {Card,Button,Container,Row} from 'react-bootstrap'
import Update from './Update';
class Favorite extends Component {
    constructor(props){
        super(props);
        this.state={
            favorite:[],
            showForm:false,
            id:'',
            title:'',
            descrption:'',
            img:'',
            index:-1
        }
    }
    componentDidMount=async()=>{
        const email='ibrahem.omari96@gmail.com'
        const url=`${process.env.REACT_APP_SERVER}/userdata?email=${email}`;
        const data= await axios.get(url);
        this.setState({
            favorite:data.data.coffeeData
        });
        console.log(data.data.coffeeData);
    }
    
    deleteCoffee=async(index)=>{
        const email='ibrahem.omari96@gmail.com';
        const url=`${process.env.REACT_APP_SERVER}/delete/${index}?email=${email}`;
        const data=await axios.delete(url);
        console.log(data.data);
        this.setState({
            favorite:data.data
        });
    }
    showFunction=async(index)=>{
       await this.setState({
            showForm:true,
            index:index,
            id:this.state.favorite[index].id,
            title:this.state.favorite[index].title,
            descrption:this.state.favorite[index].descrption,
            img:this.state.favorite[index].img,
        });
    }




    updateFunction= async (event)=>{
        event.preventDefault();
        const index=this.state.index;
        const email='ibrahem.omari96@gmail.com';
        const reqBody={
            id:event.target.id.value,
            title:event.target.title.value,
            descrption:event.target.descrption.value,
            img:event.target.img.value
        }
        const url=`${process.env.REACT_APP_SERVER}/update/${index}?email=${email}`;
        const data=await axios.put(url,reqBody);
        this.setState({
            favorite:data.data
        });
    }
    render() {
        return (
            <>
                <Container>
                    <Row>
                        {
                            this.state.favorite.map((el,idx)=>{
                                return(
                                <Card key={idx} style={{width:"15rem"}}>
                                    <Card.Img
                                        variant="top"
                                        src={el.img}
                                        />
                                        alt={el.title}
                                    <Card.Title>
                                        <span>{el.title}</span>
                                    </Card.Title>
                                    <Card.Text>
                                        <p>{el.descrption}</p>
                                    </Card.Text>
                                    <Card.Footer>
                                    <Button
                                            variant="warning"
                                            onClick={()=>this.showFunction(idx)}
                                        >Update</Button>
                                        
                                        <Button
                                            variant="danger"
                                            onClick={()=>this.deleteCoffee(idx)}
                                        >Delete</Button>
                                    </Card.Footer>
                                </Card>
                                )
                            })
                        }
                    </Row>
                </Container>
                {
                    this.state.showForm && 
                    <Update 
                        id={this.state.id}
                        title={this.state.title}
                        descrption={this.state.descrption}
                        img={this.state.img}
                        updateFunction={this.updateFunction}
                    />
                }
            </>
        )
    }
}

export default Favorite
