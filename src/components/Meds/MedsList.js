import React from 'react';

const MedsList = ({meds}) => {
  return (
    <div className="meds-list">
    	{ meds && meds.map((med) => {
        return med.map((it)=> {
          return <div key={it.id} className="med-card">
    					<h2 style={{color:'darkred'}}>{it.manufacturer}</h2>
    					<p style={{color:'darkred'}}>{it.manufacturer}</p>
    				</div>
    			})
    	})}
    </div>
  )
}
export default MedsList;
