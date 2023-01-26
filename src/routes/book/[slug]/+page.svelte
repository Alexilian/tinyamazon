<script>
    import Header from '../../../component/Header.svelte';
    import TinyPouchDB from '../../../component/TinyPouchDB.svelte';
    export let data;
    let books=[];
    let removeLivre="";

    const deleteLivre = (leLivre) => {
        removeLivre = leLivre;
        
    }

</script>
<TinyPouchDB bind:documents={books} initsrc="/books.json" collection="books" addLivre="" removeLivre={removeLivre} editLivre=""></TinyPouchDB>
<Header/>
<h1>{data.title}</h1>
{#each books as book}
    {#if data.title === book.title.replaceAll("/", "-")}
        <p>Auteur: <a href="/author/{book.author}">{book.author}</a></p>
        <div class="demo-cell"><img src="data:{book.img.content_type};base64,{book.img.data}" alt="{book.title}"></div>
        <p>Prix sur Amazon: {book.price}€</p>
        <p>A acheter <a href="{book.url}">ICI</a></p>
        <a href="/edit/{book._id}"><button>Editer ce livre</button></a>
        <button on:click={deleteLivre(book)}>Supprimer ce livre de la bibliothèque</button>
    {/if}
{/each}