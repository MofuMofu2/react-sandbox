import {
  Outlet,
  useLoaderData,
  useNavigation,
  Form,
  NavLink,
  redirect,
} from "react-router-dom";
import { getContacts, createContact } from "../contacts";
import { Key } from "react";

export async function loader() {
  const contacts = await getContacts();
  return contacts;
}

export async function action() {
  const contact = await createContact(); // { id: "new", createdAt: unixtime }を返す
  return redirect(`/contacts/${contact.id}`); // idを使ってcontactページにリダイレクト
}

export default function Root() {
  const contacts = useLoaderData() as any[];
  const navigation = useNavigation();
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map(
                (contact: {
                  id: Key | null | undefined;
                  first: any;
                  last: any;
                  favorite: any;
                }) => (
                  <li key={contact.id}>
                    <NavLink
                      to={`contacts/${contact.id}`}
                      className={({ isActive, isPending }) =>
                        isActive ? "active" : isPending ? "pending" : ""
                      }
                    >
                      {contact.first || contact.last ? (
                        <>
                          {contact.first} {contact.last}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                      {contact.favorite && <span>★</span>}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
}
