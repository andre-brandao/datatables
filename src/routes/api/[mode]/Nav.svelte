<script lang="ts">
    import { TableHandler } from '$lib/src/client'
    import Key from './Nav_Key.svelte'
    import Search from '$site/components/Nav_Search.svelte'
    let { nav }: { nav: {
        properties: string[],
        methods: string[],
        types: string[]
    }} = $props()
    const data = $state.snapshot(nav)
    const table = new TableHandler([data])
    const { properties, methods, types } = $derived(table.rows?.[0] ?? [] as any)
</script>


<nav>
    <Search {table}/>
    <section class="thin-scrollbar">
        <Key data={properties} key={'properties'}/>
        <Key data={methods}    key={'methods'}/>
        <Key data={types}      key={'types'}/>
    </section>
</nav>


<style>
    nav {
        position: absolute;
        top:0;
        bottom: 0;
        left: 32px;
        width: 240px;
        padding: 24px 16px 24px 0;
        border-right: 1px solid var(--grey);
    }

    section {
        position: absolute;
        top: 80px;
        bottom: 0px;
        left: 0;
        right: 16px;
        overflow-y: auto;
        border-top: 1px dotted var(--grey);
        padding-bottom: 40px;
    }
    @media (min-width: 1200px) {
        nav {
            left: 96px;
        }
    }
    @media (max-width: 800px) {
        nav {
            display: none;
        }
    }
</style>