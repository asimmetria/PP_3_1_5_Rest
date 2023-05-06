const getRolesUrl = '/api/admin/roles'
const allRoles = []

function getRolesRequest() {
    return fetch(getRolesUrl).then(response => response.json())
}


// fetch(getRolesUrl)
//     .then(response => response.json())
//     .then(json => {
//         json.forEach(role => {
//             allRoles.push(role.name.replaceAll('ROLE_', ''))
//         })
//     })
//     .catch(error => console.error(error))


// async function  getAllRoles() {
//     let allRoles = []
//     let data = await fetch(getRolesUrl)
//     if(data.ok) {
//         let allRolesJson = await data.json()
//         allRolesJson.forEach(role => allRoles.push(role.name.replaceAll('ROLE_', '')))
//     } else {
//         console.error('Error, ${page.status}')
//     }
// }

// (async function() {
//     const allRoles = await getAllRoles()
// })()