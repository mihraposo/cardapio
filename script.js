const menu = [

    {
        id: 1,
        title: "bolo de chocolate",
        category: "doces",
        price: 100,
        img: "https://i.pinimg.com/564x/d7/40/41/d74041c4dcef25fc80ed42a10b3c11a1.jpg",
        desc: `Bolo simples de massa caseira, com recheio de brigadeiro e cobertura de ganache de chocolate. Serve 10
        pessoas.`,
    },
    {
        id: 2,
        title: "bolo de morango",
        category: "doces",
        price: 120,
        img: "https://i.pinimg.com/564x/6e/87/ca/6e87ca640e2785f375dd418042e46810.jpg",
        desc: `Massa feita de baunilha, com recheio de leite condensado com geleia de morango. Cobertura de chantilly com
        pedaços de morango. Serve 10 pessoas.`,
    },
    {
        id: 3,
        title: "quiche de espinafre",
        category: "salgados",
        price: 70,
        img: "https://i.pinimg.com/564x/10/6e/09/106e09d6176adb256ac087a3dd478102.jpg",
        desc: `Massa feita de trigo, com recheio de espinafre e ricota refogado com manteiga, cebola e alho poró. Serve 10
        pessoas.`,
    },
    {
        id: 4,
        title: "torta de frango",
        category: "salgados",
        price: 50,
        img: "https://i.pinimg.com/564x/6d/4a/61/6d4a61ae6fdf61063f894d72d90fab65.jpg",
        desc: `Massa feita de trigo, com recheio de peito de frango desfiado e cream cheese refogado com manteiga, cebola e
        dente de alho. Serve 10 pessoas.`,
    },
    {
        id: 5,
        title: "cappuccino",
        category: "bebidas",
        price: 20,
        img: "https://i.pinimg.com/564x/82/b6/07/82b6079f2c2336b9687e8caa7742ca8b.jpg",
        desc: `Mistura quente de café, leite e chocolate, com cobertura de chantilly decorado com canela e raspas de
        chocolate.`,
    },
    {
        id: 6,
        title: "milkshake de chocolate",
        category: "bebidas",
        price: 25,
        img: "https://i.pinimg.com/564x/5c/8e/03/5c8e0366eddc466cb2f8f15205bcdd95.jpg",
        desc: `Leite com sorvete de chocolate, com cobertura de chantilly, cobertura de chocolate e tubes. Borda recheada
        com Nutella e Leite Ninho.`,
    }
];

window.onload = function () {

    const sectionCenter = document.querySelector('.section-center');

    console.log(sectionCenter)

    const filterBtns = document.querySelectorAll('.filter-btn');

    console.log(filterBtns)

    const categories = menu.map(function (item) {
        return item.category;
    })
    console.log(categories)

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            let botao = e.target.id // category: ex. "doces"     
            // {
            //     id: 1,
            //     title: "bolo de chocolate",
            //     category: "doces",
            //     price: 100,
            //     img: "https://i.pinimg.com/564x/d7/40/41/d74041c4dcef25fc80ed42a10b3c11a1.jpg",
            //     desc: `Bolo simples de massa caseira, com recheio de brigadeiro e cobertura de ganache de chocolate. Serve 10
            //     pessoas.`,
            // },
            // {
            //     id: 2,
            //     title: "bolo de morango",
            //     category: "doces",
            //     price: 120,
            //     img: "https://i.pinimg.com/564x/6e/87/ca/6e87ca640e2785f375dd418042e46810.jpg",
            //     desc: `Massa feita de baunilha, com recheio de leite condensado com geleia de morango. Cobertura de chantilly com
            //     pedaços de morango. Serve 10 pessoas.`,
            // },
            // {
            //     id: 3,
            //     title: "quiche de espinafre",
            //     category: "salgados",
            //     price: 70,
            //     img: "https://i.pinimg.com/564x/10/6e/09/106e09d6176adb256ac087a3dd478102.jpg",
            //     desc: `Massa feita de trigo, com recheio de espinafre e ricota refogado com manteiga, cebola e alho poró. Serve 10
            //     pessoas.`,
            // },

            	// [{...}, {...}]
            const itemsDoMenuFiltradosPelaCategoria = menu.filter(function (itemDoMenu) {
                if (botao == itemDoMenu.category) {
                    return true
                } else {
                    return false
                }
            })
    
            if (botao == 'tudo') {
                displayMenuItems(menu);
            }
            else {
                displayMenuItems(itemsDoMenuFiltradosPelaCategoria);
            }
    
        });
    });
    

    function displayMenuItems(menuItems) {
        let displayMenu = menuItems.map(function (item) {
    
            return `
            <article class="menu-items">
                <img src="${item.img}" class="photo" alt="${item.title}" />
                <div class="item-info">
                    <header>
                        <h2>${item.title}</h2>
                        <h3 class="price">${item.price}</h3>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
            </article>`;
        });

        sectionCenter.innerHTML = displayMenu;
    }

    displayMenuItems(menu)
};






