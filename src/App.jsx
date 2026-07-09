import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [initialVolume, setInitialVolume]= useState()
  const [finalVolume, setFinalVolume]=useState()
  const [paytm, setPaytm] = useState()
  const [fuelPrice, setFuelPrice]= useState()
  const [card, setCard]= useState()
 

{/*

const [data, setData] = useState ( ()=> {

  const [formData, setFormData] = useState(
   {
     intialVolume: "",
     finalVolume: "",
     paytm:"",
     fuelPrice:"",
     card:""
    }
  )


 
const saved = localStorage.getItem("formData");
  return saved ? JSON.parse(saved) : [];

}
)
    
  
       
  let netVolume = finalVolume - initialVolume
  let fuelSold= netVolume* 114.57
  let cash = fuelSold - paytm- card
    
     let datadd = [netVolume, fuelSold, cash]

    useEffect(  ()=> {
 localStorage.setItem("formData", JSON.stringify(formData));
 

}
  ,[formData]  )
      
  function handleChange() {
   setFormData({
               ...formData, 
               [e.target.name]:e.target.value
              })

     }

    function handleSubmit(e) {

          e.preventdefault()
      }

*/}

  return (
    <>
      {/*
     <form onSubmit={handleSubmit}>
       <label>
       Vi

       <input
       name="initialVolume" 
       type="number"
       placeholder="Enter initial volume"
       value={formData.initialVolume}
       onChange= {handleChange}
       />
      </label>

      <button type="submit">Submit </button>
      </form>

      */}

      <label>
      Vi
      
       <input type="number"
       placeholder="Enter initial volume"
       value={initialVolume}
       onChange= {e=>setInitialVolume(e.target.value)}
       />
      </label>   

      <label>
      Vf
      <input type="number"
      placeholder="Enter final volume"
      value={finalVolume}
      onChange={e=>setFinalVolume(e.target.value)}
      />
      </label>
      
      <label>
      <select value={fuelPrice} onChange={e=>setFuelPrice(e.target.value)}>
      <option value="114.57">114.57</option>
      <option value="99.67">99.67</option>
      </select>
      </label>
     
     <p>NetVolume:{netVolume} </p>
     <p>TotalSale:{fuelSold}</p>
       
      <label>
      Paytm
      <input type="number"
      placeholder="Enter paytm amount"
      value={paytm}
      onChange={e=>setPaytm(e.target.value)}
      />
      </label>

      <label>
      Card Payment
      <input type="number"
      placeholder="Enter card amount"
      value={card}
      onChange={e=>setCard(e.target.value)}
      />
      </label>
      
      <p>Cash {cash}</p>
     {
      data.map( function(x) {
      return <li>{x}</li>
})
       
     }
      <p>netVolume </p>
      <p>fuelSold </p>
      <p>cash</p>
       
     
    </>
  )
}

export default App
