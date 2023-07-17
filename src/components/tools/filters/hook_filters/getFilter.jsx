
const getFilter = (filter) => {
    const arrayFilter = [];
    
    if (filter.categoty !== "" && filter.categoty !=="none") {
        arrayFilter.push("categoryId=" + filter.categoty);

    }

    if (filter.priceMin > 0) {
        arrayFilter.push("price_min=" + filter.priceMin);

    }
    if (filter.priceMax > 0) {
        arrayFilter.push("price_max=" + filter.priceMax);

    }
    if (filter.title != "") {
        arrayFilter.push("title=" + filter.title);

    }


    let url = "https://api.escuelajs.co/api/v1/products/";


    arrayFilter.map((element, index) => {

        if (index == 0) {
            url = "https://api.escuelajs.co/api/v1/products/";
            url += "?" + element
        } else {
            url += "&" + element

        }

    })
    
    
    return { url};

}

export default getFilter;
