<script>
  import { onMount } from "svelte";
  import EstimateSummary from "./EstimateSummary.svelte";
  import ButtonAddEstimateToList from "./ButtonAddEstimateToList.svelte";


  let best_case = 0;
  let likely_case = 0;
  let worst_case = 0;
  let qa_adjusment = true;
  let base_time = 0;
  let total = 0;
  let qa_time = 0;
  // let test_hours = 0;

  export let ticket_title;

  onMount(()=> {
    updateTotal();
  })

  function updateTotal() {

    base_time = (best_case + 4 * likely_case + worst_case) / 6

    if (qa_adjusment) {
      qa_time = base_time * 0.15;
    } else {
      qa_time = 0;
    }
  
    // Round
    qa_time = Math.round(qa_time * 10) / 10;
    base_time= Math.round(base_time * 10) / 10;

    total =  base_time + qa_time;

    total = Math.round(total * 10) /10;
    
  }


</script>


<div class="estimator">
  <EstimateSummary base_time={base_time} qa_time={qa_time} total={total} />

  <div class="estimator-calculator">
    <form>
    
      <label class="label">
        <span class="label-text">Best Case</span> 
        <input class="input input-bordered" on:focus="{event => event.target.select()}" on:change={updateTotal} type=number bind:value={best_case} />
      </label>
    

      <label class="label">
        <span class="label-text">Likely Case</span> 
        <input class="input input-bordered" on:focus="{event => event.target.select()}" on:change={updateTotal} type=number bind:value={likely_case} />
      </label>

      <label class="label">
        <span class="label-text">Worst Case</span> 
        <input class="input input-bordered" type=number on:focus="{event => event.target.select()}" on:change={updateTotal} bind:value={worst_case} />
      </label>
  
      <div class="divider"></div>

      <label class="label my-4">
        <span class="label-text">Add QA time?</span> 
        <input bind:checked={qa_adjusment} on:change={updateTotal} type=checkbox class="checkbox" />
        <span class="label-text-alt">* 15%</span>
      </label>
    
  
      <!-- <label class="label">
        <span class="label-text">Writing tests (hours)</span> 
        <input on:focus="{event => event.target.select()}" bind:value={test_hours} on:change={updateTotal} type=number class="input input-bordered"  />
      </label> -->
  
    </form>
  
    <div class="divider"></div>
  
    <ButtonAddEstimateToList issue_title={ticket_title} total={total}/>
  </div>

</div>




  <style>

    .estimator {
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }

    .label-text {
      font-size: 1.2rem;
    }
  </style>