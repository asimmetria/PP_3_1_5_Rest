const getRolesUrl = '/api/admin/roles'

function getRolesRequest() {
    return fetch(getRolesUrl).then(response => response.json())
}
