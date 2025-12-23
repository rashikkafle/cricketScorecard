import React, { useEffect, useState } from 'react'
import {useLocation,  useNavigate } from 'react-router-dom'

function CricSC() {
    const navigate = useNavigate();
    const handleclick=()=>{ navigate('/Secondinning',
    { state:{
      targetscore,
        batfirst,
        batsecond
      }}
    )}

   const location = useLocation()
    const {batsecond, batfirst}=location.state || {}

    const[inpname, setinpname]= useState('')
    const [name, setname]=useState([])

    const [striker, setstriker]=useState('')
    const [nonstriker, setnonstriker]=useState('')
    const [isstriker,setistriker]= useState(true)
    
    const runs=[0,1,2,3,4,5,6]

    const [strikerrun, setstrikerrun]=useState(0)
    const [nonstrikerrun, setnonstrikerrun]=useState(0)
    const [run,setrun]=useState([])

    const [strikerball, setstrikerball]=useState(0)
    const [nonstrikerball, setnonstrikerball]=useState(0)
    const [ball,setball]=useState([])

    const [iswicket,setiswicket]=useState(false)
    const [okstriker,setokstriker]=useState(true)
    const [isrunout,setisrunout]=useState(false)

    const [baller, setballer]=useState('')
    const [balled ,setballed]=useState(6)
    const [overball,setoverball]=useState([])
    const [totalscore, settotalscore]=useState(0)
    const [ballscore, setballscore]=useState('')
    const [isnoballout,setisnoballout]=useState(false)
    const [isfreehit,setisfreehit]=useState(false)
    const [isrunwithwide,setisrunwithwide]=useState(false)
    const [isnotlegbye,setisnotlegbye]=useState(true)
    const [countover,setcountover]= useState(0)
    const [players,setplayers]=useState([])
    const[bowlers,setbowlers]=useState([])
    const [wicket,setwicket]=useState(0)
    const [targetscore,settargetscore]=useState(0)
    const [over,setover]=useState(0)

    useEffect(()=>{
      if(wicket === 3 || over === 10 ) 
      {
        settargetscore(totalscore +1)
      }
      if(wicket === 3){
        setoverball([...overball,'w'])
                setbowlers((prev)=> prev.map(p=> p.name === baller?{...p,ballsbowled :p.ballsbowled+1}:p))

        if(isstriker){
        
        setstriker(inpname)
        setstrikerball(0)
        setstrikerrun(0)
        setinpname('')
       setplayers([...players,{name:striker,runs:strikerrun,ball:strikerball}])
      }else{
        
        setnonstriker(inpname)
        setnonstrikerball(0)
        setnonstrikerrun(0)
                setinpname('')
          setplayers([...players,{name:nonstriker,runs:nonstrikerrun,ball:nonstrikerball}])
             
      }
      }
      
    },[wicket,over,totalscore])

    const wicketchange=()=>{
            if(striker === '' || nonstriker === '')return;
             if (baller === '')return


      if(wicket === 3 || over === 10 ) return;
            

 { isstriker? setstrikerball(prev => prev +1):setnonstrikerball(prev=> prev +1)}

       setballed(balled +1)

       if(isnoballout){
        alert('Noball')
      }
      else if(isfreehit){
                 alert('freehit')

      }
      else{
               setiswicket(true)
     setwicket(wicket +1)

      }



    }
    const strikerchange=()=>{
      if(striker === '' || nonstriker === '')return;
                   

            if(wicket === 3 || over === 10 ) return

      setname(prev=>[...prev,striker,nonstriker])
      
      
            setokstriker(false)

      
    }
    

    const runchange=(item)=>{
                  if(wicket === 3 || over === 10 ) return
                               if (baller === '')return


      setbowlers((prev)=>prev.map(b=>
      b.name===baller ?{...b,wickets: wicket +1, Run: b.Run+item, ballsbowled :b.ballsbowled +1}:b
      ))
      setisnoballout(false)
      if(balled === 5){
        setballer('')
        
      }
      if(isrunwithwide){
        setbowlers((prev)=> prev.map(p=> p.name === baller?{...p,ballsbowled :p.ballsbowled-1}:p))
           setoverball([...overball,`wd[${item}]`])
           if (item %2 === 1){
         setistriker(!isstriker)
    }
      settotalscore(totalscore +item)
      setisrunwithwide(false)
      } else

     {

      if(isnoballout){
                         setbowlers((prev)=>prev.map(p=> p.name === baller?{...p,ballsbowled :p.ballsbowled-1}:p))

         setoverball([...overball,`Nb[${item}]`])
           if (item %2 === 1){
         setistriker(!isstriker)

    }
      settotalscore(totalscore  +item)
      setisnoballout(false)

      } else if(isfreehit){
        settotalscore(totalscore + item)

      setballed(balled +1)
      setisfreehit(false)
      }
      
      else{
      settotalscore(totalscore + item)

      setballed(balled +1)
       if(balled <6){
        if(!isnotlegbye){
          setoverball([...overball,`lb[${item}]`])
        }else{
                           setoverball([...overball,item])

        }

       }

       
        
      if(isstriker){
            setstrikerball(strikerball +1)
     if(isnotlegbye){
      setstrikerrun( item + strikerrun)
     }
      
    }
    else{
            setnonstrikerball(nonstrikerball + 1)
        if(isnotlegbye){
      setnonstrikerrun(item + nonstrikerrun)
        }
        setisnotlegbye(true)
    }

    if (item %2 === 1){
         setistriker(!isstriker)
    }
    if(balled === 6)
    {
        setistriker(!isstriker)
        
            
    }
  }
    }
    }
    const handlewicket=()=>{
                   if(wicket === 3 || over === 10 ) return
   setbowlers((prev)=>prev.map(p=>p.name === baller ?{...p,ballsbowled :p.ballsbowled +1, wicket :p.wicket +1}:p))

                    setoverball([...overball,'w'])

      
      if(isstriker){
        
        setstriker(inpname)
        setstrikerball(0)
        setstrikerrun(0)
        setinpname('')
       setplayers([...players,{name:striker,runs:strikerrun,ball:strikerball}])
      }else{
        
        setnonstriker(inpname)
        setnonstrikerball(0)
        setnonstrikerrun(0)
                setinpname('')
          setplayers([...players,{name:nonstriker,runs:nonstrikerrun,ball:nonstrikerball}])
             
      }
        
      
      setiswicket(false)
    

    }
    const handleballer=()=>{
                  if(wicket === 3 || over === 10 ) return

      if(striker ==='' && nonstriker ==='')return;
      setbowlers((prev)=>{
        if(prev.find((b)=>b.name===baller)) return prev
        return([...prev,{name:baller,Run:0,wicket:0,sixes:0,ballsbowled:0}])
      })

         if(countover!== 0){
                      setistriker(!isstriker)

         }
         setover(over +1)
      setballed(0)
      setoverball([])
      
    }
   const handlecountover=()=>{
     
       setcountover((prev)=>prev +1)
    }
   const handlewide=()=>{
                if(wicket === 3 || over === 10 ) return
             if (baller === '')return

      if(striker ==='' && nonstriker ==='')return;
      settotalscore(totalscore +1)
      setisrunwithwide(true)
       
      setbowlers(prev=> prev.map(b=> 
        b.name=== baller ?{...b,Run:b.Run +1}:b
      ))
    }
    
    const handlerunout=()=>{
                  if(wicket === 3 || over === 10 ) return
             if (baller === '')return

      if(striker ==='' && nonstriker ==='')return;
      
      setisrunout(false)
           setiswicket(true)
           setwicket(wicket +1)

    }
    const handlewhorunout=()=>{
      setisrunout(true)
    }
    const handlenoball=()=>{
                  if(wicket === 3 || over === 10 ) return
             if (baller === '')return

      if(striker ==='' && nonstriker ==='')return;

      settotalscore(totalscore +1)
   setisnoballout(true)
   setisfreehit(true)
     
      setbowlers(prev=> prev.map(b=> 
        b.name=== baller ?{...b,Run:b.Run +1}:b
      ))
    }

    const handlelegbye=()=>{
      setisnotlegbye(false)
    }

    return(
    <>

    <div className='bg-pink-100  border-1 mx-auto px-5 py-5 w-[800px] scale-90'>
  <p className='text-gray-600'>Scorecard :{batfirst}</p>
    { okstriker && (<>
    <input
    className='border-1 px-3 mx-5 my-3 bg-white '
    placeholder='enter a striker name'
    value={striker}
    onChange={(e)=>setstriker(e.target.value)}
    />
    

    <input
        className='border-1 px-3 mx-3 my-3 bg-white '

    placeholder='enter a non-striker name'
    value={nonstriker}
    onChange={(e)=>setnonstriker(e.target.value)}
    />
    <button onClick={strikerchange}  className='border-1 px-2  my-3 bg-yellow-100 '
>OK</button></>)
}
    
    { (balled === 6 && wicket !== 3 && over !== 10) && (<>
   <div className='w-full'>
<input
        className='  border-1 px-3 mx-5 my-3 bg-white  '

    placeholder='enter a baller name'
    value={baller}
    onChange={(e)=>setballer(e.target.value)}
    />
    <button onClick={()=>{handleballer() ; handlecountover();} }     className='border-1 px-3  my-3 bg-yellow-100 '
>ok</button>

   </div>
    
    </>)}
    
       <p className='mx-2 mt-3'>Batting figures:</p>

{players.map((p,index)=>(<>

<div className='border-1 bg-orange-100 inline-block px-2 py-1 mx-2 my-2 w-full'>

   <p className=''> {p.name} {p.runs} {p.ball} (out)</p>
   </div>

   </>))}
   
    {iswicket &&  wicket !== 3 && over!==10 &&(<>
     <input
         className='border-1 px-3 mx-5 my-3 bg-white '
    placeholder='enter a new batsman name'
    value={inpname}
    onChange={(e)=>setinpname(e.target.value)}
    />
    <button onClick={handlewicket} className='mx-2 border-1 px-2 bg-yellow-100'>OK</button>

    
    </>)}

   {runs.map((item,index)=>(
    <button onClick={()=>{runchange(item); setballscore(item); }} key={index} className='border-1 bg-gray-100 px-2 py-1 mx-1 my-1'>{item}</button>
    
   ))}
   <button onClick={wicketchange} className='border-1 bg-gray-100 px-2 py-1 mx-1 my-1'>wicket</button>
   <button onClick={handlewide} className='border-1 bg-gray-100 px-2 py-1 mx-1 my-1'>wd</button>
   <button onClick={handlenoball} className='border-1 bg-gray-100 px-2 py-1 mx-1 my-1'>NB</button>
   <button onClick={handlewhorunout} className='border-1 bg-gray-100 px-2 py-1 mx-1 my-1'>RUNOUT</button>
   <button onClick={handlelegbye} className='border-1 bg-gray-100 px-2 py-1 mx-1 my-1 '>Lb</button>
   {isrunout && (<>
   <button onClick={handlerunout} className='border-1 bg-gray-100 px-2 py-1 mx-1 my-1'>{striker}</button>
   <button onClick={handlerunout} className='border-1 bg-gray-100 px-2 py-1 mx-1 my-1'>{nonstriker}</button>
   </>)}
       <p className='mx-2 mt-3'>On the pitch:</p>

 {striker !== '' && (<>
   <div className='  border-1 bg-green-100 my-2  px-2 py-1 mx-2 my-2 w-full'>
         <p > {striker} {strikerrun} {strikerball}</p>
        </div>
         
     </>)}
     {nonstriker !=='' && (<>
   <div className='  border-1 bg-green-100 my-2 w-full px-2 py-1 mx-2 '>
       
         <p className=''> {nonstriker} {nonstrikerrun} {nonstrikerball} </p>
     </div>
        
     </>)}
     

       {baller !== ''&& (<>
           <p className='border-1 bg-blue-100 px-2 py-1 inline-block mx-2'  > {baller}: {overball}</p>

       </>)}
      
    {targetscore === 0 ? <p className='mx-2 mt-3 mb-2'>Totalscore:{totalscore}-{wicket}  Over:{over -1}.{balled}</p> :<p className='mx-2 mt-3 mb-2'> Target-{targetscore}  Over:{over -1}.{balled}</p> }
<div className='border-1 bg-blue-200 px-2 mx-2'>
         <p>Bowling figures {batsecond}:</p>

    {bowlers.map((p,i)=>{
     
      const overint=Math.floor(p.ballsbowled/6)
      const ballint=p.ballsbowled %6
      const overdisplay =`${overint}.${ballint}`
      const over= p.ballsbowled/6

     const economy= p.ballsbowled> 0 ?(p.Run/over).toFixed(2):"0.00"
     return(
      <>
    <p >{p.name} : {overdisplay} {p.Run} {p.wicket} {economy}</p>
    </>)
  
  })}
</div>

   
       {(wicket === 3 || over ===10 )&& <button onClick={handleclick} className='border-1 bg-gray-100 px-2 mx-2 mt-2 mb-2'>Lets begin 2nd inning</button>}

    </div>

   
    </>
    )

    
  
}

export default CricSC