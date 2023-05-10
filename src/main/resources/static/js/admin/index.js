const adminUrl = '/api/users';

fetch(adminUrl)
    .then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error(`Error, ${response.status}`)
        }
    })
    .then((allUsers) => {
        loadTableData(allUsers)
    })
    .catch((error) => {
        alert(error.message)
    })


const editUser = document.querySelector('#editUser');
$(document).on('show.bs.modal', '#editUser', fillModal(editUser, 'edit'))

const deleteUser = document.querySelector('#deleteUser');
$(document).on('show.bs.modal', '#deleteUser', fillModal(deleteUser, 'delete'))


