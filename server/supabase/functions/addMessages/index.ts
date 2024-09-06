import { supabase } from "../supaBaseClient.ts";

Deno.serve(async (req) => {
  try {
    const { user_id, content } = await req.json();
    if (!user_id) {
      return Response.json(
        {
          message: " User Id is required",
        },
        {
          status: 403,
        },
      );
    }

    if (!content) {
      return Response.json(
        {
          message: "Content cannot be empty",
        },
        {
          status: 403,
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
          status: 400,
        },
      );
    }

    return Response.json(
      {
        message: "Message Sent Successfully",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return Response.json(
      {
        message: error,
      },
      {
        status: 500,
      },
    );
  }
});
