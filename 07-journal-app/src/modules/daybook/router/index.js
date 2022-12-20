export default {
    name: 'daybook',
    path: '/daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/views/NoEntrySelected.vue'),
        }
    ]
}