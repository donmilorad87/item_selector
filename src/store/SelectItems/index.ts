import { makeAutoObservable } from "mobx"

export interface Item {
    itemId: number
    itemText: string
    checked: boolean
    disabled: boolean
}

export interface SearchObject {
    searchValue: string
    filterValue: number
}

class ItemsSelectStore {

    selectedItems: Item[] = []
    savedSelectedItems: Item[] = (
        localStorage.getItem('savedSelectedItems') !== null &&
        localStorage.getItem('savedSelectedItems') !== ''
    ) ? JSON.parse(localStorage.getItem('savedSelectedItems')!) : []

    dialogOpen: boolean = false

    searchObject: SearchObject = {
        searchValue: '',
        filterValue: 0
    }

    constructor() {
        makeAutoObservable(this)
    }

    setItemsFilter = (value: number) => {
        this.searchObject.filterValue = value
    }

    setSearcValue = (value: string) => {
        this.searchObject.searchValue = value
    }

    saveSelectedItems = () => {
        this.savedSelectedItems = [...this.selectedItems]
        localStorage.setItem('savedSelectedItems', JSON.stringify(this.savedSelectedItems))
        this.dialogOpen = false
    }

    addItem = (item: Item) => {

        if (this.checkIfThereIsThreeElementsInTheList()) return
        if (this.checkIfElementAllreadyInList(item)) return

        this.selectedItems.push(item)
        this.selectedItems.sort((a, b) => a.itemId - b.itemId)

    }

    checkIfElementAllreadyInList = (item: Item) => {
        return this.selectedItems.some((selectedItem: Item) => selectedItem.itemId === item.itemId)
    }

    checkIfThereIsThreeElementsInTheList = () => {
        return this.selectedItems.length === 3
    }

    removeItem = (item: Item) => {
        this.selectedItems = this.selectedItems.filter((selectedItem: Item) => selectedItem.itemId !== item.itemId)

    }

    removeSavedElement = (item: Item) => {
        this.savedSelectedItems = this.savedSelectedItems.filter((savedSelectedItem: Item) => savedSelectedItem.itemId !== item.itemId)
        localStorage.setItem('savedSelectedItems', JSON.stringify(this.savedSelectedItems))
    }

    closeDialog = () => {
        this.dialogOpen = false
        this.selectedItems = []
        this.searchObject = {
            searchValue: '',
            filterValue: 0
        }
    }

    openDialog = () => {
        this.dialogOpen = true
        this.selectedItems = [...this.savedSelectedItems]
    }
}

const itemSelectStore = new ItemsSelectStore()
export default itemSelectStore