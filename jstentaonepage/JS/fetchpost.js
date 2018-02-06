function fetchPosts(){
  fetch('http://baldersin.se/jstenta/wp-json/wp/v2/posts')//hämtar post data från endpointen
  .then (res => res.json()) //hämtar payloaden ur respons-objektet
  .then (result => {
    result
    .reverse() //reversar listan så att posterna kommer i korrekt ordning
    .map ((item, index)=>{ //loopar igenom posterna
      fetch(item._links['wp:featuredmedia'][0].href + '?_embed') //sätter bildens URL som ny endpoint
      .then (imgRes => imgRes.json()) //hämtar payloaden ur respons-objektet
      .then (imgResult => {
        $(`#article${index+1}post`) //hämtar det korrekta elementet, sätter index+1 eftersom att index börjar på noll, och det första elementet heter 1.
          .html (`<img src="${imgResult.source_url}" alt="${imgResult.slug}"></img><h1>${item.title.rendered}</h1>${item.content.rendered}`)
      })
    })
  })
}
//kallar funktionen
$(document).ready(() => {
  fetchPosts()
})
