<script lang="ts">
    import Check from './Comparators_Check.svelte'
    const comparators = [
        { name: 'isLike', isDefault: true },
        { name: 'isNotLike' },
        { name: 'startsWith' },
        { name: 'endsWith' },
        { name: 'isEqualTo' },
        { name: 'isNotEqualTo' },
        { name: 'isGreaterThan', type: 'number' },
        { name: 'isGreaterThanOrEqualTo', type: 'number' },
        { name: 'isLessThan', type: 'number' },
        { name: 'isLessThanOrEqualTo', type: 'number' },
        { name: 'isBetween', type: 'number', bounds: [0, 100] },
        { name: 'isStrictlyBetween', type: 'number', bounds: [0, 100] },
        { name: 'isTrue', type: 'boolean' },
        { name: 'isFalse', type: 'boolean' },
        { name: 'isNull', type: 'boolean' },
        { name: 'isNotNull', type: 'boolean' }
    ]
    let current = $state.raw(comparators[0])
</script>

<section class="flex">
    <ul>
        {#each comparators as comparator}
            <li>
                <button
                    class={{ active: current === comparator }}
                    onclick={() => (current = comparator)}
                >
                    check.{comparator.name}
                    {#if comparator.isDefault}
                        <span>(default)</span>
                    {/if}
                </button>
            </li>
        {/each}
    </ul>
    {#key current}
        <Check comparator={current} />
    {/key}
</section>

<style>
    section {
        align-items: flex-start;
        border-radius: 8px;
    }
    ul {
        list-style-type: none;
        width: 240px;
        padding: 0;
        margin-right: 64px;
    }
    li {
        border-radius: 4px;
        margin: 2px 0;
    }
    button {
        color: var(--font-grey);
        font-size: 14px;
        padding: 4px;
        width: 100%;
        text-align: left;
        font-family: JetBrains;
    }
    button:hover {
        background: var(--grey-lighten-2);
    }
    button.active {
        color: var(--primary);
        font-weight: bold;
        background: var(--grey-lighten);
    }
    button span {
        color: var(--ternary);
    }
</style>