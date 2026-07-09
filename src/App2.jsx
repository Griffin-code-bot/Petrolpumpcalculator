import {useState} from 'react'
import Footer from '../components/Footer'

export default function App2() {
 
 const [bills, setBills] = useState(
    Array(10).fill("")
)


const [rembills, setRemBills] = useState(
    Array(10).fill("")
)


const [nozzles, setNozzles] = useState([
    {start:"2", end:"1",category:"d"},
    {start:"", end:"",category:"d"},
    {start:"", end:"",category:"d"},
    {start:"", end:"",category:"d"},
    {start:"", end:"",category:"p"},
    {start:"2", end:"1",category:"p"}

])
const PRICE = 99.67;
   
const PETROL_PRICE = 114.57
   
const totalDifference = nozzles.reduce((sum, nozzle) => {
  return sum + (Number(nozzle.start) - Number(nozzle.end));
}, 0);
 
const totalAmount = nozzles.reduce((sum, nozzle) => {
  const price = nozzle.category === "d" ? PRICE : PETROL_PRICE;

  return (
    sum +
    (Number(nozzle.start) - Number(nozzle.end)) * price
  );
}, 0);

   return(
    <> 
     <h2>This is app 2 </h2>
  {nozzles.map((nozzle, index) => {



const price = nozzle.category === "d" ? PRICE : PETROL_PRICE;



const amount =
  (Number(nozzle.start) - Number(nozzle.end)) * price;


  return(
    <div key={index}>
        <h2>Nozzle {index + 1}</h2>

        <input
        type="number"
        value={nozzle.start}
        onChange={(e) => {
      const updatedNozzles = [...nozzles];
      updatedNozzles[index].start = e.target.value;
      setNozzles(updatedNozzles);
    }}
        
         />

        <input
        type="number"
        value={nozzle.end}
        onChange={(e) => {
      const updatedNozzles = [...nozzles];
      updatedNozzles[index].end = e.target.value;
      setNozzles(updatedNozzles);
    }}
         />

  {Number(nozzle.start) - Number(nozzle.end)}

{/*
       {[...nozzles][index].start-
      [...nozzles][index].end}
   
 
    <p>  
  {(Number([...nozzles][index].start)
  -Number([...nozzles][index].end))* PRICE}
     </p>

*/}
   <p>
  {(Number(nozzle.start) - Number(nozzle.end)) * price}
</p>

    <p>Amount:{amount}</p>

     


<p>Total Litres: {totalDifference}</p>
<p>Total Fuel Sold: {totalAmount}</p>

    </div>
)
})}
  


{    
        
  bills.map((item, index) => (
   <div key={index}>
    <h2>Bill {index + 1} </h2>
   <input 
   type="number"
    value={item}
    onChange={(e) => {
          const updatedBills = [...bills];
          updatedBills[index] = e.target.value;
          setBills(updatedBills);
        }}    

    />
     
<p>{item * PRICE}</p>
  


 {/*
{ [...bills].reduce((accumulator, current) => accumulator + Number(current), 0) }

*/}

{ [...bills].reduce((accumulator, current) =>
  accumulator + Number(current)*99.67 , 0)}
</div>
))       
}





{

  rembills.map((item, index) => (
   <div key={index}>
    <h2>Remaining Bill {index + 1} </h2>
   <input
   type="number"
    value={item}
    onChange={(e) => {
          const updatedRemBills = [...rembills];
          updatedRemBills[index] = e.target.value;
          setRemBills(updatedRemBills);
        }}

    />

<p>{item * 10}</p>


{ [...rembills].reduce((accumulator, current) => accumulator + Number(current)*10 , 0)}
</div>
))
}


   <Footer />
   </>
)}
