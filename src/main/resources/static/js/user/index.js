const userUrl = '/api/user'

fetch(userUrl)
    .then(response => response.json())
    .then(user => {
            let roles = []
            for (let role of user.roles) {
                roles.push(role.name.replaceAll('ROLE_', ''))
            }
            document.getElementById('navbar-email').innerHTML = user.email
            document.getElementById('navbar-roles').innerHTML = roles.toString().replaceAll(',', '&nbsp;')
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
    ).catch(error => {
    console.error('Произошла ошибка при получении данных пользователя:', error)
})


