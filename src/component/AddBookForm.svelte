<script>

    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();
    let author;
    let title;
    let url;
    let price;

    const handleSubmit= () =>{
        const newBook ={
            _id: title,
            author: author,
            title: title,
            url: url,
            price: price,
            img: {
                "content_type": "image/jpeg",
                "filename": "",
                "data": "",
                "path": ""
            }
        }
        dispatch('addBook', newBook);
        

    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label for="id_author">Auteur</label>
    <input type="text" id="id_author" required="required" bind:value={author} />
    <br/>
    <label for="id_title">Titre du livre</label>
    <input type="text" id="id_title" required="required" bind:value={title} />
    <br/>
    <label for="id_url">Lien amazon sur lequel acheter le livre</label>
    <input type="url" id="id_url" required="required" bind:value={url} />
    <br/>
    <label for="id_price">Prix du livre</label>
    <input type="number" id="id_price" required="required" step="0.01" bind:value={price} />
    <br/>
    <button>Add</button>


</form>