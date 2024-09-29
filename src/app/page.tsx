import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      hello world
      <div>
        <Button as={Link} href="/login">Sign in</Button>
      </div>
    </main>
  );
}
