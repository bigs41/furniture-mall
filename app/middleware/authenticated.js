import axios from '~/utils/axios';
export default (context) => {
    if (context.app.$cookiz.get('token') === undefined) {
        if (/admin-panel/g.test(context.route.path)) {
            context.redirect('/login');
        }
    } else {
        axios.get('/api/users/me').then(response => {
            if (response.data.status === 'error') {
                if (/admin-panel/g.test(context.route.path)) {
                    context.redirect('/login');
                }
            }
            try {
                context.store.commit('permission', response.data.permission);
                localStorage.setItem('user', JSON.stringify(response.data));
            } catch (error) {
                // console.log(error);
            }
        }).catch(error => { });
    }
}