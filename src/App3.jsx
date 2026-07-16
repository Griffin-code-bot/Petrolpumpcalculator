import {useState, useEffect} from 'react'
import Footer from '../components/Footer'
import "./App3_better.css";



export default function App() {
 
 const [nozzles, setNozzles] = useState(() => {
  const saved = localStorage.getItem("nozzles");
  return saved
    ? JSON.parse(saved)
    : [
        { start: "2", end: "1", category: "d" },
        { start: "", end: "", category: "d" },
        { start: "", end: "", category: "d" },
        { start: "", end: "", category: "d" },
        { start: "", end: "", category: "p" },
        { start: "2", end: "1", category: "p" },
        { start: "2", end: "1", category: "p" }
      ];
});

const [bills, setBills] = useState(() => {
  return JSON.parse(localStorage.getItem("bills")) || Array(10).fill("");
});

const [rembills, setRemBills] = useState(() => {
  return JSON.parse(localStorage.getItem("rembills")) || Array(10).fill("");
});

const [creditCards, setCreditCards] = useState(() => {
  return JSON.parse(localStorage.getItem("creditCards")) || Array(10).fill("");
});

const [paytm, setPaytm] = useState(() => {
  return localStorage.getItem("paytm") || "";
});



const PRICE = 99.67;
   
const PETROL_PRICE = 114.57

const totalBills = bills.reduce((sum, bill) => {
  return sum + Number(bill) * PRICE;
}, 0);


const totalRemBills = rembills.reduce((sum, bill) => {
  return sum + Number(bill) * 10;
}, 0);

   
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

const totalCreditCards = creditCards.reduce(
  (sum, amount) => sum + Number(amount),
  0
);

const cashInHand = totalAmount -
           totalBills -
            totalRemBills-
             Number(paytm) -
  totalCreditCards;

Display:
   return(
    <> 
     <h2>This is app 2 </h2>
  {nozzles.map((nozzle, index) => {



const price = nozzle.category === "d" ? PRICE : PETROL_PRICE;



const amount =
  (Number(nozzle.start) - Number(nozzle.end)) * price;



useEffect(() => {
  localStorage.setItem("nozzles", JSON.stringify(nozzles));
}, [nozzles]);

useEffect(() => {
  localStorage.setItem("bills", JSON.stringify(bills));
}, [bills]);

useEffect(() => {
  localStorage.setItem("rembills", JSON.stringify(rembills));
}, [rembills]);

useEffect(() => {
  localStorage.setItem("creditCards", JSON.stringify(creditCards));
}, [creditCards]);

useEffect(() => {
  localStorage.setItem("paytm", paytm);
}, [paytm]);

  return(
    <div key={index}>
        <h2>Nozzle {index + 1}</h2>

        <input
        type="number"
        value={nozzle.end}
        onChange={(e) => {
      const updatedNozzles = [...nozzles];
      updatedNozzles[index].start = e.target.value;
      setNozzles(updatedNozzles);
    }}
        
         />

        <input
        type="number"
        value={nozzle.start}
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

<p>
<label>
Paytm:
<input 
 type="number"
placeholder="Enter paytm number"
 value={paytm}
 onChange={(e) => {
  setPaytm(e.target.value)

 }}   

/>
</label>
</p>


<p>Credit card </p>
{
  creditCards.map((item, index) => (
   <div key={index}>
    <h2>Cc {index + 1} </h2>
   <input
   type="number"
    value={item}
    onChange={(e) => {
          const updatedCreditCards = [...creditCards];
          updatedCreditCards[index] = e.target.value;
          setCreditCards(updatedCreditCards);
        }}

    />
    </div>
))
}

<hr />

<p>Total Fuel Sold: ₹{totalAmount.toFixed(2)}</p>
<p>Total Bills: ₹{totalBills.toFixed(2)}</p>
<p>Remaining Bills: ₹{totalRemBills.toFixed(2)}</p>
<p>Paytm: ₹{paytm}</p>
<p>Credit Card: ₹{totalCreditCards}</p>


<hr />

<h2>Cash in Hand: ₹{cashInHand.toFixed(2)}</h2>


<button
  onClick={() => {
    localStorage.clear();
    window.location.reload();
  }}
>
  Reset All
</button>

   <Footer />
   </>
)}
