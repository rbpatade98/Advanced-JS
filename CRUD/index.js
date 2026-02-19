let regForm = document.querySelector(".register-form");
let allBtn = regForm.querySelectorAll("button")
let allInput = regForm.querySelectorAll("input");
let closeBtn = document.querySelector(".btn-close")
let regList =  document.querySelector(".reg-list")
let addBtn = document.querySelector(".add-btn")
let searchEl = document.querySelector(".search")


// console.log(allInput)

let allRegData = []
let url = "";

if (localStorage.getItem("allRegData") != null) {
    allRegData = JSON.parse(localStorage.getItem("allRegData"));
}
// console.log(allRegData);


//adddata
regForm.onsubmit =(e) =>{
    e.preventDefault()
    // alert();

    // ================== VALIDATION ==================
    let name = allInput[0].value.trim();
    let email = allInput[1].value.trim();
    let mobile = allInput[2].value.trim();
    let dob = allInput[3].value;

    // Name validation
    if (name.length < 5) {
        swal("Name must be at least 5 characters long!", "", "warning");
        return;
    }

    let namePattern = /^[A-Za-z ]+$/;
    if (!name.match(namePattern)) {
        swal("Name can contain only letters and spaces!", "", "warning");
        return;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        swal("Please enter a valid email address!", "", "warning");
        return;
    }

    // Mobile validation
    let mobilePattern = /^[0-9]{10}$/;
    if (!mobile.match(mobilePattern)) {
        swal("Mobile number must be exactly 10 digits!", "", "warning");
        return;
    }

    if (parseInt(mobile) < 0) {
    swal("Mobile number cannot be negative!", "", "warning");
    return;
}

    // DOB validation
    if (dob === "") {
        swal("Please select your Date of Birth!", "", "warning");
        return;
    }

    // Age validation > 18 years
    let today = new Date();
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age <= 18) {
        swal("Age must be greater than 18 years!", "", "warning");
        return;
    }
   
    // Password validation 
        let password = allInput[4].value;
        let hasUppercase = /[A-Z]/.test(password);
        let hasLowercase = /[a-z]/.test(password);
        let hasDigit     = /\d/.test(password);
        let hasSpecial   = /[@$!%*?&]/.test(password);
        let hasMinLength = password.length >= 6;

        let errors = [];
        if (!hasUppercase) errors.push("at least 1 uppercase letter");
        if (!hasLowercase) errors.push("at least 1 lowercase letter");
        if (!hasDigit)     errors.push("at least 1 digit");
        if (!hasSpecial)   errors.push("at least 1 special symbol (@$!%*?&)");
        if (!hasMinLength) errors.push("minimum 6 characters");

        if (errors.length > 0) {
            swal("Password must contain:\n" + errors.join("\n"), "", "warning");
            return; 
        }


    //check email
    let checkEmail = allRegData.find((data) => data.email == email);
    if (checkEmail == undefined) {
        allRegData.push({
            name: name,
            email: email,
            mobile: mobile,
            dob: dob,
            password: allInput[4].value,
            profile: url == "" ? "profile.png" : url
        });
        localStorage.setItem("allRegData", JSON.stringify(allRegData));
        swal("Good job!", "Registration Successful!", "success");
        closeBtn.click();
        regForm.reset();
        getRegData();
    } else {
        swal("Email already exists", "Please use another email", "warning");
    }
}


const getRegData = () =>{
    regList.innerHTML = ""
    allRegData.forEach((data,index)=>{
        let dataStr = JSON.stringify(data)
        let finalData = dataStr.replace(/"/g,"'")
        // console.log(data,index)
        regList.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td><img src="${data.profile}" alt="" width="50"></td>
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>${data.mobile}</td>
            <td>${data.dob}</td>
            <td>
                <button data= "${finalData}" index = "${index}" class="edit-btn btn p-1 px-2 btn-primary"><i class="fa fa-edit"></i></button>
                <button index = "${index}" class="del-btn btn p-1 px-2 btn-danger"><i class="fa fa-trash"></i></button>
            </td>
        </tr>
        `;
        action();
        
    })
    
}

//delete Coding

const action = () =>{
    //delete coding
    let allDelBtn = regList.querySelectorAll(".del-btn")
    for (let btn of allDelBtn){
        btn.onclick = async () =>{
            let isConfirm = await confirm()

            // alert(isConfirm)
           if(isConfirm){
                  let index = btn.getAttribute("index");
            allRegData.splice(index,1)
            localStorage.setItem("allRegData",JSON.stringify(allRegData))
            getRegData();
           }
            
        }
    }

    //update Coding
    let allEditBtn = regList.querySelectorAll(".edit-btn");

    for (let btn of allEditBtn) {
        btn.onclick = () => {
            let index = btn.getAttribute("index");
            let dataStr = btn.getAttribute("data");
            let finalData = dataStr.replace(/'/g,'"')
            let data = JSON.parse(finalData)
            console.log(data)
            addBtn.click(); 
            allInput[0].value = data.name
            allInput[1].value = data.email
            allInput[2].value = data.mobile
            allInput[3].value = data.dob
            allInput[4].value = data.password
            url = data.profile
            allBtn[0].disabled = false
            allBtn[1].disabled = true

            allBtn[0].onclick = () => {
                allRegData[index] = {
                    name : allInput[0].value,
                    email: allInput[1].value,
                    mobile:  allInput[2].value,
                    dob:  allInput[3].value,
                    password:  allInput[4].value,
                    profile: url == "" ? "profile.png" : url

                }
                localStorage.setItem("allRegData", JSON.stringify(allRegData));
                swal("Good job!", "data updated", "success");
                closeBtn.click();
                regForm.reset();
                getRegData()
                allBtn[1].disabled = true
                allBtn[0].disabled = false
            }

        };
    }



}


getRegData()

//reading profile
allInput[5].onchange = () => {
    let fReader = new FileReader();
    fReader.readAsDataURL(allInput[5].files[0]);

    fReader.onload = (e) => {
        url = e.target.result;
        console.log(url); 
    };
}


//let confirm
const confirm = () =>{
    return new Promise((resolve,reject)=>{
        swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    resolve(true)
    swal("Poof! Your imaginary file has been deleted!", {
      icon: "success",
    });
  } else {
    reject(false)
    swal("Your imaginary file is safe!");
  }
});
    })
}

//serchingdata

searchEl.oninput = () => {
    search();
};

const search = () => {
    let value = searchEl.value.toLowerCase();
    let tr = regList.querySelectorAll("TR")
    let i;
    for(i=0;i<tr.length;i++){
        let allTd = tr[i].querySelectorAll("TD")
        let name = allTd[2].innerHTML
        let email = allTd[3].innerHTML
        let mobile = allTd[4].innerHTML
        let dob = allTd[5].innerHTML

        if(name.toLocaleLowerCase().indexOf(value) != -1){
            tr[i].style.display = "";
        }
        else if(email.toLocaleLowerCase().indexOf(value) != -1){
            tr[i].style.display = "";
        }
         else if(mobile.toLocaleLowerCase().indexOf(value) != -1){
            tr[i].style.display = "";
        }
         else if(dob.toLocaleLowerCase().indexOf(value) != -1){
            tr[i].style.display = "";
        }
        else{
            tr[i].style.display = "none"
        }
    }
};
