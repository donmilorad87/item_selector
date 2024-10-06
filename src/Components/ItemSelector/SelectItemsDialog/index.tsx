import { observer } from "mobx-react-lite"

import itemSelectStore, { Item } from "@store/SelectItems"

import ItemSelectorCheckbox from "@ItemSelector/ItemCheckbox"
import SelectedItem from "@ItemSelector/SelectedItem"

import xIcon from "@assets/icons/xIcon.svg"

import "./SelectItemsDialog.scss"

const SelectItemsDialogForObserver = () => {

    const selectedItems = itemSelectStore.selectedItems

    const dialogOpen = itemSelectStore.dialogOpen

    const searchValue = itemSelectStore.searchObject.searchValue
    const filterValue = itemSelectStore.searchObject.filterValue

    const checkElementState = (id: number) => {
        const item = selectedItems.find(item => item.itemId === id)
        return item ? item.checked : false
    }

    const disableCheckIfConditionsAreMet = (id: number) => {

        const item = selectedItems.find(item => item.itemId === id)

        return item ? false : selectedItems.length === 3 ? true : false
    }

    const renderElements = () => {

        const items = Array.from({ length: 300 - filterValue }, (_, index) => {
            return {
                itemId: filterValue + index + 1,
                itemText: `Element ${filterValue + index + 1}`,
                checked: checkElementState(filterValue + index + 1),
                disabled: disableCheckIfConditionsAreMet(filterValue + index + 1)
            }
        });

        for (let i = items.length - 1; i >= 0; i--) {
            if (!items[i].itemText.includes(searchValue)) {
                items.splice(i, 1)
            }
        }

        return items.length ? (
            <div className="dialog_container mt8px">
                <ul className="dialog_container_items_list">
                    {items.map((item, index) => (
                        <ItemSelectorCheckbox key={index} item={item} />
                    ))}
                </ul>
            </div>
        ) : (
            <div className="dialog_container mt8px">
                <ul className="dialog_container_items_list dark">
                    <li className="dialog_container_items_list_item pon">
                        <p className="dialog_text">
                            No items for selected filters. Please remove filters.
                        </p>
                    </li>
                </ul>
            </div>
        )
    }

    const changeFilterValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
        itemSelectStore.setItemsFilter(parseInt(event.currentTarget.value))
        event.currentTarget.parentElement?.querySelector('.dialog_clear_filter_input')?.classList.toggle('show', event.currentTarget.value.length > 0)
    }

    const changeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        itemSelectStore.setSearcValue(event.currentTarget.value)
        event.currentTarget.parentElement?.querySelector('.dialog_clear_search_input')?.classList.toggle('show', event.currentTarget.value.length > 0)
    }

    const clearSearchValue = (event: React.MouseEvent<HTMLImageElement>) => {
        itemSelectStore.setSearcValue('')
        event.currentTarget.classList.remove('show')
    }

    const clearFilterInput = (event: React.MouseEvent<HTMLImageElement>) => {
        (event.currentTarget.parentElement?.querySelector('#searchItemsFilter') as HTMLSelectElement).selectedIndex = 0
        event.currentTarget?.classList.remove('show')
        itemSelectStore.setItemsFilter(0)
    }

    const saveSelectedItems = () => {
        itemSelectStore.saveSelectedItems()
    }

    const closeDialog = () => {
        itemSelectStore.closeDialog()
    }

    return (
        <>
            {dialogOpen && (
                <div className="dialog df fdc g15px">
                    <button type="button" className="dialog_close_button" onClick={closeDialog}> <img src={xIcon} alt="Close dialog" /> </button>
                    <p className="dialog_text h2 mb6px">Select Items</p>

                    <form className="df jcsb g15px fdcResMob">
                        <div className="df g7px pRel oh f1 jcsb">
                            <label htmlFor="searchItemsInput" className="dialog_text label">Search</label>
                            <input type="text" id="searchItemsInput" className="dialog_input w100mob" value={searchValue} onChange={changeSearchValue} />
                            <img src={xIcon} alt="Clear Search Input" className="dialog_clear_search_input" onClick={clearSearchValue} />
                        </div>

                        <div className="df g7px pRel oh f1 jcsb">
                            <label htmlFor="searchItemsFilter" className="dialog_text label">Filter</label>
                            <select id="searchItemsFilter" className="dialog_input w100mob" onChange={changeFilterValue}>
                                <option value="0" className="dn">No filter</option>
                                <option value="10">&gt;10</option>
                                <option value="100">&gt;100</option>
                                <option value="200">&gt;200</option>
                            </select>
                            <img src={xIcon} alt="Clear Filter" className="dialog_clear_filter_input" onClick={clearFilterInput} />
                        </div>
                    </form>

                    {renderElements()}

                    <div className="df g15px fdc mt6px">
                        <p className="dialog_text">Current Selected items:</p>
                        <div className="df g10px fww">
                            {selectedItems.length > 0 ? (
                                selectedItems.map((item: Item, index: number) => (

                                    <SelectedItem key={index} item={item} removeSavedElement={false} />
                                ))
                            ) : <p className="dialog_text">No elements selected</p>}
                        </div>
                    </div>

                    <div className="df g10px fww">
                        <button type="button" className="button green dialog_button" onClick={saveSelectedItems}>Save</button>
                        <button type="button" className="button red dialog_button" onClick={closeDialog}>Cancel</button>
                    </div>
                </div>
            )}

        </>
    )
}

const SelectItemsDialog = observer(SelectItemsDialogForObserver)

export default SelectItemsDialog