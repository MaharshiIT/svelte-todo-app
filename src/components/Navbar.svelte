<script lang="ts">
  import NavLink from "./NavLink.svelte";
  type NavDataType = {
    to: string;
    text: string;
  };
  export let navData: Array<NavDataType>;
</script>

<nav class="nav mx-1">
  {#each navData as { to, text }}
    <NavLink {to}>{text}</NavLink>
  {/each}
</nav>
