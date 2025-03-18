import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/train(.*)", "/generateImage"]);

export default clerkMiddleware(async(auth, req) => {
  const { redirectToSignIn, userId } = await auth();

  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn();
  }

  return NextResponse.next();
});
