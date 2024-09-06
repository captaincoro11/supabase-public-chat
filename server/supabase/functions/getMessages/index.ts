import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

Deno.serve(async (req) => {
  try {
    const supabase = createClient(
      Deno.env.get("URL") ?? "",
      Deno.env.get("KEY") ?? "",
    );

    const { data, error } = await supabase.from("messages").select("*");

    if (error) {
      return Response.json({
        message: error,
      });
    }

    return Response.json(
      {
        data
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return Response.json(
      {
        message: "Internal Server Error" + error,
      },
      {
        status: 500,
      },
    );
  }
});
