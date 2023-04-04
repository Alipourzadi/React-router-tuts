import { Form, useActionData } from "react-router-dom";

function Contact() {
  const data = useActionData();
  return (
    <div className="w-1/3">
      <h3 className="text-xl">Contact Us</h3>
      <Form
        method="post"
        action="/help/contact"
        className="flex flex-col items-end justify-center gap-5 my-2"
      >
        <label className="flex flex-col w-full gap-2">
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label className="flex flex-col w-full gap-2">
          <span>Your message:</span>
          <textarea
            className="resize-none"
            rows={5}
            name="message"
            required
          ></textarea>
          {data && data.error && (
            <p className="text-secondary-500 text-sm">{data.error}</p>
          )}
        </label>
        <button className="bg-secondary-500 px-4 py-2 rounded-lg hover:bg-red-700">
          Submit
        </button>
      </Form>
    </div>
  );
}

export default Contact;
