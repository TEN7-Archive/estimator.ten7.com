<!--  Grid of subtotals and total with test time, qa time, etc -->
<script>
  export let total;
  export let base_time;
  export let qa_time;
  // export let test_hours
</script>


<div class="estimate-summary rounded-lg border">
  <h2 class="text-2xl font-bold mb-4">Estimate</h2>
  

  <h3 class="py-2">Base time: {base_time}</h3>
  <h3 class="py-2">QA Time: {qa_time}</h3>
  <!-- <h3 class="py-2">Tests Time: {test_hours}</h3> -->
  
  <div class="divider"></div>

  <h2 class="estimate-total font-bold">TOTAL: {total}</h2>
</div>


<style>
  .estimate-summary {
    width: 45%;
    margin: 0.5rem 2rem 2rem 0;
    padding: 2rem;
    font-size: 1.25rem;
  }

  .estimate-total {
    color: red;
  }
</style>