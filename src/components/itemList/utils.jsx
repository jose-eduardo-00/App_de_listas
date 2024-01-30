import { baseUrl, methodDelete } from "../../services/services"


function deleteIten(id) {
    if (confirm("Quer deletar esse iten?")) {
        const url = `${baseUrl}itens/${id}`
        methodDelete(url)
        window.location.reload()
    } else {
        return
    }
}

export { deleteIten }