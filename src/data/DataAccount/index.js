import React from 'react'

export default function DataAccount() {
  let dataAccount = [
    {
      name: "Xinh",
      gender: 1,
      email: "xinh@gmail.com",
      // password: "123456",
    },
    {
      name: "Amin1",
      gender: 0,
      email: "admin@gmail.com",
      // password: "123456",
    },
  ];
  
  let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  if (accounts.length === 0) {
    for (let i in dataAccount) {
      accounts.push(dataAccount[i]);
      localStorage.setItem("accounts", JSON.stringify(accounts));
    }
  }
  return (
    <></>
  )
}

