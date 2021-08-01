import React, { Component } from 'react'
import axios from 'axios'
import {Card,Button,Container,Row} from 'react-bootstrap'
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            coffeData:[]
        }
    }

    componentDidMount=async()=>{
        const url=`${process.env.REACT_APP_SERVER}/apidata`;
        const data=await axios.get(url);
        this.setState({
            coffeData:data.data
        });
        console.log(data.data);
    }
    addTofav=async(el)=>{
        const email='ibrahem.omari96@gmail.com';
        const reqBody={
            id:el.id,
            title:el.title,
            descrption:el.descrption,
            ingredients:el.ingredients,
            img:el.img
        }
        const url =`${process.env.REACT_APP_SERVER}/addtofav?email=${email}`;
        await axios.post(url,reqBody);
    }

    render() {

        return (
            <>
                <Container>
                    <Row>
                        {
                            this.state.coffeData.map((el,idx)=>{
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
                                        <p>{el.description}</p>
                                    </Card.Text>
                                    <Card.Footer>
                                        <Button
                                            variant="warning"
                                            onClick={()=>this.addTofav(el)}
                                        >Add to fav</Button>
                                    </Card.Footer>
                                </Card>
                                )
                            })
                        }
                    </Row>
                </Container>
                
            </>
        )
    }
}

export default Home
