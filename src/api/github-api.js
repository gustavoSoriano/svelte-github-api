import { http } from './http'

import { repositoriosStore, initialState } from 'store/repositorios'

export const resetRepo = () => repositoriosStore.set({ ...initialState })

export const fetchRepo = async user => {
    try {
        const { data:repositorios } = await http.get( `${user}/repos` )
        repositoriosStore.set({ ...initialState, repositorios })
    } 
    catch (error) {
        resetRepo()
        alert( `Usuário ${user} não encontrado! :(` )
    }
}


