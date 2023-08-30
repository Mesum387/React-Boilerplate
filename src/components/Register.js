// import React, { useState } from 'react'
// import { apiHandle } from '../api/apiHandle'

// export const Register = () => {

//     const [data, setData] = useState({})

//     const submitHandle = (e) => {
//         e.preventDefault()

//         console.log({data});

//         apiHandle().post('/auth/register',data).then((res)=>{
//             console.log(res.data)

//             const tokens = res.data.tokens

//             localStorage.setItem('token',tokens.authToken)
//         })
//         .catch((error)=>{
            
//             console.log(error)
//         })



//     }


//   console.log(localStorage.getItem('token'))




//     return (
//         <>
//             <form onSubmit={submitHandle}> 
//                 <div>
//                     <input placeholder='Enter email address' id='email' onChange={(e)=>setData({...data,[e.target.id]:e.target.value})} />
//                 </div>
//                 <div>
//                     <input placeholder='Enter password address' id='password'  onChange={(e)=>setData({...data,[e.target.id]:e.target.value})}/>
//                 </div>
//                 <div>
//                     <input placeholder='Enter name address' id='name' onChange={(e)=>setData({...data,[e.target.id]:e.target.value})} />
//                 </div>
//                 <div>
//                     <button type='submit' >
//                         Register
//                     </button>
//                 </div>
//             </form>
//         </>
//     )
// }
