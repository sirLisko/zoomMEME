function moveImg (evt) {
  const target = evt.target
  const diffX = evt.clientX - parseInt(target.style.marginLeft || 0, 10)
  const diffY = evt.clientY - parseInt(target.style.marginTop || 0, 10)

  return e => {
    target.style.marginLeft = `${e.clientX - diffX}px`
    target.style.marginTop = `${e.clientY - diffY}px`
  }
}

function imagePosition () {
  const img = document.querySelector('.zoom__box')

  img.onmousedown = e => {
    if (e.target.nodeName !== 'IMG') return

    document.onmouseup = () => { document.onmousemove = null }
    document.onmousemove = moveImg(e)
  }
}

export default imagePosition
