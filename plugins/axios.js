export default function ({ store, $axios, redirect }) {
    $axios.onRequest(config => {
        // console.log('Making request to ' + config.url)
        config.withCredentials = false
      // config.headers.common['Access-Control-Allow-Origin'] = '*'
      // config.headers.common['Access-Control-Allow-Header'] = 'Content-Type', 'X-Requested-With'
        config.headers.common['Accept'] = 'application/json'
        config.headers.common['X-Requested-With'] = 'XMLHttpRequest'
        config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded', 'multipart/form-data'
        //config.headers.common['X-CSRF-TOKEN'] = csrf
        if(store.state.token) {
            config.headers.common['Authorization'] = store.state.token
        }
    })
}
