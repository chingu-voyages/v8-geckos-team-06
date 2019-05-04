import React from 'react';

const MedsList = ({meds}) => {
  return (
    <div className="meds-list">
    	{ meds.length >= 1 ? meds.map((med) => {
        if (!med) return <h1>No meds</h1>
        return med.map((it)=> {
          return <div key={it._id} className="med-card">
              <h1>{it.comercialName}</h1>
    					<p style={{color:'darkred'}}>Manufacturer: {it.manufacturer}</p>
              <p style={{color:'darkred'}}>Drug Name: {it.name}</p>
              <p style={{color:'darkred'}}>Drug Dosage{it.dosage}gr</p>
              <p style={{color:'darkred'}}>Drug Units: {it.units}</p>
              <img src={it.image} alt="Product"/>
              <p style={{color:'darkred'}}>Expiration: {it.expiration}</p>
              <p style={{color:'darkred'}}>id: {it._id}</p>
    				</div>
    			})
    	}) : <h1>'No meds Looked up yet'</h1>}
    </div>
  )
}
export default MedsList;
