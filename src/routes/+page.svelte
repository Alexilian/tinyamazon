<script>
    import Header from '../component/Header.svelte';
    import TinyPouchDB from '../component/TinyPouchDB.svelte';
    import LayoutGrid, { Cell } from '@smui/layout-grid';

    let books=[];
</script>
<Header/>
<TinyPouchDB bind:documents={books} initsrc="/books.json" collection="books" addLivre="" removeLivre="" editLivre=""></TinyPouchDB>
<LayoutGrid>
    {#each books as book}
      <Cell span={1}>
        <a href="/book/{book.title.replaceAll("/", "-")}" class="demo-cell"><img src="data:{book.img.content_type};base64,{book.img.data}"
            alt="{book.title}"></a>
      </Cell>
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