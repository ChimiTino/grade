import subjectList from '../../Components/Lists/ex.json';
import react from 'react';

 fetch("../../Components/Lists/ex.json").then(function(resp){
        return resp.json();
    }).then(function(data) {
        console.log(data);

    })


const Details = () => { 
    

    return (
       <div>
        <h1></h1>
       
      </div>
    );
  }
  
  export default Details;




