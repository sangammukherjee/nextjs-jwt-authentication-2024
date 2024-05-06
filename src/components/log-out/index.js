"use client";

import { useRouter } from "next/router";
import { Button } from "../ui/button";
import { logoutAction } from "@/actions";

function Logout() {
  async function handleLogout() {
    await logoutAction();
  }

  return <Button onClick={handleLogout}>Logout</Button>;
}

export default Logout;
