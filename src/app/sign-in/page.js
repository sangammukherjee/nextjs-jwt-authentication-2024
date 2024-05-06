"use client";

import { Label } from "@/components/ui/label";
import { initialLoginFormData, userLoginFormControls } from "../utils";
import CommonFormElement from "@/components/form-element/page";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { loginUserAction } from "@/actions";
import { useRouter } from "next/navigation";

function SignIn() {
  const [signInFormData, setSignInFormData] = useState(initialLoginFormData);
  const router = useRouter();

  async function handleSignIn() {
    const result = await loginUserAction(signInFormData);
    console.log(result);
    if (result?.success) router.push("/");
  }

  return (
    <div>
      <h1>Login</h1>
      <form action={handleSignIn}>
        {userLoginFormControls.map((controlItem) => (
          <div key={controlItem.name}>
            <Label>{controlItem.label}</Label>
            <CommonFormElement
              currentItem={controlItem}
              value={setSignInFormData[controlItem.name]}
              onChange={(event) =>
                setSignInFormData({
                  ...signInFormData,
                  [event.target.name]: event.target.value,
                })
              }
            />
          </div>
        ))}
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
}

export default SignIn;
