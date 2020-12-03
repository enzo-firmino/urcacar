import React from "react";
import { Image, Form, Button, Row, Col } from "react-bootstrap";
import retour from '../../../assets/Retour.png';

export default function Message(props) {

    return (
        <>
            <div className="bg-gris">
                <div className="container">
                    <div className="row p-2">
                        <Image className="action" src={retour}></Image>
                        <Image className="pp" src="https://www.concordia.ca/content/concordia/fr/admission/profil-des-etudiants/_jcr_content/content-main/tabs/parsys-tabs-0/vignette/image.img.jpg/1541189460376.jpg" roundedCircle></Image>
                        <h1 style={{marginTop:"auto", marginBottom:"auto", marginLeft:50}}>Romane</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <MyMsg/>
                <UMsg/>
                <div>
                    <Form>
                        <Row className="d-flex flex-fill">
                            <Form.Control style={{marginTop:"auto", marginBottom:"auto", width:"80%"}} className="bg-gris" type="text" placeholder="Message" />
                            <Button className="transparent"><Image className="action" src="https://image.winudf.com/v2/image/Y29tLnRyaXNodWx0ZWNoaW5kaWEudGFwMnNlbmRfaWNvbl8xNTM1NDI4MTQxXzAzNg/icon.png?w=170&fakeurl=1"/></Button>
                        </Row>
                    </Form>
                </div>
            </div>
        </>
    );
}

function MyMsg(){
    return(
        <div className="bg-gris">

        </div>
    )
}

function UMsg(){
    return(
        <div className="bg-gris">
            
        </div>
    )
}
