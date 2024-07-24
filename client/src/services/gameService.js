const baseUrl = "http://localhost:3030/jsonstore";

export const create = async (gameData) => {
  try {
    const response = await fetch(`${baseUrl}/games`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameData),
    });

    if (response.ok == false) {
      throw new Error("Request failed!");
    }

    const result = response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};
