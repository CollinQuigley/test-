import React from "react";
import Search from "./components/Search";
import ViewBuilding from "./components/ViewBuilding";
import BuildingList from "./components/BuildingList";
import AddBuilding from "./components/AddBuilding";
import RemoveBuilding from "./components/RemoveBuilding";
import Credit from "./components/Credit";
import "./index.css";
import { useState } from "react";

function App({ data }) {
  // TODO: Update the following two variables to use the useState() hook
  const[tempData, setTempData] = useState(data);
  const [filterText, setFilterText] = useState("");
  const [selectedBuilding, setSelectedBuilding] = useState(0);

  function filterUpdate(value) {
    // TODO: Set the state of the filter text to the value being passed in
    setFilterText(value);
    console.log(value);
  }

  function selectedUpdate(id) {
    // TODO: Set the state of the selected building to the id being passed in
    //console.log(id);
    setSelectedBuilding(id);
  }

  function dataUpdate(data){
    setTempData(data);
  }

  return (
    <div className="bg">
      <div className="row">
        <h1>UF Directory App</h1>
      </div>
      {/* TODO: Edit Search component to include necessary props */}
      <Search filterUpdate={filterUpdate} />
      <main>
        <div className="row">
          <div className="column1">
            <div className="tableWrapper">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {/* TODO: Edit BuildingList component to include necessary props */}
                  <BuildingList
                    data={tempData}
                    filter={filterText}
                    selectedUpdate={selectedUpdate}
                  />
                </tbody>
              </table>
            </div>
          </div>
          <div className="column2">
              <div className="view-building-container">
                  <ViewBuilding className="view-building" data={tempData} selectedBuilding={selectedBuilding} />
                  <RemoveBuilding className="view-building" data={tempData} dataUpdate={dataUpdate} selectedUpdate={selectedUpdate} selectedBuilding={selectedBuilding}/>
              </div>
              <div className="add-building-container">
                < AddBuilding className="add-building" data={tempData} dataUpdate={dataUpdate}/>
             </div>
          </div>
        </div>
        <Credit />
      </main>
    </div>
  );
}

export default App;
