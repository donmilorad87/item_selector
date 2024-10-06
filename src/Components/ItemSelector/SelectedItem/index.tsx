import itemSelectStore, { Item } from "@store/SelectItems"

import xIcon from "@assets/icons/xIcon.svg"

import "./SelectedItem.scss"

const SelectedItem = ({ item, removeSavedElement }: { item: Item, removeSavedElement: boolean }) => {

    const removeElement = () => {
        if (removeSavedElement) {
            itemSelectStore.removeSavedElement(item)
        } else {
            itemSelectStore.removeItem(item)
        }
    }

    return (

        <div className={`selected_item ${removeSavedElement ? '' : 'dialog_items'}`}>
            <p className="selected_item_paragraf">{item.itemText}</p>
            <button role="button" onClick={removeElement} className="selected_item_remove">
                <img src={xIcon} alt="remove" />
            </button>
        </div>

    )
}

export default SelectedItem;