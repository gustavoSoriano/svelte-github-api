import { writable, derived } from 'svelte/store'

export const initialState = {
  repositorios: [],
  languages:[
    {name:'TypeScript', thumbnail:'https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png'},
    {name:'JavaScript', thumbnail:'http://luizricardo.org/wordpress/wp-content/upload-files/2014/11/js-logo-badge-512.png'},
    {name:'HTML', thumbnail:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'},
    {name:'Python', thumbnail:'http://static1.squarespace.com/static/556c9bf4e4b0de57cb590a0f/556e0cdde4b06f5105811bf7/556e0ce4e4b06f5105811c44/1561401322265/?format=1500w'},
    {name:'C++', thumbnail:'https://static.wixstatic.com/media/7c0e31_5c61812714fe48619c917281be9d7f0d~mv2.png/v1/fill/w_221,h_248,al_c,lg_1/7c0e31_5c61812714fe48619c917281be9d7f0d~mv2.png'},
    {name:'Vue', thumbnail:'https://www.cloudcms.com/images/quickstarts/vue/vuejs.a4b013fe.png'},
    {name:'Go', thumbnail:'https://static.javatpoint.com/go/images/go-tutorial.jpg'},
    {name:'Php', thumbnail:'http://pngimg.com/uploads/php/php_PNG3.png'},
    {name:'Ruby', thumbnail:'https://miro.medium.com/max/710/1*9hd_8qR0CMZ8L0pVbFLjDw.png'},
    {name:'Css', thumbnail:'https://carlisletheacarlisletheatre.org/images/css-logo-cascading-style-sheet-9.jpg'},
    {name:'Dockerfile', thumbnail:'https://miro.medium.com/max/300/1*lUNmBw_oyS2ADWqZs4DLOA.png'},
    {name:'Java', thumbnail:'https://classes.engineering.wustl.edu/cse231/core/images/2/26/Java.png'},
    {name:'R', thumbnail:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/724px-R_logo.svg.png'},
    {name:'Jupyter Notebook', thumbnail:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1200px-Jupyter_logo.svg.png'},
    {name:'PLpgSQL', thumbnail:'http://pythonclub.com.br/images/regisdasilva/postgresql.png'},
    {name:'C', thumbnail:'https://img.portalgsti.com.br/fPfckubAHsIGrpo1CJA_pOZLOu0=/200x200/https://www.portalgsti.com.br/media/uploads/community/2016/09/08/linguagem-c.png'}
  ]
}





export const repositoriosStore  = writable(initialState)
export const posterRepositorios = derived(repositoriosStore, store => store.repositorios )
