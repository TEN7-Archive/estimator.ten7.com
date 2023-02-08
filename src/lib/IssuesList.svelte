<script>
  import { onMount } from "svelte";
  // import { jiraBasicAuthKey } from "./../../keys/jira-basic-auth.js";

  let sprintList;
  export let jiraSprintId = 569;
  // cors_proxy_url relies on running a node proxy server locally, I'm using this
  // one for dev: https://github.com/ccoenraets/cors-proxy
  let cors_proxy_url= 'http://localhost:3000';
  let jira_api_url = `https://teamten7.atlassian.net/rest/agile/1.0/sprint/${jiraSprintId}/issue`;
  let jiraAuthString = 'jiraBasicAuthKey';
  

  let placeholder_api_url = "https://dummyjson.com/todos";

  onMount(async() => {
    // Jira request has CORS issues locally, so we use a nodejs proxy
    // For live, change fetch url to jira_api_url and remove the
    // Target-URL header
    let response = await fetch(cors_proxy_url, {
      method: "GET",
      headers: {
        "Authorization": "Basic " + jiraAuthString,
        "Accept": "application/json",
        "Target-URL": jira_api_url
      }
    });
    sprintList = await response.json();

    // let response = await fetch(placeholder_api_url);
    // list = await response.json();
    console.log(sprintList.issues);
  })
</script>

<table class="table w-full">

  <thead>
    <tr>
      <td>JID</td>
      <td>Epic</td>
      <td>Title</td>
    </tr>
  </thead>

  {#if sprintList}
    {#each sprintList.issues as sprintItem}
    <tr>
      <td>{sprintItem.key}</td>
      {#if sprintItem.fields.hasOwnProperty('epic')}
        <td>{sprintItem.fields.epic.name}</td>
      {:else}
      <td>--</td>
      {/if}
      <td>{sprintItem.fields.summary}</td>
    
    </tr>
    {/each}
  {/if}
</table>

<style>

table {
  border-spacing: 0;
}  
td {
    border: 1px solid gray;
    padding: 5px 10px;
  }
</style>