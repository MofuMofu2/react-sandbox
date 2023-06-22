import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";
import { error } from "console";

export async function action({ params }: any) {
  throw new Error("Not implemented");
  await deleteContact(params.contactId); // 手前でエラーを投げて終了するためここには到達しない
  return redirect("/");
}
