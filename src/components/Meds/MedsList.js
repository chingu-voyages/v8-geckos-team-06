import React from 'react';

const MedsList = ({meds}) => {
  return (
    <div className="meds-list">
    	{ meds.length >= 1 ? meds.map((med) => {
        return med.map((it)=> {
          return <div key={it._id} className="med-card">
    					<h2 style={{color:'darkred'}}>{it.manufacturer}</h2>
    					<p style={{color:'darkred'}}>{it.name}</p>
    				</div>
    			})
    	}) : <h1>'No meds Looked up yet'</h1>}
    </div>
  )
}
export default MedsList;
