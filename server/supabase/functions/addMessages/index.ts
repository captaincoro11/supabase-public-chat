
import { supabase } from "../supaBaseClient.ts";


Deno.serve(async(req)=>{

    try {
        const {user_id , content } = await req.json();
        if(!user_id || !content){
            return Response.json({
                message:"Content and User Id is required",
                
            },{
                status:403
            })
        }

        const {data,error} = await supabase.from('messages').insert([{content,user_id}]);

        if(error){
            return Response.json({
                error:error
            })
        }

        return Response.json({
            
        },{
            status:200
        })
        
    } catch (error) {
        return Response.json({
            message:"Some internal error occured" + error
        })
        
    }

    

})