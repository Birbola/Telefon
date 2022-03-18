let body = document.querySelector('.container-sm.py-5.d-flex.gap-4.flex-wrap')!
type Product = {
    img     : string
    name    : string
    cost    : string
    comment : string
}

let magazine:Product[] = [ 
    {img: "https://www.ixbt.com/td/iphone-7-test/iphone-7.png" , name: "IPONE 7" , cost: "120$" , comment: "Rangi Qizil"},
    {img: "https://www.sotmarket.uz/upload/iblock/377/377aea5d7f6c2c1aa0cdbdf7b61365b3.jpg" ,name: "IPHONE 8" , cost: "130%" , comment: "Rangi Gold"},
    {img: "https://appleinsider.ru/wp-content/uploads/2020/03/iphone_8_plus_and_8-740x568.jpg" ,name: "IPOHE 9" , cost: "200$" , comment: "Rangi Pushti"},
    {img: "https://www.creditasia.uz/upload/iblock/86f/smartfon-iphone-12-pro-256gb-pacific-blue.jpg" ,name: "IPONE 12 Pro Max" ,cost: "1200$" ,comment: "Rangi Ko'k"},
    {img: "https://220volt.uz/image/cache/catalog/iPhone/iphone-13pro-Max-1000x1000.jpg" ,name: "IPHONE 13 Pro Max" ,cost: "1300$" ,comment: "Rangi Kok"},
    {img: "https://olcha.uz/image/600x600/products/GkMT0H5gZ2BXda3lUWFrn49EM8RuruogXV2fOqKP6jYdzk9Bx0jC3T3vTawa.jpeg" ,name: "S 21 Ultra" ,cost:"1100$" ,comment: "Rangi Qora"},
    {img: "https://phonesdata.com/files/models/vivo--Y50-229.jpg" ,name: "Vivo Y50" ,cost: "800$" ,comment: "Rangi Ko'k"},
    {img: "https://i01.appmifile.com/webfile/globalimg/products/m/redmi-note-10-pro/overview16-s1.jpg" ,name: "Redmi note 10 pro"  ,cost: "350$" ,comment: "Rangi Olov rang"}
]

function  render(products: Product[]) {
    for (const product of products) {
        let card = document.createElement('div')
        card.className = "card"
        card.style.width = '18' + 'rem'
        card.style.overflow = 'hidden'
        
        let img = document.createElement('img')
        img.className = "card-img-top ratio ratio-1x1"
        img.setAttribute('src' , `${product.img}`)
        img.style.width = '18' + 'rem'
        img.style.height = '300' + 'px'
    
    
        let cardBody = document.createElement('div')
        cardBody.className = "card-body"
    
        let title = document.createElement('h3')
        title.className = "card-title"
        title.innerText = `${product.name}`
        
        let card__text = document.createElement('p')
        card__text.className = 'card-text'
    
        let cost = document.createElement('h3')
        cost.className = 'text-success'
        cost.innerText = `${product.cost}`
    /*     card__text.innerText = `${magazine[0].comment}`
     */
        let a = document.createElement('a')
        a.className = 'btn btn-primary w-50'
        a.innerText = "Buy"
        a.setAttribute('href' , '#')
    
        body.appendChild(card)
        card.appendChild(img)
        card.appendChild(cardBody)
        cardBody.appendChild(title)
        cardBody.appendChild(card__text)
        cardBody.appendChild(a)
        card__text.appendChild(cost)
        card__text.append(product.comment)
    }
}
render(magazine)

let input:HTMLInputElement = document.querySelector('#search')!
let submit:HTMLElement = document.querySelector('#submit')!

submit.addEventListener('click' , () => {
    if(input.value === ''){
        return
    }
    else{
        
    }
})