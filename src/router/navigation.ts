import { NavigationModel } from '@/model/navigation.model';
import PlanPage from '@/page/plan.page.vue';
import WorkshopPlanPage from '@/page/workshop-plan.page.vue';
import OrdersPage from '@/page/orders.page.vue';
import OperationsPage from '@/page/operations.page.vue';

export const navigation: NavigationModel[] = [

    {
        path: '/',
        name: 'План загрузки',
        component: PlanPage,
        meta: {
            icon: 'mdi-finance',
            showInMenu: true,
            roles: ['role_manager']
        }
    },
    {
        path: '/plan/:workshop',
        name: '',
        component: WorkshopPlanPage,
        meta: {
            showInMenu: false,
            roles: ['role_manager']
        }
    },
    {
        path: '/orders',
        name: 'Заказы',
        component: OrdersPage,
        meta: {
            icon: 'mdi-account-clock-outline',
            showInMenu: true,
            roles: ['role_manager']
        }
    },
    {
        path: '/operations/:id',
        name: 'Операции',
        component: OperationsPage,
        meta: {
            showInMenu: false,
            roles: ['role_manager']
        },
    }

]