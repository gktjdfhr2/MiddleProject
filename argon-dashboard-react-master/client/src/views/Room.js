import { useState } from "react"; 
// javascipt plugin for creating charts
import Chart from "chart.js"; 
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody, 
  Container,
  Row,
  Col,
  CardTitle, 
} from "reactstrap";

import { Dropdown } from 'react-bootstrap' 
 
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import { BsCameraVideoFill, BsCameraVideoOffFill, BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";
import Header from "components/Headers/Header.js"; 

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  const [participant, setParticipant] = useState(['참여자1', '참여자2', '참여자3', '참여자4'])
  const [message, setMessage] = useState('');
  const [cam, changeCam] = useState(true);
  const [mic, changeMic] = useState(true);
  const [setCam, selectCam] = useState(['mode1_cam', 'mode2_cam', 'mode3_cam']);
  const [setMic, selectMic] = useState(['mode1_mic', 'mode2_mic', 'mode3_mic']);

  function chatting() {
    let newMessage = [...message];
    message.unshift(message);
    setMessage(newMessage);
  }

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };

  return (
    <>
      <Header />  
      <Container className="mt--7" fluid>
        <Row>
          {
            participant.map((data, i) => {
              return( 
                <Col lg="6" xl="3" key={ data }>
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody >
                      <Row >
                        <div className="col" >
                          <CardTitle tag="h5" className="text-uppercase text-muted mb-0" >{ data }</CardTitle> 
                        </div>
                        <Col className="col-auto"> 
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm"> 
                      </p>
                    </CardBody>
                  </Card> <br />
                </Col> 
              )
            })
          } 
        </Row> 
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0" style={{height: '350px'}}>
                <Row className="align-items-center"> 
                  <div className="col text-right">  
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow" onClick={ () => { changeCam(!cam)} }>
                        { cam === true ? <BsCameraVideoFill /> : <BsCameraVideoOffFill /> }
                      </div>&nbsp;
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow" onClick={ () => { changeMic(!mic)} }>
                        { mic === true ? <BsFillMicFill /> : <BsFillMicMuteFill /> }
                      </div>
                    </Col>
                  </div>
                </Row>
              </CardHeader> 
            </Card> 
            <br />
            <div> 
              <Dropdown>
                <Dropdown.Toggle className="mr-4" size="sm">카메라 선택</Dropdown.Toggle> 
                <Dropdown.Menu>
                  { setCam.map( (data, i) => { return ( <Dropdown.Item>{ data }</Dropdown.Item> ) })}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle size="sm">마이크 선택</Dropdown.Toggle>
                <Dropdown.Menu>
                  { setMic.map( (data, i) => { return ( <Dropdown.Item>{ data }</Dropdown.Item> ) })}
                </Dropdown.Menu> 
              </Dropdown>
            </div> 
          </Col> 
          <Col className="mb-5 mb-xl-0" xl="4">
            <Card className="shadow">
              <CardHeader className="border-0" style={{height: '218px'}}>
                <Row className="align-items-center">
                  <div className="col">받은 메세지</div>
                </Row>
                <Row className="align-items-center"> 
                  <div className="col text-right">보낸 메세지 { message } </div>
                </Row>
              </CardHeader>
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col text-right"> 
                    <hr />
                    <input onChange={ (e) => { setMessage(e.target.value) }} style={{width: '80%', border: 'none'}} /> 
                    <Button color="primary" onClick={ chatting } size="sm">SEND</Button>
                  </div>
                </Row> 
              </CardHeader>
            </Card>
          </Col> 
        </Row>
      </Container>
    </>
  );
};

export default Index;
