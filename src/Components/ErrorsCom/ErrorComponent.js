import React,{ useState } from 'react';
import {Alert,Button} from 'react-bootstrap'
import './ErrorCom.css'

export default function ErrorComponent({profile}) {
    const [show, setShow] = useState(true);
    if (show) {
        return (
            <div>
            {profile.error!==""?
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                {/* <Alert.Heading>That's not the right password.!</Alert.Heading> */}
                <p>
               
                {profile.error}
                </p>
              </Alert>:null}
              </div>
        );
      }
      return (<div></div>);
}
