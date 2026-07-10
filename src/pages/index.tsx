import { Button } from "@heroui/react";
import { signOut } from "next-auth/react";


export default function Home() {
  return (
    <>
      <h1 className="text-sm font-light">
        home
      </h1>
      <Button onPress={() => signOut()}>
        secret
      </Button>
    </>
  )
}
