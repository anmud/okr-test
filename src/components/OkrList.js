import React, {Fragment, useState} from 'react'



const OkrList = ({objectives, setObjectives, weeks, setWeeks}) => {
    

const stateWeekId = weeks.map(week => week.weekId)

const [objectiveToRate, setObjectiveToRate] = useState({
  userId: '',
  id: '',
  name: '',
  objectiveProgress: 0,
  keyResults: [{
    objectiveId: '', 
    id: '', 
    name: '', 
    keyResultProgress: 0, 
    rating: [ {keyResultId: '', id: '', weekId: '', weekNumber: '', point: ''}]
  }],
})


const [newRating, setNewRating] = useState({
  keyResultId: '', 
  id: '', 
  weekId: '', 
  weekNumber: '', 
  point: ''}
)





 const handleChange = ({ resultId, ratingId, event, wId, weekNum, currentObjective}) => {
     const {name, value} = event.target

     setNewRating({...newRating,
          keyResultId: resultId, 
          id: ratingId, 
          weekId: wId, 
          weekNumber: weekNum, 
          [name]: value
        }) 
    

     console.log("newRating", newRating)

     setObjectiveToRate({
       userId: currentObjective.userId,
       id: currentObjective.id,
       name: currentObjective.name,
       objectiveProgress: currentObjective.objectiveProgress,
       keyResults: currentObjective.keyResults
     })
   
 }


//  const updatedRating = objectives.filter(objective => objective.id === oId ).map(objective => objective.keyResults)[0].filter(result => result.id === resultId).map(result => result.rating)[0].map(rating => rating.id === ratingId ? ({...newRating,
//   keyResultId: resultId, 
//   id: ratingId, 
//       weekId: wId, 
//       weekNumber: weekNum, 
//       point: value}) : rating)


    return  (
  <div>

<Fragment>
      <table> 
         
        {objectives.length > 0 ? 
             ( objectives.map(objective => (
                 <Fragment key={objective.id}>
                     
                      <thead>
                       <tr>
                           <th>Objective / Key Results</th>
                           <th>Progress</th>
                           {weeks.map(week => (
                           <th key={week.weekId}>{week.weekNumber}</th>
                             
                   ))}
                       </tr>
                   </thead>
                   <Fragment>
                     <tbody>
                       <tr>
                        <td>{objective.name} </td>
                        <td>{objective.objectiveProgress}</td>
                        </tr>
                      {objective.keyResults.map(result => (
                             <tr key={result.id}>
                             <td>{result.name}</td>
                             <td>{result.keyResultProgress}</td>
                          {result.rating.map(rating => (
                                 <td key={rating.id}>
                                   <input type="text"  name="point" value={newRating.point} onChange={(event) => handleChange({resultId: result.id, ratingId: rating.id, currentObjective: objective, oId: objective.id, event: event, wId: rating.weekId, weekNum: rating.weekNumber})}/>
                                 </td>
                             ))}
                             </tr>
                        ))}
                             
                     </tbody>
                     </Fragment>
                 </Fragment>
              ))

            ) : (
    <p>no objectives</p>
           )}
          
        </table>
      </Fragment>
  </div>
  
    )
}

export default OkrList;