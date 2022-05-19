import React from 'react'

export default function DataClass() {
  let dataClass = [
    { id: "c1", classname: 10, district: "Hai Chau", street: "Nguyen Van Linh", salary: 1700, time: "Morning", numberOfSessions: 3, phone: "034222789", nameParent: "Tran Van An", genderOfParent: 0, genderOfStudent: 0,
    },
    { id: "c2", classname: 9, district: "Ngu Hanh Son", street: "Hoai Thanh", salary: 1400, time: "Evening", numberOfSessions:4, phone: "098642178", nameParent: "Tran Lan Trinh", genderOfParent: 1, genderOfStudent: 0
    },
    { id: "c3", classname: 11, district: "Son Tra", street: "Ngo Quyen", salary: 1600, time: "Evening", numberOfSessions:4, phone: "089555164", nameParent: "Nguyen Thi Hoa", genderOfParent: 1, genderOfStudent: 0
    },
    { id: "c4", classname: 7, district: "Hai Chau", street: "Le Duan", salary: 1600, time: "Evening", numberOfSessions:4, phone: "034586423", nameParent: "Le Minh Hieu", genderOfParent: 0, genderOfStudent: 1
    },
    { id: "c5", classname: 5, district: "Hai Chau", street: "Hung Vuong", salary: 1500, time: "Morning", numberOfSessions:3, phone: "0342177862", nameParent: "Nguyen Van Minh", genderOfParent: 0, genderOfStudent: 1
    },
    { id: "c6", classname: 8, district: "Hai Chau", street: "Le Hong Phong", salary: 1300, time: "Morning", numberOfSessions: 3, phone: "034225678", nameParent: "Tran Van Dat", genderOfParent: 0, genderOfStudent: 0,
    },
    { id: "c7", classname: 4, district: "Ngu Hanh Son", street: "Do Ba", salary: 1400, time: "Evening", numberOfSessions:4, phone: "098647794", nameParent: "Tran Lan Phuong", genderOfParent: 1, genderOfStudent: 0
    },
    { id: "c8", classname: 7, district: "Son Tra", street: "Nguyen Duy Hieu", salary: 1600, time: "Evening", numberOfSessions:4, phone: "089125891", nameParent: "Tran Thi Nga", genderOfParent: 1, genderOfStudent: 0
    },
    { id: "c9", classname: 3, district: "Hai Chau", street: "Ong Ich Khiem", salary: 1600, time: "Evening", numberOfSessions:4, phone: "034594423", nameParent: "Nguyen Minh Hieu", genderOfParent: 0, genderOfStudent: 1
    },
    { id: "c10", classname: 1, district: "Cam Le", street: "Ong Ich Duong", salary: 1500, time: "Morning", numberOfSessions:3, phone: "0342179962", nameParent: "Nguyen Van Toan", genderOfParent: 0, genderOfStudent: 1
    },
    { id: "c11", classname: 7, district: "Hai Chau", street: "Ham Nghi", salary: 1300, time: "Morning", numberOfSessions: 3, phone: "034245789", nameParent: "Tran Van Hung", genderOfParent: 0, genderOfStudent: 0,
    },
    { id: "c12", classname: 9, district: "Ngu Hanh Son", street: "Le Van Huu", salary: 1400, time: "Evening", numberOfSessions:4, phone: "098647978", nameParent: "Tran Thi Mai", genderOfParent: 1, genderOfStudent: 0
    },
    { id: "c13", classname: 10, district: "Son Tra", street: "Le Huu Trac", salary: 1600, time: "Evening", numberOfSessions:4, phone: "081555164", nameParent: "Nguyen Thu Hien", genderOfParent: 1, genderOfStudent: 0
    },
    { id: "c14", classname: 8, district: "Hai Chau", street: "Dong Da", salary: 1600, time: "Evening", numberOfSessions:4, phone: "034583423", nameParent: "Le Quoc Cuong", genderOfParent: 0, genderOfStudent: 1
    },
    { id: "c15", classname: 5, district: "Hai Chau", street: "2 Thang 9", salary: 1500, time: "Morning", numberOfSessions:3, phone: "0342177862", nameParent: "Le Van Hoang", genderOfParent: 0, genderOfStudent: 1
    },
    { id: "c16", classname: 11, district: "Hai Chau", street: "Bach Dang", salary: 2000, time: "Morning", numberOfSessions: 3, phone: "034227789", nameParent: "Tran Van Thien", genderOfParent: 0, genderOfStudent: 0,
    },
    { id: "c17", classname: 9, district: "Ngu Hanh Son", street: "Chuong Duong", salary: 1400, time: "Evening", numberOfSessions:4, phone: "090042178", nameParent: "Le Thi Huong", genderOfParent: 1, genderOfStudent: 0
    },
    { id: "c18", classname: 12, district: "Son Tra", street: "Tran Quoc Tuan", salary: 2200, time: "Evening", numberOfSessions:4, phone: "089555101", nameParent: "Nguyen Thi Xuan", genderOfParent: 1, genderOfStudent: 0
    },
    { id: "c19", classname: 8, district: "Hai Chau", street: "Cao Thang", salary: 1600, time: "Evening", numberOfSessions:4, phone: "034586497", nameParent: "Le Minh Thanh", genderOfParent: 0, genderOfStudent: 1
    },
    { id: "c20", classname: 6, district: "Cam Le", street: "Le Thanh Nghi", salary: 1700, time: "Morning", numberOfSessions:3, phone: "0342171562", nameParent: "Hoang Van Trung", genderOfParent: 0, genderOfStudent: 1
    },
  ];
  
  let classes = JSON.parse(localStorage.getItem("classes")) || [];
  if (classes.length === 0) {
    for (let i in dataClass) {
      classes.push(dataClass[i]);
      localStorage.setItem("classes", JSON.stringify(classes));
    }
  }

  return (
    <></>
  )
}

