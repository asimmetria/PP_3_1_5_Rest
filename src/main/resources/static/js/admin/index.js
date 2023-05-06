const adminUrl = '/api/admin'

const currentUser = fetch(adminUrl + '/auth')
    .then(response => response.json())

currentUser.then(user => {
        let roles = ''
        user.roles.forEach(role => {
            roles += ' '
            roles += role.name.replaceAll('ROLE_', ' ')
        })
    document.getElementById('navbar-email').innerHTML = user.email
    document.getElementById('navbar-roles').innerHTML = roles
}
)

async function  getAdminPage() {
    let page = await fetch(adminUrl)
    if(page.ok) {
        let allUsers = await page.json()
        loadTableData(allUsers)
    } else {
        alert('Error, ${page.status}')
    }
}


getAdminPage()

const editUser = document.querySelector('#editUser');
$(document).on('show.bs.modal','#editUser', fillModal(editUser, 'edit'))

const deleteUser = document.querySelector('#deleteUser');
$(document).on('show.bs.modal','#deleteUser', fillModal(deleteUser, 'delete'))


//
// const editUser = document.querySelector('#editUser');
// editUser.addEventListener('show.bs.modal',event => fillModal(event, editUser, 'edit'));
// editUser.addEventListener('hide.bs.modal', () => {
//     const inputPass = editUser.querySelector('#editPassword');
//     inputPass.value = '';
// })
