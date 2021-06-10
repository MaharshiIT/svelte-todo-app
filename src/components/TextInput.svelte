<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import validators from "../utils/validators";
  const dispatch: Function = createEventDispatcher();

  export let label: string = "";
  export let value: string = "";
  export let required: boolean = false;
  export let type: string;
  let valid: boolean = true;
  const validation: string = type === "text" && required ? "required" : type;
  const handleInvalidListener = () => {
    valid = false;
  };
  const handleChangeListener = (e: any) => {
    valid = e.target.validity.valid;
    dispatch("inputchange", e.target.value);
  };
</script>

<div class="input-group mb-3">
  <span class="input-group-text"
    >{label}{#if required}
      *
    {/if}</span
  >
  <input
    {type}
    {value}
    class="form-control"
    on:invalid={handleInvalidListener}
    on:change={handleChangeListener}
    {required}
    pattern={validators[validation].pattern || ""}
    {...$$restProps}
  />
</div>
{#if !valid}
  <div class="alert alert-danger">
    {validators[validation] && validators[validation].error(label)}
  </div>
{/if}
