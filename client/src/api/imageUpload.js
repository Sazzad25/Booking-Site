export const getImageUrl = async image => {
    const formData = new FormData()
    formData.append('image', image)

    const url = `https://api.imgbb.com/1/upload?key=4ef4e9a4d1ad25dafd03f0291ba5a8ac`;

    const response = await fetch(url, {
        method: 'POST',
        body: formData,
    })
    const data = await response.json()
    return data.data.display_url
}

export const imageUploads = async image => {
    console.log(image)
    if (image) {
      const formData = new FormData()
      formData.append('image', image)
      const url = `https://api.imgbb.com/1/upload?key=4ef4e9a4d1ad25dafd03f0291ba5a8ac`
  
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      return data
    }
  }