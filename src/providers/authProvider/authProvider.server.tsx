import { serverApi } from "@/app/api/server";
import AuthProviderClient from "./authProvider.client";
import { User } from "@/shared/redux/slices/userSlice";

export default async function AuthProviderServer({
  children,
}: {
  children: React.ReactNode;
}) {
  let user = null;


  try {
    const response = await serverApi<User>("/users/me");

    if (response.ok) {
        
        user = await response.data;
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