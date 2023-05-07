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
        document.getElementById('user-table').innerHTML =
            `<tr>
                    <td>${user.user_id}</td>
                    <td>${user.firstName}</td>
                    <td>${user.lastName}</td>
                    <td>${user.age}</td>
                    <td>${user.email}</td>
                    <td>${roles.toString().replaceAll(',', '&nbsp;')}</td>   
            </tr>`
    }
)

async function getAdminPage() {
    let page = await fetch(adminUrl)
    if (page.ok) {
        let allUsers = await page.json()
        loadTableData(allUsers)
    } else {
        alert('Error, ${page.status}')
    }
}


getAdminPage()

const editUser = document.querySelector('#editUser');
$(document).on('show.bs.modal', '#editUser', fillModal(editUser, 'edit'))

const deleteUser = document.querySelector('#deleteUser');
$(document).on('show.bs.modal', '#deleteUser', fillModal(deleteUser, 'delete'))


