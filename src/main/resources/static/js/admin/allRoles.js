const getRolesUrl = '/api/roles'

function getRolesRequest() {
    return fetch(getRolesUrl).then(response => response.json())
}
