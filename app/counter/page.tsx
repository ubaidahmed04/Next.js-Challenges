// "use client"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import React,{ useState, useRef, useEffect, ChangeEvent } from "react";
// const CountTimer = () => {
//     const [duration, setDuration] = useState<number | string>("");
//     const [timeLeft, setTimeLeft] = useState<number>(0);
//     const [isActive, setIsActive] = useState<boolean>(false);
//     const [isPaused, setIsPaused] = useState<boolean>(false);
//     const timerRef = useRef<NodeJS.Timeout | null>(null); 
//     const handleSetDuration = () :void =>{
//         if(typeof duration ==="number" && duration > 0){
//             setTimeLeft(duration)
//             setIsActive(true)
//             setIsPaused(false)
//             if(timerRef.current){
//                 clearInterval(timerRef.current)
//             }
//         }
//     }
//     // start counter 
//     const handleStart = () :void =>{
//         if(timeLeft> 0){
//             setIsActive(true)
//             setIsPaused(false)
//         }
//     }
//     // Pause counter 
//     const handlePause = () =>{
//         if(isActive){
//             setIsPaused(true)
//             setIsActive(false)
//             if(timerRef.current){
//                 clearInterval(timerRef.current)
//             }
//         }
//     }
//     // reset counter
//     const resetCounter = () =>{
//         setIsActive(false)
//         setIsPaused(false)
//         setTimeLeft(typeof duration ==="number" ? duration :0)
//         if(timerRef.current){
//             clearInterval(timerRef.current)
//         }
//     }

//     // onEffect 
//     useEffect(()=>{
//         if(isActive&& !isPaused){
//             timerRef.current = setInterval(()=>{
//                 setTimeLeft((prevTime)=>{
//                         if(prevTime<=1){
//                             clearInterval(timerRef.current!)
//                             return 0 ;
//                         }
//                         return prevTime -1
//                 })
//             },1000)
//         }
//         return (()=>{
//             if(timerRef.current){
//                 clearInterval(timerRef.current)
//             }
//         })
            
//     },[isActive,isPaused]) 
//     const formatTime = (time: number): string => {
//         const minutes = Math.floor(time / 60);
//         const seconds = time % 60;
//         return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
//       };

//       const handleDurationChange = (e: ChangeEvent<HTMLInputElement>): void => {
//         setDuration(Number(e.target.value) || "");
//       };
//   return (
//     <div className='bg-white rounded-xl flex items-center text-center  justify-center flex-col  '>
//             <div className='w-full max-w-md shadow-lg p-8'>

//             <span className='text-2xl text-center font-semibold '>
//                 CountDown Timer
//                 <span className='flex gap-2'>

//                     <Input type='number' id='duration' placeholder='Enter your duration ' value={duration} onChange={handleDurationChange}/>
//                     <Button variant='outline' className='p-2 rounded-2xl' onClick={handleSetDuration}>Set</Button>
//                 </span>
//                 <span className='text-2xl font-black text-center py-8 text-black'> {formatTime(timeLeft)}</span>
//                 <span className='flex items-center justify-center  gap-3'>
//                     <Button variant='outline' className='p-2 rounded-2xl' onClick={handleStart} >{isPaused ? "Resume" : "Start"}</Button>
//                     <Button variant='outline' className='p-2 rounded-2xl' onClick={handlePause}>Pause</Button>
//                     <Button variant='outline' className='p-2 rounded-2xl' onClick={resetCounter}>Reset</Button>
//                 </span>
//             </span>
//             </div>
//         </div>
//   )
// }

// export default CountTimer