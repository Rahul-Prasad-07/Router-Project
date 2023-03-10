import { Form } from "react-router-dom";

export default function Contact() {
  const contact = {
    first: "Rahul",
    last: "Prasad",
    avatar: "https://media.licdn.com/dms/image/C4E03AQF6GVaJaM_x5w/profile-displayphoto-shrink_400_400/0/1623089905056?e=1683763200&v=beta&t=Z6hkcZKv4xfRjpQ_V1sSAKQ296i37qr698D74cWT5Ac",
    twitter: "rahultwte",
    notes: "Blockchain + DevOps Learner 🐳 | Student at IIIT Bangalore 📍 Open Source Advocate 🥑 | Sharing my experience and learning @GitHub 🧑‍💻",
    favorite: true,
  };

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}