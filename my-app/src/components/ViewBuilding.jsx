function ViewBuilding({ data, selectedBuilding }) {


  const selectedData = data.find(
    (building) => building.id === selectedBuilding
  );
  
  return (
    <div>
      <p>
        <i>Click on a name to view more information</i>
      </p>
      {selectedData && (
        <div>
          <h2>Building Details</h2>
          <p>Code: {selectedData.code}</p>
          <p>Name: {selectedData.name}</p>
          {selectedData.address && (
            <p>Address: {selectedData.address}</p>
          )}
          {selectedData.coordinates && (
            <p>
              Coordinates: 
              Latitude: {selectedData.coordinates.latitude},
              Longitude: {selectedData.coordinates.longitude}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default ViewBuilding;
