const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelectorAll('.add-img')
const contenedorLight = document.querySelectorAll('.img-light')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click',()=>{
        imagen.getAttribute('src')
    })
})

const aparecerImagen = (imagen)=>{
    imagenesLight
}