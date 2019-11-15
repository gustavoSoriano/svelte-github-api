<script>
    import {repositoriosStore} from '../../store/repositorios.js'
    const open_repositorio = repo => window.open(repo)

    const get_image = language_name => {
      if(!language_name)return 'https://findicons.com/files/icons/1035/human_o2/128/unknown.png'
      let lang = languages.find( _ => _.name.toLowerCase() === language_name.toLowerCase() )
      return lang ? lang.thumbnail : 'https://findicons.com/files/icons/1035/human_o2/128/unknown.png'
    }

    let repositorios = [], languages = []
    repositoriosStore.subscribe( _ => ( repositorios = _.repositorios ))
    repositoriosStore.subscribe( _ => ( languages = _.languages ))
</script>


           
<h1 class="mt-4 mb-4">Repositórios</h1>

{#if repositorios.length > 0}
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Descrição</th>
                <th scope="col">Tecnologia</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>

        <tbody>
            {#each repositorios as { name, description, language, html_url }, i}
                <tr>
                    <td> <img width="50" src={get_image(language)} alt={language}> </td>
                    <td>{name}</td>
                    <td>{description || '-'}</td>
                    <td>{language || '-'}</td>
                    <td> <button type="button" class="btn btn-dark" on:click={ () => open_repositorio(html_url)}>Abrir repositório</button> </td>
                </tr>
            {/each}
        </tbody>
    </table>
{:else}
    <div class="alert alert-danger" role="alert"> Não há repositório para exibição </div>
{/if}

