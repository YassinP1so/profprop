import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Profile = (props) => {
return (
    <div>
    {/*Card start*/}
    <Card style={{ width: '18rem' }}>
    {/*img with props*/}
    <Card.Img variant="top" src={props.img}/>
    {/*img with props*/}
    <Card.Body>
    {/*Title with props*/}
    <Card.Title>{props.title}</Card.Title>
    {/*Title with props*/}
    <Card.Text>
    {/*para with props*/}
    {props.para}
    {/*para with props*/}
    </Card.Text>
    <Button variant="primary">Hello World!</Button>
    </Card.Body>
</Card>
{/*Card ends*/}
    </div>
);
}

export default Profile;
