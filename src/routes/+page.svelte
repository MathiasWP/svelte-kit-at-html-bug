<script lang="ts">
    import { browser } from "$app/environment";

    let greeting = "You should not see me after hydration...";

    /**
     * Using the onMount approach will fix the issue,
     * so it seems like there is something wrong
     * in the component initialization
    */
    // import { onMount } from "svelte";
    // onMount(() => greeting = "G'day mate!");
    
    if (browser) {
        greeting = "G'day mate!";
    }
</script>

<h2>Working:</h2>
<div>
    {@html greeting}
</div>
<h2>Broken:</h2>
<div>
    I don't work: {@html greeting}
</div>
<div>
    <span>And neither do i:</span>
    {@html greeting}
</div>
