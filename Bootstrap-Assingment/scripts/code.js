//Haetaan lomake sivulta

let orderForm = document.getElementById("orderForm");

//Haetaan tilausnappi sivulta

let orderButton = document.getElementById("orderButton");

//Lisätään kuuntelija seuraamaan sivuston lomakkeella tapahtuvia muutoksia

orderForm.addEventListener("change", refreshPrice);

//Lisätään kuuntelija napille, joka ilmoittaa tilauksen vahvistuksen

orderButton.addEventListener("click", orderSent)

//Tehdään funktio refreshPrice päivittämään hinta

function refreshPrice(event){
    //Estetään sivuston päivittyminen
    event.preventDefault();

    //Haetaan formData
    let formData = new FormData(orderForm);

    //Haetaan moottorinkoko valinta ja hinta
    let motorSize = formData.get("motorSize");
    let motorPrice = 10;
    //Määritellään if lauseella moottorin hinta

    if(motorSize == 2){
        motorPrice = 15;
    }
    else if(motorSize == 3){
        motorPrice = 20;
    }
    else{
        motorPrice = 10;
    }

    //Haetaan samalla periaatteella akunkoko ja hinta. Sama myös paneleille

    let batterySize = formData.get("batterySize");
    let batteryPrice = 10;

    if(batterySize == 2){
        batteryPrice = 15;
    }
    else if(batterySize == 3){
        batteryPrice = 20;
    }
    else{
        batteryPrice = 10;
    }

    let solarOption = formData.get("solarPanels");
    let solarPrice = 0;

    if(solarOption == 2){
        solarPrice = 10;
    }
    else{
        solarPrice = 0;
    }

    //Summataan valintojen hinta

    let accessoriesPrice = motorPrice + batteryPrice + solarPrice;
    let totalPrice = 100 + accessoriesPrice;

    //Haetaan paikat mihin sijoitetaan hinnat

    let accessoriesSum = document.getElementById("accessories");
    let totalSum = document.getElementById("totalSum");

    accessoriesSum.textContent = accessoriesPrice + " 000€";
    totalSum.textContent = totalPrice + " 000€";

}

//Funktio, joka ilmoittaa tilauksen lähteneen

function orderSent(event){
    event.preventDefault()
    alert("Order sent!")
}