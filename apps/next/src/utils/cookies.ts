import Cookies from "js-cookie";

const CONTAINER_URL_COOKIE = "container_url";

export const cookieUtils = {
  setContainerUrl: (url: string) => {
    Cookies.set(CONTAINER_URL_COOKIE, url, {
      expires: 7,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });
  },

  getContainerUrl: (): string | null => {
    return Cookies.get(CONTAINER_URL_COOKIE) || null;
  },

  removeContainerUrl: () => {
    Cookies.remove(CONTAINER_URL_COOKIE);
  },
};
