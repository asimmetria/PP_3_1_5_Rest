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
                                                data-target="#editUser">Edit
                    </button>
                </td>
                <td>
                    <button type="button" class="btn btn-primary btn-danger"
                                                data-toggle="modal"
                                                data-target="#deleteUser">Delete
                    </button>
                </td>
            </tr>      
            `
    }
    adminTable.innerHTML = dataHtml
}
