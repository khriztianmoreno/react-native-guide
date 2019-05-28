# Example Core Component - SectionList

`SectionList`s are like F`latList`s, but they can have section headers to separate groups of rows.

`SectionList`s render each `item` in their input `sections` using the `renderSectionHeader` and `renderItem` prop. Each item in sections should be an object with a unique id (the key), and an array data of row data. Each item in data should also be an object with a unique id. The renderSectionHeader prop is a function which takes an item from the sections array and maps it to a React Element. The renderItem prop, just like for FlatList, is a function which takes an item from the `data` array (for a section) and returns a React Element.
