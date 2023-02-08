<script>
  import App from "../App.svelte";
  import { estimatesListStore } from "../stores/estimates-list-store.js";

  export let issue_title = "My new issue";
  
  let jid = 1;

  export let total;

  function add_estimate() {
    issue_title = issue_title;

    
    $estimatesListStore = [...$estimatesListStore, {
      "jid": jid,
      "title": issue_title,
      "estimate": total
    }]

  }
  
</script>


<button class="btn btn-primary my-4" on:click={add_estimate}>Add to List</button>