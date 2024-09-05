import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { MyContext } from './Context.jsx';

const Messages = ({id}) => {
    const {messages , setMessages} = useContext(MyContext);
    const [loading ,setLoading ] = useState(false);
    useEffect(()=>{
        const fetchMessages=async()=>{
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:54321/functions/v1/getMessages');
                console.log(response.data);
                setMessages(response.data.data);



            } catch (error) {
                setLoading(false);
                console.log(error);
            }
            setLoading(false);
        }

        fetchMessages();

    },[])


    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }

    console.log(id);
   


    return (
        <div>
          {messages.map((item, index) => (
            item.user_id === id ? (
                <div className="flex justify-end">
  <div className="flex flex-col relative w-1/2 mt-2 ml-auto"> {/* Added ml-auto */}
    <div className="text-white text-sm font-mono font-semibold rounded-md p-4 bg-green-500">
      <p>{item.content}</p>
    </div>
    <div className="text-xs absolute bottom-0 right-1 text-black font-mono font-medium space-x-2">
      <span>{item.created_at.split('T')[0]}</span>
      <span>{item.created_at.split('T')[1].split('.')[0]}</span>
    </div>
  </div>
</div>
                
            ) : (<>
                <div className=' relative'>
                <div>
                <div className="flex flex-col relative w-1/2 mt-2" key={index}>
                <div className="text-green-500 text-sm font-mono font-semibold rounded-md p-4 bg-white">
                  <p>{item.content}</p>
                </div>
                <div className="text-xs absolute bottom-0 right-1 font-mono font-medium space-x-2">
                  <span>{item.created_at.split('T')[0]}</span>
                  <span>{item.created_at.split('T')[1].split('.')[0]}</span>
                </div>
              </div>
                </div>
                
                </div>
             
                


            </>)
          ))}
        </div>
      );
      
}

export default Messages