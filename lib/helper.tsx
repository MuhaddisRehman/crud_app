const BASE_API_URL = "http://localhost:3000/";
const GET_EMPLOYEE_URL = `${BASE_API_URL}/api/employees`;

// GET ALL EMPLOYEES
const getEmployees = async () => {
  const response = await fetch(`${GET_EMPLOYEE_URL}`);
  const data = await response.json();
  return data;
};

// GET SINGLE EMPLOYEE
const getUser = async (userId: string | number) => {
  const response = await fetch(`${GET_EMPLOYEE_URL}/${userId}`);
  const data = await response.json();
  if (data) {
    return data;
  } else {
    return {};
  }
};

//POST AN EMPLOYEE
const addEmployees = async (formData: object) => {
  try {
    const OPTIONS = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${GET_EMPLOYEE_URL}`, OPTIONS);
    const data = await response.json();
    return data;
  } catch (error) {
    return `Got error while adding employing: ${error}`;
  }
};

//UPDATE AN EMPLOYEE

const updateEmplpoyee = async (userId: number | string, formData: object) => {
  try {
    const OPTIONS = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(`${GET_EMPLOYEE_URL}/${userId}`, OPTIONS);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

//DELETE AN EMPLOYEE

const deleteEmplpoyee = async (userId: number | string, formData: object) => {
  try {
    const OPTIONS = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${GET_EMPLOYEE_URL}/${userId}`, OPTIONS);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export {
  getEmployees,
  getUser,
  addEmployees,
  deleteEmplpoyee,
  updateEmplpoyee,
};
