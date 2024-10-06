import { observer } from "mobx-react-lite"

import itemSelectStore, { Item } from "@store/SelectItems"

import SelectedItem from "@ItemSelector/SelectedItem"
import SelectItemsDialog from "@ItemSelector/SelectItemsDialog"

import "./ItemSelector.scss"

const ItemSelectorForObserver = () => {

    const savedSelectedItems = itemSelectStore.savedSelectedItems
    const dialogOpen = itemSelectStore.dialogOpen

    const openDialog = () => {
        itemSelectStore.openDialog()
    }

    return (

        <div className="item_selector_frame">
            {!dialogOpen && (
                <>
                    <h2 className="item_selector_frame_title">Select items</h2>
                    <div className="item_selector_frame_inner_container">
                        <p className="item_selector_frame_inner_container_description">
                            {`You currently have ${savedSelectedItems.length} selected items`}
                        </p>
                        <div className="df g10px fww">
                            {
                                savedSelectedItems.length > 0 && (
                                    savedSelectedItems.map((item: Item, index: number) => (
                                        <SelectedItem key={index} item={item} removeSavedElement={true} />
                                    ))
                                )
                            }
                        </div>
                    </div>

                    <button type="button" className="button green choice_button" onClick={openDialog}>
                        {savedSelectedItems.length > 0 ? 'Change my choice' : 'Select my choice'}
                    </button>
                </>
            )}

            <SelectItemsDialog />
        </div>

    )
}


const ItemSelector = observer(ItemSelectorForObserver)

export default ItemSelector