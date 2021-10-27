import {makeAutoObservable} from 'mobx'

export default class TableStore {
    constructor() {
        this._data = []
        this._filteredData = []
        this._identifiers = {}
        this._sortBy = '0'
        this._sortByIncrease = true
        this._page = 1
        this._totalCount = 0
        this._limit = 25
        this._searchItem = ''
        this._selected = 'Пока что ничего не выбрано'
        this._selectedType = '0'
        this._dataLength = '0'
        makeAutoObservable(this)
    }
    setData(data) {
        this._data = data
    }

    setSortBy(sortBy) {
        this._sortBy = sortBy
    }

    setSortByIncrease(sortByIncrease) {
        this._sortByIncrease = sortByIncrease
    }

    setIdentifiers(identifiers) {
        this._identifiers = identifiers
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    setSearchItem(searchItem) {
        this._searchItem = searchItem
    }

    setLimit(limit) {
        this._limit = limit
    }

    setFilteredData(filteredData) {
        this._filteredData = filteredData
    }
    setSelected(selected) {
        this._selected = selected
    }
    setSelectedType(selectedType) {
        this._selectedType = selectedType
    }
    setDataLength(dataLength) {
        this._dataLength = dataLength
    }

    get data() {
        return this._data
    }

    get identifiers() {
        return this._identifiers
    }

    get sortBy() {
        return this._sortBy
    }

    get sortByIncrease() {
        return this._sortByIncrease
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
    get searchItem() {
        return this._searchItem
    }

    get filteredData() {
        return this._filteredData
    }
    get selected() {
        return this._selected
    }
    get selectedType() {
        return this._selectedType
    }
    get dataLength() {
        return this._dataLength
    }
}
