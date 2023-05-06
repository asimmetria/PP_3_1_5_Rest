function fillModal(modal, actionPrefix) {
    return function(event) {
        const trUser = event.relatedTarget.parentElement.parentElement;
        modal.querySelector(`#${actionPrefix}User_id`).value = trUser.cells[0].textContent;
        modal.querySelector(`#${actionPrefix}FirstName`).value = trUser.cells[1].textContent;
        modal.querySelector(`#${actionPrefix}LastName`).value = trUser.cells[2].textContent;
        modal.querySelector(`#${actionPrefix}Age`).value = trUser.cells[3].textContent;
        modal.querySelector(`#${actionPrefix}Email`).value = trUser.cells[4].textContent;

        const listOfRoles = modal.querySelector(`#${actionPrefix}Roles`)

        getRolesRequest()
            .then(roles => {
                listOfRoles.size = roles.length
                listOfRoles.innerHTML = ''
                for (const role of roles) {
                    const optionRole = document.createElement('option')
                    optionRole.value = role.id
                    optionRole.text = role.name.slice(5)
                    if (trUser.cells[5].textContent.includes(optionRole.text)) {
                        optionRole.selected = true;
                    }
                    listOfRoles.append(optionRole)
                }
            })
    }
}


