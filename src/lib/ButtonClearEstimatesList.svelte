<script>
  import { estimatesListStore } from "../stores/estimates-list-store.js";

  function clearEstimatesListStorage() {
    localStorage.setItem('estimates_list', JSON.stringify([]));
    estimatesListStore.set([]);
  }
</script>

<div class="tooltip tooltip-top" data-tip="Warning: Clicking this button clears your estimates list for good.">
  <button class="btn btn-outline my-4" on:click={clearEstimatesListStorage}>Clear current list</button>
</div>
