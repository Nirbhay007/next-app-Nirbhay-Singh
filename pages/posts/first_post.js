import Link from "next/link";

export default function FirstPost() {
  return (
    <h1>
      <Link href="/">
        <a>Go to root page </a>
      </Link>
    </h1>
  );
}
