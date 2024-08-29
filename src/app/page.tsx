"use client";

import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function Index() {
  const route = useRouter();

  const handleClick = () => {
    route.push("/home");
  };

  return (
    <div>
      <h1>Index</h1>
      <Button variant="primary" onClick={handleClick}>
        Home
      </Button>
    </div>
  );
}
