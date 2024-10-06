# Element Widget

Write a "widget" to select 3 elements from a certain list (initially set as an array). As test data, 300 elements with sequence numbers will be suitable - ["Element 1", "Element 2", "Element 3", ....].

## Logical conditions: 
- A list of already selected items is displayed (no more than three). 
- mBy clicking on the "Change my choice" button, a dialog opens with a list of all elements (a scrollable list of fixed height), as well as a search field and filter. 
- Checkboxes of already selected items are checked, and the selected items are duplicated as blocks at the bottom of the dialog box. 
- Search: as you type characters, the list of elements is filtered (using substring search). 
- Additional filter (selectbox) - filter by element number (> 10,> 50,> 100). 
- Search and filter complete each other. You can select no more than three items, in case three items are selected, the remaining checkboxes become disabled. 
- The selected items have a link "X" which removes the item from the list of selected items. 
- Clicking on the "Save" button closes the dialog box and the list of selected items on the main page is updated from the dialog. 
- When you click on the "Cancel" button, the dialog box closes and the list of selected items on the main page remains unchanged. 

## React + TypeScript + Vite 

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## To run this project you will need *node.js* and *npm* installed on your local machine.

- First install **node** project with **node package manager** with command:

```js
npm install
```

- After project dependancies are installed you will be able to **run dev** project with this command:

```js
npm run dev
```

- After project dependencies are installed you will be able to **lint** project with this command:

```js
npm run lint
```

- After project dependencies are installed and project is **linted** you can **build** project with this command:

```js
npm run build
```

- After project is **building** you can **preview** builded project on your local machine with this command:

```js
npm run preview
```