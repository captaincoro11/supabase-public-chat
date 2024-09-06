import { supabase } from "../supaBaseClient.ts";
import { corsHeaders } from "../cors.ts";

Deno.serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
      }
    
  try {
    const { user_id, content } = await req.json();
    if (!user_id) {
      return Response.json(
        {
          message: " User Id is required",
        },
        {
          
          headers:{
            ...corsHeaders,
            'Content-Type':'application/json'
          },status: 403
        }
      );
    }

    if (!content) {
      return Response.json(
        {
          message: "Content cannot be empty",
        },
        {
        
          headers:{
            ...corsHeaders,
            'Content-Type':'application/json'
          },
          status: 403
        },
      );
    }

    const { data, error } = await supabase
      .from("messages")
      .insert([{ content, user_id }]);

    if (error) {
      return Response.json(
        {
          message: "Some Server Issue!Please Try again later ",
        },
        {
          headers:{
            ...corsHeaders,
            'Content-Type':'application/json'
          },
           status: 400,
        },
      );
    }

    return Response.json(
      {
        message: "Message Sent Successfully",
       
      },
      {
        headers:{
            ...corsHeaders,
            'Content-Type':'application/json'
          },
        status: 200,
      },
    );
  } catch (error) {
    return Response.json(
      {
        message: error,
       
      },
      {
        headers:{
            ...corsHeaders,
            'Content-Type':'application/json'
          },
        status: 500,
      },
    );
  }
});
