import React from 'react'

export default function DataTutor() {
  let dataTutor = [
    { id: "t1", fullName: "Nguyen Van Hung", yearOfBirth: "2000", gender: 0, phone: '0389461074', experience: "More than 2 years", area: "Hai Chau", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
    { id: "t2", fullName: "Nguyen Minh Tuan", yearOfBirth: "2002", gender: 0, phone: '0389461074', experience: "More than 1 years", area: "Ngu Hanh Son", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
    { id: "t3", fullName: "Tran Thị Huong", yearOfBirth: "2003", gender: 1, phone: '0389461074', experience: "More than 1 years", area: "Son Tra", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-b7-xUXfy-NUaUcUXQhzQOb6d3OXKpbnSKA&usqp=CAU"},
    { id: "t4", fullName: "Le Thi Hien", yearOfBirth: "1999", gender: 1, phone: '0389461074', experience: "More than 3 years", area: "Thanh Khe", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-b7-xUXfy-NUaUcUXQhzQOb6d3OXKpbnSKA&usqp=CAU"},
    { id: "t5", fullName: "Tran Kim Duyen", yearOfBirth: "2001", gender: 1, phone: '0389461074', experience: "More than 3 years", area: "Cam Le", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-b7-xUXfy-NUaUcUXQhzQOb6d3OXKpbnSKA&usqp=CAU"},
    { id: "t6", fullName: "Nguyen Thi Phuong", yearOfBirth: "2002", gender: 1, phone: '0389461074', experience: "More than 2 years", area: "Ngu Hanh Son", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-b7-xUXfy-NUaUcUXQhzQOb6d3OXKpbnSKA&usqp=CAU"}
  ];
  let tutors = JSON.parse(localStorage.getItem("tutors")) || [];
  if (tutors.length === 0) {
    for (let i in dataTutor) {
      tutors.push(dataTutor[i]);
      localStorage.setItem("tutors", JSON.stringify(tutors));
    }
  }
  return (
    <></>
  )
}


