const rooms = [
    {
        price: 1000,
        baths: 1,
        people: 2,
        imgUrl: "./img/hab-1.jpg",
        singleBeds: 0,
        doubleBeds: 1,
        airConditiones: false
    }, {
        price: 3000,
        baths: 2,
        people: 4,
        imgUrl: "./img/hab-2.jpg",
        singleBeds: 2,
        doubleBeds: 1,
        airConditiones: true
    }, {
        price: 1500,
        baths: 1,
        people: 2,
        imgUrl: "./img/hab-3.jpg",
        singleBeds: 0,
        doubleBeds: 1,
        airConditiones: true
    }, {
        price: 1000,
        baths: 1,
        people: 2,
        imgUrl: "./img/hab-4.jpg",
        singleBeds: 0,
        doubleBeds: 2,
        airConditiones: true
    }, {
        price: 1250,
        baths: 1,
        people: 3,
        imgUrl: "./img/hab-2.jpg",
        singleBeds: 3,
        doubleBeds: 0,
        airConditiones: true
    }, {
        price: 2000,
        baths: 2,
        people: 3,
        imgUrl: "./img/hab-3.jpg",
        singleBeds: 1,
        doubleBeds: 2,
        airConditiones: true
    },
]

const roomsCtn = document.querySelector("#rooms-list")

rooms.forEach(room => {
    const item = document.createElement("li")
    item.innerHTML = `
        <img src="${room.imgUrl}"/>
        <div class="room__section">
            <div>
                <img src="./svg/people.svg"/>
                <p>${room.people}</>
            </div>
            <div>
                <img src="./svg/bed.svg"/>
                ${room.singleBeds ? `<p>${room.singleBeds} simples </p>` : ""} 
                ${room.doubleBeds ? `<p>${room.doubleBeds} dobles </p>` : ""} 
            </div>
            <div>
                <img src="./svg/bath.svg" />
                <p>${room.baths} baños</p>
            </div>
        </div>
        ${room.airConditiones ?
            ` <div class="separator"></div>
            <div class="room__section">
            ${room.airConditiones ? `
                <div>
                    <img src="./svg/air-conditioner.svg" />
                    <p>climatizador</>
                </div>` : ""
            }
            
            
        </div>`
            : ""
        }
        <div class="separator"></div>
        <div class="room__price">
            <p>$${room.price} por noche</p>
        </div>
    `
    console.log(item)
    roomsCtn.appendChild(item)
})