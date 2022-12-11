// Global variables.
    const colourButton = document.querySelector('#colour-button');
    const iconButton = document.querySelector('#icon-button');
    const colourSelectorContainer = document.querySelector('.colour-selector-container-closed');
    const iconSelectorContainer = document.querySelector('.icon-selector-container-closed');
    const colourInputs = document.querySelectorAll('.colour-inputs');
    const iconInputs = document.querySelectorAll('.icon-inputs');
    const iconContainer = document.querySelector('#icon-container');
    const gridPickerIcon = document.querySelector('#grid-picker-icon');
    const categoryInput = document.querySelector('#category-input');

    const categories = [];
    let incrementId = 0;

// Object class
    class Category {
        constructor(name, icon, colour) {
            incrementId++;
            this.name = name;
            this.icon = icon;
            this.colour = colour;
            this.active = false;
        }
    }

// Colour picker
    colourButton.addEventListener('click', (e) => {
        console.log(e.currentTarget);
        console.log(colourSelectorContainer.classList);

        if (colourSelectorContainer.className === ('colour-selector-container-closed')) {
            console.log('closed');
            colourSelectorContainer.classList.remove('colour-selector-container-closed');
            colourSelectorContainer.classList.add('colour-selector-container-open');
        } else if (colourSelectorContainer.className === 'colour-selector-container-open') {
            console.log('open');
            colourSelectorContainer.classList.remove('colour-selector-container-open');
            colourSelectorContainer.classList.add('colour-selector-container-closed');
        }
    });
    
    function changePickerGridBackground (e) {
            iconContainer.style.background = e.currentTarget.value;
    }

    colourInputs.forEach(input => {
        input.addEventListener('input', changePickerGridBackground)
    });


// Icon picker
    iconButton.addEventListener('click', (e) => {
        console.log(e.currentTarget);
        console.log(iconSelectorContainer.classList);

        if (iconSelectorContainer.className === ('icon-selector-container-closed')) {
            console.log('closed');
            iconSelectorContainer.classList.remove('icon-selector-container-closed');
            iconSelectorContainer.classList.add('icon-selector-container-open');
        } else if (iconSelectorContainer.className === 'icon-selector-container-open') {
            console.log('open');
            iconSelectorContainer.classList.remove('icon-selector-container-open');
            iconSelectorContainer.classList.add('icon-selector-container-closed');
        }
    });


    function changePickerGridIcon (e) {
            gridPickerIcon.src = e.currentTarget.src;
    }

    iconInputs.forEach(input => {
        input.addEventListener('click', changePickerGridIcon)
    });

            
    
    

    // const category = new Category ()

