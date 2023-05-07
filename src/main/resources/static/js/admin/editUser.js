const editForm = document.querySelector('#editForm')

function updateUserRequest(user) {
    return fetch(adminUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user),
    });
}

editForm.addEventListener('submit', event => {
    event.preventDefault()
    $('#editUser').modal('hide');

    const user = {
        user_id: editForm.querySelector('#editUser_id').value,
        firstName: editForm.querySelector('#editFirstName').value,
        lastName: editForm.querySelector('#editLastName').value,
        password: editForm.querySelector('#editPassword').value,
        age: editForm.querySelector('#editAge').value,
        email: editForm.querySelector('#editEmail').value,
    }

    const userRoles = []
    const optionsSelectRoles = editForm.querySelector('#editRoles')
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

    updateUserRequest(user)
        .then(response => {
            if(!response.ok) {
                throw new Error('Сервер не смог обработать запрос: ${response.status}')
            }
            return response.json()
        })
        .then(allUsers => loadTableData(allUsers))
        .catch(err => console.error(err))
})