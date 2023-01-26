<script>
    import TinyPouchDB from '../../component/TinyPouchDB.svelte';
    import AddBookForm from "../../component/AddBookForm.svelte";
    import Header from '../../component/Header.svelte';

    let books=[];
    let leLivre;
    
    const addBook = (e) => {
        leLivre = e.detail;
    }
</script>

<TinyPouchDB bind:documents={books} initsrc="/books.json" collection="books" addLivre={leLivre} removeLivre="" editLivre=""></TinyPouchDB>

<Header/>

<AddBookForm on:addBook={addBook}/>