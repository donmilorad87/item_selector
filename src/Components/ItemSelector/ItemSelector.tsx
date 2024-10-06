

import store, { Item } from "../../store"
import { observer } from "mobx-react-lite"

import SelectedItem from "../SelectedItem/SelectedItem"
import SelectItemsDialog from "../SelectItemsDialog/SelectItemsDialog"

import "./ItemSelector.scss"

const ItemSelectorForObserver = () => (

    <div className="item_selector_frame">
        {!store.dialogOpen && (
            <>
                <h2 className="item_selector_frame_title">Select items</h2>
                <div className="item_selector_frame_inner_container">
                    <p className="item_selector_frame_inner_container_description">
                        {`You currently have ${store.savedSelectedItems.length} selected items`}
                    </p>
                    <div className="df g10px fww">
                        {
                            store.savedSelectedItems.length > 0 && (
                                store.savedSelectedItems.map((item: Item, index: number) => (
                                    <SelectedItem key={index} item={item} removeSavedElement={true} />
                                ))
                            )
                        }
                    </div>
                </div>
                <button type="button" className="button green choice_button" onClick={store.openDialog}>
                    {store.savedSelectedItems.length > 0 ? 'Change my choice' : 'Select my choice'}
                </button>
            </>
        )}

        <SelectItemsDialog />
    </div>

)


const ItemSelector = observer(ItemSelectorForObserver)

export default ItemSelector