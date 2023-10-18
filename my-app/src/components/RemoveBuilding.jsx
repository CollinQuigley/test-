function RemoveBuilding({ data, dataUpdate, selectedUpdate, selectedBuilding }){

    function handleRemoveClick() {
    
        //find building with the id
        const updatedBuildings = data.filter((building) => building.id !== selectedBuilding);

        if (updatedBuildings.length > 0) {
            const firstBuildingId = updatedBuildings[0].id;
            selectedUpdate(firstBuildingId);
            dataUpdate(updatedBuildings);
        }
        else{
            selectedUpdate(0);
            dataUpdate(updatedBuildings);
        }
      }


    return (
        <div>
          {/* Add a button with an onClick handler */}
          <button onClick={handleRemoveClick}>Remove Building</button>
        </div>
      );
}

export default RemoveBuilding;