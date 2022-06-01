import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

{
    const requireComponent = require.context(
        '@/components', true, /\.vue$/,
    )

    requireComponent.keys().forEach(fileName => {
        const componentConfig = requireComponent(fileName)

        const componentName = upperFirst(
            camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')),
        )

        Vue.component(`${componentName}`, componentConfig.default || componentConfig)
    })
}

// {
//     try {
//         const requireComponent = require.context(
//             '@/components/admin', true, /\.vue$/,
//         )

//         requireComponent.keys().forEach(fileName => {
//             const componentConfig = requireComponent(fileName)

//             const componentName = upperFirst(
//                 camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')),
//             )
//             Vue.component(`Admin${componentName}`, componentConfig.default || componentConfig)
//         })
//     } catch (error) {

//     }
// }

// {
//     try {
//         const requireComponent = require.context(
//             '@/components/core', true, /\.vue$/,
//         )

//         requireComponent.keys().forEach(fileName => {
//             const componentConfig = requireComponent(fileName)

//             const componentName = upperFirst(
//                 camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')),
//             )
//             Vue.component(`Core${componentName}`, componentConfig.default || componentConfig)
//         })

//     } catch (error) {

//     }
// }