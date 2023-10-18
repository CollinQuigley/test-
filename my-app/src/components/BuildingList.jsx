

function BuildingList( {data, filter, selectedUpdate}) {
  // TODO: Apply names filter on buildingList
  const filterLowerCase = filter.toLowerCase();
  const filteredBuildingList = data.filter(directory => 
    directory.name.toLowerCase().includes(filterLowerCase) ||
    directory.code.toLowerCase().includes(filterLowerCase));
    const buildingList = filteredBuildingList
    .map(directory => {

      const handleRowClick = () => {
        // Call selectedUpdate with the selected building's ID
        selectedUpdate(directory.id);
      };

      return (
          // TODO: Create onClick listener to capture building id being selected
          <tr key={directory.id} onClick={handleRowClick}> 
            <td>{directory.code} </td>
            <td> {directory.name} </td>
          </tr>
      );
    });

  return <>{buildingList}</>;
}

export default BuildingList;
