const ok1 = document.getElementById('button1');
const textJml = document.getElementById('jml');
const textNama = document.getElementById('nam')
let tampilan = document.getElementById('')
let tampilan1 = document.getElementById('list');
let tampilan2 = document.getElementById('list2');
let tampRad;
let tampilan3 = document.getElementById('list3');
let ok3 = document.getElementById('btn2');
let ok2, ul, li, input1, jumlahPil, arrRad, arrIsi;


ok1.addEventListener('click',(e)=>{
    e.preventDefault();
    tambahTampilan1();
    console.log(ok2)
    ok2 = document.getElementById('button2');
    console.log(ok2);
    tampRad = document.getElementById('tampRad');
    ok2.addEventListener('click',(e)=>{
        e.preventDefault();
        tambahTampilan2();
        ok3.addEventListener('click',(e)=>{
            e.preventDefault();
            tampilPilihanTerpilih();
        })
    })

})

//Tampilan 1 Setelah Memasukkan Jumlah Pilihan
function tambahTampilan1(){
    jumlahPil = Number(textJml.value)
    if(jumlahPil == 0 || textNama === " "){
        alert("Harap masukkan Jumlah Pilihan Dahulu");
        return;
    }else{
        ok1.disabled = true;
        ul = document.createElement("ul");
        for(let i = 1; i<=jumlahPil; i++){
            input1 = document.createElement("input")
            input1.setAttribute('type','text')
            input1.setAttribute('id','input'+i);
            li = document.createElement("li")
            text = document.createTextNode("Pilihan " + i +" : ");
            li.appendChild(text);
            li.appendChild(input1)
            ul.appendChild(li);
        }
        ul.style.listStyleType = "none";
        tampilan1.appendChild(ul); 
        const btn = document.createElement('button')
        btn.appendChild(document.createTextNode("OK"));
        btn.setAttribute('class','btn');
        btn.setAttribute('id','button2');
        tampilan1.appendChild(btn);
        textJml.value = null;
        tampilan1.disabled = true;
    }
}

//Tampilan kedua (setelah memasukkan pilihan - pilihan yang dapat dipilih)
function tambahTampilan2(){
        ok2.disabled = true;
        arrRad = [jumlahPil];
        arrIsi = [jumlahPil];
        tampRad.innerHTML = "<ul></ul>"
        console.log(tampRad);
        for(let index = 0; index < jumlahPil; index++){
            let para= document.createElement("li");
            arrIsi[index] = document.getElementById('input'+(index+1)).value; 
            para.innerHTML = "<input type ='radio' id = 'radio" + (index+1) +"' name = \'pilHob\' value=\'"+ arrIsi[index] +"\'><label for ='radio' id='lbl"+(index+1)+"'>"+arrIsi[index]+"</label>";
            tampRad.querySelector("ul").appendChild(para);
        }
        console.log(arrIsi);
        ok3.innerHTML = "<button class='btn'>Submit</button>"
}

function tampilPilihanTerpilih(){
    console.log("arrIsi TampilPilihan : ", arrIsi );
    console.log(document.getElementById('input'+1));
    console.log(document.getElementsByTagName('form')[0])
    for(let index = 0; index < jumlahPil; index++){
        if(document.getElementById('radio'+(index+1)).checked){
            document.getElementsByTagName('form')[0].innerHTML = "<p>Halo Nama saya "+textNama.value+", saya mempunyai pilihan sejumlah " +jumlahPil+" pilihan yaitu "+arrIsi+", dan saya memilih " + document.getElementById('radio'+(index+1)).value +"</p>" ;
            break;
        }
    }
}
