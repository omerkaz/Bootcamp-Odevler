let arr1 = ['2', 'a', '3', 3, 4, 3, 5, 5]
let arr2 = ['c', 'c', 'h', 1, 1, 1, 4]
let arr3 = [
    { name: 'ali', id: 221 },
    { name: 'veli', id: 343 },
    { name: 'konya', id: 333 },
    { name: 'ali', id: 664 },
    { name: 'selim', id: 112 }
]
let arr4 = [1, 1, 1, 4, 5, 5, 3, 2]

// ----------------------------------------------
function log(item) {
    console.log(item)
}
// ----------------------------------------------

// 1- arr1 başına 'a' elemanını ekleyiniz
arr1.unshift("a")
log(arr1)
// ----------------------------------------------

// 2- arr1 sonuna 6 elemanını ekleyiniz
arr1.push("6")
log(arr1)
// ----------------------------------------------

// 3- arr1 sonundaki elemanı siliniz
arr1.pop()
log(arr1)
// ----------------------------------------------

// 4- arr1 başındaki elemanı siliniz
arr1.shift()
log(arr1)
// ----------------------------------------------

// 5- arr1 ile arr2 arraylerini iki farklı yöntemle birleştiriniz
arr1 = arr1.concat(arr2)
arr1 = [...arr1, ...arr2]
log(arr1)
// ----------------------------------------------

// 6-kendisine gönderilen arrayde verilen elemanın olup olmadığını bulan array ve
// aranan eleman olmak üzere iki parametre alan ve geriye boolean değer döndüren bir fonksiyon yazınız
// ve bu fonkisiyona arr2 ve 'h' parametresini verip çağırınız.
function filteredArr(arr, filterItem) {
 return arr.includes(filterItem)
}
log(filteredArr(arr2,"h"))
// ----------------------------------------------

// 7- arr2 içindeki 'h' elemanın indexsini bulunuz.
arr2.indexOf("h")
log(arr2.indexOf("h"))
// ----------------------------------------------

// 8- arr2 nin eleman sayısını 3 adete 2 faklı yöntemle düşürünüz.
arr2 = arr2.slice(0, 3)
arr2.splice(0,4)
log(arr2)
// ----------------------------------------------

// 9- kendisine verilecek array elemanlarını döngü ile dönüp, array içindeki number değerlerinin
// toplamını geriye dönen bir fonkiyon yazınız ve arr1 değeri ile çağırınız
function numberSum(arr) {
  arr = arr.filter((item) => typeof item === "number")
  return arr.reduce((previousItem, currentItem) => previousItem + currentItem, 0)
}
log(numberSum(arr1))
// ----------------------------------------------

// 10- arr1 elemanlarını string değere çeviren bir map fonksiyonu yazınız
arr1.map((item) => String(item))
log(arr1)
// ----------------------------------------------

// 11- arr3 içindeki id değeri 221 olan elemanı bulunuz
arr3.find((item) => item.id === 221)
log(arr3.find((item) => item.id === 221))
// ----------------------------------------------

// 12- arr3 içindeki user değerleri ali olan elemanları bulunuz
arr3.filter((item) => item.name.toLowerCase() === "ali")
log(arr3.filter((item) => item.name.toLowerCase() === "ali"))
// ----------------------------------------------

// 13- arr3 içindeki elemanlarının id değerlerinin toplamlarını bulan bir reduce fonsiyonu yazınız.
function arrSum() {
 return arr3.reduce((previousItem,currentItem) => previousItem + currentItem.id,0)
}
log(arrSum())