import "./App.css"
import React from "react";

const Searchmovie = (props) => {
return(
<div className="search">
<input
class="form-control" 
 id="formControlInput"
 value={props.value}
onChange={(event) => props.setSearchmovie(event.target.value)}
placeholder="Search"
></input>

 </div>
)
}

export default Searchmovie;