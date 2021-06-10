<script lang="ts">
  import update from "immutability-helper";
  import Button from "../components/Button.svelte";
  import Header from "../components/Header.svelte";
  import ListGroup from "../components/ListGroup.svelte";
  import ListGroupItem from "../components/ListGroupItem.svelte";
  import TextInput from "../components/TextInput.svelte";

  type TaskItemType = {
    id: string;
    task: string;
  };
  let taskList: Array<TaskItemType> = [];
  let task: string = "";
  let c = 0;

  const handleInputChange = ({ detail }: any) => {
    task = detail;
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      taskList = update(taskList, { $push: [{ id: (++c).toString(), task }] });
      task = "";
    }
  };
  const handleDelete = (id: string) => {
    taskList = taskList.filter((item) => item.id !== id);
  };
</script>

<Header text="To Do" />
<form class="d-flex" on:submit={handleSubmit} novalidate>
  <div class="pr-3">
    <TextInput
      label="Task"
      type="text"
      value={task}
      required={true}
      on:inputchange={handleInputChange}
    />
  </div>
  <div>
    <Button type="submit">Add</Button>
  </div>
</form>
<ListGroup>
  {#each taskList as taskItem}
    <ListGroupItem>
      <div class="d-flex">
        <div class="p-2">
          {taskItem.task}
        </div>
        <div class="ml-auto p-2">
          <button
            type="button"
            class="close text-danger"
            on:click={() => handleDelete(taskItem.id)}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </ListGroupItem>
  {/each}
</ListGroup>
