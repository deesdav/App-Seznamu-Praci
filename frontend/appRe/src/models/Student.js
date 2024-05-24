export const getAllStudents = async () => {
  const req = await fetch("http://127.0.0.1:5000/createstudent", {
    headers : {'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'},
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    msg: data.msg,
    payload: data.payload
  }
};
export const getStudentById = async (id) => {
  const req = await fetch(`http://localhost:5000/students/${id}`, {
    headers : {'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'},
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    msg: data.msg,
    payload: data.payload
  }
};

export const createStudent = async (formData) => {
  const req = await fetch(`http://localhost:5000/students`, {
    headers : {  Accept: "application/json",
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'},
    method: "POST",
    body: JSON.stringify(formData),
  });
  const data = await req.json();
  return {
    status: req.status,
    msg: data.msg,
    payload: data.payload
  }
};

export const updateStudent = async (id, formData) => {
  const req = await fetch(`http://localhost:5000/students/${id}`, {
    headers : {'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'},
    method: "PUT",
    body: JSON.stringify(formData),
  });
  const data = await req.json();
  return {
    status: req.status,
    msg: data.msg,
    payload: data.payload
  }
};

export const deleteStudent = async (id) => {
  const req = await fetch(`http://localhost:5000/students/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });
  const data = await req.json();
  return {
    status: req.status,
    msg: data.msg,
    payload: data.payload
  }
};
