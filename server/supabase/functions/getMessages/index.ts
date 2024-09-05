import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from 'npm:@supabase/supabase-js@2'

Deno.serve(async (_req) => {

    const supabase = createClient(
        Deno.env.get('URL') ?? '',
        Deno.env.get('KEY')?? ''
    );


  
  const {data,error} = await supabase.from('messages').select('*');

  if(error){
    return Response.json({
        message:error
    })
  }

  

  return Response.json({
    data,

  }
    
    
  )
})
