import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';
import GraveStone from './GraveStone';

const GraveYard = ({ deadStudents }) => (
<Card>
  {deadStudents.map((student) => (
    <GraveStone key={student.id} student={student}/>
  ))}
</Card>);

GraveYard.propTypes = {
  deadStudents: PropTypes.array.isRequired
};

export default GraveYard;
