import { serverApi } from "@/app/api/server";
import AuthProviderClient from "./authProvider.client";

export default async function AuthProviderServer({
  children,
}: {
  children: React.ReactNode;
}) {
  let user = null;


  try {
    const response = await serverApi("/users/me");

    if (response.ok) {
        
        user = await response.json();
        console.log(user)
    }
  } catch {
    console.log('not auth')
  }

  return (
    <AuthProviderClient user={user}>
      {children}
    </AuthProviderClient>
  );
}