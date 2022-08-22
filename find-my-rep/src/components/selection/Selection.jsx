import React, { useState} from "react";
import './selection.css'
import axios, { Axios } from 'axios';
import Table from 'react-bootstrap/Table';



function Selection () {
  const [searchResult, setSearchResult] = useState([]);
  const [displayNamed, setDisplayName] = useState({});
  const [selectedState, updateSelectedState] = useState([]);
  const [type, updatetype] = useState([]);
  
  
  
  

  const getList = async () => {
   try{
    const results = await axios.get(`http://localhost:3000/${type}s/${selectedState}`);
     console.log(results);
     
     setSearchResult(results.data.results);
     
   }
   
   catch (error) {
    if (error.response) {
     
        console.log(error.response )
        console.warn('Please Choose Both')
        return <h1>Please Choose Both Options</h1>;
      
        
        
    }
   
}


    
  };

    
    const displayName = async (representative) => {
      await setDisplayName(representative);
    };
  
    let stateArr = [
      "Choose State",
      "AL",
      "AK",
      "AZ",
      "AR",
      "CA",
      "CO",
      "CT",
      "DE",
      "DC",
      "FL",
      "GA",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "OH",
      "OK",
      "OR",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VA",
      "WA",
      "WV",
      "WI",
      "WY",
    ];
    

    console.log(searchResult);
   
  
    return (
    <div>
      <div className="container selection__container">
       <select name="type"id="selection" onChange={(e) => {updatetype(e.target.value); }}
          
          
>         <option>Choose Type</option>
          <option>Senator</option>
          <option>Representative</option>
       </select>
        
       <select
            name="State"
            id="State"
            onChange={(e) => {
              updateSelectedState(e.target.value);
            }}
          >
            {stateArr.map((item) => (
              <option>{item}</option>
            ))}
          </select>



        <button id = "submitButton"disabled={false} small = {true} onClick={(e) => { getList();}}> Get My {type}  </button>
      

       
      </div>


                <div className="container results__container">
                  <h2>List /<span>Representatives</span></h2>
                  <Table >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th >Party</th>
                      </tr>
                    </thead>
                    {searchResult.map((item) => (
                    
                    <tbody>
                      
                      <td onClick={(e) => displayName(item)}>{item.name} </td>
                      <td>{item.party.charAt(0)}</td>
                     
                      
                    </tbody>
                    
                    ))}
                  </Table>
                </div>

                    
            
         

      <div className="containter info__container">
      <h2>Info</h2>
        <Table striped bordered hover>
          <tbody>
            <tr>{displayNamed.name} </tr>
            <tr>{displayNamed.party}</tr>
            <tr>{displayNamed.state} </tr>
            <tr>{displayNamed.district}</tr>
            <tr>{displayNamed.phone} </tr>
            <tr>{displayNamed.office}</tr>
            <td><a href={displayNamed.link} target="_blank">
                {displayNamed.link}</a></td>
          </tbody>
          
          
        </Table>
</div>
</div>

    );
          }
export default Selection