import logo from './logo.svg';
import React from 'react'
import './App.css';
import { Row, Col, Card, Button } from 'antd';
import { GithubFilled, FacebookFilled, LinkedinFilled, GoogleSquareFilled } from '@ant-design/icons';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "red",
      Person: {
        fullName: "Mouhamed Amine Mbarek",
        bio: "There is great ability in knowing how to conveal one's ability.",
        imgSrc: "/images/med.jpg",
        profession: 'Full Stack Developer'
      },
      shows: false
    }

  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      6000
    );
  }
  render() {
    const styleglobal = {
      display: 'flex',
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#D9D7F1"
    }
    const styleglobal1 = {
      display: 'flex',
      justifyContent: "center",
      
      backgroundColor: "#D9D7F1"
    }
    const stylecard = {
      alignSelf: "center",
      backgroundColor: "#D9D7F1"
    }
    const styletitle = {
      fontSize: "28px",
      fontWeight: "700",
      color: "#000B49",
      fontFamilly: "Arial"
    }
    const styleadress = {
      fontSize: "24px",
      fontWeight: "400",
      color: "#000B49",
      fontFamilly: "Arial"
    }
    const styleprofession = { fontSize: "24px", fontWeight: "400", color: "#000B49", fontFamilly: "Arial" }

    const stylebio = { fontSize: "20px", fontWeight: "400", color: "#000B49", fontFamilly: "Arial" }
    const styleicon = {
      fontSize: "20px", color: "#000B49", marginRight: '20px'
    }
    const stylebutton = {
      color: "white", backgroundColor: "#000B49", fontSize: "18px", margin: "40px"
    }
    return (
      <>
      <Row justify="center" style={styleglobal1}>
          <Button style={stylebutton}
            onClick={() => this.setState({ shows: !this.state.shows })}
          >
            Display Profile
          </Button>
        </Row>



        <div style={styleglobal}>
        
        <Row justify="center">

          {this.state.shows ?
            <Card style={stylecard}>
              <Row justify="center">
                <img src={this.state.Person.imgSrc} alt='myImage' style={{ width: '100px', height: '100px', borderRadius: "50%" }} />

              </Row>
              <Row justify="center">
                <label style={styletitle}>{this.state.Person.fullName}</label>
              </Row>

              <Row justify="center">
                <label style={styleadress}>Sousse</label>

              </Row>
              <Row justify="center">
                <label style={styleprofession}>{this.state.Person.profession}</label>
              </Row>

              <Row justify="center">
                <label style={stylebio}>{this.state.Person.bio}</label>
              </Row>

              <Row justify="center" style={{ marginTop: "5%", marginBottom: "5%", display: "flex", justifyContent: "column", alignItems: 'center' }}>



                <GithubFilled style={styleicon} />



                <FacebookFilled style={styleicon} />



                <LinkedinFilled style={styleicon} />



                <GoogleSquareFilled style={styleicon} />


              </Row>

              <Row>

              </Row>

            </Card>
            : ''}
        </Row>


      </div>
      </>
      
    );
  }
}

export default App;
