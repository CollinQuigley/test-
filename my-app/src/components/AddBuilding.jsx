import { useState } from "react";


function AddBuilding({ data, dataUpdate}){
  
    const [code, setCode] = useState(null);
    const [name, setName] = useState('');
    const [address, setAddress] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    
  
    function handleBuilding(){

        //determine if a code and name are entered
        if(!code || !name){
            alert('Building code and name are required.');
            return;
        }

        //create a new building to add to data
        const newBuilding = {
            id: data.length + 1,
            code: code,
            name: name,
            address: address || null,
            coordinates : {
                latitude: latitude || null,
                longitude: longitude || null,
            }
        }
      
        //determine if building code already exists in data
        if (data.some(building => building.code === code)){
            alert('A building with the same code already exists.')
            return;
          }

        const insertIndex = data.findIndex(building => building.code > code);
        if (insertIndex === -1) {
          // If insertIndex is -1, it means the new building should be inserted at the end
          dataUpdate([...data, newBuilding]);
          
        } else {
          // Insert the new building at the determined position
          const newData = [...data];
          newData.splice(insertIndex, 0, newBuilding);
          dataUpdate(newData);
        }

        }


    return (
        <div>
          <p>
          <i>Enter the building details to add:</i>
          </p>
        <form>
        <h2>Code (Required): </h2>
          <input 
            type="text"
            placeholder="Code"
            className="test"
            onChange={event => setCode(event.target.value)}

          /> 
        <h2>Name (Required):</h2>
        <input 
            type="text"
            placeholder="Name"
            className="test"
            onChange={event => setName(event.target.value)}

          />
        <h2>Address:</h2>
        <input 
            type="text"
            placeholder="Address"
            className="test"
            onChange={event => setAddress(event.target.value)}

          />
        <h2>Latitude: </h2>
        <input 
            type="text"
            placeholder="Latitude"
            className="test"
            onChange={event => setLatitude(event.target.value)}

          />
        <h2>Longitude: </h2>
        <input 
            type="text"
            placeholder="Longitude"
            className="test"
            onChange={event => setLongitude(event.target.value)}
          />
        </form>
        <div>
             {/* Add a button with an onClick handler */}
            <button onClick={handleBuilding}>Add Building</button>
        </div>
        </div>
        
      );
}

export default AddBuilding;