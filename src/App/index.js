import React, { useEffect, useState } from 'react';
import './App.scss';
import { Button, Card } from 'reactstrap';
import {
  getLiveStudents,
  getDeadStudents,
  killStudent
} from '../helpers/data/studentsData';
import '../styles/index.scss';

function App() {
  const [livinStudents, setLivinStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);

  useEffect(() => {
    setLivinStudents(getLiveStudents());
    setDeadStudents(getDeadStudents());
  }, []);

  const killEmDead = () => {
    const [living, dead] = killStudent();
    setLivinStudents(living);
    setDeadStudents(dead);
  };

  return (
    <div className='App'>
      <Button
        color='danger'
        onClick={killEmDead}
        disabled={livinStudents.length <= 0}
      >
        Kill em Dead
      </Button>

      <h2>Living Students</h2>
      <>
        {livinStudents.map((liveStudent) => (
          <div className="container" key={liveStudent.id}>
            <Card className="card-container">
            {`${liveStudent.firstName} ${liveStudent.lastName}`}
            </Card>
          </div>
        ))}
      </>

      <h2>Dead Students</h2>
      <>
        {deadStudents.map((liveStudent) => (
          <div className="container2" key={liveStudent.id}>
          <Card className="deadStudents">
            {`${liveStudent.firstName} ${liveStudent.lastName}`}
            </Card>
          </div>
        ))}
      </>
    </div>
  );
}

export default App;
