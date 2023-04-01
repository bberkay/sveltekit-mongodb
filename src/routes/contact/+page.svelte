<script lang="ts">
  import type { ActionData } from './$types';

  export let form: ActionData;
</script>

<h2>Contact</h2>
<hr />
<!-- TODO: Bu kısım component olacak -->
<div class="card p-3">
  <form method="POST" action="/contact" class="text-start">
    <div class="mb-3">
      <!-- Email Address -->
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="johndoe@example.com"
        name="email"
        size="30"
        required
      />
      <!-- Email Address END -->
    </div>
    <div class="mb-3">
      <!-- Subject -->
      <label for="formGroupExampleInput" class="form-label">Subject</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        placeholder="About Sveltekit"
        name="subject"
        required
      />
      <!-- Subject END -->
    </div>
    <div class="mb-3">
      <!-- Message -->
      <label for="exampleFormControlTextarea1" class="form-label">Message</label
      >
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        name="message"
        required
      />
      <!-- Message END -->
    </div>
    <div class="mb-3">
      <!-- File(s) -->
      <label for="formFileMultiple" class="form-label">File(s)</label>
      <input
        class="form-control"
        type="file"
        id="formFileMultiple"
        name="files"
        multiple
      />
      <!-- File(s) END -->
    </div>

    <!-- Result -->
    {#if form?.success}
      <button type="submit" class="btn btn-success form-control mt-3 disabled"
        >Success</button
      >
    {:else if form?.success == false}
      <button type="submit" class="btn btn-danger form-control mt-3 disabled"
        >Error</button
      >
    {:else}
      <button
        type="submit"
        class="btn bg-svelte form-control mt-3"
        name="send_message">Send Message</button
      >
    {/if}
    <!-- Result End -->
  </form>
</div>

