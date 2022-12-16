<script>
    import TopAppBar, {
      Row,
      Section,
      Title,
      AutoAdjust,
    } from '@smui/top-app-bar';
    import IconButton from '@smui/icon-button';
    let topAppBar;
    import TinyPouchDB from '../TinyPouchDB.svelte';
    let books=[];
    import LayoutGrid, { Cell } from '@smui/layout-grid';
</script>
<TopAppBar bind:this={topAppBar} variant="fixed">
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>Fixed</Title>
    </Section>
    <Section align="end" toolbar>
      <IconButton class="material-icons" aria-label="Download"
        >file_download</IconButton
      >
      <IconButton class="material-icons" aria-label="Print this page"
        >print</IconButton
      >
      <IconButton class="material-icons" aria-label="Bookmark this page"
        >bookmark</IconButton
      >
    </Section>
  </Row>
</TopAppBar>
<TinyPouchDB bind:documents={books} initsrc="/books.json" collection="books"></TinyPouchDB>
<LayoutGrid>
    {#each books as book}
      <Cell span={1}>
        <div class="demo-cell"><img src="data:{book.img.content_type};base64,{book.img.data}"
            alt="{book.title}"></div>
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