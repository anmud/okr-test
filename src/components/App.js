import React, {useState} from 'react';
import '../../src/App.css';
import OkrList from './OkrList'


function App() {

  const [objectives, setObjectives] = useState([
    {
      userId: 'xxxxxxx',
      id: '1',
      name: 'AWS Big Data Certificate',
      objectiveProgress: 0.3,
      keyResults: [{
          objectiveId: '1',
          id: '1',
          name: 'Finish 1 udemy course',
          keyResultProgress: 0.1,
          rating: [
              {keyResultId: '1', id: '1', weekId: '1', weekNumber: 'cw20', point: ''},
              {keyResultId: '1', id: '2', weekId: '2', weekNumber: 'cw21', point: ''},
              {keyResultId: '1', id: '3', weekId: '3', weekNumber: 'cw22', point: ''},
              {keyResultId: '1', id: '4', weekId: '4', weekNumber: 'cw23', point: ''},
          ]   
      },
      {
        objectiveId: '1',
        id: '2',
        name: 'Go through 3 exam iterations',
        keyResultProgress: 0.1,
        rating: [
            {keyResultId: '2', id: '1', weekId: '1', weekNumber: 'cw20', point: ''},
            {keyResultId: '2', id: '2', weekId: '2', weekNumber: 'cw21', point: ''},
            {keyResultId: '2', id: '3', weekId: '3', weekNumber: 'cw22', point: ''},
            {keyResultId: '2', id: '4', weekId: '4', weekNumber: 'cw23', point: ''},
        ]   
    },
      ],
  
  }
  ])
  

  const [weeks, setWeeks] = useState([
    {
      weekId: '1',
      weekNumber: 'cw20'
    },
    {
      weekId: '2',
      weekNumber: 'cw21'
    },
    {
      weekId: '3',
      weekNumber: 'cw22'
    },
    {
      weekId: '4',
      weekNumber: 'cw23'
    }
  ])

  return (

   
       <div className="App">
      <OkrList
      objectives={objectives}
      setObjectives={setObjectives}
      weeks={weeks}
      setWeeks={setWeeks}
      />
       </div>
    
  );
}

export default App;

