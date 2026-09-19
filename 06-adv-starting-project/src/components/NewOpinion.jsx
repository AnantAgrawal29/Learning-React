import { use } from "react";
import { useActionState } from "react";
import { OpinionsContext } from "../store/opinions-context";
import Submit from "./Submit";

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  async function opinionAction(prevForm, formdata) {
    const userName = formdata.get("userName");
    const title = formdata.get("title");
    const body = formdata.get("body");
    const errors = [];
    if (!userName || userName.trim().length === 0)
      errors.push("Please provide a User Name");

    if (!title || title.trim().length < 5)
      errors.push("Title should be atleast 5 characters long");

    if (!body || body.trim().length < 10 || body.trim().length > 300)
      errors.push(
        "Please provide Body of the opinion between 10 and 300 characters long.",
      );

    if (errors.length > 0)
      return {
        errors,
        enteredValues: {
          userName,
          title,
          body,
        },
      };

    await addOpinion({ title, body, userName });
    return { errors: null };
  }
  const [formState, formAction, pending] = useActionState(opinionAction, {
    errors: null,
  });
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState?.enteredValues?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState?.enteredValues?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5}>
            {formState?.enteredValues?.body}
          </textarea>
        </p>
        <Submit />
        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((er) => (
              <li key={er}>{er}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}
