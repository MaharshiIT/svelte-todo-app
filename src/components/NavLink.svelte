<script lang="ts">
  // @ts-nocheck
  import { Link } from "svelte-routing";
  export let to = "";

  function getProps({ href, isPartiallyCurrent, isCurrent }: any) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;
    if (isActive) {
      return { class: "nav-link active" };
    }
    return { class: "nav-link" };
  }
</script>

<Link {to} {getProps}>
  <slot />
</Link>
