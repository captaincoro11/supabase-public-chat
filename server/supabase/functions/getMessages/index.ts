import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "../cors.ts";

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  try {
    const supabase = createClient(
      Deno.env.get("URL") ?? "",
      Deno.env.get("KEY") ?? "",
    );

    const { data, error } = await supabase.from("messages").select("*");

    if (error) {
      return Response.json({
        message: error,
      },{ headers:{
        ...corsHeaders,
        'Content-Type':'application/json'
      },
        status:400,
       
      });
    }

    return Response.json(
      {
        data
      },
      {
     
        headers:{
          ...corsHeaders,
          'Content-Type':'application/json'
        },   status: 200,
      },
    );
  } catch (error) {
    return Response.json(
      {
        message: "Internal Server Error" + error,
      },
      {
      
        headers:{
          ...corsHeaders,
          'Content-Type':'application/json'
        },status:500
      },
    );
  }
});
