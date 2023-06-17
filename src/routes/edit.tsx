import { Form, useLoaderData, redirect } from "react-router-dom";
import { updateContact } from "../contacts";

export async function action({ request, params }: any) {
  const formData = await request.formData(); // フォーム内容を送信するためFormDataオブジェクトを作成
  const updates = Object.fromEntries(formData); // データをオブジェクトに変換
  await updateContact(params.contactId, updates); // リクエスト処理
  return redirect(`/contacts/${params.contactId}`); // contactページにリダイレクト
}

export default function EditContact() {
  const { contact } = useLoaderData() as any;

  return (
    <Form method="post" id="contact-form">
      <p>
        <span> Name</span>
        <input
          placeholder="First"
          name="first"
          aria-label="First name"
          type="text"
          defaultValue={contact.first}
        />
        <input
          placeholder="Last"
          name="last"
          aria-label="Last name"
          type="text"
          defaultValue={contact.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          placeholder="Twitter"
          name="twitter"
          aria-label="Twitter handle"
          type="text"
          defaultValue={contact.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="Avatar URL"
          name="avatar"
          aria-label="Avatar URL"
          type="text"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea name="notes" defaultValue={contact.notes} rows={6}></textarea>
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
}
