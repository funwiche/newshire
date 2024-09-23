export const useAuthUser: any = () =>
  useState("auth_user", () => useCookie("auth_user").value);
export const useAccessToken: any = () =>
  useState("access_token", () => useCookie("access_token").value);
