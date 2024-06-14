export const getAllWorks = async () => {
  const req = await fetch("http://localhost:5000/creatework", {
    headers : {'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'},
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    msg: data.msg,
    payload: data
  }
};
export const getWorkById = async (id) => {
  const req = await fetch(`http://localhost:5000/api/work/${id}`, {
    headers : {'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'},
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    msg: data.msg,
    payload: data
  }
};

export const createWork = async (formData) => {
  const req = await fetch(`http://localhost:5000/works`, {
    headers : {  Accept: "application/json",
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'},
    method: "POST",
    body: JSON.stringify(formData),
  });
  const data = await req.json();
  console.log(data);
  return {
    status: req.status,
    msg: data.msg,
    payload: data
  }
};

export const updateWork = async (id, formData) => {
  const req = await fetch(`http://localhost:5000/api/work/${id}`, {
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

export const deleteWork = async (id) => {
  const req = await fetch(`http://localhost:5000/works/${id}`, {
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
