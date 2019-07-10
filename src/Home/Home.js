import React from 'react';
import Dropzone from 'react-dropzone';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import {withRouter} from 'react-router'

import './Home.css';

const SubmitButton = withRouter(
    ({ history }) =>
      (
        <Button
            variant="light"
            onClick={() => {
                history.push("/report")
            }}
        >Submit</Button>
      )
  );

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast: false,
        }
    }

    render() {
        const { showToast } = this.state;
        return (
            <div className="my-container">
                <Container className="p-40" >
                    <Row className="p-t-10">
                        <Col xs={6}>
                            <div className="drop-zone">
                                <Dropzone onDrop={
                                    acceptedFiles => {
                                        console.log(acceptedFiles);
                                        this.setState({showToast: true}, () => {
                                            setTimeout(()=> {
                                                this.setState({showToast: false})
                                            }, 2000);
                                        })
                                    }} className="drop-zone">
                                    {({getRootProps, getInputProps}) => (
                                    <section>
                                        <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                        </div>
                                    </section>
                                    )}
                                </Dropzone>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <Toast show={showToast} >
                                <Toast.Header>
                                    <strong className="mr-auto">Message</strong>
                                    <small>1 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>File analysis started, this will take some time.</Toast.Body>
                            </Toast>
                        </Col>
                    </Row>
                    <Row className="p-t-10 reset-row">
                        <Col>
                            <Form>
                                <div className="mb-3">
                                    <Form.Check 
                                    type='radio'
                                    name="analysis-options"
                                    id={`fe-direct`}
                                    label="Fe-Direct"
                                    />
                                    <Form.Check 
                                    type='radio'
                                    name="analysis-options"
                                    id={`sub-advised`}
                                    label="Sub-advised"
                                    />
                                    <Form.Check 
                                    type='radio'
                                    name="analysis-options"
                                    id={`prospect`}
                                    label="Prospect"
                                    />
                                    <Form.Check 
                                    type='radio'
                                    id={`member`}
                                    name="analysis-options"
                                    label="Member"
                                    />
                                    <Form.Check 
                                    type='radio'
                                    name="analysis-options"
                                    id={`both`}
                                    label="Both"
                                    />
                                </div>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="p-t-10">
                        <Col xs={2}><SubmitButton /></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;