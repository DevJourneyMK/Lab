
    const user = {
      name: "John Doe",
      age: 25,
      email: "john.doe@example.com"
    };

   
    const userInfoDiv = document.getElementById("userInfo");

    
    const namePara = document.createElement("p");
    namePara.textContent = `Name: ${user.name}`;

    const agePara = document.createElement("p");
    agePara.textContent = `Age: ${user.age}`;

    const emailPara = document.createElement("p");
    emailPara.textContent = `Email: ${user.email}`;

  
    userInfoDiv.appendChild(namePara);
    userInfoDiv.appendChild(agePara);
    userInfoDiv.appendChild(emailPara);