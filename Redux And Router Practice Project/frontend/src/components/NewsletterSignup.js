import { useFetcher } from "react-router-dom";

import classes from "./NewsletterSignup.module.css";
import { useEffect } from "react";

function NewsletterSignup() {
  const fetcher = useFetcher();
  // Fetcher should basically be used whenever
  // you wanna trigger, an action, or also a loader
  // with help of the load function without actually navigating to the page to which the loader belongs
  // or the page to which the action belongs.

  const { data, state } = fetcher;
  useEffect(() => {
    if (state === "idle" && data && data.message) window.alert(data.message);
  }, [data, state]);
  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        name="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
        required
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
