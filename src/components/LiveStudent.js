import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';
import './cStyles/liveStudent.scss';

const LiveStudent = ({ student }) => (
<Card className="liveStudent">
  {`${student.firstName} ${student.lastName}`}
</Card>
);

LiveStudent.propTypes = {
  student: PropTypes.object.isRequired
};

export default LiveStudent;
