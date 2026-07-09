import {useState} from 'react'




export default function App1() {
    const[a, setA] = useState()
    const[b, setB] = useState()
   
    const[c, setC] = useState()
    const[d, setD] = useState()
    
    const[e, setE] = useState()
    const[f, setF] = useState()
   
    const[g, setG] = useState()
    const[h, setH] = useState()

    const[i, setI] = useState()
    const[j, setJ] = useState()

    const[k, setK] = useState()
    const[l, setL] = useState()
    
    const[bill1, setBill1] =useState()
    const[bill2, setBill2] =useState()

    
    const[bill3, setBill3] =useState()
    const[bill4, setBill4] =useState()

    const[bill5, setBill5] =useState()
    const[bill6, setBill6] =useState()
    const[bill7, setBill7] =useState()
    const[bill8, setBill8] =useState()
    const[bill9, setBill9] =useState()
    const[bill10, setBill10] =useState()
 



    const[one, setOne] = useState()
    const[two, setTwo] = useState()
    const[three, setThree] = useState()




  return (
     <div>
     <h1>This is app1 </h1>
     <h2>Diesel Nozzle1 </h2>
     <input type="number" 
      value={a}
      onChange={ (e)=>setA(e.target.value)}
      />
     <input type="number"
      value={b}
      onChange={ (e)=>setB(e.target.value) }
      />
      {a-b}  <br/>
      {(a-b)*99.67  }


<h2>Diesel Nozzle2 </h2>
     <input type="number"
      value={c}
      onChange={ (e)=>setC(e.target.value)}
      />
     <input type="number"
      value={d}
      onChange={ (e)=>setD(e.target.value) }
      />
      {c-d}  <br/>
      {(c-d)*99.67  }

<h2>Diesel Nozzle3 </h2>
     <input type="number"
      value={e}
      onChange={ (e)=>setE(e.target.value)}
      />
     <input type="number"
      value={f}
      onChange={ (e)=>setF(e.target.value) }
      /> 
      {e-f}   <br/>
      {(e-f)*99.67  }
 
<h2>Diesel Nozzle4 </h2>
     <input type="number"
      value={g}
      onChange={ (e)=>setG(e.target.value)}
      />
     <input type="number"
      value={h}
      onChange={ (e)=>setH(e.target.value) }
      />
      {g-h}   <br/>
      {(g-h)*99.67  }

<h2>Diesel Nozzle5 </h2>
     <input type="number"
      value={i}
      onChange={ (e)=>setI(e.target.value)}
      />
     <input type="number"
      value={j}
      onChange={ (e)=>setJ(e.target.value) }
      />
      {i-j}   <br/>
      {(i-j)*99.67  }

<h2>Diesel Nozzle6 </h2>
     <input type="number"
      value={k}
      onChange={ (e)=>setK(e.target.value)}
      />
     <input type="number"
      value={l}
      onChange={ (e)=>setL(e.target.value) }
      />
      {k-l}   <br/>
      {(k-l)*99.67  }

    <p> Total:{ (a-b)*99.67+ (c-d)*99.67+(e-f)*99.67+
    (g-h)*99.67+ (i-j)*99.67+ (k-l)*99.67  }
    </p>

     <h2>Bill1 </h2>
     <input type="number" 
     value={bill1}
     onChange={(e)=>setBill1(e.target.value)}     
     />
     <p>{bill1* 99.67} </p>

     <h2>Bill2 </h2>
     <input type="number"
     value={bill2}
     onChange={(e)=>setBill2(e.target.value)}
     />
     <p>{bill2* 99.67} </p>
    
     <h2>Bill3 </h2>
     <input type="number"
     value={bill3}
     onChange={(e)=>setBill3(e.target.value)}
     />
     <p>{bill3* 99.67} </p>    
   
     <h2>Bill4 </h2>
     <input type="number"
     value={bill4}
     onChange={(e)=>setBill4(e.target.value)}
     />
     <p>{bill4* 99.67} </p>

    <h2>Bill5 </h2>
     <input type="number"
     value={bill5}
     onChange={(e)=>setBill5(e.target.value)}
     />
     <p>{bill5* 99.67} </p>

     <h2>Bill6 </h2>
     <input type="number"
     value={bill6}
     onChange={(e)=>setBill6(e.target.value)}
     />
     <p>{bill6* 99.67} </p>


<h2>Bill7 </h2>
     <input type="number"
     value={bill7}
     onChange={(e)=>setBill7(e.target.value)}
     />
     <p>{bill7* 99.67} </p>
    
<h2>Bill8 </h2>
     <input type="number"
     value={bill8}
     onChange={(e)=>setBill8(e.target.value)}
     />
     <p>{bill8* 99.67} </p>

<h2>Bill9 </h2>
     <input type="number"
     value={bill9}
     onChange={(e)=>setBill9(e.target.value)}
     />
     <p>{bill9* 99.67} </p>


<h2>Bill10 </h2>
     <input type="number"
     value={bill10}
     onChange={(e)=>setBill10(e.target.value)}
     />
     <p>{bill10* 99.67} </p>


 <p>Total bill amount: {(bill1* 99.67)+
     (bill2* 99.67)+(bill3* 99.67)
      + (bill4*99.67)+ (bill5* 99.67)+(bill6* 99.67)
      + (bill7* 99.67)
      + (bill8* 99.67)
      + (bill9* 99.67)
     + (bill10* 99.67)
      }
     </p>


    <input type="number"
     value={one}
     onChange={(e)=>setOne(e.target.value)}
     />
     <p>{one* 10} </p>     

     <input type="number"
     value={two}
     onChange={(e)=>setTwo(e.target.value)}
     />
     <p>{two* 10} </p>     

     <input type="number"
     value={three}
     onChange={(e)=>setThree(e.target.value)}
     />
     <p>{three* 10} </p>
    
     <p>Total: { (one*10 + two*10 + three*10)} 
     </p>
    </div>
)
}
