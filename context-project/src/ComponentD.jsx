import React, {useContext} from 'react';
import { userContext } from './ComponentA';
function ComponentD(){
   const user = useContext(userContext);
return(
    <div className="componet"> 
        <h1>ComponentD</h1>
        <h2>{`Byee ${user}`}</h2>
    </div>
);
}
export default ComponentD;
