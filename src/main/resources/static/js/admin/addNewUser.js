const addNewUserForm = document.querySelector('#new-form');

function createUserRequest(user) {
    return fetch(adminUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user),
    })
}


document.querySelector('#new-tab').addEventListener('click', () => {
        const listOfRoles = addNewUserForm.querySelector('#newRoles')

        getRolesRequest().then(roles => {
            listOfRoles.size = roles.length
            listOfRoles.innerHTML = ''
            for (let role of roles) {
                const optionRole = document.createElement('option')
                optionRole.value = role.id
                optionRole.text = role.name.slice(5)
                listOfRoles.append(optionRole)
            }
        })
    }
)

addNewUserForm.addEventListener('submit', event => {
    event.preventDefault()

    const user = {
        firstName: addNewUserForm.querySelector('#newFirstName').value,
        lastName: addNewUserForm.querySelector('#newLastName').value,
        password: addNewUserForm.querySelector('#newPassword').value,
        age: addNewUserForm.querySelector('#newAge').value,
        email: addNewUserForm.querySelector('#newEmail').value,
    }

    const userRoles = []
    const optionsSelectRoles = addNewUserForm.querySelector('#newRoles')
        .getElementsByTagName('option');

    for (let option of optionsSelectRoles) {
        if (option.selected) {
            let role = {
                id: option.value,
                name: ('ROLE_' + option.text)
            }
            userRoles.push(role)
        }
    }
    user.roles = userRoles

    createUserRequest(user).then(response => {
        if (!response.ok) {
            throw new Error(`Сервер не смог обработать запрос: ${response.status}`)
        }
        return response.json()
    })
        .then(data => loadTableData(data))
        .catch(err => console.error(err))
        .then(() => cleanCreateForm())


})

function cleanCreateForm(){
    addNewUserForm.querySelectorAll('input').forEach(input => input.value = '');
    addNewUserForm.querySelectorAll('option').forEach(option => option.selected = false);

    document.getElementById('new-tab').classList.remove('active')
    document.getElementById('allUsers-tab').classList.add('active')

    document.getElementById('allUsers').classList.add('show', 'active')
    document.getElementById('new').classList.remove('show', 'active')
    }