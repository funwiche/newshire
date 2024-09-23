export default defineNuxtRouteMiddleware((to, from) => {
  const user = useCookie("auth_user");
  const token = useCookie("access_token");
  if (!token.value || !user.value) return navigateTo("/account/login");
});
