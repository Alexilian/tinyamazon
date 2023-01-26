<script>

    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();
    export let leLivre;
    let author = leLivre.author;
    let title = leLivre.title;
    let url = leLivre.url;
    let price = parseFloat(leLivre.price);
    let img = leLivre.img;

    const handleSubmit= () =>{
        const modifyBook ={
            _id: document.getElementById('id_title').value,
            author: document.getElementById('id_author').value,
            title: document.getElementById('id_title').value,
            url: document.getElementById('id_url').value,
            price: document.getElementById('id_price').value,
            img: img
        }
        dispatch('editBook', modifyBook);
        

    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label for="id_author">Auteur</label>
    <input type="text" id="id_author" required="required" value={author} />
    <br/>
    <label for="id_title">Titre du livre</label>
    <input type="text" id="id_title" required="required" value={title} />
    <br/>
    <label for="id_url">Lien amazon sur lequel acheter le livre</label>
    <input type="url" id="id_url" required="required" value={url} />
    <br/>
    <label for="id_price">Prix du livre</label>
    <input type="number" id="id_price" required="required" step="0.01" value={price} />
    <br/>
    <button>Edit</button>

</form>