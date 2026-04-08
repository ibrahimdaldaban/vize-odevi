
const projelerListesi = [
    { 
        isim: "UniNews Portalı", 
        kategori: "web", 
        detay: "Üniversite öğrencileri için geliştirilmiş, güncel haberlerin paylaşıldığı bir web portalı." 
    },
    { 
        isim: "Kişisel Blog Tasarımı", 
        kategori: "web", 
        detay: "HTML, CSS ve Bootstrap kullanılarak hazırlanmış responsive blog sitesi." 
    },
    { 
        isim: "Fitness Takip Uygulaması", 
        kategori: "mobil", 
        detay: "Antrenman programlarını ve günlük kalori ihtiyacını takip eden mobil arayüz tasarımı." 
    },
    { 
        isim: "E-Ticaret Vitrini", 
        kategori: "web", 
        detay: "JavaScript ile sepet işlemleri yapılabilen dinamik ürün vitrini." 
    },
    { 
        isim: "Hava Durumu Asistanı", 
        kategori: "mobil", 
        detay: "API kullanarak anlık hava durumu verilerini çeken mobil uyumlu uygulama." 
    }
];

const projeAlani = document.getElementById("proje-kapsayici");
const filtrelemeButonlari = document.querySelectorAll(".filtre-butonu");
const karanlikModButonu = document.getElementById("tema-butonu");


function projeleriEkranaBas(gosterilecekProjeler) {
    projeAlani.innerHTML = ""; // Önceki içeriği temizle
    
    gosterilecekProjeler.forEach(proje => {
        const kart = document.createElement("div");
        kart.className = "proje-karti";
        kart.innerHTML = `
            <h3>${proje.isim}</h3>
            <p>${proje.detay}</p>
            <span class="proje-etiketi">${proje.kategori.toUpperCase()}</span>
        `;
        projeAlani.appendChild(kart);
    });
}

karanlikModButonu.addEventListener("click", () => {
    document.body.classList.toggle("karanlik-mod");
    
    // Buton metnini duruma göre değiştir
    if (document.body.classList.contains("karanlik-mod")) {
        karanlikModButonu.textContent = "Aydınlık Mod";
    } else {
        karanlikModButonu.textContent = "Karanlık Mod";
    }
});
filtrelemeButonlari.forEach(buton => {
    buton.addEventListener("click", () => {
        const secilenKategori = buton.getAttribute("data-kategori");
        
        if (secilenKategori === "hepsi") {
            projeleriEkranaBas(projelerListesi);
        } else {
            const filtrelenmisProjeler = projelerListesi.filter(proje => proje.kategori === secilenKategori);
            projeleriEkranaBas(filtrelenmisProjeler);
        }
    });
});
const yaziMetni = "Web Geliştirici & Tasarımcı";
const yaziElemani = document.getElementById("daktilo-metni");
let harfSirasi = 0;

function daktiloEfektiCalistir() {
    if (harfSirasi < yaziMetni.length) {
        yaziElemani.innerHTML += yaziMetni.charAt(harfSirasi);
        harfSirasi++;
        setTimeout(daktiloEfektiCalistir, 100); // 100ms aralıklarla yaz
    }
}
window.onload = () => {
    projeleriEkranaBas(projelerListesi);
    daktiloEfektiCalistir();
};