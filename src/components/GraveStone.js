import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';

const GraveStone = ({ student }) => (
  <div>
  <Card>
    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
    <CardBody>
      <CardTitle tag="h5">Card title</CardTitle>
      <CardText>{`${student.firstName} ${student.lastName}`}</CardText>
      <Button>Button</Button>
    </CardBody>
  </Card>
</div>

);

GraveStone.propTypes = {
  student: PropTypes.object.isRequired
};

export default GraveStone;
