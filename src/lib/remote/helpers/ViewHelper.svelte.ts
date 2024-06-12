import type { TableHandler, ViewColumn } from '$lib/remote'


export default class ViewHelper
{
    public  columns = $state<ViewColumn[]>([])
    private table   : TableHandler
    private interval: any
    private mutation: MutationObserver

    constructor(table: TableHandler, columns: ViewColumn[])
    {
        this.table   = table
        this.columns = []
        this.interval = setInterval(() => this.createColumns(columns), 500)
    }

    public toggle(name: string)
    {
        if (!this.table.element) return

        const column = this.columns.find(column => column.name === name)
        if (!column) return
        column.toggle()
    }

    private createColumns(columns: ViewColumn[])
    {
        if (!this.table?.element) {
            return
        }
        clearInterval(this.interval)

        this.columns = columns.map(({name, index, isVisible, isFrozen}) => {
            return { 
                name, 
                index, 
                isVisible: isVisible === false ? false : true,
                isFrozen: isFrozen === true ? true : false,
                element: this.table.element,
                toggle: function() {
                    this.isVisible = !this.isVisible
                    this.element.querySelectorAll(`tr > *:nth-child(${this.index + 1})`).forEach((element: HTMLElement) => {
                        element.classList.toggle('hidden')
                    })
                }
            }
        })
        this.preset()
        this.mutation = new MutationObserver(() => {
            setTimeout(() => {
                this.preset()
            }, 2)
        })
        this.mutation.observe(this.table.element, { childList: true, subtree: true })
    }

    private preset()
    {
        let left = 0
        for (const { isVisible, isFrozen, index } of this.columns) {
            if (isFrozen === true) {
                const { width } = this.table.element.querySelector(`thead th:nth-child(${index + 1})`).getBoundingClientRect() 
                this.table.element.querySelectorAll(`tr > *:nth-child(${index + 1})`).forEach((element: HTMLElement) => {
                    element.style.position = 'sticky'
                    element.style.left = (index * left) + 'px'
                    element.style.width = width + 'px'
                })
                left = width
            }
            if (isVisible === false) {
                this.table.element.querySelectorAll(`tr > *:nth-child(${index + 1})`).forEach((element: HTMLElement) => {
                    element.classList.add('hidden')
                })
            }
        }
    }
}
