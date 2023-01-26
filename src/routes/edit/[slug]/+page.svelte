<script>
    import TinyPouchDB from '../../../component/TinyPouchDB.svelte';
    import EditBookForm from "../../../component/EditBookForm.svelte";
    import Header from '../../../component/Header.svelte';
    
    let books=[];
    let leLivre;

    export let data;

    const editBook = (e) => {
        leLivre = e.detail;
    }
</script>

<TinyPouchDB bind:documents={books} initsrc="/books.json" collection="books" addLivre="" removeLivre="" editLivre={leLivre}></TinyPouchDB>

<Header/>
{#each books as book}
    {#if data.livre === book.title.replaceAll("/", "-")}
        <EditBookForm on:editBook={editBook} leLivre={book}/>
    {/if}
{/each}

