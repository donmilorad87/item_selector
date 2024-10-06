import store, { Item } from "../../store"

import xIcon from "../../assets/icons/xIcon.svg"
import "./SelectedItem.scss"

const SelectedItem = ({ item, removeSavedElement }: { item: Item, removeSavedElement: boolean }) => (

    <div className={`selected_item ${removeSavedElement ? '' : 'dialog_items'}`}>
        <p className="selected_item_paragraf">{item.itemText}</p>
        <button role="button" onClick={removeSavedElement ? () => store.removeSavedElement(item) : () => store.removeItem(item)} className="selected_item_remove">
            <img src={xIcon} alt="remove" />
        </button>
    </div>

)

export default SelectedItem;