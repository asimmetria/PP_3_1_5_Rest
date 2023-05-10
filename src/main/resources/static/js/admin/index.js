const adminUrl = '/api/users'

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


