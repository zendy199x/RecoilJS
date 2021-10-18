import {atom} from "recoil"

export const productListState = atom({
	key: "productList",
	default: [
		{id: 1, price: 150000, title: "Áo thun nam"},
		{id: 2, price: 200000, title: "Áo thun nữ"},
		{id: 3, price: 250000, title: "Áo khoác"},
	],
})
