import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';
import LiveStudent from './LiveStudent';

const SharkTank = ({ livinStudents }) => (
<Card>
  {livinStudents.map((student) => (
    <LiveStudent key={student.id} student={student} />
  ))}
</Card>);

SharkTank.propTypes = {
  livinStudents: PropTypes.array.isRequired
};

export default SharkTank;
