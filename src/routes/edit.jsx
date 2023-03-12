import { Form, useLoaderData, redirect,} from "react-router-dom";
import { updateContact } from "../contacts";

// Without JavaScript, when a form is submitted, the browser will create FormData and set it as the body of the request when it sends it to the server. 
// As mentioned before, React Router prevents that and sends the request to your action instead, including the FormData.
// Each field in the form is accessible with formData.get(name).
// For example, given the input field from above, you could access the first and last names like this:

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);

    //Loaders and actions can both return a Response (makes sense, since they received a Request!). 
    //The ==> redirect helper just makes it easier to return a response that tells the app to change locations.
}


export default function EditContact() {
  const contact = useLoaderData();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact.first}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
}