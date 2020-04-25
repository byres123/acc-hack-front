import { NavigationModel } from '@/model/navigation.model';
import PlanPage from '@/page/plan.page.vue';
import WorkshopPlanPage from '@/page/workshop-plan.page.vue';

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
    }

]