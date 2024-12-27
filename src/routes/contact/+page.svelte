<script lang="ts">
    import type { ActionData } from './$types';
    import ContactForm from '$lib/components/contact/ContactForm.svelte';

    // Comes from +page.server.ts
    let { form }: { form: ActionData } = $props();
  </script>

<h2 class = "mb-4">Contact</h2>
<ContactForm {form} />
