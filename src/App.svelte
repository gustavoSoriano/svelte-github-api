<script>
    import { onMount } from 'svelte'
    onMount( () => console.log('Mounted Component') )

    import {fetchRepo} from './api/github-api.js'
    import Table from './pages/Repositorios/Table.svelte'
    let user_name = ''

    const watchUserName = (node, user) => {
        let debounce
		return {
			update(user) {
                clearTimeout(debounce)
                debounce = setTimeout( async () => await fetchRepo(user), 500 )
			},
			destroy() {
                console.log( user, "the node has been removed from the DOM" )
			}
		}
	}
</script>

<main>
    <input class="form-control mr-sm-2" type="search" placeholder="Informe o nome do usuário github" aria-label="Search" bind:value={user_name} use:watchUserName={user_name} />
    <Table />
</main>

<style>
    main{
        width:90%;
        margin:0 auto;
        padding:5%;
    }
</style>
