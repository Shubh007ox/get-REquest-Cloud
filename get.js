function savedata(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const pwd =   document.getElementById('pwd').value;

    const object = {
        email,
        pwd
    }
    axios.post('https://crudcrud.com/api/b97b66ee59104978ac25db9eb521d877/appData',object)
        .then((response) => {
            showNAmeandPass(response,data)
        })
        .catch((err) => {
            console.log(err)
        })


    //localStorage.setItem(object.email,JSON.stringify(object));
    //localStorage.getItem('shubham14apr@gmail.com');
    showNAmeandPass(object); 

}
window.addEventListener("DOMContentLoaded",() => {
    axios.get('https://crudcrud.com/api/b97b66ee59104978ac25db9eb521d877/appData')
        .then((response) => {
            console.log(response)
            for(var i=0;i<response.data.length;i++){
                showNAmeandPass(response.data[i])
            }
        })
        .catch((err) => {
            console.log(err)
        })
    //const localStorageObj = localStorage;
    //const localStoragekeys = Object.keys(localStorageObj)

    //for(var i=0; i<localStoragekeys.length;i++){
        //const key = localStoragekeys[i]
        //const userDetailsString = localStorageObj[key];
        //const userDetailsStringObj = JSON.parse(userDetailsString);
        //showNAmeandPass(userDetailsStringObj)
    //}
})
function showNAmeandPass(user){

    const parentnode = document.getElementById('list of user');
    const childnode = `<li id=${user.email}> ${user.email} -- ${user.pwd} -- 
    <button onclick=deletecredentials('${user.email}')> Delete user
    <button onclick=edituser('${user.email}','${user.pwd}')> edit user </li>`
    parentnode.innerHTML = parentnode.innerHTML + childnode

}
function deletecredentials(email){
    console.log(email);
    localStorage.removeItem(email)
    removeUserFromScreen(email)
}
function removeUserFromScreen(email){
    const parentnode = document.getElementById('list of user');
    const childToDelete = document.getElementById(email)
    parentnode.removeChild(childToDelete);
}
function edituser(email,pwd){
    console.log(email);
    document.getElementById('email').value = email
    document.getElementById('pwd').value = pwd
    deletecredentials(email)
}