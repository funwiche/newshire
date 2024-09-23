export const $req = {
  get: (uri: string) =>
    new Promise((resolve, reject) => {
      fetch(`/api${uri}`)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch(() =>
          reject("There was an error connecting. Please check your internet.")
        );
    }),
  post: async (uri: string, body = {}) =>
    new Promise((resolve, reject) => {
      fetch(`/api${uri}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch(() =>
          reject("There was an error connecting. Please check your internet.")
        );
    }),
  update: async (uri: string, body = {}) =>
    new Promise((resolve, reject) => {
      fetch(`/api${uri}`, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch(() =>
          reject("There was an error connecting. Please check your internet.")
        );
    }),
  delete: async (uri: string) =>
    new Promise((resolve, reject) => {
      fetch(`/api${uri}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch(() =>
          reject("There was an error connecting. Please check your internet.")
        );
    }),
};
