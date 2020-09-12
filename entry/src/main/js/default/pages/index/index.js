import router from '@system.router';

export default {
    data: {
        title: 'tic-tac-toe'
    },
    clickStart () {
//        console.log('click start button')
        router.replace({
            uri: 'pages/game/game'
        })
    }
}
