// Filter types
export const filterTypes = {
    dropdown: 'dropdown',
    checkbox: 'checkbox',
    range: 'range',
    text: 'text'
};
// Categories for filters
export const categories = [
    {
        name: 'Ram',
        type: filterTypes.checkbox,
        values: [
            {value: 2, unit: 'GB'},
            {value: 4, unit: 'GB'},
            {value: 8, unit: 'GB'},
            {value: 12, unit: 'GB'},
            {value: 16, unit: 'GB'},
            {value: 24, unit: 'GB'},
            {value: 32, unit: 'GB'},
            {value: 48, unit: 'GB'},
            {value: 64, unit: 'GB'},
            {value: 96, unit: 'GB'},
        ],
        collapsed: true,
        key: 'ram'
    },
    {
        name: 'Hard Disk type',
        type: filterTypes.dropdown,
        values: ['SAS', 'SATA', 'SSD'],
        collapsed: true,
        key: 'hdd'
    },
    {
        name: 'Storage',
        type: filterTypes.range,
        values: [
            {value: 0, unit: 'TB'},
            {value: 0.25, unit: 'TB'},
            {value: 0.5, unit: 'TB'},
            {value: 1, unit: 'TB'},
            {value: 2, unit: 'TB'},
            {value: 3, unit: 'TB'},
            {value: 4, unit: 'TB'},
            {value: 8, unit: 'TB'},
            {value: 12, unit: 'TB'},
            {value: 24, unit: 'TB'},
            {value: 48, unit: 'TB'},
            {value: 72, unit: 'TB'}
        ],
        collapsed: true,
        key: 'storageMin',
        key1: 'storageMax',
        min: 0,
        max: 72
    },
    // Uncomment below object to add one more filter option
    // {
    //     name: 'Location',
    //     type: filterTypes.text,
    //     collapsed: true,
    //     key:'location'
    // }
];
