import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url") || "/";
  const status = searchParams.get("status");

  const draft = await draftMode();

  if (status === "published") {
    draft.disable();
  } else {
    draft.enable();
  }
  
  const cookieStore = await cookies();
  cookieStore.set("preview", "true", {
    secure: true,
    expires: new Date(Date.now() + 60 * 60 * 1000), // 1 hour from now
  });

  redirect(url);
}
