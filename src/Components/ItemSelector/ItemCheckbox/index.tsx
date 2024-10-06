import itemSelectStore, { Item } from "@store/SelectItems"

import checkbox from "@assets/images/checkbox.png"

import './ItemCheckbox.scss'

const ItemSelectorCheckbox = ({ item }: { item: Item }) => {

    const selectItem = () => {
        item.checked = !item.checked
        if (item.checked) {
            itemSelectStore.addItem(item)
        } else {
            itemSelectStore.removeItem(item)
        }
    }

    return (
        <li className={`item_checkbox ${item.disabled ? 'disabled' : ''}`} data-item-id={item.itemId} data-item-checked={item.checked} onClick={selectItem}>
            <div className="item_checkbox_checkbox">
                {item.checked && (
                    <img src={checkbox} alt="Checked" className="item_checkbox_checkbox_image" />
                )}
            </div>
            <p className="item_checkbox_paragraf">{item.itemText}</p>
        </li>
    )
}

export default ItemSelectorCheckbox