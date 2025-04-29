import NextAuth from "next-auth";
import { authOptions } from "../../../../../lib/authOptions";

const handlerNextAuth = NextAuth(authOptions);
export { handlerNextAuth as GET, handlerNextAuth as POST };
