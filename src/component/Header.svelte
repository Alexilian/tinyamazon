<script>
    import TopAppBar, {
      Row,
      Section,
      Title,
      AutoAdjust,
    } from '@smui/top-app-bar';
    import IconButton from '@smui/icon-button';
    let topAppBar;
    let searchContent;
</script>
<header>
    <TopAppBar bind:this={topAppBar} variant="static">
        <Row>
          <Section>
            <a href="/"><IconButton class="material-icons" aria-label="Home">home</IconButton></a>
            <Title>Tiny Amazon</Title>
          </Section>
          <Section align="end" toolbar>
            <input bind:value={searchContent} type="text" id="id_search_text" name="search_text" />
            {#if searchContent}
              <a href="/search/{searchContent}"><IconButton class="material-icons" aria-label="Search">search</IconButton></a>
            {:else}
            <IconButton class="material-icons" aria-label="Search">search</IconButton>
            {/if}
            <a href="/author"><IconButton class="material-icons" aria-label="People">people</IconButton></a>
            <a href="/add"><IconButton class="material-icons" aria-label="Add">add</IconButton></a>
          </Section>
        </Row>
      </TopAppBar>
</header>