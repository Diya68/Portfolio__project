const BASE_URL = "https://portfolio-project-4-waza.onrender.com";

export const getStatus = async () => {
  const res = await fetch(`${BASE_URL}/api/status`);
  return res.json();
};

export const createStatus = async (name) => {
  const res = await fetch(`${BASE_URL}/api/status`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ client_name: name }),
  });

  return res.json();
};