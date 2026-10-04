import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">NextJS is a Great Framework</Link>
        </li>
      </ul>
    </>
  );
}
