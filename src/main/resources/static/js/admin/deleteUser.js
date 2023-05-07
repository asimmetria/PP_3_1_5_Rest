const deleteForm = document.querySelector('#deleteForm')

function deleteUserRequest(id) {

    return fetch(adminUrl + '/' + id, {
        method: 'DELETE'
    });
}

deleteForm.addEventListener('submit', event => {
    event.preventDefault()
    $('#deleteUser').modal('hide');
    const id = deleteForm.querySelector('#deleteUser_id').value
    deleteUserRequest(id)
        .then(response => {
            if(!response.ok) {
                throw new Error('Сервер не смог обработать запрос: ${response.status}')
            }
            return response.json()
        })
        .then(allUsers => loadTableData(allUsers))
        .catch(err => console.error(err))
})