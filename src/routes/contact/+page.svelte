<script lang="ts">
  import type { ActionData } from './$types';
  import ContactForm from '$lib/components/contact/ContactForm.svelte';

  export let form: ActionData;
</script>

<h2>Contact</h2>
<hr />
<ContactForm {form} />


