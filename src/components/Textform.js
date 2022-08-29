import React, {useState} from 'react';

export default function Textform(props) {
    const [text, setText] = useState("");

    const HandleUpclick=() =>
    {
       let  newText = text.toUpperCase();
       setText(newText);
       props.showAlert("success", "Converted to capital");
       
    }; 
    const HandleLoclick=() =>
    {
       let  newText = text.toLowerCase();
       setText(newText);
       props.showAlert("success", "Converted to lower");

    }; 
    const HandleCoclick=() =>
    {
       navigator.clipboard.writeText(text);
       props.showAlert("success", "Text Copied");

    };
    // const HandlePTclick=() =>
    // {
    //    navigator.clipboard.readText("text");
    // };
    
    const HandleCtclick=() =>
        {
        let  newText = "";
        setText(newText);
       props.showAlert("success", "Cleared text");

        };

    const HandleRSclick = () =>
    {
        let newText = text.replace(/\s+/g, " ");
        setText(newText);
       props.showAlert("success", "Removed extra spaces");

    }

    const Handleonchange=(event)  =>
    {
         setText(event.target.value);
    };
    
    // document.getElementById('paste').addEventListener('click', ()=>{
    //     let pasteArea = document.getElementById('pasteArea');
    //     pasteArea.value = '';
    //     navigator.clipboard.readText()
    //     .then((text)=>{
    //         pasteArea.value = text;
    //     });
    // });
  
    return (
        <>
  
 <div className={`container text-${props.mode==="light"?"dark":"light"} my-3 mb-3 active`}>

        <h1>Enter Text To Analyze</h1>
        <textarea className="form-control" style={{color:props.mode==='light'?'black':'white', backgroundColor:props.mode==='light'?'white':'#4c5660'}} id="myBox" value={text} onChange={Handleonchange} rows="8"></textarea>
        
</div>

<div className="container"> 
    <button disabled={text.replace(/ /g,"").length===0} type="button" className="btn btn-primary mx-1 my-1"  onClick={HandleUpclick}>UPPERCASE</button>
    <button disabled={text.replace(/ /g,"").length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={HandleLoclick}>lowercase</button>
    <button disabled={text.replace(/ /g,"").length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={HandleCtclick}>Clear Text</button>
    <button disabled={text.replace(/ /g,"").length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={HandleCoclick}>Copy Text</button>
    <button disabled={text.replace(/ /g,"").length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={HandleRSclick}>Remove Extra Spaces</button>
    {/* <button disabled={text.replace(/ /g,"").length===0} type="button" className="btn btn-primary mx-1" onClick={HandlePTclick}>Paste</button> */}
    
</div>

<div className={`container text-${props.mode==="light"?"dark":"light"}`}>
    <h1>Text Summery</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and {text.replace(/ /g,"").length} characters</p>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length * 0.008} Minutes Read</p>
</div>
<div className={`container text-${props.mode==="light"?"dark":"light"}`}>
    <h1>Text Preview</h1>
    <p>{text.length>0?text:"Nothing to preview"}</p>
   
</div>
        </>
    )
}
