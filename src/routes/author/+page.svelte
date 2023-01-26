<script>
    import Header from '../../component/Header.svelte';
    import TinyPouchDB from '../../component/TinyPouchDB.svelte';
    
    let books=[];
    let seenAuthors=["defaultValue"];

    function testFun(theAuthor){
        seenAuthors.push(theAuthor);
        return "";

	};

</script>
<TinyPouchDB bind:documents={books} initsrc="/books.json" collection="books" addLivre="" removeLivre="" editLivre=""></TinyPouchDB>
<Header/>
<h1>Liste d'auteur</h1>
<ul>
{#each books as book}
    {#if !seenAuthors.includes(book.author)}
        {testFun(book.author)}
        <li><a href="author/{book.author}">{book.author}</a></li>
    {/if}
{/each}
</ul>
