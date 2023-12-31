
const getNewUserInfo = () => {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => displayUserInfo(data))
}
const displayUserInfo = (data) => {
    const userInfo = data.results[0];
    document.getElementById("displayUserPhoto").src = userInfo.picture.large;

    const userName = `${userInfo.name.first} ${userInfo.name.last}`;
    document.getElementById("displayUserName").innerText = userName;

    const userFullName = `${userInfo.name.title}. ${userInfo.name.first} ${userInfo.name.last}`;
    document.getElementById("displayUserFullName").innerText = userFullName;

    const userEmailAddress = userInfo.email;
    document.getElementById("displayUserEmail").innerText = userEmailAddress;

    const userPhoneNumber = userInfo.phone;
    document.getElementById("displayUserPhoneNumber").innerText = userPhoneNumber;

    const userGender = userInfo.gender;
    document.getElementById("displayUserGander").innerText = userGender;

    let userDOB = new Date(userInfo.dob.date);
    userDOB = `${userDOB.getDate()}/${userDOB.getMonth() + 1}/${userDOB.getFullYear()} (${userInfo.dob.age} years old)`
    document.getElementById("displayUserDOB").innerText = userDOB;

    const userAddress = `Street: ${userInfo.location.street.number} ${userInfo.location.street.name}, City: ${userInfo.location.city}, State: ${userInfo.location.state}, ${userInfo.location.country}.`;
    document.getElementById("displayUserAddress").innerText = userAddress;

    const userPostCode = userInfo.location.postcode;
    document.getElementById("displayUserPostcode").innerText = userPostCode;

    const userSSNNumber = userInfo.id.value;
    document.getElementById("displayUserSSNNumber").innerText = userSSNNumber;

}
getNewUserInfo();
