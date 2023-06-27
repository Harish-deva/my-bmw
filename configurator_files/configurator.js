const configstart = {
    event: "Configurator Start",
    page: {
        body: "body-configstart.png",
        bottomNav: "bottom-configstart.png",
        sideNavModel: "sidenav-model-serie.png",
        sideNavMotor: "sidenav-motor-xdrive-40i.png",
        sideNavRim: "sidenav-rim-s01w7.png",
        sideNavColor: "sidenav-color-skyscraper-grey.png",
        sideNavSummary: "sidenav-summary-configstart.png",
    },
    data: {
        modelVariation: "Serie",
        modelType: "BMW  X5 xDrive40i",
        color: "Skyscraper Grau Metallic (P0C4W)",
        rim: "22” BMW Indiv.LMR Vielspeiche 745 I Bicolor / MB (S01W7)",
        price: "95140",
    }
}
const config1 = {
    event: "Configurator Engagement",
    page: {
        body: "body-config1.png",
        bottomNav: "bottom-config1.png",
        sideNavModel: "sidenav-model-msport.png",
        sideNavMotor: "sidenav-motor-xdrive-40d.png",
        sideNavRim: "sidenav-rim-s01w7.png",
        sideNavColor: "sidenav-color-skyscraper-grey.png",
        sideNavSummary: "sidenav-summary-config1.png",
    },
    data: {
        modelVariation: "M Sportpaket ",
        modelType: "BMW  X5 xDrive40d",
        color: "Skyscraper Grau Metallic (P0C4W)",
        rim: "22” BMW Indiv.LMR Vielspeiche 745 I Bicolor / MB (S01W7)",
        price: "99380",
    }
}
const config2 = {
    event: "Configurator Engagement",
    page: {
        body: "body-config2.png",
        bottomNav: "bottom-config2.png",
        sideNavModel: "sidenav-model-msport.png",
        sideNavMotor: "sidenav-motor-xdrive-40d.png",
        sideNavRim: "sidenav-rim-s01w7.png",
        sideNavColor: "sidenav-color-tansanit-blau.png",
        sideNavSummary: "sidenav-summary-config2.png",
    },
    data: {
        modelVariation: "M Sportpaket ",
        modelType: "BMW  X5 xDrive40d",
        color: "BMW Individual Ametrin metallic (P0X1B)",
        rim: "21” M LMR V-Speiche 915 M Bicolor / MB und Notlaufeigenschaften (S01G6)",
        price: "104050",
    }
}
const config3 = {
    event: "Configurator Engagement",
    page: {
        body: "body-config3.png",
        bottomNav: "bottom-config3.png",
        sideNavModel: "sidenav-model-msport.png",
        sideNavMotor: "sidenav-motor-xdrive-40d.png",
        sideNavRim: "sidenav-rim-s01pa.png",
        sideNavColor: "sidenav-color-tansanit-blau.png",
        sideNavSummary: "sidenav-summary-config3.png",
    },
    data: {
        modelVariation: "M Sportpaket ",
        modelType: "BMW  X5 xDrive40d",
        color: "BMW Individual Ametrin metallic (P0X1B)",
        rim: "22” M LMR Doppelspeiche 742 M Bicolor / MB",
        price: "100470",
    }
}

const configend = {
    event: "Configurator Complete",
    page: {
        body: "body-configend.png",
        bottomNav: "bottom-configend.png",
        sideNavModel: "sidenav-model-msport.png",
        sideNavMotor: "sidenav-motor-xdrive-40d.png",
        sideNavRim: "sidenav-rim-s01pa.png",
        sideNavColor: "sidenav-color-saphirschwarz-metallic.png",
        sideNavSummary: "sidenav-summary-configend.png",
    },
    data: {
        modelVariation: "M Sportpaket ",
        modelType: "BMW  X5 xDrive40d",
        color: "BMW Individual Ametrin metallic (P0X1B)",
        rim: "22” M LMR Doppelspeiche 742 M Bicolor / MB",
        price: "102380",
    }
}
configurator()

function configurator(config) {
    config = !config ? window.location.hash.split('/')[1] : config
    let configObj
    switch (config) {
        case 'configstart':
            configObj = configstart
            break;
        case 'config1':
            configObj = config1
            break;
        case 'config2':
            configObj = config2
            break;
        case 'config3':
            configObj = config3
            break;
        case 'configend':
            configObj = configend
            break;
        default:
            configObj = configstart
    }

    loadImages(configObj)
    storeCarObj(configObj)
}

function loadImages(config) {
    const path = "configurator_files/"
    document.querySelector('#body img').src = path + config.page.body
    document.querySelector('#bottom img').src = path + config.page.bottomNav
    document.querySelector('#model img').src = path + config.page.sideNavModel
    document.querySelector('#motor img').src = path + config.page.sideNavMotor
    document.querySelector('#rim img').src = path + config.page.sideNavRim
    document.querySelector('#color img').src = path + config.page.sideNavColor
    document.querySelector('#summary img').src = path + config.page.sideNavSummary
}

function storeCarObj(config) {
    //store car config in localStorage
    const carConfig = {
        carModelVariation: config.data.modelVariation,
        carModelType: config.data.modelType,
        carColor: config.data.color,
        carRim: config.data.rim,
        carPrice: config.data.price,
    }
    localStorage.setItem('carConfig', JSON.stringify(carConfig));

    //update userObject
    storedUser = localStorage.getItem('user')
    if (storedUser) {
        obj = JSON.parse(storedUser);
        const userModel = carConfig.carModelType;
        updatedObj = { ...obj, userModel }
        localStorage.setItem('user', JSON.stringify(updatedObj));
    }

    //update Adobe DataLayer
    const id = generateUUID()
    const eventInfo = { ...carConfig, id }
    trackCarConfigObj = {
        "event": config.event,
        eventInfo
    }
    adobeDataLayer.push(Object.assign(trackCarConfigObj));
    console.log('adobeDataLayer updated (registration-form, RuleName: registrationComplete). Ready to be fired!', '\n', JSON.stringify(adobeDataLayer, null, 2))
}


const jsonTemplate = {
    page: {
        body: "",
        bottomNav: "",
        sideNavModel: "",
        sideNavMotor: "",
        sideNavRim: "",
        sideNavColor: "",
        sideNavSummary: "",
    },
    data: {
        modelVariation: "Serie",
        modelType: "",
        color: "",
        rim: "",
        price: "",
        event: "Configurator Start"
    }
}