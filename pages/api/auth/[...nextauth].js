import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import ApiClient from '../../../hooks/ApiClient';


const providers = [
  CredentialsProvider({
    async authorize(credentials) {
      const user = await ApiClient.post(`${process.env.API_URL}/TokenAuth/Authenticate`, credentials);
      if (user) {
        return user
      }
      return null

    }
  })
]


const callbacks = {
  
  session: async ({ session, token }) => {
    session.user.isSuperAdmin = token.user.result.roles?.filter((role) => role === 'SuperAdmin').length > 0;
    session.user.isMaterialAdminRole = token.user.result.roles?.filter((role) => role === 'MaterialAdminRole').length > 0;
    session.user.isBlogAdminRole = token.user.result.roles?.filter((role) => role === 'BlogAdminRole').length > 0;
    session.user.isSessionAdminRole = token.user.result.roles?.filter((role) => role === 'SessionAdminRole').length > 0;
    session.user.isPolicyAdminRole = token.user.result.roles?.filter((role) => role === 'PolicyAdminRole').length > 0;
    session.user.isModelsAdminRole = token.user.result.roles?.filter((role) => role === 'ModelsAdminRole').length > 0;
    session.user.isAdminAccess = token.user.result.roles?.filter((role) => role === 'ModelsAdminRole' ||
      role === 'SuperAdmin' || role === 'PolicyAdminRole' || role === 'SessionAdminRole' ||
      role === 'BlogAdminRole' || role === 'MaterialAdminRole').length > 0;
    // session.userRoles = token.user.result.roles
    session.token = token.user.result.accessToken
    session.userId = token.user.result.userId;
    session.fullName = token.user.result.fullName;
    return session
  },
  jwt: async ({ token, user }) => {
    user && (token.user = user)
    return token
  }
}

export const options = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 60,
  },
  providers,
  callbacks,
  jwt: {
    signingKey: process.env.NEXTAUTH_SECRET,
  },
  pages: {
    signIn: "/login",
    error: `/login`
  }
}

export default (req, res) => NextAuth(req, res, options)
