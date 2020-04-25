import { Component, Dictionary, RedirectOption, NavigationGuard, RoutePropsFunction, PathToRegexpOptions } from 'vue-router/types/router'

export class NavigationModel {

    path!: string
    name?: string
    component!: Component
    components?: Dictionary<Component>
    redirect?: RedirectOption
    alias?: string | string[]
    children?: NavigationModel[]
    meta!: {
        roles: string[],
        icon?: string,
        showInMenu?: boolean;
    };
    beforeEnter?: NavigationGuard
    props?: boolean | Object | RoutePropsFunction
    caseSensitive?: boolean
    pathToRegexpOptions?: PathToRegexpOptions

}