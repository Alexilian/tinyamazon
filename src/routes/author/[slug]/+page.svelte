<script>
  import Header from '../../../component/Header.svelte';
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import TinyPouchDB from '../../../component/TinyPouchDB.svelte';

  let books=[];

  export let data;
</script>
<TinyPouchDB bind:documents={books} initsrc="/books.json" collection="books" addLivre="" removeLivre="" editLivre=""></TinyPouchDB>
<Header/>
<h1>{data.name}</h1>
<LayoutGrid>
    {#each books as book}
    {#if data.name === book.author}
      <Cell span={1}>
        <a href="/book/{book.title.replaceAll("/", "-")}" class="demo-cell"><img src="data:{book.img.content_type};base64,{book.img.data}"
            alt="{book.title}"></a>
      </Cell>
      {/if}
    {/each}
  </LayoutGrid>

  <style>
    .demo-cell {
      /*height: 60px;*/
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--mdc-theme-secondary, #333);
      color: var(--mdc-theme-on-secondary, #fff);
    }
  </style>