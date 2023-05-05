const url = '/api/admin'

const currentUser = fetch(url + '/auth')
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
    let page = await fetch(url)
    if(page.ok) {
        let allUsers = await page.json()
        loadTableData(allUsers)
    } else {
        alert('Error, ${page.status}')
    }
}

function loadTableData(allUsers) {
    const adminTable = document.getElementById('admin-table');
    let dataHtml = ''
    for (let user of allUsers) {
        let roles = []
        for (let role of user.roles) {
            roles.push(' ' + role.name.toString().replaceAll('ROLE_', ''))
        }
        dataHtml +=
            `
            <tr>
                <td>${user.user_id}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
                <td>${roles}</td>
                <td>
                    <button type="button" class="btn btn-primary btn-success"
                                                data-toggle="modal"
                                                data-target="#EditUser"
                                                onclick="loadDataforEditModal(${user.user_id})">Edit
                    </button>
                </td>
                <td>
                    <button type="button" class="btn btn-primary btn-danger"
                                                data-toggle="modal"
                                                data-target="#DeleteUser"
                                                onclick="loadDataforDeleteModal(${user.user_id})">Delete
                    </button>
                </td>
            </tr>      
            `
    }
    adminTable.innerHTML = dataHtml
}

getAdminPage()
