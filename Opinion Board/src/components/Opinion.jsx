import { use, useOptimistic } from "react";
import { OpinionsContext } from "../store/opinions-context";

export function Opinion({ opinion: { id, title, body, userName, votes } }) {
  const { upvoteOpinion, downvoteOpinion } = use(OpinionsContext);

  // Optimistic updates are a UI pattern where an application instantly updates its interface
  // to reflect a user's action before the server confirms it was successful.
  // This drastically improves the perceived performance and responsiveness of the application.
  // If the server request succeeds, the update is seamlessly finalized;
  // if it fails, the UI rolls back to the original state
  const [optimisticVotes, setVotesOptimistically] = useOptimistic(
    votes,
    (prevVotes, mode) => (mode === "up" ? prevVotes + 1 : prevVotes - 1),
  );
  async function upvoteAction() {
    setVotesOptimistically("up");
    await upvoteOpinion(id);
  }

  async function downvoteAction() {
    setVotesOptimistically("down");
    await downvoteOpinion(id);
  }

  return (
    <article>
      <header>
        <h3>{title}</h3>
        <p>Shared by {userName}</p>
      </header>
      <p>{body}</p>
      <form className="votes">
        <button formAction={upvoteAction}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m16 12-4-4-4 4" />
            <path d="M12 16V8" />
          </svg>
        </button>

        <span>{optimisticVotes}</span>

        <button formAction={downvoteAction}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M12 8v8" />
            <path d="m8 12 4 4 4-4" />
          </svg>
        </button>
      </form>
    </article>
  );
}
