<script>

  import ListItem from "./lib/ListItem.svelte";
  import EstimateCalculator from "./lib/EstimateCalculator.svelte";
  import { estimatesListStore } from "./stores/estimates-list-store.js";
  import ButtonClearEstimatesList from "./lib/ButtonClearEstimatesList.svelte";

  let estimatesList;
  let new_ticket_title = '';

  estimatesListStore.subscribe(value => {
    estimatesList = value;
  })

</script>

<main>

  <h1 class="text-4xl font-bold mb-6">Issue Estimator</h1>

  <div>

    <!-- New issue to be estimated -->
    <label class="label">
      <span class="label-text">Task Title</span>
      <input type="text" class="input input-bordered w-full mb-4" placeholder="e.g. Configure and style event listings view" bind:value={new_ticket_title}/>
    </label>

    <div class="new-ticket-title">
      <h2 class="new-ticket-title text-2xl font-bold my-4">{new_ticket_title}</h2>
    </div>

    <EstimateCalculator ticket_title={new_ticket_title}/>

  </div>

  <div class="divider"></div>

  <h2 class="text-2xl font-bold my-4">All New Issues</h2> 

  <table class="table table-zebra w-full">
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Estimate (hours)</th>
      </tr>
    </thead>

    <tbody>
      {#each estimatesList as estimate}
        <ListItem jid={estimate.jid} title={estimate.title} estimate={estimate.estimate} />
      {/each}
    </tbody>
  </table>

  <div class="divider"></div>

  <ButtonClearEstimatesList />

</main> 

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  label {
    width: 100%;
    display: block;
  }

  .label-text {
    font-size: 1.2rem;
  }

  .new-ticket-title {
    color: white;
  }

  .new-ticket-title {
    height: 50px;
  }

</style>
