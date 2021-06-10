<script lang="ts">
  // @ts-nocheck
  import { Router, Route } from "svelte-routing";
  import Navbar from "./components/Navbar.svelte";
  import Home from "./routes/Home.svelte";
  import ToDo from "./routes/ToDo.svelte";

  // Used for SSR. A falsy value is ignored by the Router.
  export const url: string = "";
</script>

<Router {url}>
  <Navbar
    navData={[{ to: '/', text: 'Home' }, { to: '/todo', text: 'To Do' }]} />
  <div class="mx-3">
    <Route path="todo">
      <ToDo />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </div>
</Router>
