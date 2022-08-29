import React from "react";

export default function Alert(props) {
    const capatalize =(str)=>
    {   let lower= str.toLowerCase();
        return str.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <>
    <div className="height" style={{height:'50px',}}>
        {props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capatalize(props.alert.type)}: </strong>{props.alert.msg}
        </div>}
</div>
    </>
  );
}
