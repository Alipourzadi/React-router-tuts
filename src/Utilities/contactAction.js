import { redirect } from "react-router-dom";

async function contactAction({ request }) {
  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };

  if (submission.message.length < 10) {
    return { error: "Message must be at least 10 characters." };
  }

  return redirect("/");
}

export default contactAction;
