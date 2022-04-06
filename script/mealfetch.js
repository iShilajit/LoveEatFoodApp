

const fetchData=async(url)=>{
    let res=await fetch(url);
    let data=await res.json();
    console.log(data);
    let ofday=data.meals;
    return ofday;
}

const appendData = (data, main) => {

    main.innerHTML = "";

    data.map((el) => {

        let div = document.createElement('div');
        div.setAttribute("id","dd")

        let name = document.createElement('p');
        name.innerText = el.strMeal;

        let categ = document.createElement('p');
        categ.innerText = el.strCategory;

        let area = document.createElement('p');
        area.innerText = el.strArea;

        let source = document.createElement('a');
        source.innerText = "Receipe Link";
        source.href = el.strSource;
        source.style.textDecoration = "none";
        source.style.display = "block";

        let ytsrc = document.createElement('a');
        ytsrc.innerText = "YouTube Video";
        ytsrc.href = el.strYoutube;
        ytsrc.style.textDecoration = "none";
        ytsrc.style.display = "block";

        let imge = document.createElement('img');
        imge.src = el.strMealThumb;
           
        let fdiv = document.createElement('div');
            fdiv.setAttribute("id","fdiv");
            let iframe = document.createElement("iframe");
            iframe.src = el.strYoutube;
            let div1 = document.createElement('div');
            div1.append(name, categ, area, source, ytsrc)
        div.append(imge,div1);

        main.append(div);
    });
};

export { fetchData, appendData };