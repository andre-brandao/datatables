import Context          from './Context'
import TriggerHandler   from './handlers/TriggerHandler'
import SortHandler      from './handlers/SortHandler'
import SelectHandler    from './handlers/SelectHandler'
import PageHandler      from './handlers/PageHandler'
import SearchHandler    from './handlers/SearchHandler'
import FilterHandler    from './handlers/FilterHandler'

import ColumnVisibilityHelper from './helpers/ColumnVisibilityHelper'

import type { Writable, Readable } from 'svelte/store'
import type { Internationalization, Row, State, Selectable, Order } from '$lib/remote'

export type Params = { rowsPerPage?: number, totalRows?: number, i18n?: Internationalization }

export default class DataHandler<T extends Row = any> 
{
    private context         : Context<T>
    private triggerHandler  : TriggerHandler<T>
    private sortHandler     : SortHandler<T>
    private selectHandler   : SelectHandler<T>
    private pageHandler     : PageHandler<T>
    private searchHandler   : SearchHandler<T>
    private filterHandler   : FilterHandler<T>
    public i18n             : Internationalization

    constructor(data: T[] = [], params: Params = { rowsPerPage: 5 }) 
    {
        this.i18n           = this.translate(params.i18n)
        this.context        = new Context(data, params)
        this.triggerHandler = new TriggerHandler(this.context)
        this.sortHandler    = new SortHandler(this.context)
        this.selectHandler  = new SelectHandler(this.context)
        this.pageHandler    = new PageHandler(this.context)
        this.searchHandler  = new SearchHandler(this.context)
        this.filterHandler  = new FilterHandler(this.context)
    }

    public onChange(callback: (state: State) => Promise<T[]>) 
    {
        this.triggerHandler.set(callback)
    }

    public invalidate()
    {
        this.triggerHandler.invalidate()
    }

    public setRows(data: T[])
    {
        this.context.rows.set(data)
    }

    public setTotalRows(value: number)
    {
        this.context.totalRows.set(value)
    }

    public getRows(): Writable<T[]> 
    {
        return this.context.rows
    }

    public select(value: Selectable<T>)
    {
        this.selectHandler.set(value)
    }

    public getSelected()
    {
        return this.context.selected
    }

    public selectAll(selectBy: keyof T = null): void
    {
        this.selectHandler.all(selectBy)
    }

    public isAllSelected(): Readable<boolean>
    {
        return this.context.isAllSelected
    }

    public getRowsPerPage(): Writable<number | null>
    {
        return this.context.rowsPerPage
    }

    public sort(orderBy: keyof T)
    {
        this.setPage(1)
        this.sortHandler.set(orderBy)
    }

    public applySort( params: { orderBy:  keyof T, direction?: 'asc' | 'desc' } = null )
    {
        this.sortHandler.apply(params)
    }

    public sortAsc(orderBy: keyof T)
    {
        this.setPage(1)
        this.sortHandler.asc(orderBy)
    }

    public sortDesc(orderBy: keyof T)
    {
        this.setPage(1)
        this.sortHandler.desc(orderBy)
    }

    public getSort(): Writable<Order<T>>
    {
        return this.context.sort
    }

    public search(value: string): void 
    {
        this.setPage(1)
        this.context.search.set(value)
    }

    public clearSearch()
    {
        this.searchHandler.remove()
    }

    public filter(value: string | number, filterBy: keyof T)
    {
        this.setPage(1)
        return this.filterHandler.set(value, filterBy)
    }

    public clearFilters(): void
    {
        this.filterHandler.remove()
    }

    public getPages(param = { ellipsis: false }): Readable<number[]> 
    {
        if (param.ellipsis) {
            return this.context.pagesWithEllipsis
        }
        return this.context.pages
    }

    public getPageCount(): Readable<number> 
    {
        return this.context.pageCount
    }

    public getCurrentPage(): Writable<number> 
    {
        return this.context.currentPage
    }

    public setPage(value: number | 'previous' | 'next'): void 
    {
        switch (value) {
            case 'previous' : return this.pageHandler.previous()
            case 'next'     : return this.pageHandler.next()
            default         : return this.pageHandler.goto(value as number)
        }
    }

    public getRowCount(): Readable<{ total: number, start: number, end: number }> 
    {
        return this.context.rowCount
    }

    public on(event: 'change' | 'clearFilters' | 'clearSearch', callback: () => void)
    {
        this.context.event.add(event, callback)
    }

    public createColumnVisibility(columns: { name: string, index: number, isVisible?: boolean }[])
    {
        return new ColumnVisibilityHelper(columns)
    }

    public translate(i18n: Internationalization): Internationalization 
    {
        return {
            ...{
                search: 'Search...',
                show: 'Show',
                entries: 'entries',
                filter: 'Filter',
                rowCount: 'Showing {start} to {end} of {total} entries',
                noRows: 'No entries found',
                previous: 'Previous',
                next: 'Next'
            },
            ...i18n
        }
    }



    /**
     * 
     * @depracted use on('change', callback) instead
     */
    public getTriggerChange(): Writable<number>
    {
        return this.context.event.triggerChange
    }

    /**
     * 
     * @deprecated use applySort() instead 
     */
    public applySorting( params: { orderBy:  keyof T, direction?: 'asc' | 'desc' } = null )
    {
        this.applySort(params)
    }


    /**
     * 
     * @deprecated use getSort() instead 
     */
    public getSorted()
    {
        return this.getSort()
    }


    /**
     * @deprecated use getCurrentPage() instead
     * @since v2.0.0 2023-10-31
     */
    public getPageNumber(): Writable<number> 
    {
        return this.getCurrentPage()
    }
}