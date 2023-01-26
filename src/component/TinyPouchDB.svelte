<script>
import { onMount, afterUpdate } from 'svelte';
import PouchDB from 'pouchdb-browser';
let db;
export let documents;
export let initsrc;
export let collection;
export let addLivre;
export let removeLivre;
export let editLivre;

$: if (db) { load_books(); }

  afterUpdate(async () => {

    if(removeLivre && removeLivre != ""){
      db.get(removeLivre._id).then(function(doc) {
        db.remove(doc);
      });
      window.location.replace("/");
    }

    if(addLivre && addLivre != ""){
      try {
        db.put(addLivre);
        window.location.replace("/");      
      } catch (error) {
        //pass;
      }
    }

    if(editLivre && editLivre != ""){
      db.get(editLivre._id).then(function(doc) {
        db.remove(doc);
        try {
          db.put(editLivre);
          window.location.replace("/");
        } catch (error) {
        //pass;
        }
      });
    }
  })

  onMount(async () => {
    const pdb = new PouchDB(collection);
    await pdb.info();
    db = pdb;
  });

async function load_books() {
      if (!db) return;
      const r = await db.info();
      if (r.update_seq === 0) {
        const res = await fetch(initsrc);
        const docs = await res.json();
        db.bulkDocs(docs);
      }
      const zdocs = await db.allDocs({include_docs: true});
      documents = zdocs.rows.map(d => d.doc);
}
</script>
