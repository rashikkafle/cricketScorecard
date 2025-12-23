import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Cricket() {
   const navigate = useNavigate(); 
      const handle=()=>{
    navigate('/CricSc',{
      state:{
         batsecond,
         batfirst
      }
    })
}


   

   const [myteam,setmyteam]=useState('')
   const [opponentteam,setopponentteam]=useState('')
   const [isteamok,setisteamok]=useState(false)
   const [tosswon,settosswon]=useState('')
   const [istosssubmitted,setistosssubmitted]=useState(false)
   const [position ,setposition]=useState(false)
const [selectposition, setselectposition]= useState()
const [batfirst, setbatfirst]= useState('')
const [batsecond,setbatsecond]=useState('')


 

   const handleteamname=()=>{
      setisteamok(true)
   }
   const handletoss=(e)=>{
      settosswon(e.target.value)
    setistosssubmitted(true)
   }
   
    const handleposition=(e)=>{
      const choice = e.target.value;
   setposition(true)
  setselectposition(e.target.value)
  if (choice === 'bat') {
    setbatfirst(tosswon);
  } else {
    setbatfirst(
      tosswon === myteam ? opponentteam : myteam
    );
  }
  if(batfirst === myteam){
   setbatsecond(myteam)
  }else{
   setbatsecond(opponentteam)
  }

 }
  return (
    <>
    <div className='bg-pink-100  border-1 mx-auto px-5 py-5 w-[800px] scale-90'>
 <div className=''>
      <p>Hello Cricket</p>
      {!isteamok &&(<div className='mx-2 px-3 py-8 flex items-center bg-green-100 border-2 inline-block mt-16'>
         <input
         className='bg-white border-1 my-2 mx-3 px-8'
         type='text'
         placeholder='Enter your team name'
         value={myteam}
         onChange={(e)=>setmyteam(e.target.value)}
         />

         <input
         className='px-8 mx-3 my-2 bg-white border-1'
         type='text'
         placeholder='Enter your opponent team name'
         value={opponentteam}
         onChange={(e)=>setopponentteam(e.target.value)}
         />
         <button onClick={handleteamname} className='bg-yellow-50 border-1 px-3'>OK</button>
      </div>)}
    </div>
       <p className='text-red-900 items-center mx-60 my-4'> {myteam} VS {opponentteam}</p>

 <div className='bg-blue-100 inline-block mx-60 px-8 py-4 border-1 flex'>
  {!istosssubmitted &&(<div >
      <p>Toss</p>
      
      <div   className='mx-2 w-full'
>
         <input
      type='radio'
      name='toss'
      value={myteam}
      onChange={handletoss}
      />
      {myteam}
      </div>
       
       <div className='mx-2 w-full'
>
         <input
      type='radio'
      name='toss'
      value={opponentteam}
      onChange={handletoss}
      />
      {opponentteam}
       </div>
      
    </div>)}

    { istosssubmitted && (
    <>
    {!position && (
      <>
          <p>{tosswon} choose :</p>

       <label >
   <div    className='mx-2  w-fit'
>
      <input
   type='radio'
   name='bat'
   value='bat'
   onChange={handleposition}
   />
   <p>Bat</p>
   </div>
</label>

 <label>
  <div    className='mx-2 w-full '
>
    <input
   type='radio'
   name='bat'
   value='bowl'
   onChange={handleposition}
   />
   <p>Bowl</p>
  </div>
</label>
      </>
    )}
    </>
)}
{position && (
   <>
   <p>{tosswon} won the toss and choose to {selectposition} first</p>
   </>
)}


 </div>
    
   <button onClick={handle} className='bg-yellow-50 border-1 m-4 px-2'>lets begin</button>

    
    </div>
   </>
    
  )
}
 
export default Cricket
