// const BASE_URL = "http://localhost:9800";
const BASE_URL = "http://3.6.39.101:9800";
export const signup = async (name, email, password) => {
  const url = `${BASE_URL}/user/signup`;
  const data = {
    name: name,
    email: email,
    password: password,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const user = await response.json();
    alert("Signed up successfully");
    window.location.href = "login";
    return user;
  } catch (error) {
    throw new Error("Signup failed: " + error.message);
  }
};

export const login = async (email, password) => {
  const url = `${BASE_URL}/user/login`;
  const data = {
    email: email,
    password: password,
  };
  console.log("Request data sent to backend:", data);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("response", response.ok);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    console.log("reached here");
    const user = await response.json();
    console.log("Response from backend:", user);
    localStorage.setItem("token", user.token);
    localStorage.setItem("name", user.name);
    alert("Logged in successfully");
    window.location.href = "blogs";
    return user;
  } catch (error) {
    throw new Error("Login failed: " + error.message);
  }
};
